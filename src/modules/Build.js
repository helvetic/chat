export default {
  message(form){
    let now = new Date();
    let message = {
      type: 'message',
        date: now.toLocaleString('en-EN', {
          month: 'long',
          day: 'numeric'
        }),
        time: now.toLocaleString('en-EN', {
          hour: 'numeric',
          minute: 'numeric'
        }),
        text: form.elements['chat-message'].value
    };
    form.elements['chat-message'].value = '';
    return message;
  },

  user(data){
    return {
      type: 'user',
      name: data.name
    };
  }


};
