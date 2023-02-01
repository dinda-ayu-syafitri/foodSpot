class navbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="appBar">
      <div class="brand">
        <i class="fa-solid fa-utensils"></i><span>Food Spot</span>
      </div>
      <button id="nav-icon">
      <i class="fa-solid fa-bars"></i>
      </button>

    </div>
    <!-- Offset Nav -->
    <nav id="offsetNav" class="">
      <ul>
        <li><a href="#/">Home</a></li>
        <li><a href="#/favourite">Favourite Resto</a></li>
        <li><a href="https://github.com/dinda-ayu-syafitri">About Us</a></li>
      </ul>
    </nav>
    <!-- Regular Nav -->
    <nav id="regNav" class="container">
      <ul>
        <li>
          <a href="index.html" class="brand"
            ><i class="fa-solid fa-utensils"></i>Food Spot</a
          >
        </li>
        <li><a href="#/">Home</a></li>
        <li><a href="#/favourite">Favourite Resto</a></li>
        <li><a href="https://github.com/dinda-ayu-syafitri">About Us</a></li>
      </ul>
    </nav>
        `;
  }
}

customElements.define('nav-bar', navbar);
