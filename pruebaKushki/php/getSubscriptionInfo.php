<?php
require "restCall.php";
require "clientCredentials.php";

$client= new clientCredentials();
$header=[
    "Content-Type : application/json",
    "Private-Merchant-Id: ".$client->getPrivateID()
];
$url="https://api-uat.kushkipagos.com/subscriptions/v1/card/search/".$_POST["subscriptionID"];
$jsonResponse = rest_callPGetDelete("GET",$url, $header);
echo $jsonResponse;