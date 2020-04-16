/*=======Apply Leave Date Picker========== */
$(document).ready(function () {
    $('#btnApplyLeave').on('click', function () {
        debugger;

        var leaveDurationVal = $("input[name='leaveDuration']:checked").val();

        $.ajax({
            url: "ApplyLeavePost/",
            type: "POST",
            data: JSON.stringify({
                leaveTypeId: $('#leaveTypeId').val(), leaveStartDate: $('#leaveStartDate').val(), leaveEndDate: $('#leaveEndDate').val(),
                reason: $('#applyComment').val()
            }),
            dataType: "json",
            contentType: 'application/json; charset=utf-8',
            success: function (data) {
                debugger;

            },
            error: function (ex) {
                debugger;

            }
        });
    });

});


/*=======Approve Leave ========== */
$(document).ready(function () {

    $('#aApplyLeave,#aRejectLeave').on('click', function (e) {
        $('#hdnLeaveId').val($(this).data('leave-id'));
    });

});


function SubmitApproveOrDenyLeave($this) {

    var workFlowState = 0;
    var comment = "";

    if ($($this).attr('id') == "btnApproveLeave") {
        workFlowState = 1;
        comment = $('#approveComment').val();
    }
    else if ($($this).attr('id') == "btnRejectLeave") {
        workFlowState = 2;
        comment = $('#denyComment').val();
    }

    $.ajax({
        url: "LeaveProcess/",
        type: "POST",
        data: JSON.stringify({ leaveId: $('#hdnLeaveId').val(), reason: comment, workflowState: workFlowState }),
        dataType: "json",
        contentType: 'application/json; charset=utf-8',
        success: function (data) {

        },
        error: function (ex) {

        }
    });
}