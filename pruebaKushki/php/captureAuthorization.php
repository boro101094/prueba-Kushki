<?php
require "restCall.php";
require "clientCredentials.php";

$client= new clientCredentials();
$header=[
    "Content-Type: application/json",
    "Private-Merchant-Id:". $client->getPrivateID()
];

$body=$_POST["valJson"];
$url="https://api-uat.kushkipagos.com/subscriptions/v1/card/".$_POST["idSuscription"]."/capture";
$jsonResponse = rest_callPOST($url,$body,$header);
echo $jsonResponse;