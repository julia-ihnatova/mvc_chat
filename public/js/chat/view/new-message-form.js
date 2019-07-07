function newMessageFormView(selector, callbacks){
    const form = $(selector)
    const textInput = form.find('[name="text"]')

    form.on('submit', function(event){
        event.preventDefault();
        let text = textInput.val().trim();

        if(!text) return

        callbacks.onSend(text);
        textInput.val('');
    })

    return {
        clear: function(){
            textInput.val('')
        },
        setState: function(state) {
            if(state === 'error'){
                form.removeClass('success');
                form.addClass('error')
            }else if(state === 'success'){
                form.removeClass('error');
                form.addClass('success')
            }
        }
    }
}