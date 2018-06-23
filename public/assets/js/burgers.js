$(function () {
    $("#eat").on("click", function (event) {
        var id = $(this).data("id");
        var newEat = $(this).data("neweat");

        var newEatState = {
            devoured: newEat
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newEatState
        }).then(
            function () {
                console.log(`\n\nYou're now eating ${newEat}!`);

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

        console.log(newBurger);

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log(`\n\nYour new ${newBurger} is ready to eat!`);

                location.reload();
            }
        );
    });
});
