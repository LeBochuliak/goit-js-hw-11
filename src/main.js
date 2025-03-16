import axiosGet from "./js/pixabay-api";
import renderImages from "./js/render-functions";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const formInput = document.querySelector(".form-input");
const formBtn = document.querySelector(".form-btn");
const gallery = document.querySelector(".gallery");
const loader = document.querySelector(".loader");

formBtn.addEventListener("click", (e) => {
    gallery.innerHTML = "";
    let inputValue = formInput.value.trim();
    if (!inputValue) {
        iziToast.show({
                    message: 'Please enter a search query!',
                    backgroundColor: "#ffa000",
                    messageColor: "white",
                    position: "topRight",
                    transitionIn: "fadeIn",
                    maxWidth: "432px"
                });
        return; 
    }

    loader.classList.remove("hidden");
    axiosGet(inputValue)
        .then((data) => {
            loader.classList.add("hidden");
            renderImages(data);
        })
        .catch((error) => {
            console.log(error);
        });
    e.preventDefault();
});






