const buyProduct = ()=>{
    const productName = document.getElementById('product-name');
    const product = productName.value ;

    const productPrice = document.getElementById('product-price');
    const price = productPrice.value;

    setProductInfo(product,price);
    cartContainer(product,price)
    productName.value = '';
    productPrice.value = '';

}

const getProductInfo=()=>{
    const cart = localStorage.getItem('cart');
    let shop ;
    if(cart){
        shop= JSON.parse(cart);
    }
    else{
        shop= {};
    } 
    return shop;   
}

const setProductInfo=(product,price)=>{
    const shop = getProductInfo();
    console.log(shop);
    //not understand
    shop[product,price]= product,price;
    
    const cartstring = JSON.stringify(shop);
    localStorage.setItem('cart',cartstring);
}

const cartContainer = (product,price)=>{
    const cart= document.getElementById('cart-container');
    const li = document.createElement('li');
    li.innerHTML = `
    <h2>Product:${product}</h2>
    <p>Price:${price}</p>
    `
    cart.appendChild(li);
}
const displayProduct=()=>{
   const info = getProductInfo();
   for (const [product,price] in info) {
    cartContainer(product,price);
   }
}
displayProduct();