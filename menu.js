// Select all order buttons
const orderButtons = document.querySelectorAll(".btn-outline-info");

orderButtons.forEach(button => {
    button.addEventListener("click", () => {
        alert("Thank you for your order! 🚚 Your food is being prepared.");
    });
});