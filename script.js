const viewMenuButton = document.querySelector(".viewmenu");
const reserveButton = document.querySelector(".reservebutton");
const homeSection = document.querySelector("#home");
const menuSection = document.querySelector("#menu");
const reserveSection = document.querySelector("#reserve");
const aboutSection = document.querySelector("#about");
const reviewSection = document.querySelector("#reviews");

const searchbar = document.querySelector("#searchbar");
const suggestionbox = document.querySelector(".suggestionbox");
const search = document.querySelector(".search");
const categories = document.querySelector("#categories");
const filters = document.querySelector("#filters");
const container = document.querySelector(".container");

const fooditems = [
    //  APPETIZERS

{
    name: "Cheese Rolls",
    category: "Appetizers",
    price: 229,
    rating: 4.4,
    bestSeller: true,
    image: "images/Appetizers/cheese rolls.jpg",
    time:35
},
{
    name: "Chilli Potatoes",
    category: "Appetizers",
    price: 199,
    rating: 4.5,
    bestSeller: false,
    image: "images/Appetizers/chilli potatoes.jpg",
    time:30
},
{
    name: "Crispy Corn",
    category: "Appetizers",
    price: 239,
    rating: 4.8,
    bestSeller: true,
    image: "images/Appetizers/crispy corn.jpg",
    time:26
},
{
    name: "Momos",
    category: "Appetizers",
    price: 189,
    rating: 4.7,
    bestSeller: false,
    image: "images/Appetizers/momos.jpg",
    time:29
},
{
    name: "Paneer Tikka",
    category: "Appetizers",
    price: 329,
    rating: 4.9,
    bestSeller: false,
    image: "images/Appetizers/paneer tikka.jpg",
    time:30
},
{
    name: "Spring Roll",
    category: "Appetizers",
    price: 219,
    rating: 4.6,
    bestSeller: false,
    image: "images/Appetizers/spring roll.jpg",
    time:30
},
{
    name: "Stuffed Mushroom Caps",
    category: "Appetizers",
    price: 299,
    rating: 4.4,
    bestSeller: false,
    image: "images/Appetizers/stuffed mushroom caps.jpg",
    time:40
},

//  BEVERAGES 

{
    name: "Cold Coffee",
    category: "Beverages",
    price: 189,
    rating: 4.9,
    bestSeller: true,
    image: "images/Beverages/cold coffee.jpg",
    time:15
},
{
    name: "Hot Chocolate",
    category: "Beverages",
    price: 219,
    rating: 4.8,
    bestSeller: false,
    image: "images/Beverages/hot chocolate.jpg",
    time:25
},
{
    name: "Iced Tea",
    category: "Beverages",
    price: 169,
    rating: 4.5,
    bestSeller: false,
    image: "images/Beverages/iced tea.jpg",
    time:15
},
{
    name: "Kulhad Masala Chai",
    category: "Beverages",
    price: 99,
    rating: 4.8,
    bestSeller: true,
    image: "images/Beverages/kulhad masala chai.jpg",
    time:20
},
{
    name: "Mango Smoothie",
    category: "Beverages",
    price: 229,
    rating: 4.7,
    bestSeller: false,
    image: "images/Beverages/mango smoothie.jpg",
    time:30
},
{
    name: "Virgin Mojito",
    category: "Beverages",
    price: 199,
    rating: 4.8,
    bestSeller: false,
    image: "images/Beverages/virgin mojito.jpg",
    time:15
},
{
    name: "Watermelon Cooler",
    category: "Beverages",
    price: 189,
    rating: 4.6,
    bestSeller: false,
    image: "images/Beverages/watermelon cooler.jpg",
    time:20
},

//  BURGERS 

{
    name: "Cheese Burst Burger",
    category: "Burgers",
    price: 269,
    rating: 4.8,
    bestSeller: false,
    image: "images/Burgers/cheese burst burger.jpg",
    time:30
},
{
    name: "Classic Veg Burger",
    category: "Burgers",
    price: 199,
    rating: 4.5,
    bestSeller: false,
    image: "images/Burgers/classic veg burger.jpg",
    time:20
},
{
    name: "Mushroom Veg Burger",
    category: "Burgers",
    price: 249,
    rating: 4.6,
    bestSeller: false,
    image: "images/Burgers/mushroom veg burger.jpg",
    time:35
},
{
    name: "Paneer Tikka Burger",
    category: "Burgers",
    price: 289,
    rating: 4.9,
    bestSeller: true,
    image: "images/Burgers/paneer tikka burger.jpg",
    time:30
},
{
    name: "Peri Peri Veg Burger",
    category: "Burgers",
    price: 259,
    rating: 4.7,
    bestSeller: false,
    image: "images/Burgers/peri peri veg burger.jpg",
    time:30
},

//  DESSERTS 

{
    name: "Cheesecake",
    category: "Desserts",
    price: 279,
    rating: 4.8,
    bestSeller: false,
    image: "images/Desserts/cheesecake.jpg",
    time:45
},
{
    name: "Choco Lava Cake",
    category: "Desserts",
    price: 229,
    rating: 4.9,
    bestSeller: true,
    image: "images/Desserts/choco lava cake.jpg",
    time:40
},
{
    name: "Chocolate Brownie",
    category: "Desserts",
    price: 249,
    rating: 4.8,
    bestSeller: false,
    image: "images/Desserts/chocolate brownie.jpg",
    time:49
},
{
    name: "Cookies & Cream Ice Cream",
    category: "Desserts",
    price: 189,
    rating: 4.5,
    bestSeller: false,
    image: "images/Desserts/cookies & cream ice cream.jpg",
    time:20
},
{
    name: "Gulab Jamun",
    category: "Desserts",
    price: 149,
    rating: 4.7,
    bestSeller: false,
    image: "images/Desserts/gulab jamun.jpg",
    time:35
},
{
    name: "Jalebi",
    category: "Desserts",
    price: 169,
    rating: 4.6,
    bestSeller: false,
    image: "images/Desserts/jalebi.jpg",
    time:40
},
{
    name: "Kheer",
    category: "Desserts",
    price: 179,
    rating: 4.4,
    bestSeller: true,
    image: "images/Desserts/kheer.jpg",
    time:50
},
{
    name: "Red Velvet Pastry",
    category: "Desserts",
    price: 239,
    rating: 4.7,
    bestSeller: false,
    image: "images/Desserts/red velvet pastry.jpg",
    time:30
},

//  NOODLES 

{
    name: "Chilli Garlic Noodles",
    category: "Noodles",
    price: 259,
    rating: 4.7,
    bestSeller: false,
    image: "images/Noodles/chilli garlic noodles.jpg",
    time:30
},
{
    name: "Hakka Noodles",
    category: "Noodles",
    price: 239,
    rating: 4.9,
    bestSeller: false,
    image: "images/Noodles/hakka noodles.jpg",
    time:25
},
{
    name: "Paneer Chilli Noodles",
    category: "Noodles",
    price: 289,
    rating: 4.8,
    bestSeller: true,
    image: "images/Noodles/paneer chilli noodles.jpg",
    time:35
},
{
    name: "Schezwan Noodles",
    category: "Noodles",
    price: 269,
    rating: 4.8,
    bestSeller: false,
    image: "images/Noodles/schezwan noodles.jpg",
    time:30
},
{
    name: "Veg Chow Mein",
    category: "Noodles",
    price: 249,
    rating: 4.6,
    bestSeller: false,
    image: "images/Noodles/veg chow mein.jpg",
    time:25
},

//  NORTH INDIAN 

{
    name: "Aaloo Paratha",
    category: "North Indian",
    price: 169,
    rating: 4.6,
    bestSeller: false,
    image: "images/North Indian/aaloo paratha.jpg",
    time:30
},
{
    name: "Butter Paneer Masala",
    category: "North Indian",
    price: 329,
    rating: 4.9,
    bestSeller: true,
    image: "images/North Indian/butter paneer masala.jpg",
    time:50
},
{
    name: "Dal Makhani",
    category: "North Indian",
    price: 289,
    rating: 4.8,
    bestSeller: false,
    image: "images/North Indian/dal makhani.jpg",
    time:40
},
{
    name: "Dal Tadka",
    category: "North Indian",
    price: 249,
    rating: 4.5,
    bestSeller: false,
    image: "images/North Indian/dal tadka.jpg",
    time:30
},
{
    name: "Dum Aaloo",
    category: "North Indian",
    price: 279,
    rating: 4.7,
    bestSeller: true,
    image: "imagesNorth Indian/dum aaloo.jpg",
    time:45
},
{
    name: "Garlic Naan",
    category: "North Indian",
    price: 99,
    rating: 4.8,
    bestSeller: true,
    image: "images/North Indian/garlic naan.jpg",
    time:30
},

//  PASTA 

{
    name: "Arrabbiata Pasta",
    category: "Pasta",
    price: 299,
    rating: 4.7,
    bestSeller: true,
    image: "images/Pasta/arrabbiata pasta.jpg",
    time:35
},
{
    name: "Classic Red Sauce Pasta",
    category: "Pasta",
    price: 289,
    rating: 4.6,
    bestSeller: false,
    image: "images/Pasta/classic red sauce pasta.jpg",
    time:30
},
{
    name: "Creamy Alfredo Pasta",
    category: "Pasta",
    price: 339,
    rating: 4.5,
    bestSeller: false,
    image: "images/Pasta/creamy alfredo pasta.jpg",
    time:40
},
{
    name: "Mac & Cheese Pasta",
    category: "Pasta",
    price: 329,
    rating: 4.8,
    bestSeller: false,
    image: "images/Pasta/mac & cheese pasta.jpg",
    time:40
},
{
    name: "Roasted Veggie Pasta",
    category: "Pasta",
    price: 319,
    rating: 4.7,
    bestSeller: false,
    image: "images/Pasta/roasted veggie pasta.jpg",
    time:45
},

//  PIZZA 

{
    name: "Corn & Cheese Pizza",
    category: "Pizza",
    price: 349,
    rating: 4.7,
    bestSeller: false,
    image: "images/Pizza/corn & cheese pizza.jpg",
    time:35
},
{
    name: "Margherita Pizza",
    category: "Pizza",
    price: 299,
    rating: 5.0,
    bestSeller: true,
    image: "images/Pizza/margherita pizza.jpg",
    time:30
},
{
    name: "Mushroom Delight Pizza",
    category: "Pizza",
    price: 389,
    rating: 4.8,
    bestSeller: false,
    image: "images/Pizza/mushroom delight pizza.jpg",
    time:40
},
{
    name: "Paneer Tikka Pizza",
    category: "Pizza",
    price: 419,
    rating: 4.9,
    bestSeller: false,
    image: "imagesPizza/paneer tikka pizza.jpg",
    time:40
},
{
    name: "Peri Peri Pizza",
    category: "Pizza",
    price: 399,
    rating: 4.8,
    bestSeller: false,
    image: "images/Pizza/peri peri pizza.jpg",
    time:30
},
{
    name: "Veggie Supreme Pizza",
    category: "Pizza",
    price: 439,
    rating: 4.9,
    bestSeller: false,
    image: "images/Pizza/veggie supreme pizza.jpg",
    time:35
},

//  RICE & BIRYANI

{
    name: "Jeera Rice",
    category: "Rice & Biryani",
    price: 189,
    rating: 4.5,
    bestSeller: false,
    image: "images/Rice & Biryani/jeera rice.jpg",
    time:20
},
{
    name: "Paneer Biryani",
    category: "Rice & Biryani",
    price: 339,
    rating: 4.9,
    bestSeller: true,
    image: "images/Rice & Biryani/paneer biryani.jpg",
    time:40
},
{
    name: "Schezwan Fried Rice",
    category: "Rice & Biryani",
    price: 269,
    rating: 4.8,
    bestSeller: false,
    image: "images/Rice & Biryani/schezwan fried rice.jpg",
    time:35
},
{
    name: "Veg Biryani",
    category: "Rice & Biryani",
    price: 289,
    rating: 4.7,
    bestSeller: false,
    image: "images/Rice & Biryani/veg biryani.jpg",
    time:40
},
{
    name: "Veg Pulao",
    category: "Rice & Biryani",
    price: 239,
    rating: 4.6,
    bestSeller: false,
    image: "images/Rice & Biryani/veg pulao.jpg",
    time:30
},

// SALADS 

{
    name: "Classic House Salad",
    category: "Salads",
    price: 179,
    rating: 4.5,
    bestSeller: false,
    image: "images/Salads/classic house salad.jpg",
    time:15
},
{
    name: "Fresh Green Salad",
    category: "Salads",
    price: 249,
    rating: 4.8,
    bestSeller: true,
    image: "images/Salads/fresh green salad.jpg",
    time:20
},
{
    name: "Rainbow Salad",
    category: "Salads",
    price: 229,
    rating: 4.7,
    bestSeller: false,
    image: "images/Salads/rainbow salad.jpg",
    time:25
},

//  SOUTH INDIAN 

{
    name: "Cheese Masala Dosa",
    category: "South Indian",
    price: 259,
    rating: 4.8,
    bestSeller: false,
    image: "images/South Indian/cheese masala dosa.jpg",
    time:30
},
{
    name: "Idli Sambar",
    category: "South Indian",
    price: 169,
    rating: 4.6,
    bestSeller: false,
    image: "images/South Indian/idli sambar.jpg",
    time:50
},
{
    name: "Masala Dosa",
    category: "South Indian",
    price: 219,
    rating: 4.9,
    bestSeller: true,
    image: "images/South Indian/masala dosa.jpg",
    time:30
},
{
    name: "Podi Idli",
    category: "South Indian",
    price: 199,
    rating: 4.7,
    bestSeller: false,
    image: "images/South Indian/podi idli.jpg",
    time:30
},
{
    name: "Uttapam",
    category: "South Indian",
    price: 229,
    rating: 4.8,
    bestSeller: false,
    image: "images/South Indian/uttapam.jpg",
    time:35
},
]

