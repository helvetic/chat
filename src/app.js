import Build from './modules/Build';
import View from './modules/View';
import Display from './modules/Display';
import Photo from './modules/Photo';
import Notify from './modules/Notify';


// Авторизация пользователя
// Закрытие окошка
// Пользователь добавляется в список
// Обновляется информация о пользователе
//
// При клике на отправить,
// берётся инфо о пользователе, сообщение и время,
// добавляется новый элемент в чатбокс

Notify.start();

let user = {
  messages: []
}

let socket = new WebSocket("ws://localhost:8081");


  window.setInterval(() => {
    socket.send(JSON.stringify({type:'ping'}));
  }, 60000);

// FORMS SUBMIT
sign_form.addEventListener('submit', function(e){
  e.preventDefault();
  user.name = this.elements['sign-name'].value;
  user.nick = this.elements['sign-nick'].value;

  let data = {
    type: 'info',
    name: user.name,
    nick: user.nick
  };

  socket.send(JSON.stringify(data));
});


chat_form.addEventListener('submit', function(e){
  e.preventDefault();
  let message = Build.message(this);
  message.name = user.name;
  message.nick = user.nick;
  user.messages.push(message);
  socket.send(JSON.stringify(message));
});



// PHOTO FORM
user_info.addEventListener('click', function(e){
  let btn = e.target.closest('#user_photo_btn');
  if(btn.id == 'user_photo_btn'){
    e.preventDefault();
    photo_form.parentNode.classList.remove('hidden');
  }
});


Photo.handlePhotoInput();

photo_form.addEventListener('submit', function(e){
  e.preventDefault();
  let file = photo_input.files[0];
  let reader = new FileReader();
  let data = {
    name: file.name,
    type: file.type
  };
  reader.onload = function(event) {
    data.src = event.target.result;
    socket.send(JSON.stringify(data));
  };
  reader.readAsDataURL(file);
});


// username
user_list.addEventListener('click', e => {
  if(e.target.dataset.role == 'nickname'){
    chat_form.elements['chat-message'].value = `${e.target.textContent}, `;
    chat_form.elements['chat-message'].focus();
  }
});


// SOCKET EVENTS
socket.onmessage = function(event) {
  let data = JSON.parse(event.data);
  switch (data.type) {
    case 'error':
      console.warn(data.message);
      Notify.error(data.message);
      break;
    case 'info':
      sign_form.parentNode.classList.add('hidden');
      user_info.innerHTML = View.render('userInfo', data);
      Display.listOfUsers(data.users);
      Display.listOfMessages(data.messages);
      Display.profile(data);
      Display.userPhotos(data);
      Display.uploadingPhoto(data.src);
      Notify.info(`Welcome ${data.nick}. You have signed up as ${data.nick}`);
      break;
    case 'addUser':
      Display.userInList(data);
      break;
    case 'message':
      Display.message(data);
      break;
    case 'close':
      document.getElementById('user_list_' + data.id).remove();
      break;
    case 'updateUserPhoto':
      Display.userPhotos(data);
      photo_form.parentNode.classList.add('hidden');
      Notify.info(`Your photo has been updated`);
      break;
    default:
      console.log('default');
  }
};
