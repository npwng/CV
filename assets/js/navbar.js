// navbarData.js
const navbarData = [
  { label: 'Home', link: 'index.html' },
  { label: 'About', link: 'about.html' },
  { label: 'CV', link: 'cv.html' },
  { label: 'Skills', link: 'skills.html' },
  { label: 'Contact', link: 'contact.html' },
  // Add more items as needed
];
// navbarGenerator.js
function generateNavbar(pageContainer) {
  const navbarContainer = document.createElement('header');
  navbarContainer.classList.add('navHeader');

  const navline = document.createElement('div');
  navline.id = 'navi';
  navline.classList.add('navline');

  // First item to be left aligned

  const link = document.createElement('a');
  link.href = navbarData[0].link;
  link.textContent = navbarData[0].label;
  navline.appendChild(link);
  navbarData.shift();

  // Main Content
  const navbarList = document.createElement('nav');
  navbarList.classList.add('navbar');
  navbarData.forEach(item => {
    const link = document.createElement('a');
    link.href = item.link;
    link.textContent = item.label;
    navbarList.appendChild(link);
  });
  navline.appendChild(navbarList);
  navbarContainer.appendChild(navline);

  // Padding
  const navPadding = document.createElement('div');
  navPadding.classList.add('navbarPading');
  navbarContainer.appendChild(navPadding);

  pageContainer.parentNode.replaceChild(navbarContainer, pageContainer);
}




$(document).ready(function () {
    var lastScrollTop = 0;

    $(window).scroll(function () {
      var scrollTop = $(this).scrollTop();

      if (scrollTop > lastScrollTop) {
        // Scrolling down, hide the navbar
        $("#navi").addClass("hidden");
      } else {
        // Scrolling up, show the navbar
        $("#navi").removeClass("hidden");
      }

      lastScrollTop = scrollTop;
    });
  });
