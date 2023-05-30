const toggle = document.querySelector(".label");
const monthly = document.querySelector(".monthly");
const yearly = document.querySelector(".yearly");

toggle.addEventListener("click", () => {
    const computedStyles = getComputedStyle(toggle);
    const color = computedStyles.backgroundColor;

    console.log(color)

    if(color === "rgb(128, 128, 128)") {
        monthly.style.color = "hsl(231, 11%, 63%)";
        yearly.style.color = "hsl(213, 96%, 18%)";
    } else if (color === "rgb(2, 41, 90)") {
        monthly.style.color = "hsl(213, 96%, 18%)";
        yearly.style.color = "hsl(231, 11%, 63%)";
    }

})