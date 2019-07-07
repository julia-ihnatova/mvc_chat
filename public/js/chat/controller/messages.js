function messagesController(){

    messageView('#messages', messages, {
        onDelete: function(message){
            messages.remove(message)
        }
    })

    const form = newMessageFormView('#new-message-form', {
        onSend: function(text){
            messages.add({text: text})

            form.clear() // как вынести ответственность из view в controller

            // return $.ajax('asd').catch(function(error){
            //     form.setState('error') //controller упраляет абстракциями, остальное меняется во view
            // })
        }
    })

}