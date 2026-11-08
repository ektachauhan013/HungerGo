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
const allergenDropdownBtn = document.querySelector("#allergenDropdownBtn");
const allergenMultiselect = document.querySelector("#allergenMultiselect");
const allergenMenu = document.querySelector("#allergenMenu");
const allergenDropdownText = document.querySelector("#allergenDropdownText");
const allergenCheckboxes = document.querySelectorAll("#allergenMenu input[type='checkbox']");
const applyfilter = document.querySelector(".applyfilters");
const clearfilter = document.querySelector(".clearfilters");

const reviewcardscontainer = document.querySelector("#reviewcardscontainer");
const reserveForm = document.querySelector("#reservetable"); 
const dateInput = document.querySelector("#date");

const overlay = document.querySelector("#overlay");
const cartIcon = document.querySelector("#cartIcon");
const wishlistIcon = document.querySelector("#wishlistIcon");
const profileIcon = document.querySelector("#profileIcon");
const cartDrawer = document.querySelector("#cartDrawer");
const wishlistDrawer = document.querySelector("#wishlistDrawer");
const profileDrawer = document.querySelector("#profileDrawer");

const cartItemsEl = document.querySelector("#cartItems");
const emptycart = document.querySelector("#emptycart");
const cartTotalEl = document.querySelector("#cartTotal");
const cartcountSpan = document.querySelector("#cartcount");
const cartcountNavSpan = document.querySelector("#cartcountnav");

const wishlistItemsEl = document.querySelector("#wishlistItems");
const emptywishlist = document.querySelector("#emptywishlist");
const wishlistcountSpan = document.querySelector("#wishlistcount");
const wishlistcountNavSpan = document.querySelector("#wishlistcountnav");

