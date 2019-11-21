$(function () {
  $(".change-devoured").on("click", function (event) {
    var id = $(this).data("id");
    var newDevoured = $(this).data("devoured");

    var newDevouredState = {
      devoured: newDevoured
    };
console.log(newDevoured + " line 10") 
    $.ajax("/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(
      function () {
        console.log("changed devoured to", newDevoured);
        location.reload();
        console.log(newDevoured + " line 21") 
      }

    );
  });

  $("#submitButton").on("click", function (event) {
    event.preventDefault();
    console.log($("#burg").val())
    var newBurger = {
      name: $("#burg").val().trim(),
      devoured: $(`[name=devoured]:checked`).val()
    };

    $.ajax("/", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        console.log("created new burger");
        location.reload();
      }
    );
  });
});
