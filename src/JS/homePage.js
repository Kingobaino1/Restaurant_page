import '../style.css';
import foot from './footer';

const footer = foot();

const home = () => {
  const div = document.createElement('div');
  const advert = document.createElement('div');
  advert.className = 'mx-auto w-50 advert bg-dark';
  const text = document.createElement('h2');
  text.textContent = "Welcome to Kings' Restaurant";
  text.className = 'm-5 text-white';
  advert.appendChild(text);

  const description = document.createElement('h5');
  description.textContent = 'A home of good food(both local and international) and quality wine!';
  description.className = 'm-5 text-white';
  advert.appendChild(description);

  div.appendChild(advert);
  div.appendChild(footer);

  return { div };
};
export default home;
