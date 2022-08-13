const changeColor = () => {
    return `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
}

document.getElementById("name").style.color = changeColor();
document.getElementById("gen").style.color = changeColor();


