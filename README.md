TITLE
=====

jQuery Plugin: Table Filter - version 0.1.1

DESCRIPTION
===========

Insert a input form for filtering table rows dinamically.

Usage
=====

Insert to all table:

    $("table").addTableFilter();

Insert to "#table1" only:

    $("#table1").addTableFilter();

Insert with custom label text and size:

    $("table").addTableFilter({
      labelText: "Filtering Words: ",
      size:      48
    });

Styling
=======

You can style inserted elements like this:

    .formTableFilter {
      text-align: right;
    }
    
    .formTableFilter label {
      font-weight: bold;
    }
    
    .formTableFilter input {
      border: 1px solod #999999;
      width: 12em;
      color: #ffffff;
      background-color: #333333;
    }

LICENSE
=======

Copyright (c) 2009 Kyo Nagashima <kyo@hail2u.net><br />
This library licensed under MIT license:<br />
http://opensource.org/licenses/mit-license.php<br />
