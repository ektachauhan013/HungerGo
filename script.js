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

const All = document.querySelector("#All");
const Appetizers = document.querySelector("#Appetizers");
const Pizza = document.querySelector("#Pizza");
const Burgers = document.querySelector("#Burgers");
const Pasta = document.querySelector("#Pasta");
const Noodles = document.querySelector("#Noodles");
const Rice_Biryani = document.querySelector("#Rice_Biryani");
const North_Indian = document.querySelector("#North_Indian");
const South_Indian = document.querySelector("#South_Indian");
const Salads = document.querySelector("#Salads");
const Desserts = document.querySelector("#Desserts");
const Beverages = document.querySelector("#Beverages");

const ratingFilter = document.querySelector("#rating");
const priceFilter = document.querySelector("#prices");
const bestsellerFilter = document.querySelector("#bestseller");
const applyfilter = document.querySelector(".applyfilters");
const clearfilter = document.querySelector(".clearfilters");

const reviewcardscontainer = document.querySelector("#reviewcardscontainer");

let displayCategories = "All";
let categorieslist = ["All","Appetizers","Pizza","Burgers","Pasta","Noodles","Rice_Biryani","North_Indian","South_Indian","Salads","Desserts","Beverages"]

const fooditems = [
    //  APPETIZERS

{
    name: "Cheese Rolls",
    category: "Appetizers",
    cat: "Appetizers",
    price: 249,
    rating: 4.4,
    bestSeller: true,
    image: "images/Appetizers/cheese rolls.jpg",
    time:35
},
{
    name: "Chilli Potatoes",
    category: "Appetizers",
    cat: "Appetizers",
    price: 199,
    rating: 4.5,
    bestSeller: false,
    image: "images/Appetizers/chilli potatoes.jpg",
    time:30
},
{
    name: "Crispy Corn",
    category: "Appetizers",
    cat: "Appetizers",
    price: 229,
    rating: 4.8,
    bestSeller: true,
    image: "images/Appetizers/crispy corn.jpg",
    time:26
},
{
    name: "Momos",
    category: "Appetizers",
    cat: "Appetizers",
    price: 189,
    rating: 4.7,
    bestSeller: false,
    image: "images/Appetizers/momos.jpg",
    time:29
},
{
    name: "Paneer Tikka",
    category: "Appetizers",
    cat: "Appetizers",
    price: 329,
    rating: 4.9,
    bestSeller: false,
    image: "images/Appetizers/paneer tikka.jpg",
    time:30
},
{
    name: "Spring Roll",
    category: "Appetizers",
    cat: "Appetizers",
    price: 269,
    rating: 4.6,
    bestSeller: false,
    image: "images/Appetizers/spring roll.jpg",
    time:30
},
{
    name: "Stuffed Mushroom Caps",
    category: "Appetizers",
    cat: "Appetizers",
    price: 399,
    rating: 4.4,
    bestSeller: false,
    image: "images/Appetizers/stuffed mushroom caps.jpg",
    time:40
},

//  BEVERAGES 

{
    name: "Cold Coffee",
    category: "Beverages",
    cat: "Beverages",
    price: 229,
    rating: 4.9,
    bestSeller: true,
    image: "images/Beverages/cold coffee.jpg",
    time:15
},
{
    name: "Hot Chocolate",
    category: "Beverages",
    cat: "Beverages",
    price: 319,
    rating: 4.8,
    bestSeller: false,
    image: "images/Beverages/hot chocolate.jpg",
    time:25
},
{
    name: "Iced Tea",
    category: "Beverages",
    cat: "Beverages",
    price: 169,
    rating: 4.5,
    bestSeller: false,
    image: "images/Beverages/iced tea.jpg",
    time:15
},
{
    name: "Kulhad Masala Chai",
    category: "Beverages",
    cat: "Beverages",
    price: 99,
    rating: 4.8,
    bestSeller: true,
    image: "images/Beverages/kulhad masala chai.jpg",
    time:20
},
{
    name: "Mango Smoothie",
    category: "Beverages",
    cat: "Beverages",
    price: 249,
    rating: 4.7,
    bestSeller: false,
    image: "images/Beverages/mango smoothie.jpg",
    time:30
},
{
    name: "Virgin Mojito",
    category: "Beverages",
    cat: "Beverages",
    price: 199,
    rating: 4.8,
    bestSeller: false,
    image: "images/Beverages/virgin mojito.jpg",
    time:15
},
{
    name: "Watermelon Cooler",
    category: "Beverages",
    cat: "Beverages",
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
    cat: "Burgers",
    price: 269,
    rating: 4.8,
    bestSeller: false,
    image: "images/Burgers/cheese burst burger.jpg",
    time:30
},
{
    name: "Classic Veg Burger",
    category: "Burgers",
    cat: "Burgers",
    price: 169,
    rating: 4.5,
    bestSeller: false,
    image: "images/Burgers/classic veg burger.jpg",
    time:20
},
{
    name: "Mushroom Veg Burger",
    category: "Burgers",
    cat: "Burgers",
    price: 249,
    rating: 4.6,
    bestSeller: false,
    image: "images/Burgers/mushroom veg burger.jpg",
    time:35
},
{
    name: "Paneer Tikka Burger",
    category: "Burgers",
    cat: "Burgers",
    price: 319,
    rating: 4.9,
    bestSeller: true,
    image: "images/Burgers/paneer tikka burger.jpg",
    time:30
},
{
    name: "Peri Peri Veg Burger",
    category: "Burgers",
    cat: "Burgers",
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
    cat: "Desserts",
    price: 499,
    rating: 4.8,
    bestSeller: false,
    image: "images/Desserts/cheesecake.jpg",
    time:45
},
{
    name: "Choco Lava Cake",
    category: "Desserts",
    cat: "Desserts",
    price: 329,
    rating: 4.9,
    bestSeller: true,
    image: "images/Desserts/choco lava cake.jpg",
    time:40
},
{
    name: "Chocolate Brownie",
    category: "Desserts",
    cat: "Desserts",
    price: 249,
    rating: 4.8,
    bestSeller: false,
    image: "images/Desserts/chocolate brownie.jpg",
    time:49
},
{
    name: "Cookies & Cream Ice Cream",
    category: "Desserts",
    cat: "Desserts",
    price: 189,
    rating: 4.5,
    bestSeller: false,
    image: "images/Desserts/cookies & cream ice cream.jpg",
    time:20
},
{
    name: "Gulab Jamun",
    category: "Desserts",
    cat: "Desserts",
    price: 149,
    rating: 4.7,
    bestSeller: false,
    image: "images/Desserts/gulab jamun.jpg",
    time:35
},
{
    name: "Jalebi",
    category: "Desserts",
    cat: "Desserts",
    price: 249,
    rating: 4.6,
    bestSeller: false,
    image: "images/Desserts/jalebi.jpg",
    time:40
},
{
    name: "Kheer",
    category: "Desserts",
    cat: "Desserts",
    price: 299,
    rating: 4.4,
    bestSeller: true,
    image: "images/Desserts/kheer.jpg",
    time:50
},
{
    name: "Red Velvet Pastry",
    category: "Desserts",
    cat: "Desserts",
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
    cat: "Noodles",
    price: 259,
    rating: 4.7,
    bestSeller: false,
    image: "images/Noodles/chilli garlic noodles.jpg",
    time:30
},
{
    name: "Hakka Noodles",
    category: "Noodles",
    cat: "Noodles",
    price: 239,
    rating: 4.9,
    bestSeller: false,
    image: "images/Noodles/hakka noodles.jpg",
    time:25
},
{
    name: "Paneer Chilli Noodles",
    category: "Noodles",
    cat: "Noodles",
    price: 319,
    rating: 4.8,
    bestSeller: true,
    image: "images/Noodles/paneer chilli noodles.jpg",
    time:35
},
{
    name: "Schezwan Noodles",
    category: "Noodles",
    cat: "Noodles",
    price: 269,
    rating: 4.8,
    bestSeller: false,
    image: "images/Noodles/schezwan noodles.jpg",
    time:30
},
{
    name: "Veg Chow Mein",
    category: "Noodles",
    cat: "Noodles",
    price: 199,
    rating: 4.6,
    bestSeller: false,
    image: "images/Noodles/veg chow mein.jpg",
    time:25
},

//  NORTH INDIAN 

{
    name: "Aaloo Paratha",
    category: "North Indian",
    cat: "North_Indian",
    price: 199,
    rating: 4.6,
    bestSeller: false,
    image: "images/North Indian/aaloo paratha.jpg",
    time:30
},
{
    name: "Butter Paneer Masala",
    category: "North Indian",
    cat: "North_Indian",
    price: 349,
    rating: 4.9,
    bestSeller: true,
    image: "images/North Indian/butter paneer masala.jpg",
    time:50
},
{
    name: "Dal Makhani",
    category: "North Indian",
    cat: "North_Indian",
    price: 299,
    rating: 4.8,
    bestSeller: false,
    image: "images/North Indian/dal makhani.jpg",
    time:40
},
{
    name: "Dal Tadka",
    category: "North Indian",
    cat: "North_Indian",
    price: 249,
    rating: 4.5,
    bestSeller: false,
    image: "images/North Indian/dal tadka.jpg",
    time:30
},
{
    name: "Dum Aaloo",
    category: "North Indian",
    cat: "North_Indian",
    price: 279,
    rating: 4.7,
    bestSeller: true,
    image: "imagesNorth Indian/dum aaloo.jpg",
    time:45
},
{
    name: "Garlic Naan",
    category: "North Indian",
    cat: "North_Indian",
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
    cat: "Pasta",
    price: 299,
    rating: 4.7,
    bestSeller: true,
    image: "images/Pasta/arrabbiata pasta.jpg",
    time:35
},
{
    name: "Classic Red Sauce Pasta",
    category: "Pasta",
    cat: "Pasta",
    price: 289,
    rating: 4.6,
    bestSeller: false,
    image: "images/Pasta/classic red sauce pasta.jpg",
    time:30
},
{
    name: "Creamy Alfredo Pasta",
    category: "Pasta",
    cat: "Pasta",
    price: 329,
    rating: 4.5,
    bestSeller: false,
    image: "images/Pasta/creamy alfredo pasta.jpg",
    time:40
},
{
    name: "Mac & Cheese Pasta",
    category: "Pasta",
    cat: "Pasta",
    price: 349,
    rating: 4.8,
    bestSeller: false,
    image: "images/Pasta/mac & cheese pasta.jpg",
    time:40
},
{
    name: "Roasted Veggie Pasta",
    category: "Pasta",
    cat: "Pasta",
    price: 309,
    rating: 4.7,
    bestSeller: false,
    image: "images/Pasta/roasted veggie pasta.jpg",
    time:45
},

//  PIZZA 

{
    name: "Corn & Cheese Pizza",
    category: "Pizza",
    cat: "Pizza",
    price: 349,
    rating: 4.7,
    bestSeller: false,
    image: "images/Pizza/corn & cheese pizza.jpg",
    time:35
},
{
    name: "Margherita Pizza",
    category: "Pizza",
    cat: "Pizza",
    price: 299,
    rating: 5.0,
    bestSeller: true,
    image: "images/Pizza/margherita pizza.jpg",
    time:30
},
{
    name: "Mushroom Delight Pizza",
    category: "Pizza",
    cat: "Pizza",
    price: 399,
    rating: 4.8,
    bestSeller: false,
    image: "images/Pizza/mushroom delight pizza.jpg",
    time:40
},
{
    name: "Paneer Tikka Pizza",
    category: "Pizza",
    cat: "Pizza",
    price: 419,
    rating: 4.9,
    bestSeller: false,
    image: "imagesPizza/paneer tikka pizza.jpg",
    time:40
},
{
    name: "Peri Peri Pizza",
    category: "Pizza",
    cat: "Pizza",
    price: 349,
    rating: 4.8,
    bestSeller: false,
    image: "images/Pizza/peri peri pizza.jpg",
    time:30
},
{
    name: "Veggie Supreme Pizza",
    category: "Pizza",
    cat: "Pizza",
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
    cat: "Rice_Biryani",
    price: 189,
    rating: 4.5,
    bestSeller: false,
    image: "images/Rice & Biryani/jeera rice.jpg",
    time:20
},
{
    name: "Paneer Biryani",
    category: "Rice & Biryani",
    cat: "Rice_Biryani",
    price: 349,
    rating: 4.9,
    bestSeller: true,
    image: "images/Rice & Biryani/paneer biryani.jpg",
    time:40
},
{
    name: "Schezwan Fried Rice",
    category: "Rice & Biryani",
    cat: "Rice_Biryani",
    price: 269,
    rating: 4.8,
    bestSeller: false,
    image: "images/Rice & Biryani/schezwan fried rice.jpg",
    time:35
},
{
    name: "Veg Biryani",
    category: "Rice & Biryani",
    cat: "Rice_Biryani",
    price: 289,
    rating: 4.7,
    bestSeller: false,
    image: "images/Rice & Biryani/veg biryani.jpg",
    time:40
},
{
    name: "Veg Pulao",
    category: "Rice & Biryani",
    cat: "Rice_Biryani",
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
    cat: "Salads",
    price: 179,
    rating: 4.5,
    bestSeller: false,
    image: "images/Salads/classic house salad.jpg",
    time:15
},
{
    name: "Fresh Green Salad",
    category: "Salads",
    cat: "Salads",
    price: 249,
    rating: 4.8,
    bestSeller: true,
    image: "images/Salads/fresh green salad.jpg",
    time:20
},
{
    name: "Rainbow Salad",
    category: "Salads",
    cat: "Salads",
    price: 299,
    rating: 4.7,
    bestSeller: false,
    image: "images/Salads/rainbow salad.jpg",
    time:25
},

//  SOUTH INDIAN 

{
    name: "Cheese Masala Dosa",
    category: "South Indian",
    cat: "South_Indian",
    price: 259,
    rating: 4.8,
    bestSeller: false,
    image: "images/South Indian/cheese masala dosa.jpg",
    time:30
},
{
    name: "Idli Sambar",
    category: "South Indian",
    cat: "South_Indian",
    price: 309,
    rating: 4.6,
    bestSeller: false,
    image: "images/South Indian/idli sambar.jpg",
    time:50
},
{
    name: "Masala Dosa",
    category: "South Indian",
    cat: "South_Indian",
    price: 219,
    rating: 4.9,
    bestSeller: true,
    image: "images/South Indian/masala dosa.jpg",
    time:30
},
{
    name: "Podi Idli",
    category: "South Indian",
    cat: "South_Indian",
    price: 199,
    rating: 4.7,
    bestSeller: false,
    image: "images/South Indian/podi idli.jpg",
    time:30
},
{
    name: "Uttapam",
    category: "South Indian",
    cat: "South_Indian",
    price: 229,
    rating: 4.8,
    bestSeller: false,
    image: "images/South Indian/uttapam.jpg",
    time:35
},
]


