$(function() {
    ["en"].forEach(function (language){
        $("#content-" + language).load("../" + language + "/home.html");
        $("#home-" + language).css("font-weight", "bold");
        
        $("#home-" + language).click(function () {
            $("#content-" + language).load("../" + language + "/home.html");
            $(".sidebar a").css("font-weight", "normal");
            $(this).css("font-weight", "bold");
        });
        $("#lecturers-" + language).click(function () {
            $("#content-" + language).load("../" + language + "/lecturers.html");
            $(".sidebar a").css("font-weight", "normal");
            $(this).css("font-weight", "bold");
        });
        $("#program-" + language).click(function () {
            $("#content-" + language).load("../" + language + "/program.html");
            $(".sidebar a").css("font-weight", "normal");
            $(this).css("font-weight", "bold");
        });
        $("#committee-" + language).click(function () {
            $("#content-" + language).load("../" + language + "/committee.html");
            $(".sidebar a").css("font-weight", "normal");
            $(this).css("font-weight", "bold");
        });
        $("#contacts-" + language).click(function () {
            $("#content-" + language).load("../" + language + "/contacts.html");
            $(".sidebar a").css("font-weight", "normal");
            $(this).css("font-weight", "bold");
        });
    })
})