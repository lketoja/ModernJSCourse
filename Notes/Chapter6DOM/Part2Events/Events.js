const button = document.querySelector('button');
const ul = document.querySelector('ul');

//button.addEventListener('click', () => {
//    console.log('you clicked me');
//});

button.addEventListener('click', () => {
    //ul.innerHTML += '<li>something new</li>'
    const li = document.createElement('li');
    li.textContent = 'something new to do';
    //ul.append(li);
    ul.prepend(li);
});

//const items = document.querySelectorAll('li');
//items.forEach(item => {
//    item.addEventListener('click', e => {
//        e.stopPropagation(); 
//        e.target.style.textDecoration = 'line-through';
//    });
//})


ul.addEventListener('click', e => {
    //if we click the ul by mistake we don't wan't to remove it
    if(e.target.tagName == 'LI'){
        e.target.remove();
    }
})
 