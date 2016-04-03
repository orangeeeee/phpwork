<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>ajax demo</title>
    <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="bootstrap/css/bootstrap-theme.min.css">
    <script src="https://code.jquery.com/jquery-2.2.2.min.js" integrity="sha256-36cp2Co+/62rEAAYHLmRCPIych47CvdM+uTBJwSzWjI=" crossorigin="anonymous"></script>
    <script src="js/lib/underscore.js"></script>
    <script src="bootstrap/js/bootstrap.js"></script>
    <script src="js/demo.js"></script>
    <style>
        h2 {
            margin-top: 25px;
        }
        
        h3 {
            margin-top: 25px;
        }
        
        .row {
            margin-bottom: 20px;
        }
        
        .row .row {
            margin-top: 10px;
            margin-bottom: 0;
        }
        
        [class*="col-"] {
            padding-top: 15px;
            padding-bottom: 15px;
            background-color: #eee;
            background-color: rgba(86, 61, 124, .15);
            border: 1px solid #ddd;
            border: 1px solid rgba(86, 61, 124, .2);
        }
        
        hr {
            margin-top: 20px;
            margin-bottom: 20px;
        }

    </style>
</head>

<body>

    <form action="" method="post" enctype="multipart/form-data">
        <br>
        <input type="button" id="input-bt1" class="btn btn-primary" value="demo-btn1">
        <br>
        <br>
        <div class="container">
            <!– グリッドの一行。列数は合計12 –>
            <div class="row">
                <!– この要素が占める列数は8 –>
                <div class="col-md-4">text</div>
                <div class="col-md-4">color</div>
                <div class="col-md-4">background</div>
                <div id="insert-tr"></div>
            </div>
        </div>
    </form>

</body>
<script type="text/template" id="tl_insert_tr">
    <div class="col-md-4">
        <%= text %>
    </div>
    <div class="col-md-4">
        <%= color %>
    </div>
    <div class="col-md-4">
        <%= background %>
    </div>
</script>
<script type="text/template" id="tl_insert_loading">
    <div class="col-md-12" id="id-loding">
        <img src="img/loading-37.gif">
    </div>
</script>
</html>
