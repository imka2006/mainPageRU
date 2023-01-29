const burger = document.querySelector(".burger")
const burgerMenu = document.querySelector(".burger-menu")
const body = document.querySelector("body")

burgerMenu.addEventListener("click", () => {
    burger.classList.toggle("active")
    if (burger.classList.contains("active")) {
        body.style.overflow = "hidden"
    } else {
        body.style.overflow = "unset"
    }
})


const items = [
    {
        id:0,
        img:"img1",
        name:"Создавайте турниры",
        descr:"Создавайте свои собственные уникальные турнирные игры и выигрывайте реальные призы!",
        vs:false,
    },
    {
        id:1,
        img:"img2",
        name:"Поиск товарищей по команде",
        descr:"Присоединяйтесь к нашему сообществу, чтобы найти лучших товарищей по команде и создать лучшую команду!",
        vs:false,
    },
    {
        id:2,
        img:"img3",
        name:"Поиск тренера",
        descr:"Не знаете, как начать? Нет проблем, вы можете найти лучшего тренера для вас!",
        vs:false,
    },
    {
        id:3,
        img:"img4",
        name:"Возможность стать ПРО",
        descr:"Покажите, на что вы способны с PUSK!",
        vs:true,
    },

]

const mainWrapper = document.querySelector(".main-wrapper")

for (let i = 0; i < items.length; i++) {
    mainWrapper.innerHTML += `
    <div class="main-content">
        <div class="main-block">
            <img src="./img/main/${items[i].img}.svg" alt="img" class="main-img">
            <div class="main-info">
                <h2 class="main-name">${items[i].name}</h2>
                <p class="main-descr">${items[i].descr}</p>
            </div>
        </div>
        <img src="./img/main/shere.svg" alt="shere" class="main-shere">
    </div>
    `;
}