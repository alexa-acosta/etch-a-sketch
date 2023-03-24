const container = document.querySelector(".container");

function buildGrid(gridSize = 16) {
    const divContainer = document.createElement('div');
    divContainer.className = "container_child";

    const grid = Array(gridSize**2).fill(divContainer);
    container.replaceChildren(...grid);
}

buildGrid(2);