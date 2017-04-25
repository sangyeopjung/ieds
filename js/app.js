$(function() {
    ["en"].forEach(function (language){
        $("#content-" + language).load("../" + language + "/home.html", function() {
            $(".sidebar").css("height", $(".container").height() - 30);
        });
        $("#home-" + language).css("font-weight", "bold");
        
        $("#home-" + language).click(function () {
            $("#content-" + language).load("../" + language + "/home.html", function() {
                $(".sidebar").css("height", $(".container").height() - 30);
            });
            $(".sidebar a").css("font-weight", "normal");
            $(this).css("font-weight", "bold");
        });
                   
        $("#lecturers-" + language).click(function () {
            $("#content-" + language).load("../" + language + "/lecturers.html", function() {
                $(".sidebar").css("height", $(".container").height() - 30);
            });
            $(".sidebar a").css("font-weight", "normal");
            $(this).css("font-weight", "bold");
        });
                   
        $("#program-" + language).click(function () {
            $("#content-" + language).load("../" + language + "/program.html", function() {
                $(".sidebar").css("height", $(".container").height() - 30);
            });
            $(".sidebar a").css("font-weight", "normal");
            $(this).css("font-weight", "bold");
        });
                   
        $("#committee-" + language).click(function () {
            $("#content-" + language).load("../" + language + "/committee.html", function() {
                $(".sidebar").css("height", $(".container").height() - 30);
            });
            $(".sidebar a").css("font-weight", "normal");
            $(this).css("font-weight", "bold");
        });
                   
        $("#contacts-" + language).click(function () {
            $("#content-" + language).load("../" + language + "/contacts.html", function() {
                $(".sidebar").css("height", $(".container").height() - 30);
            });
            $(".sidebar a").css("font-weight", "normal");
            $(this).css("font-weight", "bold");
        });
    })
})