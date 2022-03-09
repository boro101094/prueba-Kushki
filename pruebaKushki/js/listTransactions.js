$( document ).ready(function() {
    $('#listTran').on('click',function(){
        var dates= $('#daterange').val().split(" - ");
        var start= reverseDate(dates[0])+"T00:00:00";
        var end= reverseDate(dates[1])+"T23:59:59";
        
        $.ajax({                        
            type: "POST",                 
            url: "../php/listTransactions.php",                     
            data: {
                from:   start,
                to:     end}, 
            success: function(data)             
            {
                const respuesta = JSON.parse(data);
                if (respuesta.hasOwnProperty('message')){
                    alert("No existe Transacciones");
                }else{
                    //alert(respuesta.total);
                    alert(respuesta.data);
                }
            }
        });
    });
});

$(function() {
    $('input[name="daterange"]').daterangepicker({
      opens: 'left'
    }, function(start, end, label) {
      console.log("A new date selection was made: " + start.format('DD/MM/YYYY') + ' to ' + end.format('DD/MM/YYYY'));
    });
  });

function reverseDate(str) {
    var date=str.split("/");
    return date[2]+"-"+date[0]+"-"+date[1];
}