const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

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
    time: 35,
    allergens: ["Dairy", "Gluten", "Soy"]
},
{
    name: "Chilli Potatoes",
    category: "Appetizers",
    cat: "Appetizers",
    price: 199,
    rating: 4.5,
    bestSeller: false,
    image: "images/Appetizers/chilli potatoes.jpg",
    time: 30,
    allergens: ["Soy", "Gluten", "Sesame"]
},
{
    name: "Crispy Corn",
    category: "Appetizers",
    cat: "Appetizers",
    price: 229,
    rating: 4.8,
    bestSeller: true,
    image: "images/Appetizers/crispy corn.jpg",
    time: 26,
    allergens: ["Gluten", "Soy"]
},
{
    name: "Momos",
    category: "Appetizers",
    cat: "Appetizers",
    price: 189,
    rating: 4.7,
    bestSeller: false,
    image: "images/Appetizers/momos.jpg",
    time: 29,
    allergens: ["Gluten", "Soy"]
},
{
    name: "Paneer Tikka",
    category: "Appetizers",
    cat: "Appetizers",
    price: 329,
    rating: 4.9,
    bestSeller: false,
    image: "images/Appetizers/paneer tikka.jpg",
    time: 30,
    allergens: ["Dairy"]
},
{
    name: "Spring Roll",
    category: "Appetizers",
    cat: "Appetizers",
    price: 269,
    rating: 4.6,
    bestSeller: false,
    image: "images/Appetizers/spring roll.jpg",
    time: 30,
    allergens: ["Gluten", "Soy"]
},
{
    name: "Stuffed Mushroom Caps",
    category: "Appetizers",
    cat: "Appetizers",
    price: 399,
    rating: 4.4,
    bestSeller: false,
    image: "images/Appetizers/stuffed mushroom caps.jpg",
    time: 40,
    allergens: ["Dairy", "Gluten"]
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
    time: 15,
    allergens: ["Dairy"]
},
{
    name: "Hot Chocolate",
    category: "Beverages",
    cat: "Beverages",
    price: 319,
    rating: 4.8,
    bestSeller: false,
    image: "images/Beverages/hot chocolate.jpg",
    time: 25,
    allergens: ["Dairy", "Soy"]
},
{
    name: "Iced Tea",
    category: "Beverages",
    cat: "Beverages",
    price: 169,
    rating: 4.5,
    bestSeller: false,
    image: "images/Beverages/iced tea.jpg",
    time: 15,
    allergens: []
},
{
    name: "Kulhad Masala Chai",
    category: "Beverages",
    cat: "Beverages",
    price: 99,
    rating: 4.8,
    bestSeller: true,
    image: "images/Beverages/kulhad masala chai.jpg",
    time: 20,
    allergens: ["Dairy"]
},
{
    name: "Mango Smoothie",
    category: "Beverages",
    cat: "Beverages",
    price: 249,
    rating: 4.7,
    bestSeller: false,
    image: "images/Beverages/mango smoothie.jpg",
    time: 30,
    allergens: ["Dairy"]
},
{
    name: "Virgin Mojito",
    category: "Beverages",
    cat: "Beverages",
    price: 199,
    rating: 4.8,
    bestSeller: false,
    image: "images/Beverages/virgin mojito.jpg",
    time: 15,
    allergens: []
},
{
    name: "Watermelon Cooler",
    category: "Beverages",
    cat: "Beverages",
    price: 189,
    rating: 4.6,
    bestSeller: false,
    image: "images/Beverages/watermelon cooler.jpg",
    time: 20,
    allergens: []
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
    time: 30,
    allergens: ["Dairy", "Gluten"]
},
{
    name: "Classic Veg Burger",
    category: "Burgers",
    cat: "Burgers",
    price: 169,
    rating: 4.5,
    bestSeller: false,
    image: "images/Burgers/classic veg burger.jpg",
    time: 20,
    allergens: ["Gluten", "Soy"]
},
{
    name: "Mushroom Veg Burger",
    category: "Burgers",
    cat: "Burgers",
    price: 249,
    rating: 4.6,
    bestSeller: false,
    image: "images/Burgers/mushroom veg burger.jpg",
    time: 35,
    allergens: ["Gluten", "Dairy"]
},
{
    name: "Paneer Tikka Burger",
    category: "Burgers",
    cat: "Burgers",
    price: 319,
    rating: 4.9,
    bestSeller: true,
    image: "images/Burgers/paneer tikka burger.jpg",
    time: 30,
    allergens: ["Dairy", "Gluten"]
},
{
    name: "Peri Peri Veg Burger",
    category: "Burgers",
    cat: "Burgers",
    price: 259,
    rating: 4.7,
    bestSeller: false,
    image: "images/Burgers/peri peri veg burger.jpg",
    time: 30,
    allergens: ["Gluten", "Dairy"]
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
    time: 45,
    allergens: ["Dairy", "Gluten"]
},
{
    name: "Choco Lava Cake",
    category: "Desserts",
    cat: "Desserts",
    price: 329,
    rating: 4.9,
    bestSeller: true,
    image: "images/Desserts/choco lava cake.jpg",
    time: 40,
    allergens: ["Dairy", "Gluten"]
},
{
    name: "Chocolate Brownie",
    category: "Desserts",
    cat: "Desserts",
    price: 249,
    rating: 4.8,
    bestSeller: false,
    image: "images/Desserts/chocolate brownie.jpg",
    time: 49,
    allergens: ["Dairy", "Gluten", "Nuts"]
},
{
    name: "Cookies & Cream Ice Cream",
    category: "Desserts",
    cat: "Desserts",
    price: 189,
    rating: 4.5,
    bestSeller: false,
    image: "images/Desserts/cookies & cream ice cream.jpg",
    time: 20,
    allergens: ["Dairy", "Gluten", "Soy"]
},
{
    name: "Gulab Jamun",
    category: "Desserts",
    cat: "Desserts",
    price: 149,
    rating: 4.7,
    bestSeller: false,
    image: "images/Desserts/gulab jamun.jpg",
    time: 35,
    allergens: ["Dairy", "Gluten"]
},
{
    name: "Jalebi",
    category: "Desserts",
    cat: "Desserts",
    price: 249,
    rating: 4.6,
    bestSeller: false,
    image: "images/Desserts/jalebi.jpg",
    time: 40,
    allergens: ["Gluten"]
},
{
    name: "Kheer",
    category: "Desserts",
    cat: "Desserts",
    price: 299,
    rating: 4.4,
    bestSeller: true,
    image: "images/Desserts/kheer.jpg",
    time: 50,
    allergens: ["Dairy", "Nuts"]
},
{
    name: "Red Velvet Pastry",
    category: "Desserts",
    cat: "Desserts",
    price: 239,
    rating: 4.7,
    bestSeller: false,
    image: "images/Desserts/red velvet pastry.jpg",
    time: 30,
    allergens: ["Dairy", "Gluten"]
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
    time: 30,
    allergens: ["Gluten", "Soy"]
},
{
    name: "Hakka Noodles",
    category: "Noodles",
    cat: "Noodles",
    price: 239,
    rating: 4.9,
    bestSeller: false,
    image: "images/Noodles/hakka noodles.jpg",
    time: 25,
    allergens: ["Gluten", "Soy"]
},
{
    name: "Paneer Chilli Noodles",
    category: "Noodles",
    cat: "Noodles",
    price: 319,
    rating: 4.8,
    bestSeller: true,
    image: "images/Noodles/paneer chilli noodles.jpg",
    time: 35,
    allergens: ["Dairy", "Gluten", "Soy"]
},
{
    name: "Schezwan Noodles",
    category: "Noodles",
    cat: "Noodles",
    price: 269,
    rating: 4.8,
    bestSeller: false,
    image: "images/Noodles/schezwan noodles.jpg",
    time: 30,
    allergens: ["Gluten", "Soy"]
},
{
    name: "Veg Chow Mein",
    category: "Noodles",
    cat: "Noodles",
    price: 199,
    rating: 4.6,
    bestSeller: false,
    image: "images/Noodles/veg chow mein.jpg",
    time: 25,
    allergens: ["Gluten", "Soy"]
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
    time: 30,
    allergens: ["Gluten", "Dairy"]
},
{
    name: "Butter Paneer Masala",
    category: "North Indian",
    cat: "North_Indian",
    price: 349,
    rating: 4.9,
    bestSeller: true,
    image: "images/North Indian/butter paneer masala.jpg",
    time: 50,
    allergens: ["Dairy", "Nuts"]
},
{
    name: "Dal Makhani",
    category: "North Indian",
    cat: "North_Indian",
    price: 299,
    rating: 4.8,
    bestSeller: false,
    image: "images/North Indian/dal makhani.jpg",
    time: 40,
    allergens: ["Dairy"]
},
{
    name: "Dal Tadka",
    category: "North Indian",
    cat: "North_Indian",
    price: 249,
    rating: 4.5,
    bestSeller: false,
    image: "images/North Indian/dal tadka.jpg",
    time: 30,
    allergens: ["Dairy"]
},
{
    name: "Dum Aaloo",
    category: "North Indian",
    cat: "North_Indian",
    price: 279,
    rating: 4.7,
    bestSeller: true,
    image: "images/North Indian/dum aaloo.jpg",
    time: 45,
    allergens: ["Dairy", "Nuts"]
},
{
    name: "Garlic Naan",
    category: "North Indian",
    cat: "North_Indian",
    price: 99,
    rating: 4.8,
    bestSeller: true,
    image: "images/North Indian/garlic naan.jpg",
    time: 30,
    allergens: ["Gluten", "Dairy"]
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
    time: 35,
    allergens: ["Gluten", "Dairy"]
},
{
    name: "Classic Red Sauce Pasta",
    category: "Pasta",
    cat: "Pasta",
    price: 289,
    rating: 4.6,
    bestSeller: false,
    image: "images/Pasta/classic red sauce pasta.jpg",
    time: 30,
    allergens: ["Gluten", "Dairy"]
},
{
    name: "Creamy Alfredo Pasta",
    category: "Pasta",
    cat: "Pasta",
    price: 329,
    rating: 4.5,
    bestSeller: false,
    image: "images/Pasta/creamy alfredo pasta.jpg",
    time: 40,
    allergens: ["Dairy", "Gluten"]
},
{
    name: "Mac & Cheese Pasta",
    category: "Pasta",
    cat: "Pasta",
    price: 349,
    rating: 4.8,
    bestSeller: false,
    image: "images/Pasta/mac & cheese pasta.jpg",
    time: 40,
    allergens: ["Dairy", "Gluten"]
},
{
    name: "Roasted Veggie Pasta",
    category: "Pasta",
    cat: "Pasta",
    price: 309,
    rating: 4.7,
    bestSeller: false,
    image: "images/Pasta/roasted veggie pasta.jpg",
    time: 45,
    allergens: ["Gluten", "Dairy"]
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
    time: 35,
    allergens: ["Gluten", "Dairy"]
},
{
    name: "Margherita Pizza",
    category: "Pizza",
    cat: "Pizza",
    price: 299,
    rating: 5.0,
    bestSeller: true,
    image: "images/Pizza/margherita pizza.jpg",
    time: 30,
    allergens: ["Gluten", "Dairy"]
},
{
    name: "Mushroom Delight Pizza",
    category: "Pizza",
    cat: "Pizza",
    price: 399,
    rating: 4.8,
    bestSeller: false,
    image: "images/Pizza/mushroom delight pizza.jpg",
    time: 40,
    allergens: ["Gluten", "Dairy"]
},
{
    name: "Paneer Tikka Pizza",
    category: "Pizza",
    cat: "Pizza",
    price: 419,
    rating: 4.9,
    bestSeller: false,
    image: "images/Pizza/paneer tikka pizza.jpg",
    time: 40,
    allergens: ["Gluten", "Dairy"]
},
{
    name: "Peri Peri Pizza",
    category: "Pizza",
    cat: "Pizza",
    price: 349,
    rating: 4.8,
    bestSeller: false,
    image: "images/Pizza/peri peri pizza.jpg",
    time: 30,
    allergens: ["Gluten", "Dairy"]
},
{
    name: "Veggie Supreme Pizza",
    category: "Pizza",
    cat: "Pizza",
    price: 439,
    rating: 4.9,
    bestSeller: false,
    image: "images/Pizza/veggie supreme pizza.jpg",
    time: 35,
    allergens: ["Gluten", "Dairy"]
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
    time: 20,
    allergens: ["Dairy"]
},
{
    name: "Paneer Biryani",
    category: "Rice & Biryani",
    cat: "Rice_Biryani",
    price: 349,
    rating: 4.9,
    bestSeller: true,
    image: "images/Rice & Biryani/paneer biryani.jpg",
    time: 40,
    allergens: ["Dairy", "Nuts"]
},
{
    name: "Schezwan Fried Rice",
    category: "Rice & Biryani",
    cat: "Rice_Biryani",
    price: 269,
    rating: 4.8,
    bestSeller: false,
    image: "images/Rice & Biryani/schezwan fried rice.jpg",
    time: 35,
    allergens: ["Soy"]
},
{
    name: "Veg Biryani",
    category: "Rice & Biryani",
    cat: "Rice_Biryani",
    price: 289,
    rating: 4.7,
    bestSeller: false,
    image: "images/Rice & Biryani/veg biryani.jpg",
    time: 40,
    allergens: ["Dairy", "Nuts"]
},
{
    name: "Veg Pulao",
    category: "Rice & Biryani",
    cat: "Rice_Biryani",
    price: 239,
    rating: 4.6,
    bestSeller: false,
    image: "images/Rice & Biryani/veg pulao.jpg",
    time: 30,
    allergens: ["Dairy"]
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
    time: 15,
    allergens: [""]
},
{
    name: "Fresh Green Salad",
    category: "Salads",
    cat: "Salads",
    price: 249,
    rating: 4.8,
    bestSeller: true,
    image: "images/Salads/fresh green salad.jpg",
    time: 20,
    allergens: []
},
{
    name: "Rainbow Salad",
    category: "Salads",
    cat: "Salads",
    price: 299,
    rating: 4.7,
    bestSeller: false,
    image: "images/Salads/rainbow salad.jpg",
    time: 25,
    allergens: ["Nuts", "Dairy"]
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
    time: 30,
    allergens: ["Dairy"]
},
{
    name: "Idli Sambar",
    category: "South Indian",
    cat: "South_Indian",
    price: 309,
    rating: 4.6,
    bestSeller: false,
    image: "images/South Indian/idli sambar.jpg",
    time: 50,
    allergens: []
},
{
    name: "Masala Dosa",
    category: "South Indian",
    cat: "South_Indian",
    price: 219,
    rating: 4.9,
    bestSeller: true,
    image: "images/South Indian/masala dosa.jpg",
    time: 30,
    allergens: []
},
{
    name: "Podi Idli",
    category: "South Indian",
    cat: "South_Indian",
    price: 199,
    rating: 4.7,
    bestSeller: false,
    image: "images/South Indian/podi idli.jpg",
    time: 30,
    allergens: ["Sesame", "Dairy"]
},
{
    name: "Uttapam",
    category: "South Indian",
    cat: "South_Indian",
    price: 229,
    rating: 4.8,
    bestSeller: false,
    image: "images/South Indian/uttapam.jpg",
    time: 35,
    allergens: ["Dairy"]
},
];


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
        orderedItem: "Butter Paneer Masala and Garlic Naan",
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
                                                        item.name.toLowerCase().includes(searchText)).slice(0,5);

                                    if (suggestionarray.length===0){
                                        hideSuggestions();
                                        return;
                                    }

                                    let suggestion = suggestionarray.map((item)=>
                                                        `<div> ${item.name} </div>`).join("");

                                    suggestionbox.innerHTML=suggestion;

                                    showSuggestions();

});

