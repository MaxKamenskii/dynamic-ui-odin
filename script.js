console.log("script is working")
const dropDownButton = document.getElementById('dropDownButton')
const dropDownList = document.getElementById('dropDownList')
const dropDownImg = document.getElementById('dropDownImg')



dropDownButton.addEventListener('click', ()=> {
    toggleVisibility(dropDownList)
    // dropDownImg.src = './assets/dropuparrow.svg'
    toggleImgSource()
})

function toggleVisibility(element){
    if(element.classList.contains("visible")){
        element.classList.remove('visible')
    } else {
        element.classList.add('visible')
    }
}

function toggleImgSource() {
    if (dropDownImg.src.endsWith("dropdownarrow.svg")){
        console.log("src is right")
        console.log(dropDownImg.src)
        dropDownImg.src = "./assets/dropuparrow.svg";
    } else {
        dropDownImg.src = "./assets/dropdownarrow.svg";
    }
}


const prevButton = document.querySelector('.prev')
const nextButton = document.querySelector('.next')

let slidesIndex = 1;
function showSlides(n){
    let slides = document.getElementsByClassName('imgDiv')
    if (n > slides.length){
        slidesIndex = 1;
    }
    if(n < 1){
        slidesIndex = slides.length
    }
    for(const slide of slides){
        slide.style.display = "none"
    }

    slides[slidesIndex - 1].style.display = "block"
    
    // console.log(slides[n])
}
console.log(`Deafult slide is: ${slidesIndex}`)
showSlides(slidesIndex)

function plusSlides(){
    slidesIndex = slidesIndex + 1;

    console.log(slidesIndex)
    showSlides(slidesIndex)
}
function minusSlides(){
    slidesIndex = slidesIndex - 1;
    console.log(slidesIndex)
    showSlides(slidesIndex)
}

prevButton.addEventListener('click', ()=>{
    console.log("button is working")
    minusSlides()
})
nextButton.addEventListener('click', ()=>{
    console.log("button is working")
    plusSlides()
})

function currentSlide(n) {
  showSlides(slidesIndex = n);
}