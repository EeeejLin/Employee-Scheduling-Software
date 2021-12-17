$("input.form-checkbox:checkbox").change(function() {
    if (this.checked) {
      var myVar = $(this).siblings('input');
      myVar.removeClass("form-check-default");
    } else if (!this.checked) {
      var myVar = $(this).siblings('input');
      myVar.addClass("form-check-default");
    }
 });