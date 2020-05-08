$(function () {
    $(".devour").on("click", function (e) {
        var id = $(this).attr("data-id")
        console.log(id)

        $.ajax("/api/burgers/" + id, {
            type: "DELETE",
        }).then(function () {
            console.log("Burger devoured!")
            location.reload()
        })
    });

});