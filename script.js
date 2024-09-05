// navigation menu
var menu=document.querySelector("#menu")
var menulist=document.querySelector(".ul-list")

menu.addEventListener("click",()=>{
    menulist.classList.toggle("menuactie")
})
// /* Categories */

var catgory=[
    {
        picer:"https://angular.pixelstrap.net/zomo/assets/images/product/p-1.png",
        picername:"pizza"
    },
    {
        picer:"https://angular.pixelstrap.net/zomo/assets/images/product/p-2.png",
        picername:"pizza"
    },
    {
        picer:"https://angular.pixelstrap.net/zomo/assets/images/product/p-3.png",
        picername:"pizza"
    },
    {
        picer:"https://angular.pixelstrap.net/zomo/assets/images/product/p-5.png",
        picername:"pizza"
    },
   
   
]

function functioncolling() {
    const container = document.getElementById('pccer');
    container.innerHTML = catgory.map(product => `
           <div class="col-lg-3 col-md-6 col-12">
                        <div class="cart">
                            <img src="${product.picer}" alt="" class="img-fluid" width="120">
                            <h5 class="text-center">${product.picername}</h5>
                        </div>
                       </div>
    `).join('');
}

functioncolling()


// // Today’s Deal 
const products =[
    { id: 1, 
        title: "Poultry Palace", 
        image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcReExOMvOFguIAkletWZwTHMg6yoX3uD2kcB7cJfJFHHfyldUtn",
         description: "Description of Product 1",
        price:"Rs40" },
    { id: 2, 
        title: "Ribeye Junction", 
        image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRKG_o4HJfcQKzP9fz9Iy9Nkmfhnoy9hVjM-6b-m5u_5dYeesQz", 
        description: "Description of Product 2",
        price:"Rs80" },
    { id: 3,
         title: "The Grill Master's...", 
         image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR_JwbqOe83DTR7raoNyxroVJlTJO0-XK-fZAUTl1XHvtklIizE", 
         description: "Description of Product 3",
         price:"Rs35" },
    { id: 4, 
        title: "Cozy Cuppa Cafe", 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnnPPAM4FMPPm1INz9-X14wihbvmtiJR3CPHIcCsxhYlaU3Cu8", 
        description: "Description of Product 3",
        price:"Rs20" },
    { id: 5, 
        title: "Mocha Magic Cafe",
         image: "https://cdn.dotpe.in/longtail/store-items/8371874/RumTOgLA.jpeg",
          description: "Description of Product 3" ,
          price:"Rs50"},
    { id: 6, 
        title: "Latte Lounge", 
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/a946353ba5e69132bfd4d6c4b6a48b0e", description: "Description of Product 3",
        price:"Rs80" },
    { id: 7, 
        title: "The Burger Barn",
         image: "https://mexico.elborracho.com/wp-content/uploads/2023/12/AdobeStock_192574343-300x200.jpeg",
          description: "Description of Product 3",
          price:"Rs100" },
    { id: 8,
         title: "Wing Master",
          image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSxC7oiDTcn683c0JGgksjbkSuId5Lp8NXyhDXzrWMMLcTLBeLD", 
          description: "Description of Product 3",
          price:"Rs140" },
    { id: 9,
         title: "Lettuce Eat Bistro",
          image: "https://northeasthut.in/wp-content/uploads/2022/12/nona-ilisha1.jpg",
           description: "Description of Product 3" ,
           price:"Rs120"},
    { id: 10, 
        title: "Take It Cheesy",
         image: "https://hogr-website-cms-media.s3.ap-south-1.amazonaws.com/restaurant/banners/ChIJgb6s0JoUrjsRrAfxGzvrFWw_6540a9466df936.91726297.jpg", 
         description: "Description of Product 3",
         price:"Rs90" },
    { id: 11,
         title: "bajji", 
         image: "https://www.bigbasket.com/media/uploads/recipe/w-l/1810_1_1.jpg",
          description: "Description of Product 3" ,
          price:"Rs60"},
    { id: 12, 
        title: "masala vadai", 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjcMkMQcUtLsCVTHjSr1UaYBO4ovA38V48KQ&s",
         description: "Description of Product 3",
         price:"Rs60" },
];

