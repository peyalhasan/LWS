let form = document.getElementById("form");
let textarea = document.getElementById("textarea");
let button = document.getElementById("button");
let loadingMessage = document.getElementById("loading");
let errorMessage = document.getElementById("error");
let successMessage = document.getElementById("success");


function hide(el){
    el.style.display = 'none';
}

function show(el){
    el.style.display = '';
}

function enable(el){
    el.disabled = false;
}

function disabled(el){
    el.disabled = true;
}



// Event handlrs

form.onsubmit = handleFormSubmit;
textarea.oninput = handleTextChange;

async function handleFormSubmit(e) {
    e.preventDefault();
    disabled(textarea)
    disabled(button)
    show(loadingMessage)
    hide(errorMessage);
    try{
        await submitForm(textarea.value);
        show(successMessage)
        hide(form)
    }catch(err){
        show(errorMessage);
        errorMessage.textContent = err.message;
    }finally{
        hide(loadingMessage)
        enable(textarea)
        enable(button)
    }

}

// Input  

function handleTextChange(){
    if(textarea.value.length === 0){
        disabled(button)
    }else{
        enable(button)
    }
}

// Submit Form 

function submitForm(answer){
    // Pretend it's hitting the network
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            if( answer.toLowerCase() === 'dhaka' ){
                resolve();
            }else{
                reject(new Error("Good guess but a wrong answer. Try again!") )
            }
        }, 3000)
    })
}