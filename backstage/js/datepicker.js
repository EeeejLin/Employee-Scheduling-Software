$(function() {
$("#datepicker").datepicker({
    altField : "#datepicker",
    altFormat : "yy/mm/dd",
    dateFormat : "yy/mm/dd"
});
$(".setDate").bind(
    "click",
    function() {
    var myDate = $.datepicker.parseDate("yy/mm/dd", "2008/08/08");
    var setDateTest = $.datepicker.formatDate("yy/mm/dd", myDate);
    $("#datepicker").datepicker().val(setDateTest);
    });
});
$(function() {
$("#datepicker1").datepicker({
    altField : "#datepicker1",
    altFormat : "yy/mm/dd",
    dateFormat : "yy/mm/dd"
});
$(".setDate").bind(
    "click",
    function() {
    var myDate = $.datepicker.parseDate("yy/mm/dd", "2008/08/08");
    var setDateTest = $.datepicker.formatDate("yy/mm/dd", myDate);
    $("#datepicker1").datepicker().val(setDateTest);
    });
});