<?php
class clientCredentials{
    private $merchant_id="ef7ff5ef00544402973e0ec1b6b7b158";
    private $private_id="e12ce7e4394b47bdb040e37142874521";
    private $public_id="7fbff61cca504f7ba3fc6c2441403736";

    public function getPrivateID(){
        return $this->private_id;
    }
    
    public function getPublicID(){
        return $this->public_id;
    }
    
    public function getMerchantID(){
        return $this->merchant_id;
    }
    
}