const reviews = [
    {
        id: 1,
        review: "Visited HungerGo with my family and absolutely loved the ambience. The Paneer Tikka was fresh, perfectly grilled, and the service was incredibly quick.",
        rating: 4.9,
        orderedItem: "Paneer Tikka",
        date: "08/07/26"
    },
    {
        id: 2,
        review: "Ordered Veg Biryani online and it arrived much earlier than expected. The food was still hot, packed neatly, and tasted just like restaurant-quality.",
        rating: 4.8,
        orderedItem: "Veg Biryani",
        date: "11/07/26"
    },
    {
        id: 3,
        review: "The restaurant has such a calm and welcoming ambience. We tried the Masala Dosa and Cold Coffee, and both had an authentic homemade taste. Highly recommended!",
        rating: 5.0,
        orderedItem: "Masala Dosa & Cold Coffee",
        date: "15/07/26"
    },
    {
        id: 4,
        review: "Late-night online delivery was surprisingly fast. The Cheesecake and Margherita Pizza arrived fresh, cheesy, and exactly as shown in the pictures.",
        rating: 4.7,
        orderedItem: "Margherita Pizza & Cheesecake",
        date: "19/07/26"
    },
    {
        id: 5,
        review: "Loved everything about this place, from the beautiful interiors to the polite staff. The butter paneer masala and garlic naan had an authentic North Indian flavor and generous portions.",
        rating: 4.9,
        orderedItem: "Chole Bhature",
        date: "22/07/26"
    },
    {
        id: 6,
        review: "I've ordered from HungerGo multiple times, and they've never disappointed. Fast delivery, secure packaging, and every dish arrives fresh and delicious. Their Cheese rolls is my favorite!",
        rating: 4.8,
        orderedItem: "Cheese rolls",
        date: "25/07/26"
    }
];

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

