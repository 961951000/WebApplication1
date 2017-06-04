//jQuery 本身的扩展方法
(function ($) {
    $.extend({
        pathEquals: function (path1, path2) {
            if (path1 === path2) {
                return true;
            } else if (path1 == undefined || path2 == undefined || path1.length === 0 || path2.length === 0) {
                return false;
            } else {
                if (path1.substr(0, 1) === "/") {
                    path1 = path1.substr(1, path1.length - 1);
                }
                if (path2.substr(0, 1) === "/") {
                    path2 = path2.substr(1, path2.length - 1);
                }
                if (path1.length === 0 || path2.length === 0) {
                    return path1 === path2;
                } else {
                    if (path1.substr(path1.length - 1, 1) === "/") {
                        path1 = path1.substr(0, path1.length - 1);
                    }
                    if (path2.substr(path2.length - 1, 1) === "/") {
                        path2 = path2.substr(0, path2.length - 1);
                    }
                    return path1 === path2;
                }
            }
        }
    });
})(jQuery);
//jQuery 所选对象扩展方法
(function ($) {
    $.fn.extend({
        serializeJson: function () {
            var serializeObj = {};
            var array = this.serializeArray();
            var str = this.serialize();
            $(array).each(function () {
                if (serializeObj[this.name]) {
                    if ($.isArray(serializeObj[this.name])) {
                        serializeObj[this.name].push(this.value);
                    } else {
                        serializeObj[this.name] = [serializeObj[this.name], this.value];
                    }
                } else {
                    serializeObj[this.name] = this.value;
                }
            });
            return serializeObj;
        }
    });
})(jQuery);