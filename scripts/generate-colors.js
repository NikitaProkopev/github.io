const colors = [
    '#C5DCE4', '#8AC2D7', '#7CA8D3', '#273270', '#EED59F',
    '#E1883A', '#97518D', '#ECC59E', '#EABC47', '#F3EDD7',
    '#6B5290', '#473277', '#B62D73', '#428A91', '#2B657D',
    '#E8CBBB', '#749249', '#D66364', '#DF928A', '#DF928A'
]

function generateColors(id, colorsArray) {
    console.log(id, 'id');
    let container = document.getElementById(id);
    console.log(container)

    colorsArray.forEach((color) => {
        const colorWrapper = document.createElement('div');
        colorWrapper.className = 'color-type';

        const coloredBlock = document.createElement('div');
        coloredBlock.style.backgroundColor = color;

        colorWrapper.appendChild(coloredBlock);

        container.appendChild(colorWrapper);
    });
    setBorderToItemsSelection('color-type', 7);
}

generateColors('product-colors', colors);