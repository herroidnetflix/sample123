(function(){var T=["dark","light","blue","green","yellow","purple","red"],C={dark:"#0a0a0a",light:"#f3f4f6",blue:"#06122b",green:"#04140c",yellow:"#17130a",purple:"#120a1f",red:"#1a0709"},B=document.querySelectorAll(".th button");
function ap(t){if(T.indexOf(t)<0)t="dark";document.documentElement.setAttribute("data-theme",t);var m=document.getElementById("mt");if(m)m.content=C[t];
B.forEach(function(b){var on=b.dataset.t===t;b.classList.toggle("on",on);b.setAttribute("aria-pressed",on)});try{localStorage.setItem("navvora_theme",t)}catch(e){}}
B.forEach(function(b){b.addEventListener("click",function(){ap(b.dataset.t)})});ap(document.documentElement.getAttribute("data-theme"));})();
