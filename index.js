let mainContainer = document.querySelector(".first-component");
let thankYouPage = document.querySelector(".second-component");
let rates = document.querySelectorAll(".btn");
let rateNumber = document.getElementsByClassName("rate-number")[0];


rates.forEach(rate=>{
    rate.addEventListener('click', ()=>{
        rateNumber.innerHTML = rate.innerHTML;
    })
})


 function handleSubmitBtn(){
    thankYouPage.classList.remove('hidden');
    mainContainer.style.display='none';
 }