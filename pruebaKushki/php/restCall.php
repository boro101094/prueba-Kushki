<?php 
function rest_callPOST($url, $body , $header= false)
{ 
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_ENCODING , "");
    curl_setopt($ch, CURLOPT_MAXREDIRS  , 10);
    curl_setopt($ch, CURLOPT_TIMEOUT  , 30);
    curl_setopt($ch, CURLOPT_HTTP_VERSION , "CURL_HTTP_VERSION_1_1");
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST , "POST");
    curl_setopt($ch, CURLOPT_POSTFIELDS, $body);     
    curl_setopt($ch, CURLOPT_HTTPHEADER, $header);
    
    $response= curl_exec($ch);
    $err = curl_error($curl);
    curl_close($curl);
    if ($err) {
        return "cURL Error #:" . $err;
    } else {
        return $response;
    }
};

function rest_callPGetDelete($method,$url, $header= false)
{
    
    $curl = curl_init();

    curl_setopt_array($curl, [
    CURLOPT_URL => $url,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 30,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => $method,
    CURLOPT_HTTPHEADER => $header,
    ]);

    $response = curl_exec($curl);
    $err = curl_error($curl);

    curl_close($curl);

    if ($err) {
    echo "cURL Error #:" . $err;
    } else {
    echo $response;
    }

};

/*function formatHeaders($headerArray){
    $header=[];
    foreach( $headerArray as $key => $valor){
        array_push($header, $key.':'.$valor);
    }

    return $header;
}*/

