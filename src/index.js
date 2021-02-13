import home from './JS/homePage';
import menu from './JS/menu';
import head from './JS/header';
import foot from './JS/footer';
import contact from './JS/contact';

const { div } = home();
const {
  headerContainer,
  homeLink, menuLink,
  contactLink,
} = head();
const content = document.querySelector('#content');
content.appendChild(headerContainer);
content.appendChild(div);

const menuPage = () => {
  content.innerHTML = '';
  content.appendChild(headerContainer);
  content.appendChild(menu());
  content.appendChild(foot());
};

const homePage = () => {
  content.innerHTML = '';
  content.appendChild(headerContainer);
  content.appendChild(div);
};

const contactPage = () => {
  content.innerHTML = '';
  content.appendChild(headerContainer);
  content.appendChild(contact());
  content.appendChild(foot());
};

homeLink.addEventListener('click', homePage);
menuLink.addEventListener('click', menuPage);
contactLink.addEventListener('click', contactPage);
