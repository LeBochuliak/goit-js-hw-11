import axiosGet from "./js/pixabay-api";
import renderImages from "./js/render-functions";
import { lightbox } from "./js/render-functions";

const formInput = document.querySelector(".form-input");
const formBtn = document.querySelector(".form-btn");
const gallery = document.querySelector(".gallery");
const loaderBox = document.querySelector("#loader");

formBtn.addEventListener("click", (e) => {
    gallery.innerHTML = "";
    loaderBox.innerHTML = "<span class='loader'></span>";
    let inputValue = formInput.value;
    axiosGet(inputValue)
        .then((data) => {
            loaderBox.innerHTML = "";
            renderImages(data);
        })
        .catch((error) => {
            console.log(error);
        });
   
    e.preventDefault();
});






