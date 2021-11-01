define(["jquery", "methods"], function ($, methods) {
  let count = 0;

  $("#addRowBtn").click(function () {
    count += 1;
    var newRow = '<div id="inputFormRow">';
    newRow +=
      ' <input type="number" id="prodId" name="Product_ID" placeholder="Enter Product Id" />';
    newRow +=
      ' <input type="text" id="prodName" name="Product_Name" placeholder="Enter Product Name" />';
    newRow += ' <select id="category" name="Category">';
    newRow += '<option value="Mobile">Mobile</option>';
    newRow += '<option value="Laptop">Laptop</option>';
    newRow += "</select>";
    newRow +=
      ' <input type="number" id="quantity" name="Quantity" placeholder="0" />';
    newRow += " Availability:";
    newRow +=
      ' <input type="radio" name="' + "avail" + count + '" value="yes" />Yes ';
    newRow +=
      ' <input type="radio" name="' + "avail" + count + '" value="no" />No ';
    newRow += " Discounts:";
    newRow +=
      ' <input type="checkbox" name="discount" value="HDFC Bank" />HDFC Bank';
    newRow +=
      ' <input type="checkbox" name="discount" value="SBI Bank" />SBI Bank';
    newRow +=
      ' <input type="checkbox" name="discount" value="Master Card" />Master Card';
    newRow += ' <button id="removeRow" type="button">X</button>';
    newRow += "<br>";
    newRow += "</div>";

    $("#newRowHtml").append(newRow);
  });

  $("#productForm").submit(function (e) {
    e.preventDefault();
    console.log("Hello");
    var values = $(this).serialize();

    var table = '<table border=1 id="resultTable">';
    table += "<tr>";
    table += "<th>ID</th>";
    table += "<th>Name</th>";
    table += "<th>Category</th>";
    table += "<th>Quantity</th>";
    table += "<th>Availability</th>";
    table += "<th>Discounts</th>";
    table += "</tr>";

    var st = "";
    $(
      "#productForm input[type=text], input[type=number], input[type=radio]:checked, input[type=checkbox]:checked,select"
    ).each(function () {
      st = st + $(this).val() + ",";
    });

    var removeTd = st.split(",");
    var formedRows = "<tr>";
    for (var i = 0; i < removeTd.length - 1; i++) {
      if (i % 6 == 5) {
        formedRows += "<td>" + removeTd[i] + "</td></tr><tr>";
      } else {
        formedRows += "<td>" + removeTd[i] + "</td>";
      }
    }
    table += formedRows;
    table += "</table>";

    // Removing Old Table
    var getTable = document.getElementById("resultTable");
    if (getTable) {
      getTable.remove();
      $("#productForm").after(table);
    } else {
      $("#productForm").after(table);
    }
  });

  $(document).on("click", "#removeRow", function () {
    $(this).closest("#inputFormRow").remove();
  });

  $("#resetBtn").click(function () {
    document.getElementById("resultTable").remove();
  });
});
