import View from './View';

export default {

  start(){
    notify.addEventListener('click', e => {
      if(e.target.dataset.role == "close"){
        e.target.closest('.notification').remove();
      }
    });
  },

  error(text){
    showPopup(text, 'error');
  },

  info(text){
    showPopup(text, 'info');
  },

  warning(text){
    showPopup(text, 'warning');
  }

}


function showPopup(text, type){
  let el = document.createElement('div');
  el.innerHTML = View.render('notify', {text:text, type:type} );
  let newEl = notify.appendChild(el.firstElementChild);

  setTimeout(() => {
    newEl.remove();
  }, 3000);
}
