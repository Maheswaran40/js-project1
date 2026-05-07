var products = [
  {
    id: 1,
    name: "samsung",
    prize: 9999,
    color: "red",
    image: "./Assets/images/samsung.png",
  },

  {
    id: 2,
    name: "vivo",
    prize: 19999,
    color: "gray",
    image: "./Assets/images/vivo.png",
  },
  {
    id: 3,
    name: "iphone",
    prize: 4999,
    color: "blue",
    image: "./Assets/images/iphone.png",
  },
  {
    id: 3,
    name: "iphone",
    prize: 49999,
    color: "blue",
    image: "./Assets/images/iphone.png",
  },
];

// show data into home page

function getData() {
  var data = "";
  products.map(
    (value, index) =>
      (data += `
        <div class="col-lg-4">
            <div class="card">
                <img src="${value.image}" width="100%" height="200px" alt="">
                <div class="card-body">
                    <span>name:${value.name}</span>
                    <span>price:${value.price}</span>
                    <button class="btn btn-primary" onclick="cartFun(${value.id})">cart</button>
                </div>
            </div>
        </div>
        `),
  );
  document.getElementById("showdata").innerHTML = data;
}
getData();

function searchFun(e) {
  e.preventDefault();
  var searchData = document.getElementById("searchInput").value;
  console.log("searchData", searchData);
  var data = "";
  products
    .filter(
      (value, index) =>
        value.name.toLowerCase() == searchData.trim().toLowerCase(),
    )
    .map(
      (value, index) =>
        (data += `<div class="col-lg-4">
            <div class="card">
                <img src="${value.image}" width="100%" height="200px" alt="">
                <div class="card-body">
                    <span>name:${value.name}</span>
                    <span>price:${value.price}</span>
                </div>
            </div>
        </div>`),
    );
  document.getElementById("searchdata").innerHTML = data;
}

//  cart function
var cart = [];
var totalamount = 0;
console.log("non function cart", cart);

function cartFun(proID) {
  var cartData = products.find((v) => v.id == proID);
  console.log("cartData", cartData);

  var existing = cart.find((value) => value.id == proID);

  if (!existing) {
    cart.push(cartData);
    cartData.quantity = 1;
    console.log("function cart", cart);
  } else {
    cartData.quantity++;
  }
  totalamount = cartData.price + totalamount;
  document.getElementById("amount").innerHTML = `total:${totalamount}`;
  storeData(cart);
}

// amount increase

function storeData(cartData) {
  var data = "";
  cartData.map(
    (value, index) =>
      (data += ` <tr>
              <td>
                <img src="${value.image}" alt="">
              </td>
              <td>${value.name}</td>
              <td>${value.price}</td>
              <td>${value.quantity}</td>
              <td><button class="btn btn-close" onclick="removeFun(${value.id})"></button></td>
            </tr>`),
  );
  document.getElementById("table-body").innerHTML = data;
}

// removeFun
function removeFun(proId) {
  console.log(proId);
  var remove = cart.find((value) => value.id == proId);
  if (remove.quantity > 1) {
    remove.quantity--;
    totalamount = totalamount - remove.price;
  } else {
    cart = cart.filter((value, index) => value.id !== proId);
    totalamount = totalamount - remove.price;
  }
  storeData(cart);
  document.getElementById("amount").innerHTML = `total:${totalamount}`;
}
