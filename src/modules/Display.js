import View from './View';
export default {

  userInList(data){
    let userEl = document.createElement('div');
    userEl.innerHTML = View.render('userList', [data]);
    user_list.appendChild(userEl.firstElementChild);
  },

  listOfUsers(data){
    let userEl = document.createElement('div');
    user_list.innerHTML = View.render('userList', data);
  },

  message(msg) {
    let messageEl = document.createElement('div');
    messageEl.innerHTML = View.render('message', [msg] );
    chat_box.appendChild(messageEl.firstElementChild);
    chat_box.scrollTop = chat_box.scrollHeight;
  },

  listOfMessages(list) {
    let messageEl = document.createElement('div');
    chat_box.innerHTML = View.render('message', list );

    setTimeout(() => {
      chat_box.scrollTop = chat_box.scrollHeight;
    }, 50);
  },

  profile(data){
    user_info.innerHTML = View.render('userInfo', data);
  },

  userPhotos(data){
    document.querySelectorAll(`.photo-of-${data.nick}`)
      .forEach(el => {
        el.src = data.src;
    });
  },

  uploadingPhoto (source) {
    photo_drop_area.innerHTML = `<img src='${source}'>`;
  }

}
