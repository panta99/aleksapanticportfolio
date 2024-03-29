ispisMenija();
skillsIspis()

//Dinamicko ispisivanje menija
function ispisMenija(){
let meni = document.getElementById("mainNav");

let meniispis = `<div class="container">
                    <a class="navbar-brand" href="#page-top"><h1>A.Pantic</h1></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i class="fas fa-bars ms-1"></i>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav text-uppercase ms-auto py-4 py-lg-0">`;

nizLinkova = ["aboutme","services","skills","projects","contact"];
nizMeni = ["About me","Services","Skills","Projects","Contact"];

for(let i=0;i<nizLinkova.length;i++){
    meniispis += `<li class="nav-item ${nizLinkova[i]}"><a class="nav-link bojamenija" href="#${nizLinkova[i]}">${nizMeni[i]}</a></li>`
}
meniispis += `</ul>
        </div>
    </div>`;

meni.innerHTML = meniispis;
}
//Promena boje menija na scroll

$(window).scroll(function(){

    var motaj = $(this).scrollTop();

    if(motaj > 50) {

    $('.menu').addClass('bojanavigacije');

    } else {
        
    $('.menu').removeClass('bojanavigacije');

    }
});

//Aktivni link na skrol

let sekcije = document.querySelectorAll("section");
let navLi = document.querySelectorAll("#navbarResponsive ul li");

window.addEventListener("scroll", ()=>{
    let trenutna = "";
    sekcije.forEach( sekcija => {
        let vrhSekcije = sekcija.offsetTop;
        let sekcijaVisina = sekcija.clientHeight;
        if(scrollY >= (vrhSekcije - sekcijaVisina/3)){
            trenutna = sekcija.getAttribute("id");
        }
    })
    navLi.forEach(li =>{
        li.classList.remove("active");
        if(li.classList.contains(trenutna)){
            li.classList.add("active");
        }
    })
})

//Ispisivanje teksta u headeru
let i=0;
let text ="Welcome To My Portfolio";
function ispisporuke(){
    if(i<text.length){
        document.getElementById("welcomep").innerHTML += text.charAt(i);
        i++;
        setTimeout(ispisporuke,100);
    }
}

ispisporuke();

//Dinamicko ispisivanje services sekcije

let usluge=document.querySelector(".usluge");

 services = [
    {
        "klasa":"services1",
        "naziv":"Web design",
        "ikonica":"fas fa-globe",
        "opis":"I'm passionate about making beautiful and functional websites for every client. My specialty is on working with you to develop a website strategy so that your website not only looks great, but works great too."
    },
    {
        "klasa":"services2",
        "naziv":"SEO optimization",
        "ikonica":"fas fa-search",
        "opis":"Having a professional website created is the first step to online success, but just because you have a website doesn't mean anyone will find it. I can help your website get found in the search engines."
    },
    {
        "klasa":"services3",
        "naziv":"Responsive design",
        "ikonica":"fas fa-tablet-alt",
        "opis":"As the continuing trend in website development, designing websites for smartphones, tablets and mobile devices as a priority over desktop development, shows no sign of slowing, I can make your site designed for all resolution."
    },
 ];

ispisServices(services);

 function ispisServices(services){
     let html="";
     for(service of services){
         html+=`<div class="col-md-3 usluga mt-5 ne-prikazuj ${service.klasa}">
         <h3 class="mt-5 fw-bold">${service.naziv}</h3>
         <p><i class="${service.ikonica} ikonica"></i></p>
         <p class="mt-5  mb-5">${service.opis}</p>
     </div>`
     }
     usluge.innerHTML=html;
 }

//Dinamicki ispis skill liste


function skillsIspis(){
    let skills = document.getElementById("skills1");
    let ispis="";

    let nizNaziv =["HTML5","CSS3","JAVASCRIPT","BOOTSTRAP","MS SQL"];
    let idNaziv=["prvis","drugis","trecis","cetrvrtis","petis"];
    for(let i=0; i < nizNaziv.length; i++){
        ispis += ` <li>
                    <h3 class="fw-bold">${nizNaziv[i]}</h3><span class="linija"><span  id="${idNaziv[i]}"  class=""></span></span>
                    </li>`
                    
    }
    skills.innerHTML = ispis;
}

