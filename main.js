const swiperE2 = document.getElementById('swiper2')

Object.assign(swiperE2, {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        clickable: true,
    },
    breakpoints: {
        500: {
            slidesPerView: 1,
            spaceBetween: 40,
        },
        750: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        800: {
            slidesPerView: 2,
            spaceBetween: 0,
        },
        1000: {
            slidesPerView: 3,
            spaceBetween: 0,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
    },
});

swiperE2.initialize();

const swiperE3 = document.getElementById('swiper3')

Object.assign(swiperE3, {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        clickable: true,
    },
    breakpoints: {
        500: {
            slidesPerView: 1,
            spaceBetween: 40,
        },
        750: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        800: {
            slidesPerView: 2,
            spaceBetween: 0,
        },
        1000: {
            slidesPerView: 3,
            spaceBetween: 0,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
    },
});

swiperE3.initialize();

const menuBtn = document.querySelector(".menu-icon span");
const searchBtn = document.querySelector(".search-icon");
const cancelBtn = document.querySelector(".cancel-icon");
const items = document.querySelector(".nav-items");
const form = document.querySelector("form");
menuBtn.onclick = () => {
    items.classList.add("active");
    menuBtn.classList.add("hide");
    searchBtn.classList.add("hide");
    cancelBtn.classList.add("show");
};
cancelBtn.onclick = () => {
    items.classList.remove("active");
    menuBtn.classList.remove("hide");
    searchBtn.classList.remove("hide");
    cancelBtn.classList.remove("show");
    form.classList.remove("active");
    cancelBtn.style.color = "black";
};
searchBtn.onclick = () => {
    form.classList.add("active");
    searchBtn.classList.add("hide");
    cancelBtn.classList.add("show");
};


const reviews = [
    {
        id: 1,
        name: "محمد خالد",
        job: "المشتري",
        img:
            "Images/PerOne.avif",
        text:
            "شغل جبار ومبهر موقعي الالكتروني تغير ١٨٠ درجة للأفضل انصح الكل بالتعامل معاه انسان امين ومخلص في انجاز العمل بأفضل شكل الله يبارك لك ويزيدك يارب"
    },
    {
        id: 2,
        name: "ديفيد جورج",
        job: "المشتري",
        img:
        "Images/PerTwo.avif",
        text:
            "ممتاز جداً عمل رائع"
    },
    {
        id: 3,
        name: "يوسف اسماعيل",
        job: "المشتري",
        img:
        "Images/PerThree.avif",
        text:
            " شُكرًا جزيلًا للأخ كان مُتعاون جيد جدًا بارك الله فيك"
    },
];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", () => {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
});

// show person based on item
function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

// show next person
nextBtn.addEventListener("click", () => {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
});

// show prev person
prevBtn.addEventListener("click", () => {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
});