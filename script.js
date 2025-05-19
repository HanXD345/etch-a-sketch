const container = document.querySelector(".container");

// Create '*' x '*' number of boxes in etch a sketch
function createBoxes(num) {
    for (let i = 0; i < num; i++) {
        const rowContainer = document.createElement("div");
        rowContainer.className = "row-container";
        for (let j = 0; j < num; j++) {
            const boxContainer = document.createElement("div");
            boxContainer.className = "box-container";
            rowContainer.append(boxContainer);
        };
        container.append(rowContainer);
    };

    const boxContainer = document.querySelectorAll(".box-container");

    // Create event listener for each box, and change
    // background color to blue if mouse is over
    for (let box of boxContainer) {
        console.log(box)
        box.addEventListener("mouseover", () => {
            const random_red = Math.floor(Math.random() * 256);
            const random_green = Math.floor(Math.random() * 256);
            const random_blue = Math.floor(Math.random() * 256);
            if (box.style.backgroundColor === "") {
                box.style.backgroundColor = `rgb(${random_red}, ${random_green}, ${random_blue})`;
            } else {
                const currentOpacity = box.style.opacity;
                console.log(currentOpacity)
                if (currentOpacity === "") {
                    box.style.opacity = `0.9`;
                } else {
                    box.style.opacity = `${currentOpacity - 0.1}`
                }
            }
        })
    }
}

// Create a 10 x 10 grid as a starting point
createBoxes(10);

const textBar = document.querySelector(".text-bar");
const submitButton = document.querySelector(".submit-button");

// If user submits a valid number between 1 and 100, 
// creates a new grid with that size
submitButton.addEventListener("click", () => {
    let value = Number(textBar.value);

    if (isNaN(value)) {
        alert("Please provide a valid number between 1 and 100!")
    } else {
        value = Number(value)

        if (value > 100) {
            alert("Must provide a number less than 100!");
        } else if (value <= 0) {
            alert("Must provide a number greater than 0!");
        } else {
            document.querySelector(".container").innerHTML = "";
            createBoxes(value);
        }
    }
})