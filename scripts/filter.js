const filterSections = [...document.getElementsByClassName('filter-item')];

console.log(filterSections, 'filter sections');

filterSections.forEach((item) => {
    item.children[0].addEventListener('click', (event) => {
        console.log('animate');
        console.log(item.children[0].offsetHeight, 'first child height');
        console.log(item.offsetHeight, 'item offsetHeight');
        if (item.offsetHeight !== item.children[0].offsetHeight + 16) {
            item.animate([
                { height: item.offsetHeight + 'px' },
                { height: item.children[0].offsetHeight + 16 + 'px' }
            ], {fill: 'forwards', duration: 200});
            item.children[0].children[1].children[0].animate( [
                { transform: 'rotate(0deg)'},
                { transform: 'rotate(180deg)'},
            ], {duration: 200, fill: 'forwards'});
            setTimeout(() => {item.children[1].display = 'none'}, 200)
        } else {
            item.animate([
                { height: item.children[0].offsetHeight + 16 + 'px' },
                { height: item.children[0].offsetHeight + item.children[1].offsetHeight + 16 + 40 + 'px' },
            ], {fill: 'forwards', duration: 200});
            item.children[0].children[1].children[0].animate( [
                { transform: 'rotate(180deg)'},
                { transform: 'rotate(0deg)'},
            ], {fill: 'forwards', duration: 200});
        }
    })
})