import home from './homePage';
import Logo from './images/bgd.png';
import menu from './menu.js';
import head from './header.js';

const { div } = home();
const { headerContainer, homeLink, menuLink, contactLink } = head();

const content = document.querySelector('#content');

content.appendChild(div);

function menuPage() {
  content.innerHTML = ''
  content.appendChild(headerContainer);
  content.appendChild(menu());
}
menuLink.href = addEventListener('click', menuPage)
