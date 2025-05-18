const container = document.querySelector(".container");

for (let i = 0; i < 12; i++) {
    const rowContainer = document.createElement("div");
    rowContainer.className = "row-container";
    for (let j = 0; j < 12; j++) {
        const boxContainer = document.createElement("div");
        boxContainer.className = "box-container"
        rowContainer.append(boxContainer);
    };
    container.append(rowContainer);
};