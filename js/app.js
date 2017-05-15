$(document).ready(function () {
    $("#content").load("en/home.html",);
    $("#home").css("font-weight", "bold");
    
    $("#home").click(function () {
        $("#content").load("en/home.html");
        $(".sidebar a").css("font-weight", "normal");
        $(this).css("font-weight", "bold");
    });
                
    $("#lecturers").click(function () {
        $("#content").load("en/lecturers.html");
        $(".sidebar a").css("font-weight", "normal");
        $(this).css("font-weight", "bold");
    });
                
    $("#program").click(function () {
        $("#content").load("en/program.html");
        $(".sidebar a").css("font-weight", "normal");
        $(this).css("font-weight", "bold");
    });
                
    $("#committee").click(function () {
        $("#content").load("en/committee.html");
        $(".sidebar a").css("font-weight", "normal");
        $(this).css("font-weight", "bold");
    });
                
    $("#contacts").click(function () {
        $("#content").load("en/contacts.html");
        $(".sidebar a").css("font-weight", "normal");
        $(this).css("font-weight", "bold");
    });
});