const getColor = () => {
    // Hex Code number
    // create a const random number
  const randomNumber =Math.floor(Math.random()*16777215);
const randomCode = "#" + randomNumber.toString(16);
document.body.style.backgroundColor = randomCode;
document.getElementById("color-code").innerText=randomCode;
console.log(randomNumber,randomCode)
}

// Event call

document.getElementById("btn").addEventListener(
  "click",
  getColor
  )

// initial call
getColor();