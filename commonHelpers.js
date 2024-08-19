import{S as c,i as n}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function e(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=e(t);fetch(t.href,o)}})();const u=new c(".gallery a",{captionsData:"alt",captionsDelay:2e3});function p(s){const r=document.querySelector(".gallery");r.innerHTML=s.map(e=>`
    <div class="photo-card">
      <a href="${e.largeImageURL}" data-lightbox="gallery-item" data-title="${e.tags}">
        <img src="${e.webformatURL}" alt="${e.tags}" loading="lazy" />
      </a>
      <div class="info" style="display: none;">
        <p><i class="img-text">Likes </i><span>${e.likes}</span></p>
        <p><i class="img-text">Views </i><span>${e.views}</span></p>
        <p><i class="img-text">Comments </i><span>${e.comments}</span></p>
        <p><i class="img-text">Downloads </i><span>${e.downloads}</span></p>
      </div>
    </div>
  `).join(""),u.refresh(),setTimeout(()=>{document.querySelectorAll(".info").forEach(e=>{e.style.display="block"})},2e3)}const d="45522056-70580155eac140dfe7225b3e6";function f(s){const r=document.querySelector(".loader");r.style.display="block",fetch(`https://pixabay.com/api/?key=${d}&q=${encodeURIComponent(s)}&image_type=photo&orientation=horizontal&safesearch=true`).then(e=>{if(!e.ok)throw new Error("Failed to fetch images");return e.json()}).then(e=>{console.log(e),r.style.display="none",e.hits.length===0?n.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!"}):p(e.hits)}).catch(e=>{console.error("Error fetching images:",e),r.style.display="none",n.error({title:"Error",message:"Failed to fetch images. Please try again later."})})}const m=document.querySelector("#search-form"),l=document.querySelector("#search-input");m.addEventListener("submit",s=>{s.preventDefault();const r=l.value.trim();if(!r){n.warning({title:"Warning",message:"Please enter a search query"});return}f(r),l.value=""});
//# sourceMappingURL=commonHelpers.js.map
