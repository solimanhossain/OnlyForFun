let txt = false;
let px = 100;

function mouse() {
   txt = document.getElementById("fname").value ? true : false
}

document.getElementById("demo").onmouseover = () => {
    if (!txt) {
        document.getElementById("demo")
        .style.marginLeft = `${px}px`;
        px *= -1;
    }
};

function validateForm(){
    let my_form = document.forms['myForm'];
    let input_fname = my_form['fname'].value;
    if (!input_fname) return false;
    return true;
}


