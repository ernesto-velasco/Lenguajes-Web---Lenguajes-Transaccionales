$("#action-button").click(function () {
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/todos",
    data: {
      format: "json",
    },
    error: function () {
      $("#info").html("<p>An error has occurred</p>");
    },
    dataType: "jsonp",
    success: function (data) {
      for (const todo of data) {
        console.log(todo.id);
        console.log(todo.name);
        var $li = $("<li>").text(todo.title);
        $("#inner").append($li);
        if (todo.completed === true) {
          $li.addClass("completed");
        }
      }
    },
    type: "GET",
  });
});
