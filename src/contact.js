export function setContact(element) {
    element.innerHTML = `<div class="navbar">
    <div class="nav-title">
      <h1>Lazeez Express</h1>
    </div>
    <div class="nav-item">
      <ul>
        <li id="home">Home</li>
        <li id="menu">Menu</li>
        <li id="contact" class="active">Contact</li>
      </ul>
    </div>
  </div>
  <div class="container contact">
    <div class="phone">
      <img src="./img/phone.svg" alt="phone" width="30" height="30" />
      <p>+91 7477591090</p>
    </div>
    <div class="email">
      <img src="./img/email.svg" alt="email" width="30" height="30" />
      <p>itssadatansari@gmail.com</p>
    </div>
    <div class="address">
      <img src="./img/location.svg" alt="location" width="30" height="30" />
      <p>Action Area I, Newtown, New Town, West Bengal 700156</p>
    </div>
    <div class="map">
      <img src="./img/Location.png" alt="map" width="600px" height="350px" />
    </div>
  </div>`
};