//Povajljivanje strelice za povratak na vrh, na scrool
let strelica = document.querySelector(".strelica-vrh");

window.addEventListener("scroll", () =>{
    if(window.scrollY > 100){
        strelica.classList.add("aktivna");
    }
    else{
        strelica.classList.remove("aktivna");
    }
})

//Animacija skills bara na scroll
let sekcije1 = document.querySelectorAll("section");
let brojac1 = 0;

window.addEventListener("scroll", ()=>{
    let trenutna = "";
    
    sekcije1.forEach( sekcija => {
        let vrhSekcije1 = sekcija.offsetTop;
        let sekcijaVisina1 = sekcija.clientHeight;
        if(scrollY >= (vrhSekcije1 - sekcijaVisina1/3)){
            trenutna = sekcija.getAttribute("id");   
        }
    })
    if((trenutna == "skills") && (brojac1 == 0)){
        document.getElementById("prvis").classList.add("html5");
        document.getElementById("drugis").classList.add("css3");
        document.getElementById("trecis").classList.add("javascript");
        document.getElementById("cetrvrtis").classList.add("bootstrap");
        document.getElementById("petis").classList.add("mssql");
        brojac1++;
    }
   
});
//Dinamicki ispis projekata

projects = [
    {
       "id":"projekti1",
       "slika":"project1.jpg",
       "nazivProjekta":"Gunsmith Store",
       "tehnologije":"HTML, CSS, Bootstrap, JavaScript, JQuery",
       "link":"https://panta99.github.io/gunsmith/index.html"
    },
    {
       "id":"projekti2",
       "slika":"project2.jpg",
       "nazivProjekta":"Renta a car site",
       "tehnologije":"HTML, CSS, JavaScript, Bootstrap",
       "link":"#"
    },
    {
       "id":"projekti3",
       "slika":"project3.jpg",
       "nazivProjekta":"Shoping Site",
       "tehnologije":"HTML, CSS, JavaScript, Bootstrap",
       "link":"#"
    }
];

var projekatIspis=document.querySelector("#projekt");
projektiIspis(projects);
function projektiIspis(projects){
   let html="";
    for(projekat of projects){
        html+=`<div  id="${projekat.id}" class="col-md-4 ne-prikazuj">
                <div class="card text-center">
                    <img src="assets/img/${projekat.slika}" class="card-img-top" alt="projectphoto" />
                    <div class="card-body">
                        <h5 class="card-title fw-bold">${projekat.nazivProjekta}</h5>
                        <p>${projekat.tehnologije}</p>
                        <a href="${projekat.link}">VISIT SITE</a>
                    </div>
                </div>
            </div>`
    }
    projekatIspis.innerHTML=html;
}
//Pojava projekat i services elemenata na scroll
let sekcije2 = document.querySelectorAll("section");
let brojac2 = 0;
let brojac3 = 0;

window.addEventListener("scroll", ()=>{
    let trenutna = "";
    function dodelaprojekta2(){
        document.querySelector("#projekti2").classList.add("pojavljivanje");
    }
    function dodelaprojekta3(){
        document.querySelector("#projekti3").classList.add("pojavljivanje");
    }
    function dodelaservices2(){
        document.querySelector(".services2").classList.add("pojavljivanje");
    }
    function dodelaservices3(){
        document.querySelector(".services3").classList.add("pojavljivanje");
    }
    sekcije2.forEach( sekcija => {
        let vrhSekcije1 = sekcija.offsetTop;
        let sekcijaVisina1 = sekcija.clientHeight;
        if(scrollY >= (vrhSekcije1 - sekcijaVisina1/3)){
            trenutna = sekcija.getAttribute("id");   
        }
    })
    if((trenutna == "projects") && (brojac2 == 0)){
        document.querySelector("#projekti1").classList.add("pojavljivanje");
        setTimeout(dodelaprojekta2,700);
        setTimeout(dodelaprojekta3,1400);
        brojac2++;
    }
    else if((trenutna == "services") && (brojac3 == 0)){
        document.querySelector(".services1").classList.add("pojavljivanje");
        setTimeout(dodelaservices2,700);
        setTimeout(dodelaservices3,1400);
        brojac3++;
    }
   
})

