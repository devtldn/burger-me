$(function () {
    $(".change-eat").on("click", function (event) {
        var id = $(this).data("id");
        var newEat = $(this).data("neweat");

        var newEatState = {
            devoured: newEat
        };

        console.log(newEatState);

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newEatState
        }).then(
            function () {
                console.log(`\n\nDevoured set to ${newEat}!`);

                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burg").val().trim(),
            devoured: $("[name=devoured]:checked").val().trim()
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log(`\n\nYour ${newBurger} is ready!`);

                location.reload();
            }
        );
    });

    $(".remove-eat").on("click", function (event) {
        var id = $(this).data("id");

        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(
            function () {
                console.log(`\n\nYou didn't want ${id}!`);

                location.reload();
            }
        );
    });
});
