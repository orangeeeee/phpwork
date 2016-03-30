<?php

    define('DB_DATABASE', 'dotinstall_db');
    define('DB_USERNAME', 'root');
    define('DB_PASSWORD', 'root');
    define('PDO_DNS', 'mysql:dbhost=localhost;dbname=' . DB_DATABASE);

    class User {

        // 省略可能。
        // public $id;
        // public $name;
        // public $score;
        
        public function show() {
            echo "$this->name ($this->score) <br>";
        }
        
    }

    try {

        $db = new PDO(PDO_DNS, DB_USERNAME, DB_PASSWORD);
        $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        
        $db->beginTransaction();
        
        //INSERT
        $db->exec("update users set score = score - 10 where name = 'yu'");
        $db->exec("update users set score = score + 10 where name = 'yu2'");

        $db->commit();
        
        /*
        $stmt = $db->query("select * from users");
        
        $users = $stmt->fetchAll(PDO::FETCH_CLASS, 'User');
        
        foreach($users as $user) {
//            var_dump($user);   
//            echo "<br>";
            $user->show();
            
        }
        
        echo $stmt->rowCount() . " records found.";
          */  
    }catch (PDOException $e) {
        $db->rollBack();
        echo $e->getMessage();
        exit;
    }
?>

    <html lang="ja">

    <body>

        <form action="" method="POST">

            <input type="text" name="username" placeholder="user name" value="">
            
            <input type="button" value="test button">
        </form>

    </body>

    </html>
