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



// vent handlrs

form.onsubmit = handleFormSubmit;
textarea.oninput = handleTextChange;

async function handleFormSubmit(e) {
    e.preventDefault();
    disabled()

}