function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));

        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

let food = [];

for (let id of categorieslist){
    card=document.getElementById(id);

    card.addEventListener('click', function(){
                                    displayCategories=id;
    })
}

// displayCategories.style.boxShadow="0px 2px 10px 0px rgb(78, 76, 76)";

if (displayCategories=="All"){
    food=[...fooditems]
}
else{
    food=fooditems.filter(item=>item.cat=="displayCategories")
}

let finalcards = [];

applyfilter.addEventListener("click", () => {

    finalcards = food.filter((food) => {

        let ratingMatch = true;
        let priceMatch = true;
        let bestsellerMatch = true;

        if(ratingFilter.value !== "All Ratings") {
            let rating = Number(ratingFilter.value.replace("+",""));
            ratingMatch = food.rating >= rating;
        }

        if(priceFilter.value !== "All Prices") {

            if(priceFilter.value === "₹0 - ₹199") {
                priceMatch = food.price <= 199;
            }

            else if(priceFilter.value === "₹200 - ₹299") {
                priceMatch = food.price >= 200 && food.price <= 299;
            }

            else if(priceFilter.value === "₹300 - ₹399") {
                priceMatch = food.price >= 300 && food.price <= 399;
            }

            else if(priceFilter.value === "₹400+") {
                priceMatch = food.price >= 400;
            }
        }

        if(bestsellerFilter.value !== "All Items") {

            if(bestsellerFilter.value === "Best Sellers") {
                bestsellerMatch = food.bestseller === true;
            }

            else if(bestsellerFilter.value === "Regular Items") {
                bestsellerMatch = food.bestseller === false;
            }
        }

        return ratingMatch && priceMatch && bestsellerMatch;
    });
});

