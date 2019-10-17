const otsikko = document.querySelector('h1');
console.log(otsikko);
console.log(otsikko.innerText);

const kappaleet = document.querySelectorAll('p');
kappaleet.forEach(para => {
    console.log(para.innerText);
    para.innerText += "testi";   
});

console.log('tyhja');

//when selecting by class, remember to add the point
const virhe = document.querySelector('.error');
console.log(virhe.innerText);

//and when selecting by id, remember #!
const heippa = document.querySelector('#tervehdys');
heippa.innerText = "hei maailma";
console.log(heippa.innerText);

const tokaVirhe = document.querySelector('div.error');
console.log(tokaVirhe);

//getting and setting and attribute
const link = document.querySelector('a');
console.log(link.getAttribute('href'));
link.setAttribute("href","https://www.thenetninja.co.uk/");
link.innerText = 'The Net Ninja Website';
console.log(link.getAttribute('href'));

//changing styles
const title = document.querySelector('h1');
title.style.color = 'blue';
title.style.margin = '50px';

//NodeElement.children palauttaa HTML Collectionin, jolla ei ole
//forEach metodia, eli muunnetaan HTML Collection ensin listaksi
const vanhempi = document.querySelector('.lista');
Array.from(vanhempi.children).forEach(child => {
    if(child.textContent.includes('error')){
        child.setAttribute('class', 'virhe');
    }
    if(child.includes('success')){
        child.classList.add('success');
    }
});