searchbar.addEventListener('keypress', function(e){
    if (e.key === 'Enter') {
        const searchText = searchbar.value.toLowerCase().trim();
        
        if (searchText === "") {
            alert("Please type something to search!");
            return;
        }
        
        displayCategories = "All";
        document.querySelectorAll(".categoriescard").forEach(c => c.classList.remove("activecategory"));
        All.classList.add("activecategory");
        hideSuggestions();
        renderFood();
    }
});

document.addEventListener('click', function (e) {
    if (!search.contains(e.target) && !suggestionbox.contains(e.target)) {
        hideSuggestions();}
    if (e.target.closest(".suggestionbox div")) {
        const selectedFood = e.target.textContent.trim();
        const item = fooditems.find(f => f.name === selectedFood);
        
        if (item) {
            menuSection.scrollIntoView();
            searchbar.value = "";
            hideSuggestions();
            displayCategories = item.cat;
            document.querySelectorAll(".categoriescard").forEach(c => c.classList.remove("activecategory"));
            document.getElementById(item.cat).classList.add("activecategory");
            renderFood();
            
            setTimeout(() => {
                const card = document.querySelector(`[data-name="${item.name}"]`);
                if (card) card.scrollIntoView({ behavior: "smooth", block: "center" });
            }, 500);
        }
    }
});

