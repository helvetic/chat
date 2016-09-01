import Display from './Display';
import Notify from './Notify';

export default {
  handlePhotoInput(){

      photo_drop.addEventListener('dragenter', dragEnter, false);
      photo_drop.addEventListener('dragover', dragOver, false);
      photo_drop.addEventListener('dragleave', dragLeave, false);
      photo_drop.addEventListener('drop', dragDrop, false);

      photo_input.addEventListener('change', handleInput, false);

      photo_form_close.addEventListener('click', function(e){
        e.preventDefault();
        photo_form.parentNode.classList.add('hidden');
      });


      function dragEnter(e) {
      	e.stopPropagation();
        e.preventDefault();
      }

      function dragOver(e){
        e.preventDefault();
        this.classList.add('dragover');
      }

      function dragLeave(e){
        e.preventDefault();
        console.log('leave');
        this.classList.remove('dragover');
      }

      function dragDrop(e){
      	e.stopPropagation();
        e.preventDefault();
        this.classList.remove('dragover');
        handlePhoto(e.dataTransfer.files[0]);
      }

      function handleInput(e){
        e.preventDefault();
        handlePhoto(photo_input.files[0]);
      }

      function handlePhoto(file) {
        if (!!file.type.match(/image.*/)) {
          console.log(file.size);
          if(file.size < 500000){
            let reader = new FileReader();
            reader.onloadend = function (e) {
              Display.uploadingPhoto(e.target.result, file.fileName);
            };
            reader.readAsDataURL(file);
            photo_input.files[0] = file;
          }else{
            Notify.error('FILE IS WAAAAAY TOO BIG');
          }
        }else{
          Notify.error('NOT AN IMAGE');
        }
      }

  },




}
