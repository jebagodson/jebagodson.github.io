﻿$(document).ready(function () {

    $(".CustomHref").click(function () {
        alert('CustomHref');
    });

    $(".CustomHref").click(function () {
        alert('CustomHref');
    });
})


/*=======Date Picker========== */
$(document).ready(function () {
    
    
    //Date of Birth
    $("#dob").datepicker({
            dateFormat: "dd/mm/yy",
            showButtonPanel: true,
            changeMonth: true,
            changeYear: true,
            showOtherMonths: true,
            selectOtherMonths: true,
            yearRange: "1930:2020"
    });


    //Date of Joining
    $("#doj").datepicker({
            dateFormat: "dd/mm/yy"
    });


    //Last Working Date
    $("#lwD").datepicker({
            dateFormat: "dd/mm/yy"
    });


    //Date of Investment - Create Investment Page
    $("#doI").datepicker({
            dateFormat: "dd/mm/yy"
    });


    //Date of Investment - APPROVE INVESTMENT PAGE
    $(".doI").datepicker({
            dateFormat: "dd/mm/yy"
    });


    //Date of Commencement
    $(".doC").datepicker({
            dateFormat: "dd/mm/yy",
            minDate: -1,
            maxDate: +3
    });


    //Valid from - Manage Plan Page - Create Plan
    $("#validFrom").datepicker({
            dateFormat: "dd/mm/yy",
            minDate: 0
    });


    //Valid Till - Manage Plan Page - Create Plan
    $("#validTill").datepicker({
            dateFormat: "dd/mm/yy",
            minDate: 1,
            showButtonPanel: true,
            changeMonth: true,
            changeYear: true,
            showOtherMonths: true,
            selectOtherMonths: true,
            yearRange: "2020:2100"
    });


    //Salary Date Valid From
    $("#salaryDate").datepicker({
            dateFormat: "dd/mm/yy",
            minDate: -30
    });


    //Date Picker - Apply Leave Page
    $("#dateSingle").datepicker({
        dateFormat: "dd/mm/yy"
    });

    $("#leaveStartDate").datepicker({
        dateFormat: "dd/mm/yy"
    });

    $("#leaveEndDate").datepicker({
        dateFormat: "dd/mm/yy"
    });

    $("#dateHour").datepicker({
        dateFormat: "dd/mm/yy"
    });

    //Apply Leave Page - Radio Button
    $('input[type="radio"]').click(function(){
        let inputValue = $(this).attr("value");
        let targetBox = $("." + inputValue);
        $(".box").not(targetBox).hide();
        $(targetBox).show();
    });

});

/*=======Approve Leave ========== */
$(document).ready(function () {
    $('#data-leave-id').click(function () {
        $("#error").html("You Clicked on Approved");
        $('#myModal').modal("show");
    });
    $('#data-leave-id1').click(function () {
        $("#error1").html("You Clicked on Deny");
        $('#myModal1').modal("show");
    });
});

//Year Drop Down
$(function () {
    var option = function (i, j) {
        return $("<option>").append(j + 2019);
    };
    var options = (new Array(80) + "").split(",").map(option);
    $("#dYear").append(options);
    $("#payYear").append(options);
    $("#genYear").append(options);
});

/*=======Password Reset ========== */
var password = document.getElementById("password1");
var confirmPassword = document.getElementById("password2");

function validatePassword() {
    if (password.value != confirmPassword.value) {
        confirmPassword.setCustomValidity("Passwords Don't Match");
    } else {
        confirmPassword.setCustomValidity('');
    }
}
$('#password1').on('change', function () {
    validatePassword();
});
$('#password1').on('keyup', function () {
    validatePassword();
});
/*=======Password Reset Ends========== */


/*=======Pagination Start========== */
$(document).ready( function () {
    $('.myTable').DataTable();
} );
/*=======Pagination Ends========== */