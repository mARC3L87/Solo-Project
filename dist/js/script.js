/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
'use strict';

function toggleMenu(visible) {
  document.querySelector('.side_wrapper').classList.toggle('show', visible);
}
document.querySelector('.hamburger').addEventListener('click', function(event) {
  event.preventDefault();
  toggleMenu();
});
/* Activate page */
const pages = document.getElementById('pages').children;
const links = document.querySelectorAll('.bar_links li');
const aLinks = document.querySelectorAll('.bar_links a');
initPage();

function initPage() {
  const idFromHash = window.location.hash.replace('#/', '');

  let pageMatchingHash = pages[0].id;

  for (let page of pages) {
    if (page.id == idFromHash) {
      pageMatchingHash = page.id;
      break;
    }
  }
  activatePage(pageMatchingHash);

  for (let link of links) {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      const clickedElement = event.target;
      const id = clickedElement.getAttribute('href').replace('#', '');
      activatePage(id);

      window.location.hash = '#/' + id;
    });
  }
}

function activatePage(pageId) {
  for (let page of pages) {
    if (page.id == pageId) {
      page.classList.add('activePage');
      page.classList.remove('in-active');
    } else if (page.id != pageId) {
      page.classList.remove('activePage');
      page.classList.add('in-active');
    }
  }
  toggleMenu(false);
}
/* Close Modal */
function closeModal(){
  document.getElementById('overlay').classList.remove('show');
}
document.querySelectorAll('#overlay .js--close-modal').forEach(function(btn){
  btn.addEventListener('click', function(event){
    event.preventDefault();
    closeModal();
  });
});

document.querySelector('#overlay').addEventListener('click', function(event){
  if(event.target === this){
    closeModal();
  }
});

document.addEventListener('keyup', function(event){
  if(event.keyCode === 27){
    closeModal();
  }
});
/* Open Modal */
function openModal(modal){
  document.querySelectorAll('#overlay > *').forEach(function(modal){
    modal.classList.remove('show');
  });
  document.querySelector('#overlay').classList.add('show');
  document.querySelector(modal).classList.add('show');
}
/* Pop-up listeners */

document.querySelector('.profile_wrapper').addEventListener('click', function(event){
  event.preventDefault();
  openModal('#login-pop');
});
document.querySelector('.top-bar .icon-profile').addEventListener('click', function(event){
  event.preventDefault();
  openModal('#login-pop');
});

document.querySelector('.exit_wrapper').addEventListener('click', function(event){
  event.preventDefault();
  openModal('#quit-pop');
});
document.querySelector('.top-bar .icon-quit').addEventListener('click',function(event){
  event.preventDefault();
  openModal('#quit-pop');
});

document.getElementById('managerPhoto').addEventListener('click', function(event){
  event.preventDefault();
  openModal('#message-pop');
});
/* Chart*/
const ctx = document.getElementById('myChart').getContext('2d');
const chart = new Chart(ctx, {
  // 1
  type: 'bar',
  data: {
    // 2
    labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
    // 3
    datasets: [{
      // 4
      label: 'Signups',
      // 5
      backgroundColor: '#8DBEC8',
      borderColor: '#8DBEC8',
      // 6
      data: [ 52, 51, 41, 94, 26, 6, 72, 9, 21, 88 ],
    },
    {
      label: 'FTD',
      backgroundColor: '#F29E4E',
      borderColor: '#F29E4E',
      data: [ 6, 72, 1, 0, 47, 11, 50, 44, 63, 76 ],
    },
    {
      label: 'Earned',
      backgroundColor: '#71B374',
      borderColor: '#71B374',
      data: [ 59, 49, 68, 90, 67, 41, 13, 38, 48, 48 ],
      // 7
      hidden: true,
    }]
  },
});