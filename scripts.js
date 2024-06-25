document.addEventListener("DOMContentLoaded", function() {
  const projectCards = document.querySelectorAll('.project-card');
  
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'slideIn 1s ease-in-out forwards';
      }
    });
  });

  projectCards.forEach(card => {
    observer.observe(card);
  });
});
