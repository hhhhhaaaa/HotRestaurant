console.log("Goliath Online");

$("#formData").on("submit", function (event) {
    event.preventDefault();

    const newRes = {
        customerName: $("#name").val().trim(),
        phoneNumber: $("#phone").val().trim(),
        customerEmail: $("#email").val().trim(),
    };

    console.log(newRes);

    $.post("/api/tables", newRes,
        function (data) {
            console.log("Post");
            if (data) {
                alert("Your table is reserved! Thank you!");
            }
            else {
                alert("Sorry, all tables are booked. We will place you on the waitlist.");
            }

            $("#name").val("");
            $("#phone").val("");
            $("#email").val("");
        });
});