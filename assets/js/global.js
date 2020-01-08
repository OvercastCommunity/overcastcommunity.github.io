$(document).ready(function() {
    const matcher = window.matchMedia("(prefers-color-scheme: dark)");
    window.addEventListener("load", update);
    matcher.addEventListener("change", update);

    function update() {
        if (matcher.matches) {
            $("body")
                .addClass("bg-dark")
                .addClass("text-white");
            $(".footer")
                .find("a")
                .css("color", "white");
            $(".navbar").removeClass("navbar-light");
            $(".navbar").addClass("navbar-dark");
            $(".navbar").removeClass("bg-light");
            $(".navbar").addClass("bg-dark");
            $(".card").addClass("bg-dark");
            $(".card-img-left").removeClass("img-thumbnail");
            $(".card-img-left").addClass("img-thumbnail-dark");
        } else {
            $("body")
                .removeClass("bg-dark")
                .removeClass("text-white");
            $(".footer")
                .find("a")
                .css("color", "");
            $(".navbar").removeClass("navbar-dark");
            $(".navbar").addClass("navbar-light");
            $(".navbar").removeClass("bg-dark");
            $(".navbar").addClass("bg-light");
            $(".card").removeClass("bg-dark");
            $(".card-img-left").removeClass("img-thumbnail-dark");
            $(".card-img-left").addClass("img-thumbnail");
        }
    }
});
