export function setMenu(element) {
    element.innerHTML = `<div class="navbar">
    <div class="nav-title">
      <h1>Lazeez Express</h1>
    </div>
    <div class="nav-item">
      <ul>
      <li id="home">Home</li>
      <li id="menu" class="active">Menu</li>
      <li id="contact">Contact</li>
      </ul>
    </div>
  </div>
  <div class="container menu">
    <div class="food-card">
      <img src="./img/Biryani 2.png" alt="Biryani" width="250" height="250" />
      <h4>Chicken Biryani</h4>
      <p>&#8377;300</p>
    </div>
    <div class="food-card">
      <img src="./img/Yellow Rice.png" alt="Rice" width="250" height="250" />
      <h4>Yellow Rice</h4>
      <p>&#8377;150</p>
    </div>
    <div class="food-card">
      <img src="./img/Thali.png" alt="Thali" width="250" height="250" />
      <h4>Jumbo Thali</h4>
      <p>&#8377;250</p>
    </div>
    <div class="food-card">
      <img
        src="./img/Fried Rice.png"
        alt="fried-rice"
        width="250"
        height="250"
      />
      <h4>Fried Rice</h4>
      <p>&#8377;200</p>
    </div>
    <div class="food-card">
      <img
        src="./img/Bread Butter.png"
        alt="Bread & Butter"
        width="250"
        height="250"
      />
      <h4>Bread Butter</h4>
      <p>&#8377;30</p>
    </div>
    <div class="food-card">
      <img
        src="./img/Bread Omlet.png"
        alt="Bread & Omlet"
        width="250"
        height="250"
      />
      <h4>Bread Omlet</h4>
      <p>&#8377;50</p>
    </div>
    <div class="food-card">
      <img
        src="./img/Strawberry Milk shake.png"
        alt="Strawberry Milk Shake"
        width="250"
        height="375"
      />
      <h4>Strawberry Shake</h4>
      <p>&#8377;200</p>
    </div>
    <div class="food-card">
      <img
        src="./img/Chocolate milk shake.png"
        alt="Chocolate Milk Shake"
        width="250"
        height="375"
      />
      <h4>Chocolate Shake</h4>
      <p>&#8377;200</p>
    </div>
  </div>`
}