(function ($) {
  Drupal.behaviors.viewportUnitsRepaintFix = {
    attach: function () {
      // Determine what elements will get repainted
      var causeRepaintsOn = $(".header__sitename");

      $(window).resize(function () {
        causeRepaintsOn.css("z-index", 1);
      });
    }
  };
})(jQuery);
