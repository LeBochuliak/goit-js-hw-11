import{a as d,i as s,S as u}from"./assets/vendor-DtRopbQG.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAH0SURBVHgB1ZpRbsIwDIYdtIpXrrSTbDcYO8HKDXajHWFHGW+UpCLD2oxaCBA7dhs+adJU0fT/SEnsggMB3vs3ANce/12BEs5B2zTNBpgsgEkI4eN4uU9QDI/ECO3f2Dwc58V4AbwQGCKdibtgeO9DHPx9xxiLZwHHwLGGY0tm4iZW4QlTCevwhInEVOEJVYmpwxMqEnOFJ4ok5g5PiCRqCU+wJGoLT2RJ1BqeuCkhDb/b+de+71+gkNxxUhJd161BGp69OiQYvnlCiZ9RNdo0T8/OuS0wkFaRksIQs2HGwaHVaAaAwX4fWtE6DZe3LY4FDEaZpQJSidLwqgJcCY3w6gK5ElrhTQTuSWiGNxO4JqEd3lQAEhLa4RFTASQloRUeGY7LfqySw2IBMeeYCtozkKitWPtEDma3UOoDW7JjTypwa7XRllAXyFkqNSVUBTjrvJaEmoBkk9KQUBEo2WFLJa4K5PbBw46MG/6aRG57+t+VjTayUwcWQv/FbeaPXdVmuWxaYILn4LmcczAbZhwd7Dq/PttwHqapP818onap/rHKxW1bq0RWeKI2CVZ4ohYJUXhibomi8MRcEirhiaklVMMTU0mYhCesJUzDE1YSpeFZPzXAgZ0D3W/Rz+DWViwBxFJCUhiyH6tIqsgMtodDfJdUtb/jJi40Hp51BAAAAABJRU5ErkJggg==";document.querySelector(".form-input");function m(a){return d.get("https://pixabay.com/api/",{params:{key:"49360520-b72380be0a18495ea370d4b42",q:a,image_type:"photo",orientation:"horizontal",safesearch:"true"}}).then(t=>{if(t.data.hits.length===0){s.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#ef4040",messageColor:"white",position:"topRight",transitionIn:"fadeIn",iconUrl:n,maxWidth:"432px"});return}return t.data.hits}).catch(t=>{s.show({message:`An unexpected error occurred: ${t.message||t}`,backgroundColor:"#ef4040",messageColor:"white",position:"topRight",transitionIn:"fadeIn",iconUrl:n})})}const h=document.querySelector(".gallery"),p=new u(".gallery-link",{captionsData:"alt"});function g(a){if(!(a===void 0||a.length===0)){const t=a.map(r=>`
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
            `).join("");h.insertAdjacentHTML("beforeend",t),p.refresh()}}const A=document.querySelector(".form-input"),f=document.querySelector(".form-btn"),w=document.querySelector(".gallery"),l=document.querySelector(".loader");f.addEventListener("click",a=>{a.preventDefault(),w.innerHTML="";let t=A.value.trim();if(!t){s.show({message:"Please enter a search query!",backgroundColor:"#ffa000",messageColor:"white",position:"topRight",transitionIn:"fadeIn",maxWidth:"432px"});return}l.classList.remove("hidden"),m(t).then(r=>{l.classList.add("hidden"),g(r)}).catch(r=>{s.show({message:`An unexpected error occurred: ${r.message||r}`,backgroundColor:"#ef4040",messageColor:"white",position:"topRight",transitionIn:"fadeIn",iconUrl:n})})});
//# sourceMappingURL=index.js.map