// Function to generate product cards
function renderProducts() {
    const container = document.getElementById('product-container');
    container.innerHTML = products.map(product => `
            <div class="col-lg-3 col-md-6 col-12 my-3">
                          
                               <div class="card product-card text-center" data-id="${product.id}" id="card">
                            <img src="${product.image}" alt="" class="img-fluid food-img" id="product_img">
                                <div class="cart-body">
                                    <h4><strong class="food-title">${product.title}</strong></h4>
                                    <h5><strong class="food-price">${product.price}</strong></h5>
                                </div>
                                <div class="">• New... 3.2 km 25 min</div>
                                <button class=" btn btn-warning text-light my-2" id="cartselect">Add to cart</button>

                            </div>
                        </div>
    `).join('');
}

// Function to handle modal pop-up
function handleModal() {
    $('#productModal').on('show.bs.modal', function (event) {
        const button = $(event.relatedTarget); // Button that triggered the modal
        const card = button.closest('.card'); // Get the closest card
        const productId = card.data('id'); // Get the product ID from data-id attribute
        
        // Find the product from the array
        const product = products.find(p => p.id === productId);

        const modal = $(this);
        modal.find('.modal-title').text(product.title);
        modal.find('#modal-image').attr('src', product.image);
        modal.find('#modal-description').text(product.description);
    });
}

// Initialize products and modal
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    handleModal();
});


const productss = [
    { iD: 1, title: "Nooldes",
     image: "https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&w=600", 
     description: "Description of Product 1",
     price:"Rs150"
     },
    { iD: 2, title: "onion pokoda",
     image: "https://plus.unsplash.com/premium_photo-1670740967011-86730910a2e5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGZvb2R8ZW58MHx8MHx8fDA%3D", 
     description: "Description of Product 1",
     price:"Rs50"
     },
    { iD: 3, title: "Chicken Curry",
     image: "https://images.pexels.com/photos/2313686/pexels-photo-2313686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
     description: "Description of Product 1",
     price:"Rs200"
     },
    { iD: 4, title: " Beef Meat",
     image: "https://images.pexels.com/photos/299347/pexels-photo-299347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
     description: "Description of Product 1",
     price:"Rs75"
     },
    { iD: 5, title: "Beef curry",
     image: "https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load", 
     description: "Description of Product 1",
     price:"Rs150"
     },
    { iD: 6, title: "potato fry",
     image: "https://images.pexels.com/photos/273825/pexels-photo-273825.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load", 
     description: "Description of Product 1",
     price:"Rs40"
     },
    { iD: 7, title: "cake",
     image: "https://images.pexels.com/photos/248428/pexels-photo-248428.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load", 
     description: "Description of Product 1",
     price:"Rs35"
     },
    { iD: 8, title: "pasta",
     image: "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=600", 
     description: "Description of Product 1",
     price:"Rs120"
     },
    { iD: 9, title: "veg role",
     image: "https://images.pexels.com/photos/1059943/pexels-photo-1059943.jpeg?auto=compress&cs=tinysrgb&w=600", 
     description: "Description of Product 1",
     price:"Rs50"
     },
    { iD: 10, title: "fish fry",
     image: "https://images.pexels.com/photos/725991/pexels-photo-725991.jpeg?auto=compress&cs=tinysrgb&w=600", 
     description: "Description of Product 1",
     price:"Rs150"
     },
    { iD: 11, title: "bonda",
     image: "https://www.bigbasket.com/media/uploads/recipe/w-l/3098_2_1.jpg", 
     description: "Description of Product 1",
     price:"Rs30"
     },
    { iD: 12, title: "Sweet Chili Wings",
     image: "https://images.pexels.com/photos/12916900/pexels-photo-12916900.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load", 
     description: "Description of Product 1",
     price:"Rs200"
     },

];



        // Function to generate product cards
        function renderProduct() {
            const container = document.getElementById('productcontainer');
            container.innerHTML = productss.map(product => `
                      <div class="col-lg-3 col-md-6 col-12 my-3">
                          
                               <div class="card product-card text-center" data-id="${product.iD}" id="card">
                            <img src="${product.image}" alt="" class="img-fluid food-img" id="product_img">
                                <div class="cart-body">
                                    <h4><strong class="food-title">${product.title}</strong></h4>
                                    <h5><strong class="food-price">${product.price}</strong></h5>
                                </div>
                                <div class="">• New... 3.2 km 25 min</div>
                                <button class=" btn btn-warning text-light my-2" id="cartselect">Add to cart</button>
                            
                            </div>
                        </div>
            `).join('');
        }

        // Function to handle modal pop-up
        function handleModalprduct() {
            $('#productModal').on('show.bs.modal', function (event) {
                const button = $(event.relatedTarget); // Button that triggered the modal
                const card = button.closest('.card'); // Get the closest card
                const productId = card.data('id'); // Get the product ID from data-id attribute
                
                // Find the product from the array
                const product = productss.find(p => p.iD === productId);

                const modal = $(this);
                modal.find('.modal-title').text(product.title);
                modal.find('#modal-image').attr('src', product.image);
                modal.find('#modal-description').text(product.description);
                
            });
        }


        document.addEventListener('DOMContentLoaded', () => {
            renderProduct();
            handleModalprduct();
        });

        // addcart
        var addtocart=document.querySelector("#addtocart")
        var cartselect=document.querySelector(".addcart")
        var closecart=document.querySelector(".close")

        // cart add
        addtocart.addEventListener("click",()=>{
            cartselect.classList.add("addactive")
        })
        // cart clse
        closecart.addEventListener("click",()=>{
            cartselect.classList.remove("addactive")
        })

        // Initialize products and modal

