class hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <article class="hero">
    <h1>Food Spot</h1>
    <span>Good Meal Good Place</span>
    </article>
      `;
  }
}

customElements.define('hero-element', hero);
