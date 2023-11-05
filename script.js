let result = document.getElementById('result');
let input = document.getElementById('input');
let option = document.querySelector('#option');

let checkValidation = (value, re_ex) => {
    if(value.match(re_ex)){
        result.className = 'alert alert-success';
        result.innerHTML = `${value} is valid!`;
    } else if(value === '') {
        result.className = 'alert alert-warning';
        result.innerHTML = `Please input first!`;
    } else {
        result.className = 'alert alert-danger';
        result.innerHTML = `${value} is invalid!`;
    }
}

let check = () => {
    switch(option.value) {
        case 'mail': 
            regex = /^[\w-\.]+[\w]@([\w-]+\.)+[\w-]{2,5}$/;
            checkValidation(input.value, regex);
            break;
        case 'post':
            regex = /^\d{4}$/;
            checkValidation(input.value, regex);
            break;
        case 'phone':
            regex = /^(\+(?=88))?(88)?01\d{9}$/;
            checkValidation(input.value, regex);
            break;
        case 'nid':
            regex = /^\d{10}$/;
            checkValidation(input.value, regex);
            break;
        default: alert(`Please - Select - first!`);
    }
}