clearfilter.addEventListener("click", () => {

    ratingFilter.value = "All Ratings";
    priceFilter.value = "All Prices";
    bestsellerFilter.value = "All Items";

    finalcards = food;

});

let html="";

for (let i of shuffle(finalcards)){
    console.log(i.name, i.bestSeller);
    html+= `<div class="foodcard">
                           <img src="images/${i.category}/${i.name.toLowerCase()}.jpg" alt=${i.name}>
                           <div class="foodoptions">
                           <div><i style="color:red" class="bi bi-heart"></i></div>
                           <div><i style="color:rgb(116, 113, 113)" class="bi bi-cart"></i></div>
                           </div>
                           ${i.bestSeller ? `<div class="bestsellertag">
                                             <i style="color:rgb(243, 190, 19)" class="fa-solid fa-award"></i>
                                            </div>`
                                            : ""
                            }
                           <div class="foodname">
                           <div class="name">${i.name}</div>
                           <div class="rating">${i.rating}<i class="fa-solid fa-star"></i></div>
                           </div>
                           <div class="fooddesc">
                           <div class="category ">${i.category}</div>
                           <div class="price">₹${i.price}</div>
                           </div>
                           <div class="foodtime">${i.time} min</div>
            </div>
                           `;
}

container.innerHTML+=html;

