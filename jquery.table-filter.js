/*!
 * jQuery Plugin: Table Filter - version 0.1.2
 * http://github.com/hail2u/jquery.table-filter
 * Insert a input form for filtering table rows dinamically.
 *
 * Copyright (c) 2009 Kyo Nagashima <kyo@hail2u.net>
 * This library licensed under MIT license:
 * http://opensource.org/licenses/mit-license.php
 */

(function($) {
  $.fn.addTableFilter = function (options) {
    var o = $.extend({}, $.fn.addTableFilter.defaults, options);

    if (this.is("table")) {
      // Generate ID
      if (!this.attr("id")) {
        this.attr({
          id: "t-" + Math.floor(Math.random() * 99999999)
        });
      }
      var tgt = this.attr("id");
      var id = tgt + "-filtering";

      // Build filtering form
      var label = $("<label/>").attr({
        "for": id
      }).append(o.labelText);
      var input = $("<input/>").attr({
        id:   id,
        type: "text",
        size: o.size
      });
      $("<p/>").addClass("formTableFilter").append(label).append(input).insertBefore(this);

      // Bind filtering function
      $("#" + id).delayBind("keyup", function (e) {
        var words = $(this).val().toLowerCase().split(" ");
        $("#" + tgt + " tbody tr").each(function () {
          var s = $(this).html().toLowerCase().replace(/<.+?>/g, "").replace(/\s+/g, " ");
          var state = 0;
          $.each(words, function () {
            if (s.indexOf(this) < 0) {
              state = 1;
              return false; // break $.each()
            }
          });
          state ? $(this).hide() : $(this).show();
        });
      }, 300);
    }

    return this;
  };

  $.fn.addTableFilter.defaults = {
    labelText: "Keyword(s): ",
    size:      32
  };

  $.fn.delayBind = function (type, data, func, timeout) {
    if ($.isFunction(data)) {
      timeout = func;
      func    = data;
      data    = undefined;
    }

    var self    = this;
    var wait    = null;
    var handler = function (e) {
      clearTimeout(wait);
      wait = setTimeout(function() {
        func.apply(self, [$.extend({}, e)]);
      }, timeout);
    };

    return this.bind(type, data, handler);
  };
})(jQuery);
