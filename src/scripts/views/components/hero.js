class hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <article class="hero">
    <picture class="hero-bg">
        <source media="(max-width: 600px)" srcset="./../images/heros/hero-image_2-small.jpg">
        <img src='./../images/heros/hero-image_2-large.jpg' 
             alt="restaurant hero background">
      </picture>
    <div class="overlay"></div>
    <h1>Food Spot</h1>
    <span>Good Meal Good Place</span>
    </article>
      `;
  }
}

customElements.define('hero-element', hero);
