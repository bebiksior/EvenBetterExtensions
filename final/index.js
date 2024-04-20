var W=window.Caido;var d=new Set,q1=({id:z,cssText:q})=>{if(d.has(z)||document.querySelector(`#${z}`))return;const Z=document.createElement("style");Z.id=z,Z.textContent=q,Z.classList.add("evenbetterapi-css-module"),document.head.appendChild(Z),d.add(z)},f=q1;var F1=`
.eb-checkbox__input {
    cursor: pointer;
    -webkit-appearance: none;
    appearance: none;
    width: 1.15em;
    height: 1.15em;
    border: .1em solid grey;
    border-radius: 4px;
    display: inline-grid;
    place-content: center;
    margin: 0;
}
.eb-checkbox__input:checked:before {
    transform: scale(1);
}
.eb-checkbox__input:before {
    content: "";
    transform: scale(0);
    width: .65em;
    height: .65em;
    border-radius: 2px;
    box-shadow: inset 1em 1em var(--c-fg-secondary);
}
.eb-button__label {
    display: inline-flex;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
`,p=()=>{f({id:"checkbox",cssText:F1});const z=document.createElement("div");return z.classList.add("eb-button__label"),z.innerHTML=`<div class="eb-checkbox">
            <div class="formkit-outer" data-family="box" data-type="checkbox" data-complete="true">
                <label class="formkit-wrapper eb-checkbox__wrapper" data-checked="true">
                    <span class="formkit-inner eb-checkbox__inner">
                        <input class="formkit-input eb-checkbox__input" type="checkbox">
                        <span class="formkit-decorator" aria-hidden="true"></span>
                    </span>
                </label>
            </div>
        </div>
    `,z};function u(z){const q=document.createElement("div");q.classList.add("c-menu-bar"),q.style.width="100%";const Z=document.createElement("div");Z.classList.add("p-menubar","p-component"),Z.setAttribute("data-pc-name","menubar"),Z.setAttribute("data-pc-section","root");const F=document.createElement("div");F.classList.add("p-menubar-start"),F.setAttribute("data-pc-section","start");const G=document.createElement("div");G.classList.add("c-settings__title"),G.style.padding="0 var(--c-space-4)",G.style.fontWeight="700",G.textContent=z.title,F.appendChild(G);const K=document.createElement("ul");K.classList.add("p-menubar-root-list"),z.items.forEach((_)=>{const J=document.createElement("li");J.classList.add("p-menuitem"),J.setAttribute("role","menuitem");const V=document.createElement("div");V.classList.add("p-menuitem-content"),V.setAttribute("data-pc-section","content");const N=document.createElement("div");N.classList.add("c-settings__item"),N.setAttribute("data-is-active","true"),N.addEventListener("click",()=>{Z.classList.remove("p-menubar-mobile-active")});const j=document.createElement("a");if(j.setAttribute("href",_.url),j.setAttribute("draggable","false"),j.draggable=!1,j.classList.add("p-menuitem-link"),$.eventManager.on("onPageOpen",(R)=>{if(R.newUrl===_.url){if(_.onOpen)_.onOpen();j.style.backgroundColor="rgba(255,255,255,.04)",j.style.borderRadius="var(--c-border-radius-2)"}else j.style.backgroundColor="",j.style.borderRadius=""}),_.icon){const R=document.createElement("i");R.classList.add("c-icon","fas",_.icon),R.style.marginRight="var(--c-space-2)",j.appendChild(R)}const g=document.createElement("span");g.textContent=_.title,j.appendChild(g),N.appendChild(j),V.appendChild(N),J.appendChild(V),K.appendChild(J)});const Q=document.createElement("a");Q.setAttribute("role","button"),Q.setAttribute("tabindex","0"),Q.classList.add("p-menubar-button"),Q.setAttribute("aria-haspopup","true"),Q.setAttribute("aria-expanded","false"),Q.setAttribute("aria-label","Navigation"),Q.setAttribute("data-pc-section","button"),Q.setAttribute("aria-controls","pv_id_3"),Q.innerHTML='<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="p-icon" aria-hidden="true" data-pc-section="menubuttonicon"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.3226 3.6129H0.677419C0.497757 3.6129 0.325452 3.54152 0.198411 3.41448C0.0713707 3.28744 0 3.11514 0 2.93548C0 2.75581 0.0713707 2.58351 0.198411 2.45647C0.325452 2.32943 0.497757 2.25806 0.677419 2.25806H13.3226C13.5022 2.25806 13.6745 2.32943 13.8016 2.45647C13.9286 2.58351 14 2.75581 14 2.93548C14 3.11514 13.9286 3.28744 13.8016 3.41448C13.6745 3.54152 13.5022 3.6129 13.3226 3.6129ZM13.3226 7.67741H0.677419C0.497757 7.67741 0.325452 7.60604 0.198411 7.479C0.0713707 7.35196 0 7.17965 0 6.99999C0 6.82033 0.0713707 6.64802 0.198411 6.52098C0.325452 6.39394 0.497757 6.32257 0.677419 6.32257H13.3226C13.5022 6.32257 13.6745 6.39394 13.8016 6.52098C13.9286 6.64802 14 6.82033 14 6.99999C14 7.17965 13.9286 7.35196 13.8016 7.479C13.6745 7.60604 13.5022 7.67741 13.3226 7.67741ZM0.677419 11.7419H13.3226C13.5022 11.7419 13.6745 11.6706 13.8016 11.5435C13.9286 11.4165 14 11.2442 14 11.0645C14 10.8848 13.9286 10.7125 13.8016 10.5855C13.6745 10.4585 13.5022 10.3871 13.3226 10.3871H0.677419C0.497757 10.3871 0.325452 10.4585 0.198411 10.5855C0.0713707 10.7125 0 10.8848 0 11.0645C0 11.2442 0.0713707 11.4165 0.198411 11.5435C0.325452 11.6706 0.497757 11.7419 0.677419 11.7419Z" fill="currentColor"></path></svg>',Q.addEventListener("click",()=>{Z.classList.toggle("p-menubar-mobile-active"),K.style.zIndex=Z.classList.contains("p-menubar-mobile-active")?"1200":""}),window.addEventListener("resize",()=>{if(window.innerWidth<955)Z.classList.add("p-menubar-mobile");else Z.classList.remove("p-menubar-mobile"),Z.classList.remove("p-menubar-mobile-active")}),window.dispatchEvent(new Event("resize"));const Y=document.createElement("div");if(Y.classList.add("p-menubar-end"),Y.setAttribute("data-pc-section","end"),Y.style.display="flex",Y.style.gap=".5em",Y.style.alignItems="center",z.customButtons)z.customButtons.forEach((_)=>{Y.appendChild(_)});return Z.appendChild(F),Z.appendChild(Q),Z.appendChild(K),Z.appendChild(Y),q.appendChild(Z),q}var O;(function(F){F["INFO"]="info";F["ERROR"]="error";F["WARN"]="warn"})(O||(O={}));window.global=window;class m{log(z,q){const F=`${(new Date()).toString()} [EvenBetterAPI]`;switch(z){case O.INFO:console.log(`${F} [INFO] ${q}`);break;case O.ERROR:console.error(`${F} [ERROR] ${q}`);break;case O.WARN:console.warn(`${F} [WARN] ${q}`);break;default:console.log(`${F} [UNKNOWN] ${q}`)}}info(z){this.log(O.INFO,z)}error(z){this.log(O.ERROR,z)}warn(z){this.log(O.WARN,z)}}var G1=new m,A=G1;class D{events={};registerEvent(z,q){this.events[z]=q}triggerEvent(z,q){const Z=this.events[z];if(Z)Z.trigger(q);else console.error(`Event "${z}" not registered.`)}on(z,q){const Z=this.events[z];if(Z)Z.addHandler(q);else console.error(`Event "${z}" not registered.`)}initEvents(){A.info(`Initializing ${Object.keys(this.events).length} custom events`);for(let z in this.events)this.events[z].init()}}class M{handlers=[];addHandler(z){this.handlers.push(z)}init(){const z=setInterval(()=>{if(K1())clearInterval(z),this.trigger()},25)}trigger(){this.handlers.forEach((z)=>z())}}var K1=()=>{return document.querySelector(".c-authenticated")!==null};class C{handlers=[];addHandler(z){this.handlers.push(z)}init(){new MutationObserver((q)=>{for(let Z of q)if(Z.type==="childList")Z.addedNodes.forEach((F)=>{const G=F;if(F.nodeType===1&&G.classList.contains("p-contextmenu"))this.trigger(G)})}).observe(document.body,{childList:!0,subtree:!0})}trigger(z){this.handlers.forEach((q)=>q(z))}}class P{handlers=[];eventManager;constructor(z){this.eventManager=z}addHandler(z){this.handlers.push(z)}init(){let z=window.location.href;const q=new MutationObserver(()=>{if(window.location.href!==z){let F=new URL(window.location.href).hash,G=new URL(z).hash;if(z=window.location.href,F.includes("?custom-path="))F=F.split("?custom-path=")[1];if(G.includes("?custom-path="))G=G.split("?custom-path=")[1];document.querySelector(".c-content")?.setAttribute("data-page",F),this.trigger({newUrl:F,oldUrl:G})}}),Z={subtree:!0,childList:!0};q.observe(document,Z)}trigger(z){if(A.info(`Page updated: ${z.oldUrl} -> ${z.newUrl}`),z.newUrl.startsWith("#/settings/"))this.eventManager.triggerEvent("onSettingsTabOpen",z.newUrl.replace("#/settings/",""));this.handlers.forEach((q)=>q(z))}}class E{handlers=[];addHandler(z){this.handlers.push(z)}init(){}trigger(z){A.info(`Settings tab opened: ${z}`),this.handlers.forEach((q)=>q(z))}}var Q1=`
  .evenbetter-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99999;
  }
  
  .evenbetter-modal__content {
    background-color: var(--c-bg-default);
    padding: 1rem;
    border-radius: 5px;
    width: 50%;
    max-width: 500px;
  }
  
  .evenbetter-modal__content-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }
  
  .evenbetter-modal__content-header-title {
    font-size: 1.1rem;
    margin: 0;
  }
  
  .evenbetter-modal__content-body {
    margin-bottom: 1rem;
  }
  
  .evenbetter-modal__content-body-text {
    font-size: 0.9rem;
    color: var(--c-fg-subtle);
    word-break: break-word;
    user-select: text !important;
    -webkit-user-select: text !important;
  
    white-space: break-spaces;
    overflow: auto;
    max-height: 40em;
  }
  
  .evenbetter-modal__content-body a {
    color: var(--c-fg-default);
  }
  
  .evenbetter-modal__content-body-close {
    background-color: var(--c-bg-subtle);
    border: 1px solid var(--c-header-cell-border);
    color: #fff;
    padding: 0.5rem;
    width: 100%;
    margin-top: 0.5rem;
    cursor: pointer;
    transition: 0.2s ease background-color;
  }
  
  .evenbetter-modal__content-body-close:hover {
    background-color: var(--c-bg-default);
  }
`;document.addEventListener("keydown",(z)=>{if(z.key==="Escape")k()});var Y1=({title:z,content:q})=>{f({id:"evenbetterapi-modal",cssText:Q1});const Z=document.createElement("div");Z.classList.add("evenbetter-modal"),Z.innerHTML=`
      <div class="evenbetter-modal__content">
        <div class="evenbetter-modal__content-header">
          <h2 class="evenbetter-modal__content-header-title"></h2>
        </div>
        <div class="evenbetter-modal__content-body">
          <p class="evenbetter-modal__content-body-text"></p>
          <button class="evenbetter-modal__content-body-close">
            Close
          </button>
        </div>
      </div>
    `;const F=Z.querySelector(".evenbetter-modal__content-header-title");if(!F)throw new Error("Modal title not found");F.textContent=z;const G=Z.querySelector(".evenbetter-modal__content-body-text");if(!G)throw new Error("Modal body not found");return G.innerHTML=q,Z.setAttribute("data-modal-title",z),Z.querySelector(".evenbetter-modal__content-body-close")?.addEventListener("click",k),Z},_1=()=>{return document.querySelector(".evenbetter-modal")!==null},k=()=>{document.querySelector(".evenbetter-modal")?.remove()},x=({title:z,content:q})=>{if(_1())k();const Z=Y1({title:z,content:q});document.body.appendChild(Z)};var $1=`
.v-toast--fade-in {
    animation: fadeIn 0.15s ease-in-out forwards;
}
@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
.v-toast--fade-out {
    animation: fadeOut 0.15s ease-in-out forwards;
}
@keyframes fadeOut {
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
}`,J1=(z,q,Z)=>{const F=document.createElement("div");F.classList.add("v-toast"),F.classList.add(`v-toast--${Z}`);const G=document.createElement("div");G.setAttribute("role","alert"),G.classList.add("v-toast__item"),G.classList.add(`v-toast__item--${q}`),G.classList.add(`v-toast__item--${Z}`),F.appendChild(G);const K=document.createElement("div");K.classList.add("v-toast__icon"),G.appendChild(K);const Q=document.createElement("p");return Q.classList.add("v-toast__text"),Q.textContent=z,G.appendChild(Q),F.classList.add("v-toast--fade-in"),F},r=(z)=>{const{message:q,type:Z,position:F,duration:G}=z;f({id:"eb-toast",cssText:$1});let K=document.querySelector(`.v-toast--${F}`);if(!K)K=document.createElement("div"),K.classList.add("v-toast"),K.classList.add(`v-toast--${F}`),document.body.appendChild(K);const Q=J1(q,Z,F);K.appendChild(Q),setTimeout(()=>{Q.classList.add("v-toast--fade-out"),setTimeout(()=>{Q.remove()},150)},G-150)};function l(z,q="Search...",Z=!1,F){f({id:"eb-text-input",cssText:X1});const G=document.createElement("div");G.classList.add("formkit-outer","c-text-input__outer"),G.setAttribute("style",`width: ${z};`);const K=document.createElement("div");K.classList.add("formkit-wrapper"),K.style.display="flex";const Q=document.createElement("div");Q.classList.add("formkit-inner","eb-text-input__inner");const Y=document.createElement("div");Y.classList.add("c-text-input__prefix"),Y.setAttribute("style","align-self: center; color: var(--c-fg-subtle);");const _=document.createElement("i");if(_.classList.add("c-icon","fas"),F)_.classList.add(F);const J=document.createElement("input");if(J.setAttribute("placeholder",q),J.setAttribute("spellcheck","false"),J.classList.add("formkit-input","c-text-input__input"),J.setAttribute("type","text"),J.setAttribute("style","width: 100%; background: transparent; border: 0; outline: 0; color: inherit; box-sizing: border-box; line-height: inherit;"),F)Y.appendChild(_);if(Q.appendChild(Y),Q.appendChild(J),Z){const V=document.createElement("button");V.innerHTML='<i class="fas fa-copy"></i>',V.setAttribute("style","background: transparent; border: 0; outline: 0; cursor: pointer; padding: 0; margin-left: 10px;"),V.addEventListener("click",()=>{navigator.clipboard.writeText(J.value),$.toast.showToast({message:"Copied to clipboard",position:"bottom",type:"info",duration:1000})}),Q.appendChild(V)}return K.appendChild(Q),G.appendChild(K),G}var X1=`
.eb-text-input__inner {
    gap: var(--c-space-1); 
    flex: 1; 
    display: flex; 
    align-items: center; 
    padding-left: var(--c-space-2); 
    padding-right: var(--c-space-2); 
    box-sizing: border-box; 
    border: var(--c-border-width-1) solid var(--c-border-default); 
    border-radius: var(--c-border-radius-2); 
    color: var(--c-fg-default); 
    background-color: var(--c-bg-default); 
    min-height: var(--c-space-10);
}
.eb-text-input__inner:focus-within {
    border: var(--c-border-width-2) solid var(--c-border-secondary);
}
.eb-text-input__inner textarea {
  padding-top: var(--c-space-2);
}
`;class v{handlers=[];commandObserver=null;selectedCommand=null;addHandler(z){this.handlers.push(z)}init(){const z=(F)=>{this.commandObserver=new MutationObserver((G)=>{const K=q();if(K!==this.selectedCommand)this.selectedCommand=K}),this.commandObserver.observe(F,{attributes:!0,subtree:!0})},q=()=>{return document.querySelector("[command-item][aria-selected='true']")};new MutationObserver((F)=>{for(let G of F)if(G.type==="childList")G.addedNodes.forEach((K)=>{const Q=K;if(K.nodeType===1&&Q.hasAttribute("command-theme"))z(Q)}),G.removedNodes.forEach((K)=>{const Q=K;if(K.nodeType===1&&Q.hasAttribute("command-theme")){if(!this.selectedCommand)return;const Y=this.selectedCommand.getAttribute("data-value");if(Y)this.trigger(Y);if(this.commandObserver)this.commandObserver.disconnect(),this.commandObserver=null}})}).observe(document.body,{childList:!0,subtree:!0})}trigger(z){this.handlers.forEach((q)=>q(z))}}var i=[],a=(z)=>{z.on("onCommandRun",(q)=>{const Z=i.find((F)=>F.commandName===q);if(!Z)return;W1(Z)})},W1=(z)=>{const q=document.createElement("div");q.classList.add("custom");const Z=document.createElement("div");Z.setAttribute("command-root",""),q.appendChild(Z);const F=document.createElement("div");F.setAttribute("command-dialog",""),Z.appendChild(F);const G=document.createElement("div");G.setAttribute("command-dialog-mask",""),G.style.display="flex",G.style.justifyContent="center",G.style.alignItems="center",G.addEventListener("click",()=>{q.remove()}),F.appendChild(G);const K=document.createElement("div");K.setAttribute("command-dialog-wrapper",""),K.style.minWidth="600px",K.style.padding="1em",K.style.margin="0",G.appendChild(K);const Q=document.createElement("div");Q.setAttribute("command-dialog-body",""),Q.style.display="flex",Q.style.gap="0.5em",K.addEventListener("click",(J)=>{J.stopPropagation()}),K.appendChild(Q);const Y=$.components.createTextInput("100%",z.promptPlaceholder);Y.style.zIndex="100",Y.addEventListener("click",(J)=>{J.stopPropagation()}),Q.appendChild(Y);const _=W.ui.button({label:"Submit",variant:"primary"});_.addEventListener("click",()=>{const J=Y.querySelector("input");z.onPrompt(J.value),q.remove()}),Q.appendChild(_),document.body.appendChild(q),Y.querySelector("input")?.focus(),Y.addEventListener("keydown",(J)=>{if(J.key==="Enter")_.click();if(J.key==="Escape")q.remove()})},f1=(z,q,Z)=>{i.push({commandName:z,promptPlaceholder:q,onPrompt:Z})},s={createPromptCommand:f1};var o=async()=>{if(localStorage.getItem("previousPath"))setTimeout(()=>{window.location.hash=localStorage.getItem("previousPath")||"",localStorage.removeItem("previousPath")},200);const z=new WebSocket("ws://localhost:8081");z.addEventListener("open",()=>{$.toast.showToast({message:"Connected to Caido Hot Reloading Server",duration:2000,type:"success",position:"bottom"})}),z.addEventListener("close",()=>{$.toast.showToast({message:"Disconnected from Caido Hot Reloading Server",duration:2000,type:"error",position:"bottom"})}),z.addEventListener("message",(F)=>{try{const G=JSON.parse(F.data),K=G.event,Q=G.data;switch(K){case"caido:loadJS":q(Q,"");break;case"caido:loadCSS":q("",Q);break;case"caido:reload":localStorage.setItem("previousPath",window.location.hash),location.reload();break;default:console.error("Unknown event type received:",K)}}catch(G){console.error("Error parsing WebSocket message:",G)}});const q=async(F,G)=>{const K=await Z();if(!K)return;const Q={input:{data:K.data,migrations:K.migrations}};if(F)Q.input.data.js=F;if(G)Q.input.data.css=G;return W.graphql.updateViewerSettings(Q)},Z=async()=>{return await W.graphql.userSettings().then((F)=>{return F.viewer.settings})}};var H1=`
  :root {
    --c-table-background: #2b2e35;
    --c-table-even-item-row: #353942;
    --c-table-item-row-hover: var(--c-bg-default);
  }
  .c-evenbetter_table_card-body {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .c-evenbetter_table-container {
    overscroll-behavior-y: none;
    overflow: auto;
    height: 100%;
    border-radius: 5px !important;
  }
  .c-evenbetter_table_header-row {
    min-width: fit-content;
    width: 100%;
    white-space: nowrap;
    border-bottom: 2px solid var(--c-bg-default);
    background-color: var(--c-table-background);
    position: sticky;
    top: 0;
    z-index: 1;
  }
  .c-evenbetter_table_header-cell {
    position: relative;
    display: inline-flex;
    align-items: center;
    padding: var(--c-space-2) var(--c-space-4);
    color: var(--c-fg-subtle);
    user-select: none;
    min-width: var(--1e00f3f4);
    box-sizing: border-box;
    border-right: .1em solid var(--c-bg-default);
  }
  [data-sortable="true"][data-is-resizing="false"]
    .c-evenbetter_table_header-cell {
    cursor: pointer;
  }
  [data-align="start"] .c-evenbetter_header-cell_wrapper {
    flex-direction: row;
  }
  .c-evenbetter_header-cell_wrapper {
    display: inline-flex;
    gap: var(--c-space-2);
    width: 100%;
  }
  .c-evenbetter_header-cell_content {
    overflow: hidden;
    text-overflow: ellipsis;
    user-select: none;
  }
  .c-evenbetter_table-item-cell {
    min-width: var(--cellWidth);
    display: inline-flex;
    align-items: center;
    padding: 0 1rem;
    width: var(--cellWidth);
    height: 100%;
    box-sizing: border-box;
  }
  .c-evenbetter_table-item-cell__inner {
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .c-evenbetter_table-item-row {
    display: flex;
    min-width: fit-content;
    height: 42px;
    box-sizing: border-box;
    white-space: nowrap;
    border-bottom: 0.1em solid var(--c-bg-default);
    width: 100%;
  }
  .c-evenbetter_table-item-row:hover {
    background-color: var(--c-table-item-row-hover);
  }
  .c-evenbetter_table_row[data-is-even="true"] {
    background-color: var(--c-table-even-item-row);
  }
  .c-evenbetter_table_row:hover {
    cursor: pointer;
    background-color: var(--c-table-item-row-hover);
  }
  .c-evenbetter_table_header-cell:last-child {
    border-right: none;
  }
  .c-evenbetter_table {
    outline: none;
    width: 100%;
    height: 100%;
    display: flex;
}`,j1=()=>{return'<div class="c-evenbetter_table_card-body"><div class="c-evenbetter_table-container" data-is-empty="false" data-is-loading="false" style="overflow-y: auto;"><div class="c-evenbetter_table_header-row"></div><div class="c-table__wrapper" style="margin-top: 0px;"></div></div></div>'},t=(z)=>{return new I(z)};class I{z;tableElement;tableWrapper;constructor(z){this.config=z;f({id:"eb-table-css",cssText:H1}),this.tableElement=document.createElement("div"),this.tableElement.className="c-evenbetter_table",this.tableElement.style.overflow="auto",this.tableElement.style.width="100%",this.tableElement.style.height=this.config.tableHeight,this.tableElement.setAttribute("data-row-height",this.config.rowHeight||"42px"),this.tableElement.innerHTML=j1(),this.tableWrapper=this.tableElement.querySelector(".c-table__wrapper");const q=this.tableElement.querySelector(".c-evenbetter_table_card-body");if(!q)throw new Error("Card body not found");q.style.height=this.config.tableHeight,q.style.width="100%";const Z=this.tableElement.querySelector(".c-evenbetter_table_header-row");if(!Z)throw new Error("Column row not found");this.config.columns.forEach((F)=>{Z.innerHTML+=`<div class="c-evenbetter_table_header-cell" data-sortable="true" data-resizable="true" data-align="start" data-is-resizing="false" style="--1e00f3f4: 4rem; width: max(${F.width}, 56px);"><div class="c-evenbetter_header-cell_wrapper"><div class="c-evenbetter_header-cell_content">${F.name}</div></div></div>`})}filterRows(z){const q=this.tableWrapper.querySelectorAll(".c-evenbetter_table_row");let Z=1;q.forEach((F,G)=>{const K=F,Q=F.querySelectorAll(".c-evenbetter_table-item-cell");let Y=!1;if(Q.forEach((_)=>{if(_.textContent?.toLowerCase().includes(z.toLowerCase()))Y=!0}),Y)K.style.display="flex",K.setAttribute("data-is-even",(Z%2===0).toString()),Z++;else K.style.display="none",K.removeAttribute("data-is-even")})}clearRows(){this.tableWrapper.innerHTML=""}addRow(z,q){const Z=(this.tableWrapper.children.length+1)%2===0,F=document.createElement("div");F.className="c-evenbetter_table_row",F.setAttribute("data-is-even",Z.toString());const G=document.createElement("div");if(G.className="c-evenbetter_table-item-row",this.config.rowHeight)G.style.height=this.config.rowHeight;if(z.forEach((K)=>{const Q=this.config.columns.find((J)=>J.name===K.columnName)?.width,Y=document.createElement("div");Y.className="c-evenbetter_table-item-cell",Y.setAttribute("data-column-id",K.columnName),Y.setAttribute("data-align","start"),Y.style.setProperty("--cellWidth",`max(${Q}, 56px)`);const _=document.createElement("div");if(_.className="c-evenbetter_table-item-cell__inner",typeof K.value==="string")_.textContent=K.value;else _.appendChild(K.value);Y.appendChild(_),G.appendChild(Y)}),q)G.addEventListener("click",q);F.appendChild(G),this.tableWrapper.appendChild(F)}getHTMLElement(){return this.tableElement}static createTable(z){return new I(z)}}var U1=function(){const z=new D,q=new M,Z=new E,F=new P(z),G=new C,K=new v;return z.registerEvent("onCaidoLoad",q),z.registerEvent("onSettingsTabOpen",Z),z.registerEvent("onPageOpen",F),z.registerEvent("onContextMenuOpen",G),z.registerEvent("onCommandRun",K),z.initEvents(),a(z),{modal:{openModal:x,closeModal:k},toast:{showToast:r},components:{createTable:t,createNavigationBar:u,createCheckbox:p,createTextInput:l},eventManager:z,loadCSS:f,promptCommands:s,hotReloading:o}},T;if(typeof window!=="undefined"&&window.EvenBetterAPI)T=window.EvenBetterAPI;else if(T=U1(),typeof window!=="undefined")window.EvenBetterAPI=T;var $=T;function H(z){return String(z).replace(/[&<>"'\/]/g,(q)=>V1.get(q))}var V1=new Map(Object.entries({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"}));var y="v1.0";var w="https://raw.githubusercontent.com/bebiksior/EvenBetter/dev/extensions.json",n="https://raw.githubusercontent.com/bebiksior/EvenBetterExtensions/main/version.txt";class ExtensionsManager{installedExtensions=[];extensions=[];async installExtension(z){if(this.isExtensionInstalled(z))throw new Error(`Extension with ID ${z} is already installed.`);const q=this.extensions.find((Z)=>Z.id===z);if(!q)throw new Error(`No data found for extension with ID ${z}`);if(q.customJSUrl){const Z=await this.fetchBody(q.customJSUrl);localStorage.setItem(`extensions_${q.id}_javascript`,Z)}if(q.customCSSUrl){const Z=await this.fetchBody(q.customCSSUrl);localStorage.setItem(`extensions_${q.id}_css`,Z)}this.installedExtensions.push({installedVersion:q.latestVersion,extensionID:q.id}),localStorage.setItem("installedExtensions",JSON.stringify(this.installedExtensions)),localStorage.setItem("previousPage",window.location.hash),window.location.reload()}uninstallExtension(z){localStorage.removeItem(`extensions_${z}_javascript`),localStorage.removeItem(`extensions_${z}_css`),this.installedExtensions=this.installedExtensions.filter((q)=>q.extensionID!==z),localStorage.setItem("installedExtensions",JSON.stringify(this.installedExtensions)),localStorage.setItem("previousPage",window.location.hash),window.location.reload()}async updateExtension(z){const q=this.installedExtensions.find((F)=>F.extensionID===z);if(!q)throw new Error(`Extension with ID ${z} is not installed.`);const Z=this.extensions.find((F)=>F.id===z);if(!Z||!Z.versionUrl)throw new Error(`No data found for extension with ID ${z} or version URL not provided.`);if(await this.fetchBody(Z.versionUrl).then((F)=>{q.installedVersion=F,localStorage.setItem("installedExtensions",JSON.stringify(this.installedExtensions))}),Z.customJSUrl)await this.fetchBody(Z.customJSUrl).then((F)=>{localStorage.setItem(`extensions_${z}_javascript`,F)});if(Z.customCSSUrl)await this.fetchBody(Z.customCSSUrl).then((F)=>{localStorage.setItem(`extensions_${z}_css`,F)});localStorage.setItem("previousPage",window.location.hash),window.location.reload()}getInstalledExtension(z){return this.installedExtensions.find((q)=>q.extensionID===z)}isExtensionInstalled(z){return this.installedExtensions.some((q)=>q.extensionID===z)}loadInstalledExtensions(){const z=localStorage.getItem("installedExtensions");if(z)this.installedExtensions=JSON.parse(z)}getExtensions(){return this.extensions}getInstalledExtensions(){return this.installedExtensions}async importCustomExtension(z){if(this.extensions.some((G)=>G.id===z.id))throw new Error(`Extension with ID ${z.id} already exists.`);z.isCustom=!0;const q=await this.fetchBody(z.versionUrl);z.latestVersion=H(q);let Z=localStorage.getItem("customExtensions");if(!Z)Z="[]";const F=JSON.parse(Z);F.push(z),localStorage.setItem("customExtensions",JSON.stringify(F)),this.extensions.push(z)}deleteCustomExtension(z){let q=localStorage.getItem("customExtensions");if(!q)return;const F=JSON.parse(q).filter((G)=>G.id!==z);if(localStorage.setItem("customExtensions",JSON.stringify(F)),this.extensions=this.extensions.filter((G)=>G.id!==z),this.isExtensionInstalled(z))this.uninstallExtension(z)}async initExtensions(){try{const z=await fetch(this.getExtensionsURL());if(!z.ok)throw new Error(`Failed to fetch extensions from ${this.getExtensionsURL()}`);const Z=(await z.json()).extensions;for(let G of Z){const K=await this.fetchBody(G.versionUrl);G.latestVersion=H(K)}this.extensions=Z;let F=localStorage.getItem("customExtensions");if(F){const G=JSON.parse(F);this.extensions.push(...G)}return this.extensions}catch(z){throw console.error(`Failed to load extensions from URL: ${z}`),z}}runExtension(extensionID){const installedExtension=this.installedExtensions.find((z)=>z.extensionID===extensionID);if(!installedExtension)throw new Error(`Extension with ID ${extensionID} is not installed.`);const jsCode=localStorage.getItem(`extensions_${extensionID}_javascript`);if(jsCode)try{eval(jsCode)}catch(z){console.error(`Failed to run extension ${extensionID}: ${z}`)}const cssCode=localStorage.getItem(`extensions_${extensionID}_css`);if(cssCode){const z=document.createElement("style");z.textContent=cssCode,document.head.appendChild(z)}}getExtensionsURL(){return localStorage.getItem("eb-extensions-url")||w}async checkForUpdates(z){const q=this.installedExtensions.find((F)=>F.extensionID===z);if(!q)throw new Error(`Extension with ID ${z} is not installed.`);const Z=this.extensions.find((F)=>F.id===z);if(!Z||!Z.versionUrl)throw new Error(`No data found for extension with ID ${z} or version URL not provided.`);try{const F=await this.fetchBody(Z.versionUrl);if(F!==q.installedVersion)return{latestVersion:F,isLatest:!1};else return{latestVersion:F,isLatest:!0}}catch(F){throw console.error(`Failed to check for updates for extension ${z}: ${F}`),F}}async fetchBody(z){const q=await fetch(z);if(q.ok)return q.text();else throw new Error(`Failed to fetch code from ${z}`)}}var O1=new ExtensionsManager,X=O1;var e=".eb-extensions__setting{align-items:center;display:flex}.eb-extensions__settings--group{background-color:var(--c-bg-default);border-radius:5px;flex-direction:column;gap:1em;padding:1.5em;display:flex}.eb-extensions__setting-label{color:var(--c-fg-subtle);margin-left:1em;font-size:1rem;font-weight:300}.eb-extensions__setting-title{color:var(--c-fg-default);font-size:1.3rem;font-weight:600}.eb-extensions__settings{flex-direction:column;gap:1.5em;display:flex}.eb-extensions__settings-content{flex-direction:column;gap:1em;display:flex}.eb-extensions__textinput-setting{flex-direction:column;align-items:flex-start;padding:0 2.2em;display:flex}.eb-extensions__textinput-setting .eb-extensions__setting-label{margin-left:0!important}";var z1=()=>{f({id:"eb-extensions-settings",cssText:e.toString()});const z=document.createElement("div");return z.classList.add("eb-extensions__settings"),z.innerHTML=`
    <div class="eb-extensions__settings-header">
        <div style="font-weight: 600; font-size: 17px;">
            EvenBetter: Extensions - Settings
        </div>
        <div style="color: var(--c-fg-subtle); font-size: 15px;">
            Configure EvenBetter: Extensions settings. Here you can toggle auto-updates, notifications and more.
        </div>
    </div>
    <div class="eb-extensions__settings-content">
        <div class="eb-extensions__settings--group">
            <div class="eb-extensions__setting-title">Extensions</div>
            <div class="eb-extensions__setting">
                <div class="eb-extensions__setting-checkbox" data-key="auto-update">
                </div>
                <div class="eb-extensions__setting-label">
                    Auto-update extensions: Never miss an update - automatically update installed extensions when new versions are available.
                </div>
            </div>
            <div class="eb-extensions__setting">
                <div class="eb-extensions__setting-checkbox" data-key="show-notifications">
                </div>
                <div class="eb-extensions__setting-label">
                    Show notifications: Show notifications when new versions of installed extensions are available.
                </div>
            </div>
        </div>
        <div class="eb-extensions__settings--group">
            <div class="eb-extensions__setting-title">EvenBetter: Extensions</div>
            <div class="eb-extensions__setting">
                <div class="eb-extensions__setting-checkbox" data-key="show-update-notification">
                </div>
                <div class="eb-extensions__setting-label">
                    Show update notification: Show notification when new version of EvenBetter: Extensions is available.
                </div>
            </div>
            <div class="eb-extensions__setting eb-extensions__textinput-setting">
              <div class="eb-extensions__setting-label">
                URL to fetch extensions from:
              </div>
              <div class="eb-extensions__setting-textinput" data-key="extensions-url">
              </div>
          </div>
        </div>
    </div>
  `,z.querySelectorAll(".eb-extensions__setting-checkbox").forEach((q)=>{const Z=q.getAttribute("data-key"),F=localStorage.getItem(`eb-${Z}`)==="true",G=$.components.createCheckbox(),K=G.querySelector('input[type="checkbox"]');K.checked=F,q.appendChild(G),q.addEventListener("change",()=>{localStorage.setItem(`eb-${Z}`,K.checked?"true":"false")})}),z.querySelectorAll(".eb-extensions__setting-textinput").forEach((q)=>{const Z=q.getAttribute("data-key");let F=localStorage.getItem(`eb-${Z}`);if(!F)localStorage.setItem(`eb-${Z}`,w),F=w;const G=$.components.createTextInput("50em"),K=G.querySelector("input");K.value=F,q.appendChild(G),q.addEventListener("change",()=>{localStorage.setItem(`eb-${Z}`,K.value)})}),z};var U;(function(G){G["ALL"]="all";G["INSTALLED"]="installed";G["CUSTOM"]="custom";G["SETTINGS"]="settings"})(U||(U={}));var b=new Map,L=(z)=>{const q=document.createElement("div");q.style.height="100%",q.innerHTML=`
    <div class="eb-extensions">
      <div class="eb-extensions__content">
      </div>
    </div>
  `;const Z=q.querySelector(".eb-extensions");if(!Z)return q;const F=[{name:"Name",width:"25em"},{name:"Version",width:"9em"},{name:"Description",width:"30em"},{name:"Author",width:"9em"},{name:"Actions",width:"14em"}],G=$.components.createTable({columns:F,tableHeight:"100%"});b.set(z,G);const K=[];if(K.push(N1(z)),z===U.CUSTOM)K.push(A1(z));const Q=$.components.createNavigationBar({title:"Extensions",items:[{title:"All",url:"#/extensions/all",icon:"fa-globe"},{title:"Installed",url:"#/extensions/installed",icon:"fa-download"},{title:"Custom",url:"#/extensions/custom",icon:"fa-wrench"},{title:"Settings",url:"#/extensions/settings",icon:"fa-cog"}],customButtons:K});if(Z.prepend(Q),z===U.SETTINGS)return Z.querySelector(".eb-extensions__content").appendChild(z1()),q;$.eventManager.on("onPageOpen",(_)=>{if(_.newUrl.startsWith("#/extensions/"))B(z)});const Y=document.createElement("div");if(Y.classList.add("eb-extensions__library"),Z.querySelector(".eb-extensions__content").appendChild(Y),Y)Y.appendChild(G.getHTMLElement());return q},A1=(z)=>{const q=W.ui.button({label:"Import",variant:"tertiary",leadingIcon:"fas fa-file-import",size:"small"});return q.addEventListener("click",()=>{const Z=document.createElement("input");Z.type="file",Z.accept=".json",Z.click(),Z.addEventListener("change",async()=>{const F=Z.files?.[0];if(!F)return;const G=new FileReader;G.onload=async()=>{try{const K=JSON.parse(G.result);if(!K)return;await X.importCustomExtension(K),B(z)}catch(K){$.modal.openModal({title:"Error importing extension",content:K.toString()})}},G.readAsText(F)})}),q},N1=(z)=>{const q=W.ui.button({label:"Refresh",variant:"primary",leadingIcon:"fas fa-sync",size:"small"});return q.addEventListener("click",async()=>{await X.initExtensions(),B(z),$.toast.showToast({message:"Extensions refreshed",type:"success",duration:2000,position:"bottom"})}),q},B=(z)=>{if(!b.get(z))return;const q=b.get(z);q.clearRows(),X.getExtensions().forEach((Z)=>{if(z===U.INSTALLED&&!X.isExtensionInstalled(Z.id))return;if(z===U.CUSTOM&&!Z.isCustom)return;const F=X.getInstalledExtension(Z.id)?.installedVersion||"-";let G=Z.latestVersion===F?Z.latestVersion:`${F} (<span style='color:var(--c-bg-success);'>${Z.latestVersion}</span>)`;if(F==="-")G=Z.latestVersion;q.addRow([{columnName:"Name",value:h(Z.name)},{columnName:"Version",value:h(G)},{columnName:"Description",value:h(Z.description)},{columnName:"Author",value:h(Z.author)},{columnName:"Actions",value:R1(Z,z)}],()=>{$.modal.openModal({title:Z.name,content:`<div class="eb-extensions__modal">
              <div class="eb-extensions__modal-description">
                <div class="eb-extensions__modal-key">
                  Description
                </div>
                <div class="eb-extensions__modal-value">
                  ${H(Z.description)}
                </div>
              </div>
              <div class="eb-extensions__modal-author">
                <div class="eb-extensions__modal-key">
                  Author
                </div>
                <div class="eb-extensions__modal-value">
                  ${H(Z.author)}
                </div>
              </div>
              <div class="eb-extensions__modal-url">
                <div class="eb-extensions__modal-key">
                  URL
                </div>
                <div class="eb-extensions__modal-value">
                  <a href="${H(Z.url)}" target="_blank">${H(Z.url)}</a>
                </div>
              </div>
              
              ${F!=="-"?`
                  <div class="eb-extensions__modal-installed">
                    <div class="eb-extensions__modal-key">
                      Installed Version
                    </div>
                    <div class="eb-extensions__modal-value">
                      ${H(F)}
                    </div>
                  </div>
              `:""}

              <div class="eb-extensions__modal-latest">
                <div class="eb-extensions__modal-key">
                  Latest Version
                </div>
                <div class="eb-extensions__modal-value">
                  ${H(Z.latestVersion)}
                </div>
              </div>
            </div>`})})})},R1=(z,q)=>{const Z=z.id,F=document.createElement("div");if(F.innerHTML=`
    <div class="evenbetter-table-actions">
        <div class="evenbetter-table-actions__select">
            <div class="c-evenbetter_button" id="eb-install-ext" data-size="small" data-block="true" data-variant="secondary" data-outline="true" data-plain="false" style="--9bad4558: center;">
                <div class="formkit-outer" data-family="button" data-type="button" data-empty="true">
                    <div class="formkit-wrapper">
                        <button class="formkit-input c-evenbetter_button__input" type="button" name="button_82" id="input_83">
                            <div class="c-evenbetter_button__label">
                                Install
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>`,z?.isCustom){const Y=W.ui.button({label:"Delete",variant:"primary",size:"small",leadingIcon:"fas fa-trash"});Y.addEventListener("click",(_)=>{_.stopPropagation(),X.deleteCustomExtension(z.id),B(q)}),F.querySelector(".evenbetter-table-actions").appendChild(Y)}const G=F.querySelector("#eb-install-ext");if(!G)return F;let K=!1;if(G.addEventListener("click",async(Y)=>{if(Y.stopPropagation(),K)return;if(X.getInstalledExtension(Z)){if(!(await X.checkForUpdates(Z)).isLatest){K=!0,await X.updateExtension(Z),K=!1;return}X.uninstallExtension(Z);return}K=!0,await X.installExtension(Z),K=!1}),X.isExtensionInstalled(Z))k1(G);const Q=X.getInstalledExtension(Z);if(Q&&z.latestVersion!==Q.installedVersion)y1(G);return F},k1=(z)=>{const q=z.querySelector(".c-evenbetter_button__label");if(q)q.innerText="Uninstall",q.classList.add("c-evenbetter_button__label--uninstall");const Z=z.querySelector(".c-evenbetter_button__input");if(Z)Z.classList.add("c-evenbetter_button__input--uninstall")},y1=(z)=>{const q=z.querySelector(".c-evenbetter_button__label");if(q)q.innerText="Update",q.classList.remove("c-evenbetter_button__label--uninstall"),q.classList.add("c-evenbetter_button__label--update");const Z=z.querySelector(".c-evenbetter_button__input");if(Z)Z.classList.remove("c-evenbetter_button__input--uninstall"),Z.classList.add("c-evenbetter_button__input--update")},h=(z)=>{const q=document.createElement("span");return q.innerHTML=z,q};class c{handlers=[];addHandler(z){this.handlers.push(z)}init(){}trigger(z){this.handlers.forEach((q)=>q(z))}}var Z1=".eb-extensions{flex-direction:column;gap:.5em;height:100%;display:flex;overflow:auto}.eb-extensions__content{background-color:var(--c-bg-subtle);border-radius:5px;height:100%}.evenbetter-table-actions{align-items:center;gap:var(--c-space-2);display:flex}.evenbetter-table-actions__select{width:fit-content}.c-evenbetter_button{font-size:var(--c-font-size-100);font-weight:var(--c-font-weight-500);--button-focus-color:white;font-size:var(--c-font-size-100);font-weight:var(--c-font-weight-500)}[data-outline=true][data-variant=secondary] .c-evenbetter_button__input{color:var(--c-fg-secondary);border:var(--c-border-width-2)solid var(--c-border-secondary);background-color:#0000}.c-evenbetter_button__input:active{background-color:var(--c-yellow-300)!important;color:var(--c-gray-900)!important}[data-block=true] .c-button,[data-block=true] .c-evenbetter_button__input{width:100%}[data-variant=secondary] .c-evenbetter_button__input{background-color:var(--c-bg-secondary);color:var(--c-fg-onEmphasis)}[data-size=small] .c-evenbetter_button__input{padding:var(--c-space-0)var(--c-space-2);min-height:var(--c-space-8)}.c-evenbetter_button__input{font-size:inherit;border-radius:var(--c-border-radius-1);cursor:pointer;color:var(--c-fg-secondary);border:0;border:var(--c-border-width-2)solid var(--c-border-secondary);font-size:inherit;border-radius:var(--c-border-radius-1);cursor:pointer;background-color:#0000;border:0;align-items:center;width:100%;display:flex}.c-evenbetter_button__label{text-overflow:ellipsis;white-space:nowrap;flex:1;justify-content:center;display:inline-flex;overflow:hidden}.c-evenbetter_button__input--uninstall{border-color:var(--c-fg-danger)!important}.c-evenbetter_button__label--uninstall{color:var(--c-fg-danger)!important}.c-evenbetter_button__input--uninstall:active{background-color:var(--c-fg-danger)!important}.c-evenbetter_button__input--uninstall:active .c-evenbetter_button__label--uninstall{color:var(--c-bg-subtle)!important}.c-evenbetter_button__input--update{border-color:var(--c-bg-info)!important}.c-evenbetter_button__label--update{color:var(--c-bg-info)!important}.c-evenbetter_button__input--update:active{background-color:var(--c-bg-info)!important}.c-evenbetter_button__input--update:active .c-evenbetter_button__label--update{color:var(--c-bg-subtle)!important}.eb-extensions__import-warning{color:var(--c-fg-danger);margin-bottom:.25em}.eb-extensions__import{margin-top:1em}.eb-extensions__modal *{white-space:normal!important}.eb-extensions__modal{flex-direction:column;gap:1em;display:flex}.eb-extensions__modal-description{color:var(--c-fg-subtle);font-size:1rem;font-weight:300}.eb-extensions__modal-key{color:var(--c-fg-default);font-size:16px;font-weight:600}.eb-extensions__modal-value{font-weight:300}.c-content[data-page^=\"#/extensions/\"]{min-width:900px;overflow:auto}.c-content[data-page=\"#/extensions/settings\"] .eb-extensions__content{padding:1em}.eb-extensions__library{height:100%}.eb-extensions__setting-label b{color:#fff}";var w1=function(){if(!localStorage.getItem("eb-show-notifications"))localStorage.setItem("eb-show-notifications","true");if(!localStorage.getItem("eb-show-update-notification"))localStorage.setItem("eb-show-update-notification","true")},L1=function(){$.eventManager.on("onSettingsTabOpen",(z)=>{switch(z){case"developer":const q=document.querySelector(".c-custom-js__footer");q.removeEventListener("click",S),q.addEventListener("click",S)}}),$.eventManager.on("onPageOpen",(z)=>{const q=Array.from(document.querySelectorAll(".c-sidebar-item")).filter((F)=>F.textContent=="Extensions");if(q.length==0)return;q[0].setAttribute("data-is-active",z.newUrl.startsWith("#/extensions/")?"true":"false")})},T1=function(){W.navigation.addPage("/extensions/all",{body:L(U.ALL)}),W.navigation.addPage("/extensions/installed",{body:L(U.INSTALLED)}),W.navigation.addPage("/extensions/custom",{body:L(U.CUSTOM)}),W.navigation.addPage("/extensions/settings",{body:L(U.SETTINGS)})},h1=function(){W.sidebar.registerItem("Extensions","/extensions/all",{icon:"fas fa-puzzle-piece",group:"EvenBetter"})},B1=function(){W.commands.register("eb:openExtensionsPage",{name:"Go to Extensions",group:"EvenBetter: Navigation",run:()=>{W.navigation.goTo("/extensions/all")}}),W.commandPalette.register("eb:openExtensionsPage")};async function S1(){try{const q=await(await fetch(n,{cache:"no-store"})).text(),Z=parseFloat(q.replace("v",""));if(parseFloat(y.replace("v",""))>Z)return{isLatest:!0,message:`You are using a development version: ${y}.`};if(q.trim()===y)return{isLatest:!0,message:"You are using the latest version! \uD83C\uDF89"};else return{isLatest:!1,message:`New EvenBetter Extensions version available: ${q}.`,latestVersion:q}}catch(z){return{isLatest:!1,message:"Failed to check for updates"}}}async function D1(){f({id:"eb-extensions",cssText:Z1.toString()}),w1();const z=new c;if($.eventManager.registerEvent("onExtensionLoad",z),T1(),B1(),h1(),L1(),localStorage.getItem("eb-message-onload"))$.modal.openModal({title:"EvenBetter Extensions",content:H(localStorage.getItem("eb-message-onload"))}),localStorage.removeItem("eb-message-onload");if(location.hash=="#/settings/developer"){const Z=document.querySelector(".c-custom-js__footer");Z.removeEventListener("click",S),Z.addEventListener("click",S)}if((await X.initExtensions()).forEach((Z)=>{const F=X.getInstalledExtension(Z.id);if(!F)return;if(F.installedVersion!=Z.latestVersion){if(console.log(`New version available for extension ${Z.id}: ${Z.latestVersion}`),localStorage.getItem("eb-auto-update")==="true")localStorage.setItem("eb-message-onload",`Auto-updated extension ${Z.name} to version ${Z.latestVersion}. If you want to disable auto-updates, go to Extensions -> Settings.`),X.updateExtension(F.extensionID);if(localStorage.getItem("eb-show-notifications")==="true")$.modal.openModal({title:"New extension version available",content:`New version available for extension <b style='color:var(--c-fg-default);'>${Z.name}</b> (<span style='color:var(--c-bg-danger);'>${F.installedVersion}</span> -> <span style='color:var(--c-bg-success);'>${Z.latestVersion}</span>).`})}}),$.eventManager.triggerEvent("onExtensionLoad"),localStorage.getItem("eb-show-update-notification")==="true"){const Z=await S1();if(!Z.isLatest)$.modal.openModal({title:`EvenBetter Extensions: Update from ${y} to ${Z.latestVersion}`,content:"You are using an outdated version of EvenBetter Extensions. Please update to the latest version on http://github.com/bebiksior/EvenBetterExtensions."})}if(localStorage.getItem("previousPage")){const Z=localStorage.getItem("previousPage").split("#")[1];console.log("Restoring previous path: "+Z),W.navigation.goTo(Z),localStorage.removeItem("previousPage")}}var S=()=>{setTimeout(()=>{location.reload()},250)};X.loadInstalledExtensions();X.getInstalledExtensions().forEach((z)=>{console.log("Running extension: "+z.extensionID),X.runExtension(z.extensionID)});$.eventManager.on("onCaidoLoad",()=>{D1()});
