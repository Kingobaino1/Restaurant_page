const foot = () => {
  const foot = document.createElement('div');
  foot.className = 'bg-dark foot'
  const footer = document.createElement('ul');
  footer.className = 'd-flex justify-content-center mt-3'
  const footElementOne = document.createElement('li');
  footElementOne.innerHTML = 'CopyRight <span>&#169; 2021 Kingsley <a href="https://github.com/Kingobaino1"><i class="fab fa-github text-white"></i></a></span'
  footElementOne.className = 'text-white mt-3'
  footer.appendChild(footElementOne);
  foot.appendChild(footer);
  return foot;
}

export default foot;
