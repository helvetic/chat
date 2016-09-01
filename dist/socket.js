let WSS = new require('ws');
let fs = new require('fs');


let clients = {};
let info = {};

let wss = new WSS.Server({
  port: 8081
});

wss.on('connection', ws => {
  let id = Math.random();

  ws.on('message', message => {
    let messageObj = JSON.parse(message);

    try{

      if(messageObj.type == 'info'){

        if(!messageObj.nick) throw new Error('You must take a nickname');
        if(!messageObj.name) throw new Error('You must type your name');
        id = messageObj.nick;

        for (key in clients) {
          if(key == id){
            throw new Error('nickname has already taken');
          }
        }

        console.log('connected',id);
        let img = getRandomInt(1,216);
        clients[id] = ws;
        if(!info[id]){
          info[id] = {
            name: messageObj.name,
            nick: id,
            src: `./img/${img}.png`,
            messages: []
          };
        }else{
          info[id].name = messageObj.name;
        }

        let infoMessage = info[id];
        infoMessage.type = 'info';
        infoMessage.users = [];

        for (key in clients) {
          if(key != id){
            infoMessage.users.push({
              name: info[key].name,
              nick: info[key].nick
            });
          }
        }

        clients[id].send(JSON.stringify(infoMessage));

        let newUser = {
          type: 'addUser',
          name: info[id].name,
          nick: info[id].nick
        };
        message = JSON.stringify(newUser);

      }else if(messageObj.type == 'message'){
        for (var key in clients) {
          info[key].messages.push(messageObj);
        }
        messageObj.src = info[id].src;
        message = JSON.stringify(messageObj);

      }else if(~messageObj.type.indexOf('image')){
        // image handle
        let base64Data = messageObj.src.replace(/^data:image\/png;base64,/,"")
        fs.writeFile(`./uploads/${messageObj.name}`, base64Data, 'base64', function(err) {
          if (err) throw new Error('Error' + err);
        });

        info[id].src = `./uploads/${messageObj.name}`;

        message = JSON.stringify({
          nick: id,
          type: 'updateUserPhoto',
          src: info[id].src
        });
      }

      for (var key in clients) {
        clients[key].send(message);
      }

    }catch(e){
      console.log(e.name,e.message);
      ws.send(JSON.stringify({
        type: 'error',
        message: e.message
      }))
    }
  });

  ws.on('close', () => {
    console.log('closed',id);
    for (var key in clients) {
      if (key != id) {
        clients[key].send(JSON.stringify({
          type: 'close',
          id: id
        }));
      }
    }
    if(clients[id]){
      delete clients[id];
    }
  });


});

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
