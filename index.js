import{a as c,i as l,S as d}from"./assets/vendor-DtRopbQG.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(e){if(e.ep)return;e.ep=!0;const a=r(e);fetch(e.href,a)}})();const u="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAH0SURBVHgB1ZpRbsIwDIYdtIpXrrSTbDcYO8HKDXajHWFHGW+UpCLD2oxaCBA7dhs+adJU0fT/SEnsggMB3vs3ANce/12BEs5B2zTNBpgsgEkI4eN4uU9QDI/ECO3f2Dwc58V4AbwQGCKdibtgeO9DHPx9xxiLZwHHwLGGY0tm4iZW4QlTCevwhInEVOEJVYmpwxMqEnOFJ4ok5g5PiCRqCU+wJGoLT2RJ1BqeuCkhDb/b+de+71+gkNxxUhJd161BGp69OiQYvnlCiZ9RNdo0T8/OuS0wkFaRksIQs2HGwaHVaAaAwX4fWtE6DZe3LY4FDEaZpQJSidLwqgJcCY3w6gK5ElrhTQTuSWiGNxO4JqEd3lQAEhLa4RFTASQloRUeGY7LfqySw2IBMeeYCtozkKitWPtEDma3UOoDW7JjTypwa7XRllAXyFkqNSVUBTjrvJaEmoBkk9KQUBEo2WFLJa4K5PbBw46MG/6aRG57+t+VjTayUwcWQv/FbeaPXdVmuWxaYILn4LmcczAbZhwd7Dq/PttwHqapP818onap/rHKxW1bq0RWeKI2CVZ4ohYJUXhibomi8MRcEirhiaklVMMTU0mYhCesJUzDE1YSpeFZPzXAgZ0D3W/Rz+DWViwBxFJCUhiyH6tIqsgMtodDfJdUtb/jJi40Hp51BAAAAABJRU5ErkJggg==";function m(o){return c.get("https://pixabay.com/api/",{params:{key:"49360520-b72380be0a18495ea370d4b42",q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"}}).then(t=>{if(t.data.hits.length===0){l.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"red",messageColor:"white",position:"topRight",transitionIn:"fadeIn",iconUrl:u,maxWidth:"432px"});return}return t.data.hits}).catch(t=>{console.log(t)})}const A=document.querySelector(".gallery"),p=new d(".gallery-link",{captionsData:"alt"});function h(o){if(!(o===void 0||o.length===0)){const t=o.map(r=>`
                <li class="gallery-item">
                    <a class="gallery-link" href="${r.largeImageURL}">
                        <img           
                            class="gallery-image"
                            src="${r.webformatURL}"
                            alt="${r.tags}"                   
                        />
                    </a>
                    <div class="card">
                        <div class="card-item">
                            <h3 class="card-name">Likes</h3>
                            <p class="card-number">${r.likes}</p>
                        </div>
                        <div class="card-item">
                            <h3 class="card-name">Views</h3>
                            <p class="card-number">${r.views}</p>
                        </div>
                        <div class="card-item">
                            <h3 class="card-name">Comments</h3>
                            <p class="card-number">${r.comments}</p>
                        </div>
                        <div class="card-item">
                            <h3 class="card-name">Downloads</h3>
                            <p class="card-number">${r.downloads}</p>
                        </div>
                    </div>
                </li>
            `).join("");A.insertAdjacentHTML("beforeend",t),p.refresh()}}const g=document.querySelector(".form-input"),f=document.querySelector(".form-btn"),y=document.querySelector(".gallery"),i=document.querySelector("#loader");f.addEventListener("click",o=>{y.innerHTML="",i.innerHTML="<span class='loader'></span>";let t=g.value;m(t).then(r=>{i.innerHTML="",h(r)}).catch(r=>{console.log(r)}),o.preventDefault()});
//# sourceMappingURL=index.js.map
