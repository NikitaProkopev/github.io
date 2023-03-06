

function setBorderToItemsSelection(className, startIndex) {
    let images = document.getElementsByClassName(className);
    if (images && images.length) {
        images[startIndex ? startIndex : 0].style.outline = '1px solid black';
        images[startIndex ? startIndex : 0].style.outlineOffset = '-1px';

        for (const img of images) {
            img.addEventListener('click', (event) => {
                [...images].forEach((item) => {
                    item.style.outlineOffset = '';
                    item.style.outline = '';
                })

                img.style.outline = '1px solid black';
                img.style.outlineOffset = '-1px';
            })
        }
    }
}


setBorderToItemsSelection('color-type', 1);
setBorderToItemsSelection('img-select');

