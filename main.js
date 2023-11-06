// ---- Exercise 1 ---- 


// const sub = (a, b) => a - b;

// console.log(sub(12, 2));




// ---- Exercise 2 ----


// const student = {

//     studName: 'Allen',

//     studAge: 16,

//     info: function() {
        
//         return `Name: ${this.studName} \nAge: ${this.studAge}`;
//     },

//     grow: function(n) {

//         this.studAge += n;
//     },
// }

// student.grow(1);

// console.log(student.info());





// ---- Exercise 3 ----


// window.addEventListener ('load', () => {

//     let mrDiv = document.getElementById('mrDiv');

//     mrDiv.innerHTML = '<h1>Hi, I came from JS Universe!</h1>';

//     mrDiv.innerText = `It's still me, Mr Div`;
// })



// ---- Exercise 4 ----


// const teams = ['Heat', 'Magic', 'Bulls']

// window.addEventListener ('load', () => {

//     const mrDiv = document.getElementById('mrDiv');

//     const jsUl = document.createElement('ul');

//     for (let i = 0; i < teams.length; i ++) {

//         const jsLi = document.createElement('li');

//         jsLi.innerText = teams[i];

//         jsUl.appendChild(jsLi);
//     }

//     mrDiv.appendChild(jsUl);

//     const afterLi = document.createElement('li');

//     afterLi.innerText = 'Nuggets';

//     jsUl.appendChild(afterLi);

//     const beforeLi = document.createElement('li');

//     beforeLi.innerText = 'Lakers';

//     jsUl.insertBefore(beforeLi, jsUl.firstChild);
// })





// ---- Exercise 5 ----


// window.addEventListener ('load', () => {

//     const mrDiv = document.getElementById('mrDiv');

//     mrDiv.classList.add('blue');

//     mrDiv.addEventListener ('click', function() {

//         if (this.classList.contains('blue')) {

//             this.classList.add('red');

//             this.classList.remove('blue');
//         }
//     })
// })





// ---- Exercise 6 ----


// window.addEventListener ('load', () => {

//     const jsButton = document.getElementById('mrButton');

//     jsButton.addEventListener ('click', function () {

//         this.setAttribute('disabled', '');
//     })

// })





// ---- Exercise 7 ----


// window.addEventListener ('load', () => {

//     const mrDiv = document.getElementById('mrDiv');

//     mrDiv.addEventListener ('mouseover', function () {

//         this.style.backgroundColor = 'rgba(255,0,0,0.85)';
//     })

//     mrDiv.addEventListener ('mouseout', function () {

//         this.style.backgroundColor = 'unset';
//     })

//     mrDiv.addEventListener ('click', () => {

//         console.log('Great Job!')
//     })

// })
