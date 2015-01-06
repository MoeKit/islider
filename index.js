var $ = require('jquery');
var $con = $('#islider-box'),
    $box = $con.find('#ggBox'),
    $btns = $con.find('#ggBtns'),
    i = 0,
    autoChange = function() {
        console.log('autochange')
        i += 1;
        if (i === 4) {
            i = 0;
        }
        $btns.find('li:eq(' + i + ')').addClass('islider-on').siblings().removeClass('islider-on');
        var curr = $box.find('li:eq(' + i + ')'),
            prev = curr.siblings();
        prev.css('z-index', 2);
        curr.css('z-index', 3).animate({
            'opacity': 1
        }, 250, function() {
            prev.css({
                'z-index': 1,
                'opacity': 0.1
            });
        });
    };

    window.loop = setInterval(autoChange, 3000);
$con.hover(function() {
    clearInterval(window.loop);
}, function() {
    console.log('on leave')
    window.loop = setInterval(autoChange, 3000);
});
$btns.find('a').click(function() {
    i = $(this).index() - 1;
    autoChange();
});