reserveButton.addEventListener('click',function(){
                                            reserveSection.scrollIntoView()
                                        });

viewMenuButton.addEventListener('click',function(){
                                             menuSection.scrollIntoView()

                                        });
                      

function showSuggestions(){
    suggestionbox.style.display="block";
    search.classList.add("active");
    categories.classList.add("searchDisabled");
    filters.classList.add("searchDisabled");
}

function hideSuggestions(){
    suggestionbox.style.display="none";
    suggestionbox.innerHTML="";
    search.classList.remove("active");
    categories.classList.remove("searchDisabled");
    filters.classList.remove("searchDisabled");
}

searchbar.addEventListener('input', function(){
                                    const searchText = searchbar.value.toLowerCase().trim();
                                   
                                    if (searchText===""){
                                        hideSuggestions();
                                        return;
                                    }
                                    let suggestionarray = fooditems.filter((item)=>
                                                        item.name.toLowerCase().includes(searchText).slice(0,5));

                                    if (suggestionarray.length===0){
                                        hideSuggestions();
                                        return;
                                    }

                                    let suggestion = suggestionarray.map((item)=>
                                                        `<div> ${item.name} </div>`).join("");

                                    suggestionbox.innerHTML=suggestion;

                                    showSuggestions();

});

document.addEventListener('click', function (e) {
                                if (!search.contains(e.target) && !suggestionbox.contains(e.target)) {
                                    hideSuggestions();}
});

for (let i of fooditems){
    container.innerHTML+= `<div class="foodcard">
                           <img src="images/${i.category}/${i.name.toLowerCase()}.jpg" alt=${i.name}>
                           <div class="foodoptions">
                           <div><i style="color:red" class="bi bi-heart"></i></div>
                           <div><i style="color:rgb(116, 113, 113)" class="bi bi-cart"></i></div>
                           </div>
                           <div class="foodname">
                           <div class="name">${i.name}</div>
                           <div class="rating">${i.rating}<i class="fa-solid fa-star"></i></div>
                           </div>
                           <div class="fooddesc">
                           <div class="category ">${i.category}</div>
                           <div class="price">₹${i.price}</div>
                           </div>
                           <div class="foodtime">${i.time} min</div>
                           `
}

