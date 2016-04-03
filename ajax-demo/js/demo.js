$(function () {

    var getTemplate1 = function () {
        return _.template($("#tl_insert_tr").text());
    };

    function DemoClass() {
        var self = this instanceof DemoClass ? this : Object.create(DemoClass.prototype);
    };

    //prototypeを使用することで、js読み込み時にtemplateをキャッシュ化する。
    DemoClass.prototype = {
        template1: getTemplate1()
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
        ajax1().done(function() {
            
            ajax2();
        });
    });

    function ajax1() {
        
//        var deferred = new $Deferred();
        var deferred = $.Deferred()
        $.ajax({
            type: 'POST',
            url: '_ajax.php',
            data: {
                'test_text': 'ajax関数側で追加したテキスト'
            }
        }).done(function (data) {
            console.log('done');
            console.log(data);
            $('#append_area').append("text:" + data.text + "color:" + data.color + "background:" + data.background);

            //キャッシュ化されたテンプレートを取得する。
            var demoClass = new DemoClass();
            $("#insert-tr").after(demoClass.template1(data));

            deferred.resolve('success')
        }).fail(function () {
            console.log('fail');
        }).always(function () {
            console.log('ajax finish');
        });
        
        return deferred.promise();

    }

    
    function ajax2() {
        
        $.ajax({
            type: 'POST',
            url: '_ajax2.php',
            data: {
                'test_text': 'ajax関数側で追加したテキスト'
            }
        }).done(function (data) {
            console.log('done');
            console.log(data);
            $('#append_area').append("text:" + data.text + "color:" + data.color + "background:" + data.background);

            //キャッシュ化されたテンプレートを取得する。
            var demoClass = new DemoClass();
            $("#insert-tr").after(demoClass.template1(data));

        }).fail(function () {
            console.log('fail');
        }).always(function () {
            console.log('ajax finish');
        });

    }

});
