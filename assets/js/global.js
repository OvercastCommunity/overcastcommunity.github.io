$(document).ready(function() {
    const matcher = window.matchMedia("(prefers-color-scheme: dark)");
    window.addEventListener("load", update);
    matcher.addEventListener("change", update);

    function update() {
        if (matcher.matches) {
            $("body").addClass("bg-dark");
            $(".footer")
                .find("a")
                .css("color", "white");
            $(".navbar").removeClass("navbar-light");
            $(".navbar").addClass("navbar-dark");
            $(".navbar").removeClass("bg-light");
            $(".navbar").addClass("bg-dark");
            $(".card").addClass("text-white");
            $(".card").addClass("bg-dark");
        } else {
            $("body").removeClass("bg-dark");
            $(".footer")
                .find("a")
                .css("color", "");
            $(".navbar").removeClass("navbar-dark");
            $(".navbar").addClass("navbar-light");
            $(".navbar").removeClass("bg-dark");
            $(".navbar").addClass("bg-light");
            $(".card").removeClass("text-white");
            $(".card").removeClass("bg-dark");
        }
    }
});
