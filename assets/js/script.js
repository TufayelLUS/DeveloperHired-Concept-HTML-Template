$(window).scroll(function () {
    if ($(document).scrollTop() > 50) {
        $('.nav').addClass('affix');
        $('.home').css("height", "40vh");
    } else {
        $('.nav').removeClass('affix');
        $('.home').css("height", "100vh");
    }
});
$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn("slow");
});
var i = 3;
window.setInterval(function () {
    if (i == 1) {
        $('#can').css("color", "red");
        $('#we').css("color", "white");
        i++;
    } else if (i == 2) {
        $('#solve').css("color", "red");
        $('#can').css("color", "white");
        i++;
    } else if (i == 3) {
        $('#we').css("color", "red");
        $('#solve').css("color", "white");
        i = 1;
    }
}, 500);

function sendInfo() {
    var customer_name = $('input[name="customer_name"]').val();
    var customer_email = $('input[name="customer_email"]').val();
    var what_he_wants = $('textarea[name="customer_wish"]').val();
    if (customer_name.trim() === "" || customer_email.trim() === "" || what_he_wants.trim() === "")
    {
        return false;
    }
    $('input[name="customer_name"]').val("");
    $('input[name="customer_email"]').val("");
    $('textarea[name="customer_wish"]').val("");
    $.post("/api", {
        customer_name: customer_name,
        customer_email: customer_email,
        what_he_wants: what_he_wants
    }).done(function () {
        $('.pop-alert').fadeIn(2000).fadeOut(6000);
    });
}
$('input[name="customer_email"]').keyup(function () {
    if ($('input[name="customer_email"]').val() !== "") {
        if ($('input[name="customer_email"]').val().includes("@") === false || $('input[name="customer_email"]').val().includes(".") === false) {
            $('#email_wrong').fadeIn("slow");
        } else {
            $('#email_wrong').fadeOut("slow");
        }
    }
    else{
        $('#email_wrong').fadeOut("slow");
    }
});
