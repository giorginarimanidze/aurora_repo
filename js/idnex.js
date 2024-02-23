

const myElement = document.querySelectorAll('.child__divtitles');
const myTitles = document.querySelectorAll('.div__title');
const firstArrow = document.querySelector('.firsticon__burger');
const secondArrow = document.querySelector('.fa-angle-up');
const firstMenu = document.querySelector(".first__burgermenu");



firstArrow.addEventListener("click", () => {
    firstMenu.style.display = "block";
    firstArrow.style.display = "none";
    secondArrow.style.display = "block";

});

secondArrow.addEventListener("click", () => {
    firstMenu.style.display = "none";
    secondArrow.style.display = "none";
    firstArrow.style.display = "block";
});



let buttonChanger = function () {

    myElement.forEach(myElement => {
        myElement.addEventListener("click", () => {
            document.querySelector('.first__divtitles')?.classList.remove('first__divtitles');
            myElement.classList.add('first__divtitles');
        })
    });
};

let titleChanger = function () {

    myTitles.forEach(myTitles => {
        myTitles.addEventListener('click', () => {
            document.querySelector('.firstdiv__h4')?.classList.remove('firstdiv__h4');
            myTitles.classList.add('firstdiv__h4');
        })
    })

};



buttonChanger();

titleChanger();





// const btn = document.getElementById('box');
// const btn2 = document.getElementById('box1');
// const btn3 = document.getElementById('box2');
// const btn4 = document.getElementById('box3');
// const btn5 = document.getElementById('box4');
// const btn6 = document.getElementById('box5');





// const changeBtn = function () {
//     btn.addEventListener('click', () => {
//         btn.classList.toggle("first__divtitles")
//     });

//     btn2.addEventListener('click', () => {
//         btn2.classList.toggle("first__divtitles")
//     });

//     btn3.addEventListener('click', () => {
//         btn3.classList.toggle("first__divtitles")
//     });

//     btn4.addEventListener('click', () => {
//         btn4.classList.toggle("first__divtitles")
//     });

//     btn5.addEventListener('click', () => {
//         btn5.classList.toggle("first__divtitles")
//     });

//     btn6.addEventListener('click', () => {
//         btn6.classList.toggle("first__divtitles")
//     });
// };

// changeBtn();
