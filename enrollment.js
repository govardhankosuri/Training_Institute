// ===============================
// Enrollment Form Functionality
// ===============================

const form = document.getElementById("enrollmentForm");
const popup = document.getElementById("successPopup");

// Form Submit
form.addEventListener("submit", function (e) {

    e.preventDefault();

    // Check built-in HTML validation
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    // Show Success Popup
    popup.style.display = "flex";

});

// Close Popup
function closePopup() {

    popup.style.display = "none";

    // Reset Form
    form.reset();

    // Scroll back to top
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}

// Close popup when clicking outside it
window.addEventListener("click", function (e) {

    if (e.target === popup) {

        popup.style.display = "none";
        form.reset();

    }

});


// ===============================
// Mobile Hamburger Menu
// ===============================

const btn = document.querySelector(".hamburger");
const nav = document.getElementById("navMenu");

if (btn && nav) {

    const backdrop = document.createElement("div");
    backdrop.className = "menu-backdrop";
    document.body.appendChild(backdrop);

    function closeMenu() {
        nav.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
        backdrop.classList.remove("visible");
    }

    btn.addEventListener("click", function () {

        const opened = nav.classList.toggle("open");

        btn.setAttribute("aria-expanded", opened);
        backdrop.classList.toggle("visible", opened);

    });

    backdrop.addEventListener("click", closeMenu);

    nav.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", closeMenu);
    });

}