function getAllergenText(allergens) {
    if (
        allergens === null ||
        allergens === undefined ||
        allergens === "" ||
        (Array.isArray(allergens) && allergens.length === 0)
    ) {
        return "No listed allergens";
    }
    if (Array.isArray(allergens)) {
        return allergens.join(", ");
    }
    return String(allergens);
}

function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));

        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

document.querySelector("#searchicon").addEventListener('click', function(){
    console.log("Search icon clicked!");
    const searchText = searchbar.value.toLowerCase().trim();
    console.log("Search text:", searchText);
    
    if (searchText === "") {
        alert("Please type something to search!");
        return;
    }
    
    displayCategories = "All";
    hideSuggestions();
    renderFood();
    console.log("renderFood called!");
});

function renderFood(){

    let food = [];

    if (displayCategories=="All"){
        food=[...fooditems];
    }
    else{
        food=fooditems.filter(item=>item.cat==displayCategories);
    }

    const searchText = searchbar.value.toLowerCase().trim();
    if (searchText !== "") {
        food = food.filter(item => item.name.toLowerCase().includes(searchText));
    }

    let finalcards = food.filter((food) => {

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
                bestsellerMatch = food.bestSeller === true;
            }
            else if(bestsellerFilter.value === "Regular Items") {
                bestsellerMatch = food.bestSeller === false;
            }
        }

        let allergenMatch = true;
        const excludedAllergens = getSelectedExcludedAllergens();
        if (excludedAllergens.length > 0) {
            const itemAllergens = Array.isArray(food.allergens) ? food.allergens : [];
            allergenMatch = !excludedAllergens.some(a => itemAllergens.includes(a));
        }

        return ratingMatch && priceMatch && bestsellerMatch && allergenMatch;
    });

    if (finalcards.length === 0) {
        container.innerHTML = `
            <div class="no-food-message">
                <h3>No dish found</h3>
                <p>Try changing your search or filter options.</p>
            </div>
        `;
        return;
    }

    let html="";

    for (let i of shuffle(finalcards)){
        html+= `<div class="foodcard" data-name="${i.name}">
                        <img src="${i.image}" alt="${i.name}">
                        <div class="foodoptions">
                            <div class="wishbtn"><i style="color:red" class="bi bi-heart"></i></div>
                            <div class="cartbtn"><i style="color:rgb(116, 113, 113)" class="bi bi-cart"></i></div>
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
                        <div class="additions">
                            <div class="allergen-info">
                                <span class="allergen-label">Allergens:</span>
                                <span class="allergen-value">${getAllergenText(i.allergens)}</span>
                            </div>
                            <div class="foodtime">${i.time} min</div>
                        </div>
                        
                </div>
                               `;
    }

    container.innerHTML = html; 
    updateWishlistHearts();
    updateCartIcons();
}

