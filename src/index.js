import home from './homePage';
import Logo from './images/bgd.png';
import menu from './menu.js';
import head from './header.js';
import foot from './footer.js';
import contact from './contact';

const { div } = home();
const { headerContainer,
        homeLink, menuLink,
        contactLink
      } = head();
const content = document.querySelector('#content');
content.appendChild(headerContainer);
content.appendChild(div);

function menuPage() {
  content.innerHTML = ''
  content.appendChild(headerContainer);
  content.appendChild(menu());
  content.appendChild(foot())
}

function homePage() {
  content.innerHTML = '';
  content.appendChild(headerContainer);
  content.appendChild(div);
}

function contactPage() {
  content.innerHTML = '';
  content.appendChild(headerContainer);
  content.appendChild(contact());
  content.appendChild(foot());
}

homeLink.addEventListener('click', homePage);
menuLink.addEventListener('click', menuPage);
contactLink.addEventListener('click', contactPage);
