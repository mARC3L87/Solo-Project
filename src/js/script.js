function toggleMenu(visible) {
  document.querySelector('.side_wrapper').classList.toggle('show', visible);
}
document.querySelector('.hamburger').addEventListener('click', function(e) {
  e.preventDefault();
  toggleMenu();
});

function togglePages(event){
  event.preventDefault();
  const clickedElement = this;
  console.log(clickedElement);
  //const activeLinks = document.querySelectorAll('.bar_links a');
  //for(let activeLink of activeLinks){
  //activeLink.classList.remove('active');
  //console.log('activeLink', activeLink);
  // }
  //clickedElement.classList.add('active');
  const activeContent = document.querySelectorAll('.content');
  console.log(activeContent);
  for(let content of activeContent){
    content.classList.remove('active');
  }
  const contentSelector = clickedElement.getAttribute('href');
  const targetContent = document.querySelector(contentSelector);
  targetContent.classList.add('active');
}
const links = document.querySelectorAll('.bar_links a');
for(let link of links){
  link.addEventListener('click', togglePages);
}

