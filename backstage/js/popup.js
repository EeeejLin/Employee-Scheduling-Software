// Popup Open
function popupOpen(el){ 
  $(el).siblings('.overlay').css("display","block");
  $(el).siblings('#popup').css("display","block");
}
// Popup Close
function popupClose(el){
  $('.overlay').css("display","none");
  $(el).closest('#popup').css("display","none");
}