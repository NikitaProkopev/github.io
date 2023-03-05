class MenuComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <nav id="menu">
                <div class="desktop-menu">
                    <div class="first-part">
                        <img src="./assets/pictures/logo.svg" alt="logo image" class="menu-logo">
                        <div class="menu-search-wrapper">
                            <img src="./assets/pictures/search.svg" alt="logo image" class="menu-search-img">
                            <input type="text" class="menu-search-input" placeholder="Search by brands, items ..." />
                        </div>
                        <div class="menu-navigation">
                            <ul>
                                <li class="menu-item">SHOP</li>
                                <li class="menu-item">MAGAZINE</li>
                                <li class="menu-item">ABOUT</li>
                                <li class="menu-item">HELP</li>
                                <li class="menu-item">
                                    <img src="./assets/pictures/bag.svg" alt="bag image">
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="second-part">
                        <div class="categories-wrapper">
                            <div class="categories menu-navigation">
                                <ul>
                                    <li class="menu-item">WOMEN</li>
                                    <li class="menu-item">MAN</li>
                                    <li class="menu-item">SHOES</li>
                                    <li class="menu-item">BAGS</li>
                                    <li class="menu-item">HOME & LIVING</li>
                                    <li class="menu-item">BEATY</li>
                                    <li class="menu-item">KIDS</li>
                                    <li class="menu-item">BRANDS</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mobile-menu">
                    <div class="mobile-menu-wrapper">
                        <div class="menu-burger closed"></div>
                        <div class="logo-wrapper">
                            <img src="./assets/pictures/logo.svg" alt="logo image" class="menu-logo">
                        </div>
                        <img src="../assets/pictures/bag.svg" alt="bag image">
                    </div>
                    <div class="mobile-menu-search">
                        <div class="menu-search-wrapper">
                            <img src="./assets/pictures/search.svg" alt="logo image" class="menu-search-img">
                            <input type="text" class="menu-search-input" placeholder="Search by brands, items ..." />
                        </div>    
                    </div>
                </div>
            </nav>
    `;
    }
}

customElements.define('menu-component', MenuComponent);