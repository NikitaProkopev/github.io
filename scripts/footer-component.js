class FooterComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <footer class="footer">
            <div class="footer-title">
                <img src="./assets/pictures/logo.svg" alt="logo image" class="menu-logo desktop">
                <div class="mobile">
                    <img src="./assets/pictures/logo.svg" alt="logo image" class="menu-logo">
                </div>
                <p>The Smartest Way To Shop For Your Favorite Brands</p>
            </div>
            <div class="footer-content">
                <div class="footer-content-item">
                    <p>SHOP</p>
                    <ul>
                        <li>Home</li>
                        <li>Shop Men's</li>
                        <li>Shop Women's</li>
                        <li>Shop Kids</li>
                        <li>Shop Home & Living</li>
                    </ul>
                </div>
                <div class="footer-content-item">
                    <p>COMPANY</p>
                    <ul>
                        <li>About Us</li>
                        <li>Shipping Policy</li>
                        <li>Return Policy</li>
                        <li>Terms of Service</li>
                        <li>Privacy Policy</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div class="footer-content-item footer-content-item-contact">
                    <p>CONTACT</p>
                    <ul>
                        <li>help@soxy.com</li>
                    </ul>
                </div>
            </div>
        </footer>
        <div class="rights">© 2023 Soxy. All rights reserved</div>
        `;
    }
}

customElements.define('footer-component', FooterComponent);