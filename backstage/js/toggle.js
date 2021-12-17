const cb = document.querySelectorAll("input");
for (let i = 0; i < cb.length; i++) {
  const checkbox = cb[i];
  checkbox.addEventListener("click", () => {
    triggerHideShow('.wrapperquantity');
    checkbox.parentNode.querySelector(".state").textContent = checkbox.checked;
  });
}
function triggerHideShow(wrapperquantity)
{
if ($(".state").text(true)!= -1){
$(wrapperquantity).show();
}
else{
$(wrapperquantity).hide();
}
}