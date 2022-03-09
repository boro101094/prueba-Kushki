<?php
require "restCall.php";
require "clientCredentials.php";

$client= new clientCredentials();
$header=[
    "Content-Type: application/json",
    "Private-Merchant-Id:". $client->getPrivateID()
];

$body=$_POST["valJson"];
$jsonResponse = rest_callPOST("https://api-uat.kushkipagos.com/subscriptions/v1/card",$body,$header);
echo $jsonResponse;