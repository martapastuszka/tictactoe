const fields = document.querySelectorAll('.board__item');

fields.forEach(field =>{
    field.addEventListener('click', e=>{
        console.log(e);
        console.log(e.target.dataset);
    })
});