class CardNews extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: open });
        shadow.innerHTML = "<p>Maçã Vermelha</p>";
    }
}

customElements.define("card-news",CardNews);