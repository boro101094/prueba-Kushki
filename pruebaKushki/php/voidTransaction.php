<?php
require "restCall.php";
require "clientCredentials.php";

$client= new clientCredentials();
$header=[
    "Content-Type : application/json",
    "Private-Merchant-Id: ".$client->getPrivateID()
];
$url="https://api-uat.kushkipagos.com/payouts/transfer/v1/transaction/".$_POST["numeroTransaccion"];
$jsonResponse = rest_callPGetDelete("DELETE",$url, $header);
echo $jsonResponse;