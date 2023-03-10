const menu = [
    {
        id: 1,
        title: "alcha kik",
        category: "breakfast",
        price: "$5.99",
        img: "./images/alchakik.jpg",
        desc: `I'm baby woke milkshk wolf bitters live-edge blue bottle hammock freegan copper mug whatever cold-pressure`,
    },
    {
        id: 2,
        title: "asa tibs",
        category: "lunch",
        price: "$13.99",
        img: "./images/asa.jpg",
        desc: `I'm baby woke milkshk wolf bitters live-edge blue bottle hammock freegan copper mug whatever cold-pressure`,
    },
    {
        id: 3,
        title: "beyaynet",
        category: "breakfast",
        price: "$10.99",
        img: "./images/beyeaynet.jpg",
        desc: `I'm baby woke milkshk wolf bitters live-edge blue bottle hammock freegan copper mug whatever cold-pressure`,
    },
    {
        id: 4,
        title: "doro wote",
        category: "dinner",
        price:" $25.99",
        img: "./images/dorowot.jpg",
        desc: `I'm baby woke milkshk wolf bitters live-edge blue bottle hammock freegan copper mug whatever cold-pressure`,
    },
    {
        id: 5,
        title: "enkulal tibs",
        category: "breakfast",
        price: "$13.99",
        img: "./images/eggattack.jpg",
        desc: `I'm baby woke milkshk wolf bitters live-edge blue bottle hammock freegan copper mug whatever cold-pressure`,
    },
    {
        id: 6,
        title: "gacha tibs",
        category: "lunch",
        price:" $30.99",
        img: "./images/gachatibs.jpg",
        desc: `I'm baby woke milkshk wolf bitters live-edge blue bottle hammock freegan copper mug whatever cold-pressure`,
    },
    {
        id: 7,
        title: "key wote",
        category: "lunch",
        price: "$27.99",
        img: "./images/keywot.jpg",
        desc: `I'm baby woke milkshk wolf bitters live-edge blue bottle hammock freegan copper mug whatever cold-pressure`,
    },
    {
        id: 8,
        title: "merek",
        category: "dinner",
        price: "$15.99",
        img: "./images/merek.jpg",
        desc: `I'm baby woke milkshk wolf bitters live-edge blue bottle hammock freegan copper mug whatever cold-pressure`,
    },
    {
        id: 9,
        title: "tibs",
        category: "lunch",
        price: "$43.99",
        img: "./images/tibs.jpg",
        desc: `I'm baby woke milkshk wolf bitters live-edge blue bottle hammock freegan copper mug whatever cold-pressure`,
    },
    {
        id: 10,
        title: "sga wote",
        category: "dinner",
        price: "$32.99",
        img: "./images/sgawote.jpg",
        desc: `I'm baby woke milkshk wolf bitters live-edge blue bottle hammock freegan copper mug whatever cold-pressure`,
    },
    {
        id: 10,
        title: "ye buna kurs",
        category: "additionalservices",
        price: "$10.99",
        img: "./images/buna.jpg",
        desc: `I'm baby woke milkshk wolf bitters live-edge blue bottle hammock freegan copper mug whatever cold-pressure`,
    },
    {
        id: 10,
        title: "juice",
        category: "additionalservices",
        price: "$12.99",
        img: "./images/juice.jpg",
        desc: `I'm baby woke milkshk wolf bitters live-edge blue bottle hammock freegan copper mug whatever cold-pressure`,
    },
    {
        id: 11,
        title: "alchol",
        category: "additionalservices",
        price: "$3.99",
        img: "./images/juice.jpg",
        desc: `I'm baby woke milkshk wolf bitters live-edge blue bottle hammock freegan copper mug whatever cold-pressure`,
    },
];
const sectionCenter = document.querySelector(".section-center")
const container = document.querySelector(".btn-container");


window.addEventListener("DOMContentLoaded", function(){
    displayMenuItems(menu);
    const categories = menu.reduce(function(values, item){
        if (!values.includes(item.category)){
            values.push(item.category);
        }
        return values;
    },
    ["all"]
    );

    const categorybtns = categories.map(function(category){
        return `<button class="filter-btn" type = "button"
        data-id=${category}>
               ${category}
        </button>`;
    })
    .join("");
    container.innerHTML = categorybtns;
    const filter_btn = container.querySelectorAll(".filter-btn");
    filter_btn.forEach(function(btn){
        btn.addEventListener("click",function(e){
            // console.log(e.currentTarget.dataset);
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter(function(menuItem){
                // console.log(menuItem.category)
                if(menuItem.category === category){
                    return menuItem;
                }
            });
            if(category === "all"){
                displayMenuItems(menu);
            }
            else{
                displayMenuItems(menuCategory);
            }
        });
    });
});



function displayMenuItems(menuItems){
    let displayMenu = menuItems.map(function(item){
        // console.log(item);
        return  `<article class="menu-item">
        <img src="${item.img}" class="photo" alt=${item.title}"/>
        <div class="item-info">
            <header>
                <h4>${item.title}</h4>
                <h4 class="price">${item.price}</h4>
            </header>
            <p class="item-text">${item.desc}</p>
        </div>
    </article>`;
    });
    // console.log(displayMenu);
    displayMenu = displayMenu.join("");
    sectionCenter.innerHTML = displayMenu;
}