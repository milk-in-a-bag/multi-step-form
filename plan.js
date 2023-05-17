const toggle = document.querySelector(".label");
const monthly = document.querySelector(".monthly");
const yearly = document.querySelector(".yearly");

toggle.addEventListener("click", () => {
    const computedStyles = getComputedStyle(toggle);
    const color = computedStyles.backgroundColor;

    console.log(color)

    if(color === "rgb(128, 128, 128)"){
        monthly.style.color = "gray";
        yearly.style.color = "black";
    } else if (color === "rgb(186, 218, 85)"){
        monthly.style.color = "black";
        yearly.style.color = "gray";
    }

})