$("#filter").on("click", function(e){
    $("#filterbox").show();
    $(".filterbtn").css("background-color","#0155af")
    $(document).one("click", function(){
        $("#filterbox").hide();
        $(".filterbtn").css("background-color","#007DFF")
    });
    e.stopPropagation();
});