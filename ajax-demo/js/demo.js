$(function () {

    var getTemplate1 = function () {
        return _.template($("#tl_insert_tr").text());
    };

    function DemoClass() {
        var self = this instanceof DemoClass ? this : Object.create(DemoClass.prototype);
    };

    //prototypeを使用することで、js読み込み時にtemplateをキャッシュ化する。
    DemoClass.prototype = {
        template1 : getTemplate1()
    };

    $("#input-bt1").click(function () {
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
            $("#insert-tr").html(demoClass.template1(data));

        }).fail(function () {
            console.log('fail');
        }).always(function () {
            console.log('ajax finish');
        });
    });


});