container.addEventListener('click', function(e){
    const card = e.target.closest(".foodcard");
    if (!card) return;
    const name = card.dataset.name;
    if (e.target.closest(".wishbtn")) toggleWishlist(name);
    else if (e.target.closest(".cartbtn")) addToCart(name);
});

for (let id of categorieslist){
    let card = document.getElementById(id); 

    card.addEventListener('click', function(){
        displayCategories = id;
        searchbar.value = "";
        hideSuggestions();
        document.querySelectorAll(".categoriescard").forEach(c => c.classList.remove("activecategory"));
        card.classList.add("activecategory");
        renderFood();
    });
}

applyfilter.addEventListener("click", renderFood);

function getSelectedExcludedAllergens() {
    if (!allergenCheckboxes) return [];
    return Array.from(allergenCheckboxes)
        .filter(cb => cb.checked)
        .map(cb => cb.value);
}

function updateAllergenDropdownLabel() {
    if (!allergenDropdownText) return;
    const selected = getSelectedExcludedAllergens();
    if (selected.length === 0) {
        allergenDropdownText.textContent = "No Exclusions";
    } else {
        allergenDropdownText.textContent = `${selected.length} Excluded`;
    }
}

function setupSingleDropdown(dropdownId, btnId, textId, menuId, inputEl) {
    const dropdown = document.querySelector(dropdownId);
    const btn = document.querySelector(btnId);
    const textSpan = document.querySelector(textId);
    const menu = document.querySelector(menuId);
    if (!dropdown || !btn || !textSpan || !menu || !inputEl) return;

    btn.addEventListener("click", function(e) {
        e.stopPropagation();
        document.querySelectorAll(".custom-dropdown, .custom-multiselect").forEach(d => {
            if (d !== dropdown) d.classList.remove("open");
        });
        document.querySelectorAll(".dropdown-menu, .multiselect-menu").forEach(m => {
            if (m !== menu) m.classList.remove("open");
        });

        dropdown.classList.toggle("open");
        menu.classList.toggle("open");
    });

    const options = menu.querySelectorAll(".dropdown-option");
    options.forEach(opt => {
        opt.addEventListener("click", function(e) {
            e.stopPropagation();
            const val = opt.getAttribute("data-value");
            inputEl.value = val;
            textSpan.textContent = val;
            options.forEach(o => o.classList.remove("selected"));
            opt.classList.add("selected");
            dropdown.classList.remove("open");
            menu.classList.remove("open");
        });
    });
}

