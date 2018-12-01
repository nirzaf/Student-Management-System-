$.fn.toufiqSPA = function (options) {
    var $mainSelector = $(this);
    window.history && window.history.pushState && $(window).on("popstate", function () {
        var a = window.location.href; - 1 == a.indexOf("#") && ($mainSelector.addClass("spa-loader"), $.ajax({
            type: "get",
            url: a,
            success: function (a, t, e) {
                $mainSelector.removeClass("spa-loader"), $mainSelector.html(a)
            },
            error: function (a, t, e) {
                $mainSelector.removeClass("spa-loader"), "error" == t && alert(a)
            }
        }))
    }), $(document).on("submit", "form:not(.stopAjax)", function (e) {
        e.preventDefault();
        var $this = $(this),
            url = $this.attr("action"),
            formData = new FormData(this),
            $ajaxTarget = $this.attr("ajax-target");
        ($ajaxTarget = null == $ajaxTarget ? $mainSelector : $($ajaxTarget)).addClass("spa-loader"), $.ajax({
            type: "post",
            url: url,
            data: formData,
            processData: !1,
            contentType: !1,
            success: function (data, textStatus, JqrXHR) {
                console.log(data + textStatus + JSON.stringify(JqrXHR)), console.log(JqrXHR.getAllResponseHeaders()), $ajaxTarget.removeClass("spa-loader");
                var strEval = $this.attr("eval");
                null != strEval ? eval(strEval) : ($ajaxTarget == $mainSelector && (url = JqrXHR.getResponseHeader("Location")) != window.location.href.toString().split(window.location.host)[1] && window.history.pushState(null, null, url), $ajaxTarget.html(data))
            },
            error: function (a, t, e) {
                $ajaxTarget.removeClass("spa-loader"), $ajaxTarget.html(a), "error" == t && alert(a)
            }
        })
    }), $(document).on("click", 'a[href^="/"]:not(.stopAjax,[target]),button[href],input[href]', function (e) {
        var $this = $(this),
            url = $this.attr("href"),
            $ajaxTarget = $this.attr("ajax-target");
        $ajaxTarget = null == $ajaxTarget ? $mainSelector : $($ajaxTarget);
        var $dataTarget = $this.attr("data-target");
        null != $dataTarget && ($dataTarget = $($dataTarget)).modal("show"), $ajaxTarget.addClass("spa-loader"), $.ajax({
            type: "get",
            url: url,
            success: function (data, textStatus, JqrXHR) {
                $ajaxTarget.removeClass("spa-loader");
                var strEval = $this.attr("eval");
                null != strEval ? eval(strEval) : ($ajaxTarget == $mainSelector && (url = JqrXHR.getResponseHeader("Location")) != window.location.href.toString().split(window.location.host)[1] && window.history.pushState(null, null, url), $ajaxTarget.html(data))
            },
            error: function (a, t, e) {
                $ajaxTarget.removeClass("spa-loader"), "error" == t && alert(a), window.history.pushState(null, null, url)
            }
        }), e.preventDefault()
    })
};