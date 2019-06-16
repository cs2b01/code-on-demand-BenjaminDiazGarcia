function getData(){
                $('#ok').hide();
                $('#fail').hide();
        $('#wait').show();
        var username = $('#username').val();
        var password = $('#password').val();
        var message = JSON.stringify({
                "username": username,
                "password": password
            });

        $.ajax({
            url:'/authenticate',
            type:'POST',
            contentType: 'application/json',
            data : message,
            dataType:'json',
            success: function(response){
                //alert(JSON.stringify(response));
                $('#action').html(response['statusText']);
            },
            error: function(response){
                $('#ok').hide();
                $('#fail').hide();
                //alert(JSON.stringify(response));
                if (response['status']==401){
                    $('#wait').hide();
                    $('#loading').hide();
                    $('#fail').show();
                }else{
                    $('#wait').hide();
                    $('#loading').hide();
                    $('#ok').show();
                }
            }
        });
    }
