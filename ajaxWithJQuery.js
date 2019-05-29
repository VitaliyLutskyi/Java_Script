    $('#sendByGet').bind('click', () => validate($('#age')) ?  sendByGetMethod() : ''); 
    $('#sendByPost').bind('click', () => validate($('#age')) ? sendByPostMethod() : '');

    function validate(element){
        if(element.val()>0 && element.val()<101){
            element.removeClass('error');
            return true;
        }
        else{
            element.attr('placeholder', 'Error. Age must be between 1 and 100.');
            element.val('');
            element.addClass('error');
            element.focus();
            return false;
        }
    }

    function sendByGetMethod() {
        var user = {
            userName: $('#name').val(),	
            userSurname: $('#surname').val(),
            userAge: $('#age').val(),
            userAddress: $('#address').val()
        };
        for(var data in user)
            user[data] += '.ValidatedByGET';
        
        $.ajax({
            type: 'GET',
            contentType: 'application/json',
            url: '/userGet?userName='+user.userName+"&userSurname="+user.userSurname+"&userAge="+user.userAge+"&userAddress="+user.userAddress,
            success: (user) => $('p').text('Received from server by GET: '+user)          
        })
    }

    function sendByPostMethod() {
        var user = {
            userName: $('#name').val(),	
            userSurname: $('#surname').val(),
            userAge: $('#age').val(),
            userAddress: $('#address').val()
        };
        for(var data in user)
            user[data] += '.ValidatedByPOST';
        
        $.ajax({
            type: 'POST',
            data: JSON.stringify(user),
            contentType: 'application/json',
            url: '/userPost',
            success: (user) => $('p').text('Received from server by POST: '+user)          
        })
    }
















