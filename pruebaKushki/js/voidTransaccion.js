$( document ).ready(function() {
  $('#anularTran').on('click',function(){
      $.ajax({                        
          type: "POST",                 
          url: "../php/voidTransaction.php",                     
          data: {
              numeroTransaccion: $('#numTran').val()}, 
          success: function(data)             
          {
            //alert(data);
              const respuesta = JSON.parse(data);
              if (respuesta.hasOwnProperty('message')){
                  alert("No existe transacción");
              }else{
                  alert(respuesta);
              }
          }
      });
  });
});