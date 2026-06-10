function openModal(imageSrc) {
    document.getElementById("imageModal").style.display = "flex";
    document.getElementById("modalImg").src = imageSrc;
}

function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById("imageModal");

    if (event.target === modal) {
        closeModal();
    }
};