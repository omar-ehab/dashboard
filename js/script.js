/*global console, $, jQuery*/

$(document).ready(function () {
    'use strict';
    var elementHeight = $(".menu").height() / 9;
    $(".menu>div").css("height", elementHeight);
    function lowHeight() {
        
        if ($('body').height() < 690) {
            $(".dashboard-info").css("height", "95%");
            var dashboardHeight = $(".dashboard-info").height() / 5;
            $(".des").addClass("hide");
            $(".menu>div>div").addClass("hide");
            $(".activty").css("height", dashboardHeight);
            $(".activty").css("padding", 0);
        } else {
            $(".menu>div>div").removeClass("hide");
            $(".des").removeClass("hide");
        }
    }
    lowHeight();
    
    $(window).resize(function () {
        lowHeight();
    });
    $(".mobile-menu").on("click", function () {
        $(".menu").toggleClass("hidden-xs");
    });

});