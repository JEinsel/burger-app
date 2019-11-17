// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $(".change-devoured").on("click", function (event) {
    var id = $(this).data("id");
    var newDevoured = $(this).data("devoured");

    var newDevouredState = {
      devoured: newDevoured
    };
console.log(newDevoured + " line 10") 
   // Send the PUT request.
    $.ajax("/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(
      function () {
        console.log("changed devoured to", newDevoured);
        // Reload the page to get the updated list
        location.reload();
        console.log(newDevoured + " line 21") 
      }

    );
  });


  $("#submitButton").on("click", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    console.log($("#burg").val())
    var newBurger = {
      name: $("#burg").val().trim(),
      devoured: $(`[name=devoured]:checked`).val()
    };

    // Send the POST request.
    $.ajax("/", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
