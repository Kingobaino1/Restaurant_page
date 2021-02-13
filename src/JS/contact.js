const contact = () => {
  const contactUs = document.createElement('div');
  contactUs.className = 'contact';
  const contactElement = document.createElement('div');
  contactElement.className = 'w-50 mx-auto h-50 d-flex flex-column bg-dark';
  const address = document.createElement('p');
  address.textContent = 'Address: Road 1 House 4, Udoka Housing Estate, Awka, Nigeria';
  address.className = 'w-50 mx-auto text-white';
  const phone = document.createElement('p');
  phone.textContent = 'Tel: +2348100000000';
  phone.className = 'w-50 mx-auto text-white';
  contactElement.appendChild(address);
  contactElement.appendChild(phone);
  contactUs.appendChild(contactElement);
  return contactUs;
};

export default contact;
