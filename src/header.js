const head = () => {
  const headerContainer = document.createElement('div');
  headerContainer.className = 'd-flex justify-content-between';
  const title = document.createElement('h3');
  title.className = 'text-secondary m-4';
  title.textContent = 'Kings Restaurant';
  headerContainer.appendChild(title);

  const links = document.createElement('ul');
  links.className = 'd-flex justify-content-between w-25 m-4';

  const home = document.createElement('li');
  home.classList.add('text-white');
  const homeLink = document.createElement('a');
  homeLink.className = 'text-white text-decoration-none';
  homeLink.href = '#'
  homeLink.textContent = 'Home'
  home.appendChild(homeLink);
  links.appendChild(home);

  const menu = document.createElement('li');
  menu.classList.add('text-white');
  const menuLink = document.createElement('a');
  menuLink.className = 'text-white text-decoration-none';
  menuLink.href = '#'
  menuLink.textContent = 'Menu';
  menu.appendChild(menuLink);
  links.appendChild(menu);

  const contact = document.createElement('li');
  contact.classList.add('text-white');
  const contactLink = document.createElement('a');
  contactLink.className = 'text-white text-decoration-none';
  contactLink.textContent = 'Contact'
  contact.appendChild(contactLink);
  links.appendChild(contact);
  headerContainer.appendChild(links);
  return { 
    headerContainer,
    homeLink,
    menuLink,
    contactLink
};
}

export default head;