let product_tittle = document.querySelectorAll('.product-tittle');
let products = document.querySelectorAll('.product');
let products_list = document.querySelector('#products-list');
let total_amount = document.getElementById('total-amount');
let amount = 0;

// list creating
let createList = (item) => {
    let div = document.createElement('div');
    let div1 = document.createElement('div');
    let div2 = document.createElement('div');
    let div3 = document.createElement('div');
    let btn = document.createElement('button');

    div.className = "row";
    div1.className = 'col-4 mt-1 pt-2 pb-1 bg-white';
    div2.className = 'col-6 mt-1 pt-2 pb-1 bg-white';
    div3.className = 'col-2 mt-1 pt-2 pb-1 bg-white';

    btn.className = 'btn btn-danger btn-sm remove';
    btn.setAttribute('onclick',`removeProduct(this.parentElement)`);
    btn.innerText = 'Remove';

    div1.appendChild(btn);
    div.appendChild(div1);

    div2.innerText = item.children[0].innerText;
    div.appendChild(div2)

    let usd = parseInt(item.children[1].innerText);
    div3.innerText = usd;
    div.appendChild(div3);

    products_list.appendChild(div);
    return usd;
}

// add to cart
products.forEach( (product) =>{
    let add_btn = product.querySelector('button[type="button"]');
    add_btn.addEventListener('click', (event) => {
        product_div = product.children[1];
        let button_tsk = product_div.querySelector('button');
        button_tsk.innerText = "Added";
        button_tsk.disabled = true;
        amount += createList(product_div);
        total_amount.innerHTML = amount;
    });
});

// remove from cart
let removeProduct = (ele) => {
    elements = ele.parentElement;
    amount -= parseInt(elements.children[2].innerText)
    product_tittle.forEach((ele) => {
        if (ele.innerText === elements.children[1].innerText){
            let button_tsk = ele.parentElement.querySelector('button');
            button_tsk.disabled = false;
            button_tsk.innerHTML = 'Add to Cart';
        }
    });
    total_amount.innerHTML = amount;
    elements.remove();
}
