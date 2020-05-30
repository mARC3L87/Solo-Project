function toggleMenu(visible) {
  document.querySelector('.side_wrapper').classList.toggle('show', visible);
}
document.querySelector('.hamburger').addEventListener('click', function(e) {
  e.preventDefault();
  toggleMenu();
});