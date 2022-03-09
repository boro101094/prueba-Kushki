//obtener token de subscripcion
var kushki = new Kushki({
  merchantId: '7fbff61cca504f7ba3fc6c2441403736', 
  inTestEnvironment: true,
  regional:false
});

var SubsToken="";

const requestSubscriptionToken = (nameClient, cardNumber, cardCvc, expiryCardMonth, expiryCardYear) => {
  var callback = function(response) {
    if(!response.code){
      console.log(response);
      document.getElementById('subscriptionToken').textContent+= " " + response.token  ;
      SubsToken=response.token;
    } else {
      console.error('Error: ',response.error, 'Code: ', response.code, 'Message: ',response.message);
      document.getElementById('subscriptionToken').textContent= " Ocurrio el siguiente error" + response.message  ;
    }
  }

  kushki.requestSubscriptionToken({
    card: {
      name: nameClient,
      number: cardNumber,
      cvc: cardCvc,
      expiryMonth: expiryCardMonth,
      expiryYear: expiryCardYear
    },
      currency: "USD"
  }, callback);

};



//create Subscription
const createSubscription = () => {
  const _data= {
    "token": SubsToken,
    "planName": "Premium",
    "periodicity": "monthly",
    "contactDetails": {
      "documentType": "CC",
      "documentNumber": "0104250782",
      "email": "boro101094@gmail.com",
      "firstName": "Boris",
      "lastName": "Cabrera",
      "phoneNumber": "+593989842667"
    },
    "amount": {
      "subtotalIva": 1,
      "subtotalIva0": 0,
      "ice": 0,
      "iva": 0.14,
      "currency": "USD"
    },
    "startDate": "2022-03-07",
    "metadata": {
      "plan": {
        "fitness": {
          "cardio": "include",
          "rumba": "include",
          "pool": "include"
        }
      }
    }
  };
  $.ajax({                        
    type: "POST",                 
    url: "../php/createSubscription.php",                     
    data: {valJson: JSON.stringify(_data)}, //paso el body 
    success: function(data)             
    {
      const respuesta= JSON.parse(data);
      document.getElementById('subscriptionID').textContent+= " " + respuesta.subscriptionId ;

    }
  });
}