setupSingleDropdown("#ratingDropdown", "#ratingDropdownBtn", "#ratingDropdownText", "#ratingMenu", ratingFilter);
setupSingleDropdown("#pricesDropdown", "#pricesDropdownBtn", "#pricesDropdownText", "#pricesMenu", priceFilter);
setupSingleDropdown("#bestsellerDropdown", "#bestsellerDropdownBtn", "#bestsellerDropdownText", "#bestsellerMenu", bestsellerFilter);

if (allergenDropdownBtn) {
    allergenDropdownBtn.addEventListener("click", function(e) {
        e.stopPropagation();
        document.querySelectorAll(".custom-dropdown").forEach(d => d.classList.remove("open"));
        document.querySelectorAll(".dropdown-menu").forEach(m => m.classList.remove("open"));
        allergenMultiselect.classList.toggle("open");
        allergenMenu.classList.toggle("open");
    });
}

if (allergenMenu) {
    allergenMenu.addEventListener("click", function(e) {
        e.stopPropagation();
    });
}

if (allergenCheckboxes) {
    allergenCheckboxes.forEach(cb => {
        cb.addEventListener("change", updateAllergenDropdownLabel);
    });
}

document.addEventListener("click", function(e) {
    document.querySelectorAll(".custom-dropdown, .custom-multiselect").forEach(d => {
        if (!d.contains(e.target)) d.classList.remove("open");
    });
    document.querySelectorAll(".dropdown-menu, .multiselect-menu").forEach(m => {
        if (!m.contains(e.target)) m.classList.remove("open");
    });
});

clearfilter.addEventListener("click", () => {
    ratingFilter.value = "All Ratings";
    const ratingText = document.querySelector("#ratingDropdownText");
    if (ratingText) ratingText.textContent = "All Ratings";
    document.querySelectorAll("#ratingMenu .dropdown-option").forEach(o => {
        o.classList.toggle("selected", o.getAttribute("data-value") === "All Ratings");
    });

    priceFilter.value = "All Prices";
    const pricesText = document.querySelector("#pricesDropdownText");
    if (pricesText) pricesText.textContent = "All Prices";
    document.querySelectorAll("#pricesMenu .dropdown-option").forEach(o => {
        o.classList.toggle("selected", o.getAttribute("data-value") === "All Prices");
    });

    bestsellerFilter.value = "All Items";
    const bestsellerText = document.querySelector("#bestsellerDropdownText");
    if (bestsellerText) bestsellerText.textContent = "All Items";
    document.querySelectorAll("#bestsellerMenu .dropdown-option").forEach(o => {
        o.classList.toggle("selected", o.getAttribute("data-value") === "All Items");
    });

    if (allergenCheckboxes) {
        allergenCheckboxes.forEach(cb => cb.checked = false);
    }
    updateAllergenDropdownLabel();
    displayCategories = "All";
    searchbar.value = "";
    hideSuggestions();
    document.querySelectorAll(".categoriescard").forEach(c => c.classList.remove("activecategory"));
    All.classList.add("activecategory");
    renderFood();
});

let currentIndex = 0;

