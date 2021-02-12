const menu = () => {
  const menuContainer = document.createElement('div');
  menuContainer.className = 'row bg-dark mx-auto';
  const item1 = document.createElement('div');
  item1.className = 'col-5 m-4 d-flex flex-column align-content-center border';
  const itemImage1 = document.createElement('img');
  itemImage1.setAttribute('src', './bgd.png');
  itemImage1.setAttribute('alt', 'Sample image');
  itemImage1.className = 'image-item mx-auto';
  const itemTitle = document.createElement('h2');
  itemTitle.className = 'text-white font-weight-bold mx-auto pt-3';
  itemTitle.textContent = 'Nkwobi';

  const itemDes = document.createElement('p');
  itemDes.className = 'text-white font-weight-bold mx-auto pt-3';
  itemDes.textContent = 'Red oil, Oil bean, Cow head, Cow leg';
  item1.appendChild(itemImage1);
  item1.appendChild(itemTitle);
  item1.appendChild(itemDes);
  menuContainer.appendChild(item1);

  const item2 = document.createElement('div');
  item2.className = 'col-5 m-4 d-flex flex-column align-content-center border';
  const itemImage2 = document.createElement('img');
  itemImage2.setAttribute('src', './abacha.png');
  itemImage2.setAttribute('alt', 'Sample image');
  itemImage2.className = 'image-item mx-auto';
  const itemTitle1 = document.createElement('h2');
  itemTitle1.className = 'text-white font-weight-bold mx-auto pt-3';
  itemTitle1.textContent = 'Abacha';

  const itemDes1 = document.createElement('p');
  itemDes1.className = 'text-white font-weight-bold mx-auto pt-3';
  itemDes1.textContent = 'Red oil, Oil bean, Cow head, Cow leg';
  item2.appendChild(itemImage2);
  item2.appendChild(itemTitle1);
  item2.appendChild(itemDes1);
  menuContainer.appendChild(item2);

  const item3 = document.createElement('div');
  item3.className = 'col-5 border m-4 d-flex flex-column align-content-center';
  const itemImage3 = document.createElement('img');
  itemImage3.setAttribute('src', './egusi.jpeg');
  itemImage3.setAttribute('alt', 'Sample image');
  itemImage3.className = 'image-item mx-auto';
  const itemTitle2 = document.createElement('h2');
  itemTitle2.className = 'text-white font-weight-bold mx-auto pt-3';
  itemTitle2.textContent = 'Egusi';

  const itemDes2 = document.createElement('p');
  itemDes2.className = 'text-white font-weight-bold mx-auto pt-3';
  itemDes2.textContent = 'Red oil, Oil bean, Cow head, Cow leg';
  item3.appendChild(itemImage3);
  item3.appendChild(itemTitle2);
  item3.appendChild(itemDes2);
  menuContainer.appendChild(item3);

  const item4 = document.createElement('div');
  item4.className = 'col-5 border m-4 d-flex flex-column align-content-center';
  const itemImage4 = document.createElement('img');
  itemImage4.setAttribute('src', './moi-moi.jpeg');
  itemImage4.setAttribute('alt', 'Sample image');
  itemImage4.className = 'image-item mx-auto';
  const itemTitle3 = document.createElement('h2');
  itemTitle3.className = 'text-white font-weight-bold mx-auto pt-3';
  itemTitle3.textContent = 'Moi Moi';

  const itemDes3 = document.createElement('p');
  itemDes3.className = 'text-white font-weight-bold mx-auto pt-3';
  itemDes3.textContent = 'Red oil, Oil bean, Cow head, Cow leg';
  item4.appendChild(itemImage4);
  item4.appendChild(itemTitle3);
  item4.appendChild(itemDes3);
  menuContainer.appendChild(item4);

  const item5 = document.createElement('div');
  item5.className = 'col-5 border m-4 d-flex flex-column align-content-center';
  const itemImage5 = document.createElement('img');
  itemImage5.setAttribute('src', './nsala.jpg');
  itemImage5.setAttribute('alt', 'Sample image');
  itemImage5.className = 'image-item mx-auto';
  const itemTitle4 = document.createElement('h2');
  itemTitle4.className = 'text-white font-weight-bold mx-auto pt-3';
  itemTitle4.textContent = 'Nsala';

  const itemDes4 = document.createElement('p');
  itemDes4.className = 'text-white font-weight-bold mx-auto pt-3';
  itemDes4.textContent = 'Red oil, Oil bean, Cow head, Cow leg';
  item5.appendChild(itemImage5);
  item5.appendChild(itemTitle4);
  item5.appendChild(itemDes4);
  menuContainer.appendChild(item5);

  const item6 = document.createElement('div');
  item6.className = 'col-5 border m-4 d-flex flex-column align-content-center';
  const itemImage6 = document.createElement('img');
  itemImage6.setAttribute('src', './ukwa.jpeg');
  itemImage6.setAttribute('alt', 'Sample image');
  itemImage6.className = 'image-item mx-auto';
  const itemTitle5 = document.createElement('h2');
  itemTitle5.className = 'text-white font-weight-bold mx-auto pt-3';
  itemTitle5.textContent = 'Ukwa';

  const itemDes5 = document.createElement('p');
  itemDes5.className = 'text-white font-weight-bold mx-auto pt-3';
  itemDes5.textContent = 'Red oil, Oil bean, Cow head, Cow leg';
  item6.appendChild(itemImage6);
  item6.appendChild(itemTitle5);
  item6.appendChild(itemDes5);
  menuContainer.appendChild(item6);

  const viewMore = document.createElement('div');
  viewMore.className = 'w-50 border mx-auto';
  const h6 = document.createElement('h6');
  h6.className = 'w-50 pt-3 mx-auto text-white';
  h6.innerHTML = 'See more <span><i class="fas fa-arrow-right text-white pt-1"></i></span>';
  viewMore.appendChild(h6);
  menuContainer.appendChild(viewMore);

  return menuContainer;
};

export default menu;
