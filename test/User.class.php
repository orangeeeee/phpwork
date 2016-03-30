<?php

namespace orange\Lib;

class User {
 
    //property
    public $name;
    
    public static $count=0;
    
    //constructor
    public function __construct($name) {
        $this->name = $name;
        self::$count++;
    }
    
    //method
    public function sayHi() {
        
        echo "hi, I am $this->name!";
    }
}

?>
