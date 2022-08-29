const changeColor = () => {
    return `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
}
console.log('Hello')
document.getElementById("name").style.color = changeColor();
document.getElementById("gen").style.color = changeColor();


