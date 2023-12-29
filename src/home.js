export function setHome(element) {
    element.innerHTML = `<div class="navbar">
    <div class="nav-title">
      <h1>Lazeez Express</h1>
    </div>
    <div class="nav-item">
      <ul>
      <li id="home" class="active">Home</li>
      <li id="menu">Menu</li>
      <li id="contact">Contact</li>
      </ul>
    </div>
  </div>
  <div class="container info">
    <p>Food that makes you happy</p>
    <p>Made with passion since XXXX</p>
    <img class="logo" src="./img/logo-no-background.png" alt="Food image" />
    <p>Order Online or Visit Us!</p>
  </div>`
};



