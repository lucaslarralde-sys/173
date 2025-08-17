
(function (){
  document.querySelectorAll('.gallery').forEach(g=>{
    const main=g.querySelector('.main img');
    const thumbs=[...g.querySelectorAll('.thumbs img')];
    function setMain(src){ main.src = src; }
    if(thumbs[0]) setMain(thumbs[0].src);
    thumbs.forEach(t=>{
      t.addEventListener('mouseenter',()=>setMain(t.src));
      t.addEventListener('click',()=>setMain(t.src));
    });
  });
  const y=document.getElementById('y'); if(y) y.textContent=new Date().getFullYear();
})();
