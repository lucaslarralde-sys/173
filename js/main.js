
(function () {
  document.querySelectorAll('.gallery').forEach(gal => {
    const main = gal.querySelector('.main-photo img');
    const thumbs = [...gal.querySelectorAll('.thumbs img')];
    function setMain(src){ main.setAttribute('src', src); }
    if (!main.getAttribute('src') && thumbs[0]) setMain(thumbs[0].getAttribute('src'));
    thumbs.forEach(t => {
      t.addEventListener('mouseenter', ()=> setMain(t.getAttribute('src')));
      t.addEventListener('click', ()=> setMain(t.getAttribute('src')));
    });
  });
  const y=document.getElementById('y'); if(y) y.textContent=new Date().getFullYear();
})();
