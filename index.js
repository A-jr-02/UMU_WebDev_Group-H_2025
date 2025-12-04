document.addEventListener("DOMContentLoaded", function () {
    // Select the button (the hamburger icon) and the links container
    const navToggler = document.getElementById("navbarToggler");
    const navMenu = document.getElementById("navbarNav");

    // Add a click event listener to the toggle button
    navToggler.addEventListener("click", function () {
        // Toggle the 'active' class on the menu container
        navMenu.classList.toggle("active");
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const visitMenuBtn = document.getElementById("visitMenuBtn");
    const popupForm = document.getElementById("popupForm");
    const clientForm = document.getElementById("clientForm");

    // In-memory flag to track if form is filled
    let formFilled = false;

    // Show popup or redirect based on in-memory flag
    visitMenuBtn.addEventListener("click", function () {
        if (formFilled) {
            // If form is filled, proceed to menu
            window.location.href = "menu.html";
        } else {
            // If not filled, show the form
            popupForm.style.display = "block";
        }
    });


    // Handle form submission
    clientForm.addEventListener("submit", function (e) {
        e.preventDefault();
        formFilled = true; // Mark form as filled (in memory)
        popupForm.style.display = "none";
        window.location.href = "menu.html"; // Go to menu
    });
});
// Close popup when clicking outside the form
    window.addEventListener("click", function (e) {
        if (e.target == popupForm) {
            popupForm.style.display = "none";
        }
    });
    
    const logo = document.querySelector(".logo");
    logo.style.pointerEvents = "auto";
    logo.addEventListener("click", function () {
        window.location.href = "index.html";
    });
    const backToTopBtn = document.createElement("button");
    backToTopBtn.innerText = "Back to Top";
    backToTopBtn.style.position = "fixed";
    backToTopBtn.style.bottom = "20px";
    backToTopBtn.style.right = "20px";
    backToTopBtn.style.padding = "10px 15px";
    backToTopBtn.style.backgroundColor = "blue";
    backToTopBtn.style.color = "white";
    backToTopBtn.style.border = "none";
    backToTopBtn.style.borderRadius = "5px";
    backToTopBtn.style.cursor = "pointer";
    backToTopBtn.style.zIndex = "1000";
    document.body.appendChild(backToTopBtn);

    backToTopBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
   
    