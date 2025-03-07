document.addEventListener("DOMContentLoaded", function() {
    let nav = document.querySelector("nav ul");
    let toggleBtn = document.createElement("button");
    toggleBtn.innerText = "☰ Menu";
    toggleBtn.style.display = "none";

    if (window.innerWidth < 768) {
        toggleBtn.style.display = "block";
        nav.style.display = "none";
        toggleBtn.onclick = () => {
            nav.style.display = nav.style.display === "none" ? "block" : "none";
        };
    }

    document.body.insertBefore(toggleBtn, nav);
});
