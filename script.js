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