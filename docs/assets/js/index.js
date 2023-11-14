function spinner(text) {
    const width = window.innerWidth;
    var TO = 20;
    
    if (width > 913 && width < 1199) {
        TO = 25;
    } else if (width > 767 && width <= 913) {
        TO = 26;
    } else if (width > 500 && width <= 767) {
        TO = 35;
    } else if (width > 0 && width <= 500) {
        TO = 45;
    } else {
        TO = 20;
    }
    
    text.innerHTML = text.innerText.split("").map(
        (char, i) => 
            `<span style="
                transform: rotate(${i * 6}deg); 
                position: absolute; 
                left: 50%;
                transform-origin: 0 ${TO}vw;
            ">${char}</span>`
    ).join("");
}