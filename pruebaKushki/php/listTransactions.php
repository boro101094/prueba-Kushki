<?php
require "restCall.php";
require "clientCredentials.php";

$client= new clientCredentials();
$header=[
    "Content-Type : application/json",
    "Private-Merchant-Id: ".$client->getPrivateID()
];
$url="https://api-uat.kushkipagos.com/analytics/v1/transactions-list?from=".$_POST["from"]."&to=".$_POST["to"];
$jsonResponse = rest_callPGetDelete("GET",$url, $header);
echo $jsonResponse;