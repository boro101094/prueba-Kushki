$( document ).ready(function() {
    $('#preAut').on('click',function(){
        var body={
            "ticketNumber": $('#ticket').val(),
            "amount": {
              "currency": "USD",
              "subtotalIva": 0,
              "iva": 0,
              "subtotalIva0": 1,//obtener valor de la pre autorizacion
              "ice": 0
            },
            "fullResponse": true
          };

        $.ajax({                        
            type: "POST",                 
            url: "../php/captureAuthorization.php",                     
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