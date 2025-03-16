import axios from 'axios';

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import iconError from "../img/error.png";

export default function axiosGet(inputValue) {
    return axios.get("https://pixabay.com/api", {
        
        params: {
            key: "49360520-b72380be0a18495ea370d4b42",
            q: inputValue,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: "true"
        }
    })
        .then(response => {
            if (response.data.hits.length === 0) {
                iziToast.show({
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                    backgroundColor: "red",
                    messageColor: "white",
                    position: "topRight",
                    transitionIn: "fadeIn",
                    iconUrl: iconError,
                    maxWidth: "432px"
                });
                return;
            }
            return response.data.hits;
        })
        .catch(error => {
            console.log(error);
        });
};
  