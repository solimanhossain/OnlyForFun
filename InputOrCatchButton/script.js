let id = document.getElementById('h3-id').innerHTML = 'TEST!';
// console.dir(id);

let txt;
function test() {
    if (document.getElementById("fname").value) {
        txt = true;
    } else {
        txt = false;
    }
}

let px = 100;
document.getElementById("demo").onmouseover = () => {
    if (!txt) {
        document.getElementById("demo")
        .style.marginLeft = `${px}px`;
        if(!px) {
            px = 100;
        } else {
            px = 0;
        }
    }
};

function validateForm(){
    let my_form = document.forms['myForm'];
    let input_fname = my_form['fname'].value;
    if (!input_fname) return false;
    return true;
}


