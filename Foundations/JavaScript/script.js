// let n = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));
// for(i=1;i<=n;i++){
//     if (i%3==0 & i%5==0){
//         console.log("FizzBizz")
//     }
//     else if (i%3==0){
//         console.log("Fizz");
//     }
//     else if (i%5==0){
//         console.log("Bizz");
//     }
//     else{
//         console.log(i);
//     }
// }



// --> Exercise from Loops and Arrays
// arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// function sumOfTripleEven(arr){
//     return arr
//     .filter(num => num%2===0)
//     .map(num => num*3)
//     .reduce((acc, curr) => acc + curr)
// }

// console.log(sumOfTripleEven(arr));


// function camelize(str){
//     const arr = str.split("-")
//     const result = arr.map((st, index) => {
//         if (index ===0 && st!==""){
//             return st
//         }
//         return st.charAt(0).toUpperCase() + st.slice(1)
//     })
//     return result.join("")
// }

// console.log(camelize("-webkit-transition"))

const container = document.querySelector("#container")

const para = document.createElement("p")
para.textContent = "Hey I'm Red!"
para.style.color = "red"

const headThree = document.createElement("h3")
headThree.textContent = "Hey I'm Blue"
headThree.style.color = "blue"

const div = document.createElement("div")
div.setAttribute("style", "border: solid; background-color: pink")
const h = document.createElement("h1")
h.textContent = "I'm a div"
const p = document.createElement("p")
p.textContent = "ME TOO!"

div.appendChild(h)
div.appendChild(p)

container.appendChild(para)
container.appendChild(headThree)
container.appendChild(div)