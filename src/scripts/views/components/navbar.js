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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        id="nav-icon"
        tabindex="0"
      >
        <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
        <path
          fill="#fff"
          d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
        />
      </svg>
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
