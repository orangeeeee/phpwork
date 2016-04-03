<?php
header("Content-type: text/json; charset=UTF-8");
//if (isset($_POST['request'])) {
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    
    //ここに何かしらの処理を書く（DB登録やファイルへの書き込みなど）
    //echo "OK";
    $array_data = array(text=>'データ3'
                        , color=>'#ff0099', background=>'#0000cc');
    echo json_encode($array_data);
}
else
{
    echo 'The parameter of "request" is not found.';
}
?>