burger = document.querySelector('.burger')
nbar = document.querySelector('.nbar')
rnav = document.querySelector('.rnav')
nlist = document.querySelector('.nlist')
burger.addEventListener('click', ()=>{
    rnav.classList.toggle('vclass');
    nlist.classList.toggle('vclass');
    nbar.classList.toggle('hnav');
});
