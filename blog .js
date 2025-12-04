

document.addEventListener('DOMContentLoaded', function () {
  // Find all buttons with the primary button class (the Read More buttons)
  document.querySelectorAll('.btn-primary').forEach(btn => {
    // For each button, add a click event listener
    btn.addEventListener('click', function(e) {
      // Prevent the default link/button action (so the page does not jump)
      e.preventDefault();

      // Find the nearest parent element with class 'card' for this button
      const card = this.closest('.card');
      // If there is no card ancestor, stop here
      if (!card) return;

      // Inside the card, find the element that contains extra content
      const more = card.querySelector('.more-content');
      // If there is no extra-content element, stop here
      if (!more) return;

      // Toggle the 'open' class on the extra-content element.
      // If the class was present it will be removed, and vice versa.
      const isOpen = more.classList.toggle('open');

      // Update the aria-hidden attribute for screen readers:
      // set to 'false' when open (visible), otherwise 'true'.
      more.setAttribute('aria-hidden', isOpen ? 'false' : 'true');

      // Update the button text so it reads 'Show Less' when content is open,
      // and 'Read More' when content is closed.
      this.textContent = isOpen ? 'Show Less' : 'Read More';
    });
  });
});
