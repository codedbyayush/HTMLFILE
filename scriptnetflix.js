/* ============================================================
   HOW TO READ THIS FILE
   ------------------------------------------------------------
   JavaScript's whole job here is 3 steps, repeated:
     1. FIND an element      -> document.querySelector(...) / getElementById(...)
     2. LISTEN for an event  -> element.addEventListener('click', ...)
     3. CHANGE something     -> element.classList.add(...) or element.style...

   Every block below follows that exact pattern. Once you can spot
   those 3 steps, you can read (and write) almost any beginner JS.
   ============================================================ */


/* ------------------------------------------------------------
   1) NAVBAR BACKGROUND ON SCROLL
   Connects to: .navbar in index.html, .navbar.scrolled in style.css
   Logic: "if the page has been scrolled down more than 60px,
           add the 'scrolled' class. Otherwise remove it."
   ------------------------------------------------------------ */
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');   // CSS then paints it solid black
  } else {
    navbar.classList.remove('scrolled'); // back to transparent gradient
  }
});


/* ------------------------------------------------------------
   2) LEFT / RIGHT ARROW BUTTONS SCROLL A ROW
   Connects to: .row-arrow buttons and .row-cards divs in index.html
   Logic: "when an arrow is clicked, find the row-cards div with the
           matching data-target id, and scroll it left or right."
   ------------------------------------------------------------ */
const arrowButtons = document.querySelectorAll('.row-arrow');

arrowButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // data-target on the button matches the id="" on the row-cards div
    const targetId = button.getAttribute('data-target');
    const row = document.getElementById(targetId);

    // scrollBy moves the row; scroll left = negative, right = positive
    const scrollAmount = 400;
    if (button.classList.contains('left')) {
      row.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      row.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  });
});


/* ------------------------------------------------------------
   3) CLICK A POSTER -> OPEN THE MODAL POPUP
   Connects to: .card images, .modal-overlay, .modal-img/.modal-title/.modal-desc
   Logic: "when any poster is clicked, copy its image into the modal,
           put in some placeholder title/description text, then show the modal."
   ------------------------------------------------------------ */
const cards = document.querySelectorAll('.card');
const modalOverlay = document.getElementById('modalOverlay');
const modalImg = document.getElementById('modalImg');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');

// Just some placeholder text so every card doesn't look identical.
// In a real app this data would come from an API instead of a fixed list.
const sampleTitles = [
  'The Last Signal', 'Midnight Runners', 'Echoes of Tomorrow', 'Glass City',
  'The Quiet Hour', 'Neon Horizon', 'Paper Moon', 'Static'
];
const sampleDesc = 'A gripping story that keeps you guessing until the very last frame.';

cards.forEach((card, index) => {
  card.addEventListener('click', () => {
    modalImg.src = card.src;                             // reuse the clicked poster
    modalTitle.textContent = sampleTitles[index % sampleTitles.length];
    modalDesc.textContent = sampleDesc;
    modalOverlay.classList.add('show');                  // CSS flips display:none -> flex
  });
});


/* ------------------------------------------------------------
   4) CLOSE THE MODAL
   Connects to: #modalClose button and .modal-overlay in style.css
   Two ways to close it: the X button, OR clicking the dark
   background outside the modal box.
   ------------------------------------------------------------ */
const modalClose = document.getElementById('modalClose');

modalClose.addEventListener('click', () => {
  modalOverlay.classList.remove('show');
});

modalOverlay.addEventListener('click', (event) => {
  // event.target is the exact element clicked.
  // Only close if they clicked the dark overlay itself,
  // not the modal box sitting on top of it.
  if (event.target === modalOverlay) {
    modalOverlay.classList.remove('show');
  }
});