function displayreviews(start){
    currentreviews=reviews.slice(start,start+3);
    reviewshtml=""
    
    for (let i of currentreviews){
    reviewshtml+=`<div class="reviewscard>
                    <div class="details">
                        <div class="ratings">${i.rating}<i style="color:gold" class="fa-solid fa-star"></i></div>
                        <div class="time">${i.date}</div>
                    </div>
                    <div>${i.review}</div>
                    <div class="orderedfood"> ${i.orderedItem} </div>
                  </div>`
    }
    reviewcardscontainer.innerHTML+=reviewshtml;
}
displayreviews(0);

function changeReviews(){

    wrapper.classList.add("slide-left");

}

wrapper.addEventListener("transitionend",()=>{

    if(!wrapper.classList.contains("slide-left"))
        return;

    wrapper.classList.remove("slide-left");

    currentIndex+=3;

    if(currentIndex>=reviews.length){

        currentIndex=0;

    }

    displayReviews(currentIndex);

    wrapper.classList.add("slide-right");

    requestAnimationFrame(()=>{

        requestAnimationFrame(()=>{

            wrapper.classList.remove("slide-right");

            wrapper.classList.add("slide-center");

        });

    });

});

wrapper.addEventListener("transitionend",()=>{

    wrapper.classList.remove("slide-center");

});

wrapper.addEventListener("transitionend",()=>{

    wrapper.classList.remove("slide-center");

});

let interval=setInterval(changeReviews,10000);

wrapper.addEventListener("mouseenter",()=>{

    clearInterval(interval);

});

wrapper.addEventListener("mouseleave",()=>{

    interval=setInterval(changeReviews,10000);

});
