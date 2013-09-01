jQuery Plugin: Table Filter v0.2.1
==================================

Insert a input form for filtering table rows dynamically.


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

MIT: http://hail2u.mit-license.org/2009