function displayreviews(start){
    let currentreviews = reviews.slice(start, start+3);
    let reviewshtml = "";

    for (let i of currentreviews){
        reviewshtml += `<div class="reviewscard">
                            <div class="details">
                                <div class="ratings">${i.rating}<i style="color:gold" class="fa-solid fa-star"></i></div>
                                <div class="time">${i.date}</div>
                            </div>
                            <div>${i.review}</div>
                            <div class="orderedfood">Ordered food : ${i.orderedItem}</div>
                        </div>`;
    }
    reviewcardscontainer.innerHTML = reviewshtml;
}

displayreviews(0);

function changeReviews(){
    reviewcardscontainer.classList.add("slide-out");
    setTimeout(() => {
        currentIndex += 3;
        if (currentIndex >= reviews.length) currentIndex = 0;
        displayreviews(currentIndex);
        reviewcardscontainer.classList.remove("slide-out");
    }, 400);
}

let reviewInterval = setInterval(changeReviews, 10000);

reviewcardscontainer.addEventListener("mouseenter", ()=>{
    clearInterval(reviewInterval);
});

reviewcardscontainer.addEventListener("mouseleave", ()=>{
    reviewInterval = setInterval(changeReviews, 10000);
});

let cart = JSON.parse(localStorage.getItem("hg_cart")) || [];
let wishlist = JSON.parse(localStorage.getItem("hg_wishlist")) || [];

function saveCart(){
    localStorage.setItem("hg_cart", JSON.stringify(cart));
}

function saveWishlist(){
    localStorage.setItem("hg_wishlist", JSON.stringify(wishlist));
}

function updateCounts(){
    const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);
    cartcountSpan.textContent = cartCount;
    cartcountNavSpan.textContent = cartCount;
    wishlistcountSpan.textContent = wishlist.length;
    wishlistcountNavSpan.textContent = wishlist.length;
}

function renderCart(){
    if (cart.length === 0){
        cartItemsEl.innerHTML = "";
        cartTotalEl.innerHTML = "";
        emptycart.style.display = "block";
    } else {
        emptycart.style.display = "none";
        let total = 0, html = "";
        for (const item of cart){
            total += item.price * item.qty;
            html += `<div class="cartitem" data-name="${item.name}">
                        <img src="${item.image}" alt="${item.name}">
                        <div class="cartitem-details">
                            <div class="cartitem-name">${item.name}</div>
                            <div class="cartitem-price">₹${item.price}</div>
                            <div class="qtycontrol">
                                <button class="qtyminus">−</button>
                                <span>${item.qty}</span>
                                <button class="qtyplus">+</button>
                            </div>
                        </div>
                        <button class="removeitem"><i class="fa-solid fa-trash"></i></button>
                     </div>`;
        }
        cartItemsEl.innerHTML = html;
        cartTotalEl.innerHTML = `<div class="carttotalrow"><span>Total</span><span>₹${total}</span></div>
                                  <button class="checkoutbtn">Proceed to Checkout</button>`;
    }
    updateCounts();
    updateCartIcons();
}

function renderWishlist(){
    if (wishlist.length === 0){
        wishlistItemsEl.innerHTML = "";
        emptywishlist.style.display = "block";
    } else {
        emptywishlist.style.display = "none";
        let html = "";
        for (const item of wishlist){
            html += `<div class="wishlistitem" data-name="${item.name}">
                        <img src="${item.image}" alt="${item.name}">
                        <div class="wishlistitem-details">
                            <div class="wishlistitem-name">${item.name}</div>
                            <div class="wishlistitem-price">₹${item.price}</div>
                        </div>
                        <button class="addtocartfromwishlist"><i class="fa-solid fa-cart-plus"></i></button>
                        <button class="removeitem"><i class="fa-solid fa-trash"></i></button>
                     </div>`;
        }
        wishlistItemsEl.innerHTML = html;
    }
    updateCounts();
}

function addToCart(name){
    const fooditem = fooditems.find(f => f.name === name);
    if (!fooditem) return;
    const existing = cart.find(c => c.name === name);
    if (existing) existing.qty++;
    else cart.push({ name: fooditem.name, price: fooditem.price, image: fooditem.image, qty: 1 });
    saveCart();
    renderCart();
    updateCartIcons();
}

function removeFromCart(name){
    cart = cart.filter(c => c.name !== name);
    saveCart();
    renderCart();
    updateCartIcons();
}

function toggleWishlist(name){
    const fooditem = fooditems.find(f => f.name === name);
    if (!fooditem) return;
    const idx = wishlist.findIndex(w => w.name === name);
    if (idx > -1) wishlist.splice(idx, 1);
    else wishlist.push({ name: fooditem.name, price: fooditem.price, image: fooditem.image });
    saveWishlist();
    renderWishlist();
    updateWishlistHearts();
}

