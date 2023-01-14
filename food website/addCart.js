const product = [{
        id: 0,
        image: "images/dish-1.png",
        title: "Vegie Burger",
        price: 90,

    },
    {
        id: 1,
        image: "images/dish-2.png",
        title: "Crunchy Vegie",
        price: 130,

    },
    {
        id: 2,
        image: "images/dish-3.png",
        title: "Tandoori Chicken",
        price: 450,

    },
    {
        id: 3,
        image: "images/dish-4.png",
        title: "Hot Pizza",
        price: 280,

    },
    {
        id: 4,
        image: "images/dish-5.png",
        title: "Tempting Brownie",
        price: 180,

    },
    {
        id: 5,
        image: "images/dish-6.png",
        title: "Chicken KFC",
        price: 350,

    },
    {
        id: 6,
        image: "images/menu-1.jpg",
        title: "Wood Fire Special",
        price: 390,

    },
    {
        id: 7,
        image: "images/menu-2.jpg",
        title: "Special Burger",
        price: 130,

    },
    {
        id: 8,
        image: "images/menu-3.jpg",
        title: "Carpaccio Ittalian",
        price: 330,

    },
    {
        id: 9,
        image: "images/menu-4.jpg",
        title: "Waffle Creamy",
        price: 240,

    },
    {
        id: 10,
        image: "images/menu-5.jpg",
        title: "Chocolatey Pan Cake",
        price: 310,

    },
    {
        id: 11,
        image: "images/menu-6.jpg",
        title: "Tempting Cup cake",
        price: 110,

    },
    {
        id: 12,
        image: "images/menu-7.jpg",
        title: "Mocktails",
        price: 150,

    },
    {
        id: 13,
        image: "images/menu-8.jpg",
        title: "Fresh Oats Meal",
        price: 240,

    },
    {
        id: 14,
        image: "images/menu-9.jpg",
        title: "Orange Juice",
        price: 140,

    },


];



const categories = [...new Set(product.map((item) => { return item }))]
let i = 0;
document.getElementById('root').innerHTML = categories.map((item) => {
    var { image, title, price } = item;
    return (
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>` +
        "<button onclick='addtocart(" + (i++) + ")'>Add to cart</button>" +
        `</div>
        </div>`
    )
}).join('')

var cart = [];

function addtocart(a) {
    cart.push({...categories[a] });
    displaycart();
}

function delElement(a) {
    cart.splice(a, 1);
    displaycart();
}

function displaycart() {
    let j = 0;
    total = 0;
    document.getElementById('cartItem').innerHTML = "Your cart is empty";
    document.getElementById("total").innerHTML = "$ " + 0 + ".00";



    document.getElementById("cartItem").innerHTML = cart.map((items) => {
        var { image, title, price } = items;
        total = total + price;
        document.getElementById("total").innerHTML = "$ " + total + ".00";
        return (
            `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>` +
            "<i class='fa-solid fa-trash' onclick='delElement(" + (j++) + ")'></i></div>"
        );
    }).join('');
}