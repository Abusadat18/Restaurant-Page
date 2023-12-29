import "./styles.css";
import { setHome } from "./home.js";
import { setMenu } from "./menu.js";
import { setContact } from "./contact.js";

const contentCtn = document.getElementById("content");

document.addEventListener("DOMContentLoaded", setHome(contentCtn));

function addListenersInNav() {
    const homeBtn = document.getElementById("home");
    const menuBtn = document.getElementById("menu");
    const contactBtn = document.getElementById("contact");

    homeBtn.addEventListener("click", () => {
        setHome(contentCtn);
        addListenersInNav();
    })

    menuBtn.addEventListener("click", () => {
        setMenu(contentCtn);
        addListenersInNav();
    })

    contactBtn.addEventListener("click", () => {
        setContact(contentCtn);
        addListenersInNav();
    })
}

addListenersInNav();