//Validacija forme
var tacnostForme = false;
$(document).ready(function(){
    $("#posaljiPodatke").click(proveriFormu);
    $("#ime").blur(proveriIme);
    $("#prezime").blur(proveriPrezime);
    $("#mejl").blur(proveriMejl);
    $("#biraj").blur(proveriOdabir);
    $("#txtArea").blur(proveriPoruku);
    
})

function pokaziGresku(promenljiva, izraz, idPoruke,greska){
    if(promenljiva=="")
    {
        idPoruke.textContent="You can't leave the field blank";
        tacnostForme = false;
        idPoruke.style.visibility = "visible";
    }
    else if (!izraz.test(promenljiva)){
        idPoruke.textContent=greska;
        tacnostForme = false;
        idPoruke.style.visibility = "visible";
    }

    else {
        idPoruke.style.visibility = "hidden";
        tacnostForme = true;
    }

}
function proveriIme(){
    var ime = document.getElementById("ime").value;
    var imeGr = document.getElementById("greskaNaImenu");
    var greskaIme = "Name must begin with capital letter";
    var regularniIme = /^[A-ZČĆŠĐŽ][a-zčćžđš]{2,15}(\s[A-ZČĆŠĐŽ][a-zčćžđš]{2,15}){0,1}$/;
    pokaziGresku(ime, regularniIme, imeGr,greskaIme);
}
function proveriPrezime(){
    var prezime = document.getElementById("prezime").value;
    var prezimeGr = document.getElementById("greskaNaPrezimenu");
    var greskaPrezime ="Last name must begin with capital letter";
    var regularniPrezime = /^[A-ZČĆŠĐŽ][a-zčćžđš]{2,15}(\s[A-ZČĆŠĐŽ][a-zčćžđš]{2,15}){0,1}$/;
    pokaziGresku(prezime, regularniPrezime, prezimeGr,greskaPrezime);
}
function proveriMejl(){
    var mejl = document.getElementById("mejl").value;
    var mejlGr = document.getElementById("greskaNaMejlu");
    var greskamejl = "Mail in wrong format, example : example@example.example";
    var regularniMejl = /^[a-zčćžđš][a-z\d\-\.\wčćžđš]+\@[a-z]+(\.[a-z]{2,12}){1,2}$/;
    pokaziGresku(mejl, regularniMejl, mejlGr,greskamejl);
}
function proveriOdabir(){
    var izbor = document.getElementById("biraj").value;
    if(izbor == "0"){
        tacnostForme = false;
        document.getElementById("greskaNaIzboru").style.visibility = "visible";
    }

    else{
        document.getElementById("greskaNaIzboru").style.visibility = "hidden";
        tacnostForme = true;
    }
}
function proveriPoruku(){
    var message = document.getElementById("txtArea").value;
    var tekstPorukaGr = document.getElementById("greskaNaTekstPoruka");
    var regularniMessage = /^[A-z\.\,\s\w\d\t\nčćžđš\/\@\?]+$/
    var greskaPoruka ="Message must contain only letters";
    pokaziGresku(message, regularniMessage, tekstPorukaGr,greskaPoruka);
}
function proveriFormu(e){
    e.preventDefault();

    proveriIme();
    proveriPrezime();
    proveriMejl();
    proveriOdabir();
    proveriPoruku();

    if(tacnostForme == true){
        document.getElementById("nijeGreska").style.visibility = "visible";
    }

    else{
        document.getElementById("nijeGreska").style.visibility = "hidden";
    }
}

