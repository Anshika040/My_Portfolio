const form=document.querySelector("form"),
    nextBtn=form.querySelector(".nextBtn"),
    allInput=form.querySelector(".first_input");


nextBtn.addEventListener("click",()=>{
    allInput.forEach(input =>{
        if(input.value !=  ""){
            form.classList.add('setActive');
        }
        else{
            form.classList.remove('secActive');
            alert("Input is Empty")
        }
    })
})