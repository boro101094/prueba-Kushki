$( document ).ready(function() {
    $('#searchInfo').on('click',function(){
        $.ajax({                        
            type: "POST",                 
            url: "../php/getSubscriptionInfo.php",                     
            data: {
                subscriptionID: $('#numSubs').val()}, 
            success: function(data)             
            {
                const respuesta = JSON.parse(data);
                if (respuesta.hasOwnProperty('message')){
                    alert("No existe subscripción");
                }else{
                    //alert(respuesta.paymentBrand);
                    alert(data);
                }
            }
        });
    });
});