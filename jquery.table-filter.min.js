/*
 * jQuery Plugin: Table Filter - version 0.1.1
 * http://github.com/hail2u/jquery.table-filter
 * Insert a input form for filtering table rows dinamically.
 *
 * Copyright (c) 2009 Kyo Nagashima <kyo@hail2u.net>
 * This library licensed under MIT license:
 * http://opensource.org/licenses/mit-license.php
 */
(function(a){a.fn.addTableFilter=function(d){var e=a.extend({},a.fn.addTableFilter.defaults,d);if(this.is("table")){if(!this.attr("id")){this.attr({id:"t-"+Math.floor(Math.random()*99999999)})}var g=this.attr("id");var f=g+"-filtering";var c=a("<label/>").attr({"for":f}).append(e.labelText);var b=a("<input/>").attr({id:f,type:"text",size:e.size});a("<p/>").addClass("formTableFilter").append(c).append(b).insertBefore(this);a("#"+f).keyup(function(h){var i=this.value.toLowerCase().split(" ");a("#"+g+" tbody tr").each(function(){var j=a(this).html().toLowerCase().replace(/<.+?>/g,"").replace(/\s+/g," ");var k=0;a.each(i,function(){if(j.indexOf(this)<0){k=1;return false}});k?a(this).hide():a(this).show()})})}return this};a.fn.addTableFilter.defaults={labelText:"Keyword(s): ",size:32}})(jQuery);