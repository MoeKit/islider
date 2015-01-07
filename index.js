var $ = require('jquery');
var islider = function(option) {
    this.$target = $(option.target).addClass('islider-box');
    this.$target.find('ul').addClass('islider-box-ul');
    this.$list = this.$target.find('ul>li');
    this.count = this.$list.length;
    this.fadeTime = 250;
    this.interval = 3000;
    var _this = this;
    this.i = 0;

    this.loadImage();

    this.buildDots();
    setTimeout(function() {
        _this.auto();
    }, 2000);


    _this.$target.hover(function() {
        _this.stop();
        _this.$dots.removeClass('islider-dots-dark').addClass('islider-dots-bright');
    }, function() {
        _this.loop = setTimeout(function() {
            _this.auto();
        }, _this.interval + _this.fadeTime);

        setTimeout(function() {
            _this.$dots.removeClass('islider-dots-bright').addClass('islider-dots-dark');
        }, 2000);
    });

    setTimeout(function() {
        _this.$dots.addClass('islider-dots-dark');
    }, 2000);

};

islider.prototype.loadImage = function() {
    var $imgs = this.$target.find('img[data-src]');
    $imgs.each(function(index, one) {
        (function(index, one) {
            $(one).load(function() {
                // @todo
            }).attr('src', $(one).attr('data-src')).removeAttr('data-src');
        })(index, one);
    });
};

islider.prototype.auto = function() {
    var _this = this;
    this.i += 1;
    if (this.i === _this.count) {
        this.i = 0;
    }
    this.goto(this.i);
    clearTimeout(_this.loop);
    _this.loop = setTimeout(function() {
        _this.auto();
    }, _this.interval + _this.fadeTime);
};


islider.prototype.goto = function(index, animate) {
    console.log('goto', index)
    animate = animate || true;
    var _this = this;
    var curr = _this.$target.find('li:eq(' + index + ')'),
        prev = curr.siblings();
    prev.css('z-index', 2);
    var $dot = this.$dots.find('li').eq(index);

    if (animate) {
        $dot.addClass('islider-dots-active').siblings('.islider-dots-active').removeClass('islider-dots-active');
    } else {
        $dot.addClass('islider-dots-full').siblings('.islider-dots-full').removeClass('islider-dots-full');
    }

    curr.css('z-index', 3).animate({
        'opacity': 1
    }, _this.fadeTime, function() {
        prev.css({
            'z-index': 1,
            'opacity': 0.1
        });

        $dot.find('span').addClass('islider-dots-full');

    });
};



islider.prototype.buildDots = function() {
    var _this = this;
    var html = '';
    for (var i = 0; i < this.count; i++) {
        var className = i === 0 ? ' class="islider-dots-active"' : '';
        var spanClassName = i === 0 ? ' islider-dots-full' : '';
        html += '<li' + className + '><span class="islider-dots-bg"><span class="islider-dots-inner' + spanClassName + '"></span></span></li>'
    }
    this.$dots = $('<ul class="islider-dots">' + html + '</ul>').hide().appendTo(this.$target);
    var width = this.$dots.width();
    this.$dots.css({
        'margin-left': '-' + width / 2 + 'px'
    });

    this.$dots.fadeIn();

    this.$dots.find('li').click(function() {
        _this.stop();
        var index = $(this).index();
        _this.i = index;
        _this.goto(index, false);
    });

};


islider.prototype.next = function() {

};

islider.prototype.prev = function() {

};

islider.prototype.destroy = function() {
    clearTimeout(this.loop);
};

islider.prototype.stop = function() {
    clearTimeout(this.loop);
    this.$dots.find('span').removeClass('islider-dots-full');
    // set the current one progress active
    var $li = this.$dots.find('li.islider-dots-active');
    if ($li.length) {
        $li.find('span').addClass('islider-dots-full');
    } else {

    }
};

module.exports = islider;