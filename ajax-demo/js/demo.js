$(function () {

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
            
            //template
            var template = $("#tl_insert_tr").text();
            var compiled = _.template(template);
            $("#insert-tr").html(compiled(data));
            
        }).fail(function () {
            console.log('fail');
        }).always(function () {
            console.log('ajax finish');
        });
    });


});
