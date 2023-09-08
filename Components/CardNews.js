class CardNews extends HTMLElement {
    constructor () {
        super();

        const shadow = this.attachShadow({ mode: open });
        shadow.innerHTML = "<h1>Hello</h1>"

    }

    build() {
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card")

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", card__Left);

        const autor = document.createAttribute("span");
        const linkTitle = document.createElement("a");
        const newsContent = document.createElement("p");

        cardLeft.appendChild(autor);
        linkTitle.appendChild(linkTitle);
        newsContent.appendChild(newsContent);
        

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", card__Right)

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot
    }

    style() {}
}

customElements.define("card-news", CardNews);