document.addEventListener('DOMContentLoaded',loadFood);

function loadFood(){
  loadContent();

}

function loadContent(){
  //Remove Food Items  From Cart
  let btnRemove=document.querySelectorAll(".trans");
  btnRemove.forEach((btn)=>{
    btn.addEventListener('click',removeItem);
  });

  //Product Item Change Event
  let qtyElements=document.querySelectorAll('.cart-quantity');
  qtyElements.forEach((input)=>{
    input.addEventListener('change',changeQty);
  });

  //Product Cart
  
  let cartBtns=document.querySelectorAll('#cartselect');
  cartBtns.forEach((btn)=>{
    btn.addEventListener('click',addCart);
  });

  updateTotal();
}


//Remove Item
function removeItem(){
  if(confirm('Are Your Sure to Remove')){
    let title=this.parentElement.querySelector('.foodremove').innerHTML;
    itemList=itemList.filter(el=>el.title!=title);
    this.parentElement.remove();
    loadContent();
  }
}

//Change Quantity
function changeQty(){
  if(isNaN(this.value) || this.value<1){
    this.value=1;
  }
  loadContent();
}

let itemList=[];

//Add Cart
function addCart(){
 let food=this.parentElement;
 let title=food.querySelector('.food-title').innerHTML;
 let price=food.querySelector('.food-price').innerHTML;
 let imgSrc=food.querySelector('.food-img').src;
 //console.log(title,price,imgSrc);
 
 let newProduct={title,price,imgSrc}

 //Check Product already Exist in Cart
 if(itemList.find((el)=>el.title==newProduct.title)){
  alert("Product Already added in Cart");
  return;
 }else{
  itemList.push(newProduct);
 }


let newProductElement= createCartProduct(title,price,imgSrc);
let element=document.createElement('div');
element.innerHTML=newProductElement;
let cartBasket=document.querySelector('.cart-content');
cartBasket.append(element);
loadContent();
}


function createCartProduct(title,price,imgSrc){

  return `
   <div class="cart-box">
  <img src="${imgSrc}" class="cartimg">
  <div class="detail-box">
    <div class="cart-food-title">${title}</div>
    <div class="price-box">
      <div class="cart-price">${price}</div>
       <div class="cart-amt">${price}</div>
   </div>
    <input type="number" value="1" class="cart-quantity">
  </div>
  <ion-icon name="trash" class="cart-remove"></ion-icon>
</div>
  `;
}

function updateTotal()
{
  const cartItems=document.querySelectorAll('.cart-box');
  const totalValue=document.querySelector('.total-price');

  let total=0;

  cartItems.forEach(product=>{
    let priceElement=product.querySelector('.cart-price');
    let price=parseFloat(priceElement.innerHTML.replace("Rs",""));
    let qty=product.querySelector('.cart-quantity').value;
    total+=(price*qty);
    product.querySelector('.cart-amt').innerText="Rs."+(price*qty);

  });

  totalValue.innerHTML='Rs.'+total;


  // Add Product Count in Cart Icon

  const cartCount=document.querySelector('.cart-count');
  let count=itemList.length;
  cartCount.innerHTML=count;

  if(count==0){
    cartCount.style.display='none';
  }else{
    cartCount.style.display='block';
  }


}
        