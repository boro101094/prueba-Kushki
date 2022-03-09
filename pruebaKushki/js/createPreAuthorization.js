$( document ).ready(function() {
    $('#preAut').on('click',function(){
        var body= {
            "amount": {
              "ice": 0,
              "iva": 0,
              "subtotalIva": 0,
              "subtotalIva0": parseFloat($('#monto').val()),
              "currency": "USD"
            },
            "name": "Juan",
            "lastName": "Perez",
            "email": "test@yourdomain.com",
            "fullResponse": true
        };

        $.ajax({                        
            type: "POST",                 
            url: "../php/createAuthorization.php",                     
            data: {
                idSuscription:  $('#numSus').val(),
                valJson:        JSON.stringify(body)},
                
            success: function(data)             
            {
                alert(data);
                /*const respuesta = JSON.parse(data);
                if (respuesta.hasOwnProperty('message')){
                    alert("No existe Transacciones");
                }else{
                    //alert(respuesta.total);
                    alert(respuesta.data);
                }*/
            }
        });
    });
});