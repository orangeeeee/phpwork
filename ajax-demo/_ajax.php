<?php
header("Content-type: text/json; charset=UTF-8");
//if (isset($_POST['request'])) {
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    //ここに何かしらの処理を書く（DB登録やファイルへの書き込みなど）
    //echo "OK";
    $array_data = array(text=>'ちゃんとデータのやりとりができました！'
                        , color=>'#ff0000', background=>'#000000');
    echo json_encode($array_data);
}
else
{
    echo 'The parameter of "request" is not found.';
}
?>