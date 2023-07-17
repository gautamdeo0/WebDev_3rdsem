$(document).ready(function () {
  // Handle button click event
  $("#academic-event-button").click(function () {
    // Make AJAX request to the PHP script
    $.ajax({
      url: "acaEvent_display.php",
      dataType: "json",
      success: function (response) {
        // Handle the response
        console.log(response); // Display the response in the browser console
        // You can further process the response and update the webpage as needed
      },
      error: function (xhr, status, error) {
        // Handle any errors that occur during the AJAX request
        console.error(error);
      },
    });
  });
});
