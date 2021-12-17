$(function() {
   $(".input input").focus(function() {
      $(this).parent(".input").each(function() {
         $("label", this).css({
            "line-height": "18px",
            "font-size": "18px",
            "font-weight": "600",
            "color": "#696969",
            "top": "0px"
         })
         $(".spin", this).css({
            "width": "100%"
         })
      });
   }).blur(function() {
      $(".spin").css({
         "width": "0px"
      })
      if ($(this).val() == "") {
         $(this).parent(".input").each(function() {
            $("label", this).css({
               "line-height": "60px",
               "font-size": "18px",
               "font-weight": "600",
               "color": "#002750",
               "top": "10px"
            })
         });
      }
   }); 
});