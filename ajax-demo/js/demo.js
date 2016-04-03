$(function () {

    var getTemplate1 = function () {
        return _.template($("#tl_insert_tr").text());
    };
    var getTemplateLoding = function () {
        return _.template($("#tl_insert_loading").text());
    };
    
    function DemoClass() {
        var self = this instanceof DemoClass ? this : Object.create(DemoClass.prototype);
    };

    //prototypeを使用することで、js読み込み時にtemplateをキャッシュ化する。
    DemoClass.prototype = {
        template1: getTemplate1(),
        template_loding : getTemplateLoding()
    };

    /*
        必ず読み込むとは限らないと考えれば以下でもいいのかも
        backbone.jsの例
        // テンプレートの処理は1度だけ実行される
        if ($('#my-template').length) {
            templateCache['my-template'] = _.template($('#my-template').html());
        }

        var myView = Backbone.View.extend({
            template: templateCache['item-box-template'],
            // ...
        });
    
    */

    $("#input-bt1").click(function () {

        console.log("before ajax1");

        //これだと通信も順番通りになる。
        /*
        ajax1().done(function() {
            
            console.log("before ajax2");
            
            ajax2();
            
            console.log("after ajax2");
            
        });
        */
        /* これも同じ 直列*/
        /*
            ajax1().then(function () {
                console.log("before ajax2");
                return ajax2();
            }).then(function () {
                console.log("before ajax3");
                return ajax3();
            }).done(function() {
                console.log("all finish done");
            });
        
        */

        //並列実行：両方送信後に結果を受け取る場合
        /*
        //ajax1,ajax2が並列送信、両方完了後にalwaysが実行される。
        $.when(ajax1(), 
               ajax2()
        ).always(function () {
            console.log("all finish done");
        });
        */
        
        $.when(ajax1(), 
               ajax2(),
               ajax3()
        ).done(function (v1,v2,v3) {
            console.log("all finish always");
            console.log("v1:"+ v1 + ",v2:" + v2 + ",v3:" + v3);
            
            if("success" === v1) {
                console.log("v1 equal done");   
            }
            if("success"===v2) {
                console.log("v2 equal done");   
            }
            if("success"===v3) {
                console.log("v3 equal done");   
            }
        });
        
        /*
        //ajax1を実行し終わった後に、ajax2,ajax3を並列送信
        ajax1().then(function() {
            return $.when(ajax2(),ajax3());   
        }).always(function() {
            console.log("all finish always"); 
        });
        */
        
    });

    function ajax1() {

        var deferred = $.Deferred()
        
        var demoClass = new DemoClass();        

        $("#insert-tr").after(demoClass.template_loding());
        
        $.ajax({
            type: 'POST',
            url: '_ajax.php',
            data: {
                'test_text': 'ajax関数側で追加したテキスト'
            }
        }).done(function (data) {
            console.log('ajax1 done');
            console.log(data);
            $('#append_area').append("text:" + data.text + "color:" + data.color + "background:" + data.background);

            //キャッシュ化されたテンプレートを取得する。
            $("#id-loding").hide();
            $("#insert-tr").after(demoClass.template1(data));

            deferred.resolve('success');

        }).fail(function () {
            console.log('fail');
            deferred.reject();
        }).always(function () {
            console.log('ajax1 always');
            
        });

        return deferred.promise();

    }


    function ajax2() {

        var deferred = $.Deferred()

        var demoClass = new DemoClass();        

//        $("#insert-tr").after(demoClass.template_loding());
        
        $.ajax({
            type: 'POST',
            url: '_ajax2.php',
            data: {
                'test_text': 'ajax関数側で追加したテキスト'
            }
        }).done(function (data) {
            console.log('ajax2 done');
            console.log(data);
            $('#append_area').append("text:" + data.text + "color:" + data.color + "background:" + data.background);

            //キャッシュ化されたテンプレートを取得する。
//            $("#id-loding").hide();
            $("#insert-tr").after(demoClass.template1(data));

            deferred.resolve('success');

        }).fail(function () {
            console.log('fail');
            deferred.reject();
        }).always(function () {
            console.log('ajax2 always');
        });


        return deferred.promise();

    }

    function ajax3() {

        var deferred = $.Deferred()

        var demoClass = new DemoClass();        

//        $("#insert-tr").after(demoClass.template_loding());
        
        $.ajax({
            type: 'POST',
            url: '_ajax3.php',
            data: {
                'test_text': 'ajax関数側で追加したテキスト'
            }
        }).done(function (data) {
            console.log('ajax3 done');
            console.log(data);
            $('#append_area').append("text:" + data.text + "color:" + data.color + "background:" + data.background);

            //キャッシュ化されたテンプレートを取得する。
            var demoClass = new DemoClass();
//            $("#id-loding").hide();
            $("#insert-tr").after(demoClass.template1(data));

            deferred.resolve('success');

        }).fail(function () {
            console.log('fail');
            deferred.reject();
        }).always(function () {
            console.log('ajax3 always');
        });


        return deferred.promise();

    }

});