function updateWishlistHearts(){
    document.querySelectorAll(".foodcard").forEach(card => {
        const name = card.dataset.name;
        const heart = card.querySelector(".wishbtn i");
        const wishBtn = card.querySelector(".wishbtn");
        if (!heart) return;
        const saved = wishlist.some(w => w.name === name);
        heart.classList.toggle("bi-heart-fill", saved);
        heart.classList.toggle("bi-heart", !saved);
        wishBtn.classList.toggle("active", saved);
    });
}

function updateCartIcons(){
    document.querySelectorAll(".foodcard").forEach(card => {
        const name = card.dataset.name;
        const cartI = card.querySelector(".cartbtn i");
        const cartBtn = card.querySelector(".cartbtn");
        if (!cartI) return;
        const inCart = cart.some(c => c.name === name);
        cartI.classList.toggle("bi-cart-fill", inCart);
        cartI.classList.toggle("bi-cart", !inCart);
        cartBtn.classList.toggle("active", inCart);
    });
}

function openDrawer(drawer){
    document.querySelectorAll(".sidedrawer").forEach(d => d.classList.remove("open"));
    drawer.classList.add("open");
    overlay.classList.add("show");
}
function closeDrawers(){
    document.querySelectorAll(".sidedrawer").forEach(d => d.classList.remove("open"));
    overlay.classList.remove("show");
}

cartIcon.addEventListener('click', () => openDrawer(cartDrawer));
wishlistIcon.addEventListener('click', () => openDrawer(wishlistDrawer));
profileIcon.addEventListener('click', () => openDrawer(profileDrawer));
overlay.addEventListener('click', closeDrawers);
document.querySelectorAll(".closedrawer").forEach(btn => btn.addEventListener('click', closeDrawers));
document.querySelectorAll(".exploremenu").forEach(btn => btn.addEventListener('click', () => {
    closeDrawers();
    menuSection.scrollIntoView();
}));

cartItemsEl.addEventListener('click', function(e){
    const itemEl = e.target.closest(".cartitem");
    if (!itemEl) return;
    const name = itemEl.dataset.name;
    if (e.target.closest(".qtyplus")){
        const it = cart.find(c => c.name === name);
        it.qty++;
        saveCart(); renderCart();
    } else if (e.target.closest(".qtyminus")){
        const it = cart.find(c => c.name === name);
        it.qty--;
        if (it.qty <= 0) cart = cart.filter(c => c.name !== name);
        saveCart();
        renderCart();
    } else if (e.target.closest(".removeitem")){
        removeFromCart(name);
    }
});

wishlistItemsEl.addEventListener('click', function(e){
    const itemEl = e.target.closest(".wishlistitem");
    if (!itemEl) return;
    const name = itemEl.dataset.name;
    if (e.target.closest(".addtocartfromwishlist")) addToCart(name);
    else if (e.target.closest(".removeitem")) toggleWishlist(name);
});

let slideIndex = 0;

function showSlide(index){
    slides.forEach(s => s.classList.remove("active"));
    slideIndex = (index + slides.length) % slides.length;
    slides[slideIndex].classList.add("active");
}

prevBtn.addEventListener('click', () => showSlide(slideIndex - 1));
nextBtn.addEventListener('click', () => showSlide(slideIndex + 1));

const toggle = document.querySelector("#toggle");

if (localStorage.getItem("hg_theme") === "dark") {
    document.body.classList.add("dark");
    toggle.classList.remove("fa-sun");
    toggle.classList.add("fa-moon");
}

toggle.addEventListener('click', function () {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    toggle.classList.toggle("fa-sun", !isDark);
    toggle.classList.toggle("fa-moon", isDark);
    localStorage.setItem("hg_theme", isDark ? "dark" : "light");
});

if (dateInput) {
    const today = new Date().toISOString().split("T")[0];
    dateInput.min = today;
    
    const maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 30);
    const maxDateString = maxDate.toISOString().split("T")[0];
    dateInput.max = maxDateString;
}

if (reserveForm) {
    reserveForm.addEventListener('submit', function(e){
        e.preventDefault();

        const name = document.querySelector("#name").value;

        const successMsg = document.createElement('div');
        successMsg.className = 'successMsg';    
        successMsg.textContent = `Table Reserved Successfully for ${name}!`;
        reserveSection.appendChild(successMsg);

        setTimeout(() => {
            successMsg.remove();
        }, 3000);

        reserveForm.reset();
    });
}

renderFood();
renderCart();
renderWishlist();