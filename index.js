const open = document.getElementById("trigger-modal");
const close = document.getElementById("close-modal");
const modal = document.getElementById("modal")

open.addEventListener("click", () => {
	modal.style.display = "block";
}) 

close.addEventListener("click", () => {
	modal.style.display = "none"
})