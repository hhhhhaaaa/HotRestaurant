console.log("Goliath Online");

function openTables() {
    $.ajax({ url: "/api/tables", method: "GET" })
      .then(function(tableData) {

        console.log(tableData);

        for (var i = 0; i < tableData.length; i++) {
          var tableList = $("#tableList");
          var listItem = $("<li class='list-group-item mt-4'>");
          listItem.append(
            $("<h2>").text("Table #" + (i + 1)),
            $("<h2>").text("Name: " + tableData[i].customerName),
            $("<h2>").text("Email: " + tableData[i].customerEmail),
            $("<h2>").text("Phone: " + tableData[i].phoneNumber)
          );
          tableList.append(listItem);
        }
      });
  }

  function currentWaitlist() {
    $.ajax({ url: "/api/waitlist", method: "GET" })
      .then(function(waitData) {

        console.log(waitData);

        for (var i = 0; i < waitData.length; i++) {

          var waitList = $("#waitList");
          var listItem = $("<li class='list-group-item mt-4'>");

          listItem.append(
            $("<h2>").text("Table #" + (i + 1)),
            $("<h2>").text("Name: " + waitData[i].customerName),
            $("<h2>").text("Email: " + waitData[i].customerEmail),
            $("<h2>").text("Phone: " + waitData[i].phoneNumber)
          );

          waitList.append(listItem);
        }
      });
  }
  openTables();
  currentWaitlist();