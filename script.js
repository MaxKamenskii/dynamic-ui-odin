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

let slideIndex = 5;
function showSlides(n){
    let slides = document.getElementsByClassName('imgDiv')
    // for(const slide of slides){
    //     console.log(slide)
    // }
    slides[slideIndex - 1].style.display = "block"
    // console.log(slides[n])
}

showSlides(slideIndex)

function plusSlides(){
    let increment = slideIndex + 1;
    showSlides(increment)
}
function minusSlides(){
    let increment = slideIndex - 1;
    showSlides(increment)
}

prevButton.addEventListener('click', ()=>{
    console.log("button is working")
    minusSlides()
})
nextButton.addEventListener('click', ()=>{
    console.log("button is working")
    plusSlides()
})