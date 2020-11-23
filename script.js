// generate random hex color background
// https://css-tricks.com/snippets/javascript/random-hex-color/

const button = document.querySelector('#genNew');
const b = document.querySelector('body'); 
const printHex = document.querySelector('#color'); 

function setBg() {
    // generate random hex color
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    // add random color to page background
    b.style.background = "#" + randomColor;
    // add same random color to hex code
    printHex.style.color = "#" + randomColor;
    // print out actual hex color selected
    printHex.innerHTML = "#" + randomColor;
}

button.addEventListener('click', setBg);
// call setBg() to generate a starting color + hex
setBg();


// copy hex color to clipboard
// https://www.w3docs.com/tools/code-editor/6019

const copyText = document.getElementById('copyBtn');
copyText.addEventListener("click", copyColor);

function copyColor() {
    let text = document.getElementById("color").value;
    navigator.clipboard.writeText(text)
        .then(() => {
        alert('Color copied to clipboard!');
        })
        .catch(err => {
        alert('Error in copying text: ', err);
        });
    }        



// Select colors from preset array

// const colors = ['#ffffff', 'darkorange', '#87C1D5', '#0091D1', '#FFD500', '#E5E5E5']; 
// // const colors = ['#ffffff', '#019D97', '#FFDE59', '#642EC7', '#0091D1']; 

// const x = document.querySelector('#button');
// x.addEventListener('click', bg_color);

// function bg_color() {
//     // selecting random color from color array 
//     const random_color = colors[Math.floor(Math.random() * colors.length)]; 
//     // select DOM element and add backgroundColor
//     const x = document.querySelector('body'); 
//     x.style.backgroundColor = random_color;
// }


// https://blog.jayantsingh.in/2018/01/22/howto-generate-random-color-values-in-javascript/
// function getRandomColorHex() {
//     const colorLetters = '0123456789ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//         color += colorLetters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }