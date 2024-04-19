var W=window.Caido;var d=new Set,z1=({id:Z,cssText:z})=>{if(d.has(Z)||document.querySelector(`#${Z}`))return;const q=document.createElement("style");q.id=Z,q.textContent=z,q.classList.add("evenbetterapi-css-module"),document.head.appendChild(q),d.add(Z)},f=z1;var F1=`
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
`,p=()=>{f({id:"checkbox",cssText:F1});const Z=document.createElement("div");return Z.classList.add("eb-button__label"),Z.innerHTML=`<div class="eb-checkbox">
            <div class="formkit-outer" data-family="box" data-type="checkbox" data-complete="true">
                <label class="formkit-wrapper eb-checkbox__wrapper" data-checked="true">
                    <span class="formkit-inner eb-checkbox__inner">
                        <input class="formkit-input eb-checkbox__input" type="checkbox">
                        <span class="formkit-decorator" aria-hidden="true"></span>
                    </span>
                </label>
            </div>
        </div>
    `,Z};function u(Z){const z=document.createElement("div");z.classList.add("c-menu-bar"),z.style.width="100%";const q=document.createElement("div");q.classList.add("p-menubar","p-component"),q.setAttribute("data-pc-name","menubar"),q.setAttribute("data-pc-section","root");const F=document.createElement("div");F.classList.add("p-menubar-start"),F.setAttribute("data-pc-section","start");const G=document.createElement("div");G.classList.add("c-settings__title"),G.style.padding="0 var(--c-space-4)",G.style.fontWeight="700",G.textContent=Z.title,F.appendChild(G);const K=document.createElement("ul");K.classList.add("p-menubar-root-list"),Z.items.forEach(($)=>{const X=document.createElement("li");X.classList.add("p-menuitem"),X.setAttribute("role","menuitem");const V=document.createElement("div");V.classList.add("p-menuitem-content"),V.setAttribute("data-pc-section","content");const N=document.createElement("div");N.classList.add("c-settings__item"),N.setAttribute("data-is-active","true"),N.addEventListener("click",()=>{q.classList.remove("p-menubar-mobile-active")});const j=document.createElement("a");if(j.setAttribute("href",$.url),j.setAttribute("draggable","false"),j.draggable=!1,j.classList.add("p-menuitem-link"),J.eventManager.on("onPageOpen",(k)=>{if(k.newUrl===$.url){if($.onOpen)$.onOpen();j.style.backgroundColor="rgba(255,255,255,.04)",j.style.borderRadius="var(--c-border-radius-2)"}else j.style.backgroundColor="",j.style.borderRadius=""}),$.icon){const k=document.createElement("i");k.classList.add("c-icon","fas",$.icon),k.style.marginRight="var(--c-space-2)",j.appendChild(k)}const g=document.createElement("span");g.textContent=$.title,j.appendChild(g),N.appendChild(j),V.appendChild(N),X.appendChild(V),K.appendChild(X)});const Q=document.createElement("a");Q.setAttribute("role","button"),Q.setAttribute("tabindex","0"),Q.classList.add("p-menubar-button"),Q.setAttribute("aria-haspopup","true"),Q.setAttribute("aria-expanded","false"),Q.setAttribute("aria-label","Navigation"),Q.setAttribute("data-pc-section","button"),Q.setAttribute("aria-controls","pv_id_3"),Q.innerHTML='<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="p-icon" aria-hidden="true" data-pc-section="menubuttonicon"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.3226 3.6129H0.677419C0.497757 3.6129 0.325452 3.54152 0.198411 3.41448C0.0713707 3.28744 0 3.11514 0 2.93548C0 2.75581 0.0713707 2.58351 0.198411 2.45647C0.325452 2.32943 0.497757 2.25806 0.677419 2.25806H13.3226C13.5022 2.25806 13.6745 2.32943 13.8016 2.45647C13.9286 2.58351 14 2.75581 14 2.93548C14 3.11514 13.9286 3.28744 13.8016 3.41448C13.6745 3.54152 13.5022 3.6129 13.3226 3.6129ZM13.3226 7.67741H0.677419C0.497757 7.67741 0.325452 7.60604 0.198411 7.479C0.0713707 7.35196 0 7.17965 0 6.99999C0 6.82033 0.0713707 6.64802 0.198411 6.52098C0.325452 6.39394 0.497757 6.32257 0.677419 6.32257H13.3226C13.5022 6.32257 13.6745 6.39394 13.8016 6.52098C13.9286 6.64802 14 6.82033 14 6.99999C14 7.17965 13.9286 7.35196 13.8016 7.479C13.6745 7.60604 13.5022 7.67741 13.3226 7.67741ZM0.677419 11.7419H13.3226C13.5022 11.7419 13.6745 11.6706 13.8016 11.5435C13.9286 11.4165 14 11.2442 14 11.0645C14 10.8848 13.9286 10.7125 13.8016 10.5855C13.6745 10.4585 13.5022 10.3871 13.3226 10.3871H0.677419C0.497757 10.3871 0.325452 10.4585 0.198411 10.5855C0.0713707 10.7125 0 10.8848 0 11.0645C0 11.2442 0.0713707 11.4165 0.198411 11.5435C0.325452 11.6706 0.497757 11.7419 0.677419 11.7419Z" fill="currentColor"></path></svg>',Q.addEventListener("click",()=>{q.classList.toggle("p-menubar-mobile-active"),K.style.zIndex=q.classList.contains("p-menubar-mobile-active")?"1200":""}),window.addEventListener("resize",()=>{if(window.innerWidth<955)q.classList.add("p-menubar-mobile");else q.classList.remove("p-menubar-mobile"),q.classList.remove("p-menubar-mobile-active")}),window.dispatchEvent(new Event("resize"));const Y=document.createElement("div");if(Y.classList.add("p-menubar-end"),Y.setAttribute("data-pc-section","end"),Y.style.display="flex",Y.style.gap=".5em",Y.style.alignItems="center",Z.customButtons)Z.customButtons.forEach(($)=>{Y.appendChild($)});return q.appendChild(F),q.appendChild(Q),q.appendChild(K),q.appendChild(Y),z.appendChild(q),z}var O;(function(F){F["INFO"]="info";F["ERROR"]="error";F["WARN"]="warn"})(O||(O={}));window.global=window;class m{log(Z,z){const F=`${(new Date()).toString()} [EvenBetterAPI]`;switch(Z){case O.INFO:console.log(`${F} [INFO] ${z}`);break;case O.ERROR:console.error(`${F} [ERROR] ${z}`);break;case O.WARN:console.warn(`${F} [WARN] ${z}`);break;default:console.log(`${F} [UNKNOWN] ${z}`)}}info(Z){this.log(O.INFO,Z)}error(Z){this.log(O.ERROR,Z)}warn(Z){this.log(O.WARN,Z)}}var G1=new m,A=G1;class D{events={};registerEvent(Z,z){this.events[Z]=z}triggerEvent(Z,z){const q=this.events[Z];if(q)q.trigger(z);else console.error(`Event "${Z}" not registered.`)}on(Z,z){const q=this.events[Z];if(q)q.addHandler(z);else console.error(`Event "${Z}" not registered.`)}initEvents(){A.info(`Initializing ${Object.keys(this.events).length} custom events`);for(let Z in this.events)this.events[Z].init()}}class M{handlers=[];addHandler(Z){this.handlers.push(Z)}init(){const Z=setInterval(()=>{if(K1())clearInterval(Z),this.trigger()},25)}trigger(){this.handlers.forEach((Z)=>Z())}}var K1=()=>{return document.querySelector(".c-authenticated")!==null};class C{handlers=[];addHandler(Z){this.handlers.push(Z)}init(){new MutationObserver((z)=>{for(let q of z)if(q.type==="childList")q.addedNodes.forEach((F)=>{const G=F;if(F.nodeType===1&&G.classList.contains("p-contextmenu"))this.trigger(G)})}).observe(document.body,{childList:!0,subtree:!0})}trigger(Z){this.handlers.forEach((z)=>z(Z))}}class P{handlers=[];eventManager;constructor(Z){this.eventManager=Z}addHandler(Z){this.handlers.push(Z)}init(){let Z=window.location.href;const z=new MutationObserver(()=>{if(window.location.href!==Z){let F=new URL(window.location.href).hash,G=new URL(Z).hash;if(Z=window.location.href,F.includes("?custom-path="))F=F.split("?custom-path=")[1];if(G.includes("?custom-path="))G=G.split("?custom-path=")[1];document.querySelector(".c-content")?.setAttribute("data-page",F),this.trigger({newUrl:F,oldUrl:G})}}),q={subtree:!0,childList:!0};z.observe(document,q)}trigger(Z){if(A.info(`Page updated: ${Z.oldUrl} -> ${Z.newUrl}`),Z.newUrl.startsWith("#/settings/"))this.eventManager.triggerEvent("onSettingsTabOpen",Z.newUrl.replace("#/settings/",""));this.handlers.forEach((z)=>z(Z))}}class E{handlers=[];addHandler(Z){this.handlers.push(Z)}init(){}trigger(Z){A.info(`Settings tab opened: ${Z}`),this.handlers.forEach((z)=>z(Z))}}var Q1=`
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
`;document.addEventListener("keydown",(Z)=>{if(Z.key==="Escape")R()});var Y1=({title:Z,content:z})=>{f({id:"evenbetterapi-modal",cssText:Q1});const q=document.createElement("div");q.classList.add("evenbetter-modal"),q.innerHTML=`
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
    `;const F=q.querySelector(".evenbetter-modal__content-header-title");if(!F)throw new Error("Modal title not found");F.textContent=Z;const G=q.querySelector(".evenbetter-modal__content-body-text");if(!G)throw new Error("Modal body not found");return G.innerHTML=z,q.setAttribute("data-modal-title",Z),q.querySelector(".evenbetter-modal__content-body-close")?.addEventListener("click",R),q},$1=()=>{return document.querySelector(".evenbetter-modal")!==null},R=()=>{document.querySelector(".evenbetter-modal")?.remove()},r=({title:Z,content:z})=>{if($1())R();const q=Y1({title:Z,content:z});document.body.appendChild(q)};var J1=`
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
}
`,X1=(Z,z,q)=>{const F=document.createElement("div");F.classList.add("v-toast"),F.classList.add(`v-toast--${q}`);const G=document.createElement("div");G.setAttribute("role","alert"),G.classList.add("v-toast__item"),G.classList.add(`v-toast__item--${z}`),G.classList.add(`v-toast__item--${q}`),F.appendChild(G);const K=document.createElement("div");K.classList.add("v-toast__icon"),G.appendChild(K);const Q=document.createElement("p");return Q.classList.add("v-toast__text"),Q.textContent=Z,G.appendChild(Q),F.classList.add("v-toast--fade-in"),F},x=(Z)=>{const{message:z,type:q,position:F,duration:G}=Z;f({id:"eb-toast",cssText:J1});let K=document.querySelector(`.v-toast--${F}`);if(!K)K=document.createElement("div"),K.classList.add("v-toast"),K.classList.add(`v-toast--${F}`),document.body.appendChild(K);const Q=X1(z,q,F);K.appendChild(Q),setTimeout(()=>{Q.classList.add("v-toast--fade-out"),setTimeout(()=>{Q.remove()},150)},G-150)};function l(Z,z="Search...",q=!1,F){f({id:"eb-text-input",cssText:_1});const G=document.createElement("div");G.classList.add("formkit-outer","c-text-input__outer"),G.setAttribute("style",`width: ${Z};`);const K=document.createElement("div");K.classList.add("formkit-wrapper"),K.style.display="flex";const Q=document.createElement("div");Q.classList.add("formkit-inner","eb-text-input__inner");const Y=document.createElement("div");Y.classList.add("c-text-input__prefix"),Y.setAttribute("style","align-self: center; color: var(--c-fg-subtle);");const $=document.createElement("i");if($.classList.add("c-icon","fas"),F)$.classList.add(F);const X=document.createElement("input");if(X.setAttribute("placeholder",z),X.setAttribute("spellcheck","false"),X.classList.add("formkit-input","c-text-input__input"),X.setAttribute("type","text"),X.setAttribute("style","width: 100%; background: transparent; border: 0; outline: 0; color: inherit; box-sizing: border-box; line-height: inherit;"),F)Y.appendChild($);if(Q.appendChild(Y),Q.appendChild(X),q){const V=document.createElement("button");V.innerHTML='<i class="fas fa-copy"></i>',V.setAttribute("style","background: transparent; border: 0; outline: 0; cursor: pointer; padding: 0; margin-left: 10px;"),V.addEventListener("click",()=>{navigator.clipboard.writeText(X.value),J.toast.showToast({message:"Copied to clipboard",position:"bottom",type:"info",duration:1000})}),Q.appendChild(V)}return K.appendChild(Q),G.appendChild(K),G}var _1=`
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
`;class v{handlers=[];commandObserver=null;selectedCommand=null;addHandler(Z){this.handlers.push(Z)}init(){const Z=(F)=>{this.commandObserver=new MutationObserver((G)=>{const K=z();if(K!==this.selectedCommand)this.selectedCommand=K}),this.commandObserver.observe(F,{attributes:!0,subtree:!0})},z=()=>{return document.querySelector("[command-item][aria-selected='true']")};new MutationObserver((F)=>{for(let G of F)if(G.type==="childList")G.addedNodes.forEach((K)=>{const Q=K;if(K.nodeType===1&&Q.hasAttribute("command-theme"))Z(Q)}),G.removedNodes.forEach((K)=>{const Q=K;if(K.nodeType===1&&Q.hasAttribute("command-theme")){if(!this.selectedCommand)return;const Y=this.selectedCommand.getAttribute("data-value");if(Y)this.trigger(Y);if(this.commandObserver)this.commandObserver.disconnect(),this.commandObserver=null}})}).observe(document.body,{childList:!0,subtree:!0})}trigger(Z){this.handlers.forEach((z)=>z(Z))}}var i=[],a=(Z)=>{Z.on("onCommandRun",(z)=>{const q=i.find((F)=>F.commandName===z);if(!q)return;W1(q)})},W1=(Z)=>{const z=document.createElement("div");z.classList.add("custom");const q=document.createElement("div");q.setAttribute("command-root",""),z.appendChild(q);const F=document.createElement("div");F.setAttribute("command-dialog",""),q.appendChild(F);const G=document.createElement("div");G.setAttribute("command-dialog-mask",""),G.style.display="flex",G.style.justifyContent="center",G.style.alignItems="center",G.addEventListener("click",()=>{z.remove()}),F.appendChild(G);const K=document.createElement("div");K.setAttribute("command-dialog-wrapper",""),K.style.minWidth="600px",K.style.padding="1em",K.style.margin="0",G.appendChild(K);const Q=document.createElement("div");Q.setAttribute("command-dialog-body",""),Q.style.display="flex",Q.style.gap="0.5em",K.addEventListener("click",(X)=>{X.stopPropagation()}),K.appendChild(Q);const Y=J.components.createTextInput("100%",Z.promptPlaceholder);Y.style.zIndex="100",Y.addEventListener("click",(X)=>{X.stopPropagation()}),Q.appendChild(Y);const $=W.ui.button({label:"Submit",variant:"primary"});$.addEventListener("click",()=>{const X=Y.querySelector("input");Z.onPrompt(X.value),z.remove()}),Q.appendChild($),document.body.appendChild(z),Y.querySelector("input")?.focus(),Y.addEventListener("keydown",(X)=>{if(X.key==="Enter")$.click();if(X.key==="Escape")z.remove()})},f1=(Z,z,q)=>{i.push({commandName:Z,promptPlaceholder:z,onPrompt:q})},s={createPromptCommand:f1};var o=async()=>{if(localStorage.getItem("previousPath"))setTimeout(()=>{window.location.hash=localStorage.getItem("previousPath")||"",localStorage.removeItem("previousPath")},200);const Z=new WebSocket("ws://localhost:8081");Z.addEventListener("open",()=>{J.toast.showToast({message:"Connected to Caido Hot Reloading Server",duration:2000,type:"success",position:"bottom"})}),Z.addEventListener("close",()=>{J.toast.showToast({message:"Disconnected from Caido Hot Reloading Server",duration:2000,type:"error",position:"bottom"})}),Z.addEventListener("message",(F)=>{try{const G=JSON.parse(F.data),K=G.event,Q=G.data;switch(K){case"caido:loadJS":z(Q,"");break;case"caido:loadCSS":z("",Q);break;case"caido:reload":localStorage.setItem("previousPath",window.location.hash),location.reload();break;default:console.error("Unknown event type received:",K)}}catch(G){console.error("Error parsing WebSocket message:",G)}});const z=async(F,G)=>{const K=await q();if(!K)return;const Q={input:{data:K.data,migrations:K.migrations}};if(F)Q.input.data.js=F;if(G)Q.input.data.css=G;return W.graphql.updateViewerSettings(Q)},q=async()=>{return await W.graphql.userSettings().then((F)=>{return F.viewer.settings})}};var H1=`
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
}`,j1=()=>{return'<div class="c-evenbetter_table_card-body"><div class="c-evenbetter_table-container" data-is-empty="false" data-is-loading="false" style="overflow-y: auto;"><div class="c-evenbetter_table_header-row"></div><div class="c-table__wrapper" style="margin-top: 0px;"></div></div></div>'},t=(Z)=>{return new I(Z)};class I{Z;tableElement;tableWrapper;constructor(Z){this.config=Z;f({id:"eb-table-css",cssText:H1}),this.tableElement=document.createElement("div"),this.tableElement.className="c-evenbetter_table",this.tableElement.style.overflow="auto",this.tableElement.style.width="100%",this.tableElement.style.height=this.config.tableHeight,this.tableElement.setAttribute("data-row-height",this.config.rowHeight||"42px"),this.tableElement.innerHTML=j1(),this.tableWrapper=this.tableElement.querySelector(".c-table__wrapper");const z=this.tableElement.querySelector(".c-evenbetter_table_card-body");if(!z)throw new Error("Card body not found");z.style.height=this.config.tableHeight,z.style.width="100%";const q=this.tableElement.querySelector(".c-evenbetter_table_header-row");if(!q)throw new Error("Column row not found");this.config.columns.forEach((F)=>{q.innerHTML+=`<div class="c-evenbetter_table_header-cell" data-sortable="true" data-resizable="true" data-align="start" data-is-resizing="false" style="--1e00f3f4: 4rem; width: max(${F.width}, 56px);"><div class="c-evenbetter_header-cell_wrapper"><div class="c-evenbetter_header-cell_content">${F.name}</div></div></div>`})}filterRows(Z){const z=this.tableWrapper.querySelectorAll(".c-evenbetter_table_row");let q=1;z.forEach((F,G)=>{const K=F,Q=F.querySelectorAll(".c-evenbetter_table-item-cell");let Y=!1;if(Q.forEach(($)=>{if($.textContent?.toLowerCase().includes(Z.toLowerCase()))Y=!0}),Y)K.style.display="flex",K.setAttribute("data-is-even",(q%2===0).toString()),q++;else K.style.display="none",K.removeAttribute("data-is-even")})}clearRows(){this.tableWrapper.innerHTML=""}addRow(Z,z){const q=(this.tableWrapper.children.length+1)%2===0,F=document.createElement("div");F.className="c-evenbetter_table_row",F.setAttribute("data-is-even",q.toString());const G=document.createElement("div");if(G.className="c-evenbetter_table-item-row",this.config.rowHeight)G.style.height=this.config.rowHeight;if(Z.forEach((K)=>{const Q=this.config.columns.find((X)=>X.name===K.columnName)?.width,Y=document.createElement("div");Y.className="c-evenbetter_table-item-cell",Y.setAttribute("data-column-id",K.columnName),Y.setAttribute("data-align","start"),Y.style.setProperty("--cellWidth",`max(${Q}, 56px)`);const $=document.createElement("div");if($.className="c-evenbetter_table-item-cell__inner",typeof K.value==="string")$.textContent=K.value;else $.appendChild(K.value);Y.appendChild($),G.appendChild(Y)}),z)G.addEventListener("click",z);F.appendChild(G),this.tableWrapper.appendChild(F)}getHTMLElement(){return this.tableElement}static createTable(Z){return new I(Z)}}var U1=function(){const Z=new D,z=new M,q=new E,F=new P(Z),G=new C,K=new v;return Z.registerEvent("onCaidoLoad",z),Z.registerEvent("onSettingsTabOpen",q),Z.registerEvent("onPageOpen",F),Z.registerEvent("onContextMenuOpen",G),Z.registerEvent("onCommandRun",K),Z.initEvents(),a(Z),{modal:{openModal:r,closeModal:R},toast:{showToast:x},components:{createTable:t,createNavigationBar:u,createCheckbox:p,createTextInput:l},eventManager:Z,loadCSS:f,promptCommands:s,hotReloading:o}},T;if(typeof window!=="undefined"&&window.EvenBetterAPI)T=window.EvenBetterAPI;else if(T=U1(),typeof window!=="undefined")window.EvenBetterAPI=T;var J=T;function H(Z){return String(Z).replace(/[&<>"'\/]/g,(z)=>V1.get(z))}var V1=new Map(Object.entries({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"}));var y="v1.0";var w="https://raw.githubusercontent.com/bebiksior/EvenBetter/dev/extensions.json",n="https://raw.githubusercontent.com/bebiksior/EvenBetterExtensions/main/version.txt";class ExtensionsManager{installedExtensions=[];extensions=[];async installExtension(Z){if(this.isExtensionInstalled(Z))throw new Error(`Extension with ID ${Z} is already installed.`);const z=this.extensions.find((q)=>q.id===Z);if(!z)throw new Error(`No data found for extension with ID ${Z}`);if(z.customJSUrl){const q=await this.fetchBody(z.customJSUrl);localStorage.setItem(`extensions_${z.id}_javascript`,q)}if(z.customCSSUrl){const q=await this.fetchBody(z.customCSSUrl);localStorage.setItem(`extensions_${z.id}_css`,q)}this.installedExtensions.push({installedVersion:z.latestVersion,extensionID:z.id}),localStorage.setItem("installedExtensions",JSON.stringify(this.installedExtensions)),localStorage.setItem("previousPage",window.location.hash),window.location.reload()}uninstallExtension(Z){localStorage.removeItem(`extensions_${Z}_javascript`),localStorage.removeItem(`extensions_${Z}_css`),this.installedExtensions=this.installedExtensions.filter((z)=>z.extensionID!==Z),localStorage.setItem("installedExtensions",JSON.stringify(this.installedExtensions)),localStorage.setItem("previousPage",window.location.hash),window.location.reload()}async updateExtension(Z){const z=this.installedExtensions.find((F)=>F.extensionID===Z);if(!z)throw new Error(`Extension with ID ${Z} is not installed.`);const q=this.extensions.find((F)=>F.id===Z);if(!q||!q.versionUrl)throw new Error(`No data found for extension with ID ${Z} or version URL not provided.`);if(await this.fetchBody(q.versionUrl).then((F)=>{z.installedVersion=F,localStorage.setItem("installedExtensions",JSON.stringify(this.installedExtensions))}),q.customJSUrl)await this.fetchBody(q.customJSUrl).then((F)=>{localStorage.setItem(`extensions_${Z}_javascript`,F)});if(q.customCSSUrl)await this.fetchBody(q.customCSSUrl).then((F)=>{localStorage.setItem(`extensions_${Z}_css`,F)});localStorage.setItem("previousPage",window.location.hash),window.location.reload()}getInstalledExtension(Z){return this.installedExtensions.find((z)=>z.extensionID===Z)}isExtensionInstalled(Z){return this.installedExtensions.some((z)=>z.extensionID===Z)}loadInstalledExtensions(){const Z=localStorage.getItem("installedExtensions");if(Z)this.installedExtensions=JSON.parse(Z)}getExtensions(){return this.extensions}getInstalledExtensions(){return this.installedExtensions}async importCustomExtension(Z){if(this.extensions.some((G)=>G.id===Z.id))throw new Error(`Extension with ID ${Z.id} already exists.`);Z.isCustom=!0;const z=await this.fetchBody(Z.versionUrl);Z.latestVersion=H(z);let q=localStorage.getItem("customExtensions");if(!q)q="[]";const F=JSON.parse(q);F.push(Z),localStorage.setItem("customExtensions",JSON.stringify(F)),this.extensions.push(Z)}deleteCustomExtension(Z){let z=localStorage.getItem("customExtensions");if(!z)return;const F=JSON.parse(z).filter((G)=>G.id!==Z);if(localStorage.setItem("customExtensions",JSON.stringify(F)),this.extensions=this.extensions.filter((G)=>G.id!==Z),this.isExtensionInstalled(Z))this.uninstallExtension(Z)}async initExtensions(){try{const Z=await fetch(this.getExtensionsURL());if(!Z.ok)throw new Error(`Failed to fetch extensions from ${this.getExtensionsURL()}`);const q=(await Z.json()).extensions;for(let G of q){const K=await this.fetchBody(G.versionUrl);G.latestVersion=H(K)}this.extensions=q;let F=localStorage.getItem("customExtensions");if(F){const G=JSON.parse(F);this.extensions.push(...G)}return this.extensions}catch(Z){throw console.error(`Failed to load extensions from URL: ${Z}`),Z}}runExtension(extensionID){const installedExtension=this.installedExtensions.find((Z)=>Z.extensionID===extensionID);if(!installedExtension)throw new Error(`Extension with ID ${extensionID} is not installed.`);const jsCode=localStorage.getItem(`extensions_${extensionID}_javascript`);if(jsCode)try{eval(jsCode)}catch(Z){console.error(`Failed to run extension ${extensionID}: ${Z}`)}const cssCode=localStorage.getItem(`extensions_${extensionID}_css`);if(cssCode){const Z=document.createElement("style");Z.textContent=cssCode,document.head.appendChild(Z)}}getExtensionsURL(){return localStorage.getItem("eb-extensions-url")||w}async checkForUpdates(Z){const z=this.installedExtensions.find((F)=>F.extensionID===Z);if(!z)throw new Error(`Extension with ID ${Z} is not installed.`);const q=this.extensions.find((F)=>F.id===Z);if(!q||!q.versionUrl)throw new Error(`No data found for extension with ID ${Z} or version URL not provided.`);try{const F=await this.fetchBody(q.versionUrl);if(F!==z.installedVersion)return{latestVersion:F,isLatest:!1};else return{latestVersion:F,isLatest:!0}}catch(F){throw console.error(`Failed to check for updates for extension ${Z}: ${F}`),F}}async fetchBody(Z){const z=await fetch(Z);if(z.ok)return z.text();else throw new Error(`Failed to fetch code from ${Z}`)}}var O1=new ExtensionsManager,_=O1;var e=".eb-extensions__setting{align-items:center;display:flex}.eb-extensions__settings--group{background-color:var(--c-bg-default);border-radius:5px;flex-direction:column;gap:1em;padding:1.5em;display:flex}.eb-extensions__setting-label{color:var(--c-fg-subtle);margin-left:1em;font-size:1rem;font-weight:300}.eb-extensions__setting-title{color:var(--c-fg-default);font-size:1.3rem;font-weight:600}.eb-extensions__settings{flex-direction:column;gap:1.5em;display:flex}.eb-extensions__settings-content{flex-direction:column;gap:1em;display:flex}.eb-extensions__textinput-setting{flex-direction:column;align-items:flex-start;padding:0 2.2em;display:flex}.eb-extensions__textinput-setting .eb-extensions__setting-label{margin-left:0!important}";var Z1=()=>{f({id:"eb-extensions-settings",cssText:e.toString()});const Z=document.createElement("div");return Z.classList.add("eb-extensions__settings"),Z.innerHTML=`
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
                URL to fetch extensions from.
              </div>
              <div class="eb-extensions__setting-textinput" data-key="extensions-url">
              </div>
          </div>
        </div>
    </div>
  `,Z.querySelectorAll(".eb-extensions__setting-checkbox").forEach((z)=>{const q=z.getAttribute("data-key"),F=localStorage.getItem(`eb-${q}`)==="true",G=J.components.createCheckbox(),K=G.querySelector('input[type="checkbox"]');K.checked=F,z.appendChild(G),z.addEventListener("change",()=>{localStorage.setItem(`eb-${q}`,K.checked?"true":"false")})}),Z.querySelectorAll(".eb-extensions__setting-textinput").forEach((z)=>{const q=z.getAttribute("data-key");let F=localStorage.getItem(`eb-${q}`);if(!F)localStorage.setItem(`eb-${q}`,w),F=w;const G=J.components.createTextInput("50em"),K=G.querySelector("input");K.value=F,z.appendChild(G),z.addEventListener("change",()=>{localStorage.setItem(`eb-${q}`,K.value)})}),Z};var U;(function(G){G["ALL"]="all";G["INSTALLED"]="installed";G["CUSTOM"]="custom";G["SETTINGS"]="settings"})(U||(U={}));var b=new Map,L=(Z)=>{const z=document.createElement("div");z.style.height="100%",z.innerHTML=`
    <div class="eb-extensions">
      <div class="eb-extensions__content">
      </div>
    </div>
  `;const q=z.querySelector(".eb-extensions");if(!q)return z;const F=[{name:"Name",width:"25em"},{name:"Version",width:"9em"},{name:"Description",width:"30em"},{name:"Author",width:"9em"},{name:"Actions",width:"13em"}],G=J.components.createTable({columns:F,tableHeight:"100%"});b.set(Z,G);const K=[];if(K.push(N1(Z)),Z===U.CUSTOM)K.push(A1(Z));const Q=J.components.createNavigationBar({title:"Extensions",items:[{title:"All",url:"#/extensions/all",icon:"fa-globe"},{title:"Installed",url:"#/extensions/installed",icon:"fa-download"},{title:"Custom",url:"#/extensions/custom",icon:"fa-wrench"},{title:"Settings",url:"#/extensions/settings",icon:"fa-cog"}],customButtons:K});if(q.prepend(Q),Z===U.SETTINGS)return q.querySelector(".eb-extensions__content").appendChild(Z1()),z;J.eventManager.on("onPageOpen",($)=>{if($.newUrl.startsWith("#/extensions/"))B(Z)});const Y=document.createElement("div");if(Y.classList.add("eb-extensions__library"),q.querySelector(".eb-extensions__content").appendChild(Y),Y)Y.appendChild(G.getHTMLElement());return z},A1=(Z)=>{const z=W.ui.button({label:"Import",variant:"tertiary",leadingIcon:"fas fa-file-import",size:"small"});return z.addEventListener("click",()=>{const q=document.createElement("input");q.type="file",q.accept=".json",q.click(),q.addEventListener("change",async()=>{const F=q.files?.[0];if(!F)return;const G=new FileReader;G.onload=async()=>{try{const K=JSON.parse(G.result);if(!K)return;await _.importCustomExtension(K),B(Z)}catch(K){J.modal.openModal({title:"Error importing extension",content:K.toString()})}},G.readAsText(F)})}),z},N1=(Z)=>{const z=W.ui.button({label:"Refresh",variant:"primary",leadingIcon:"fas fa-sync",size:"small"});return z.addEventListener("click",async()=>{await _.initExtensions(),B(Z)}),z},B=(Z)=>{if(!b.get(Z))return;const z=b.get(Z);z.clearRows(),_.getExtensions().forEach((q)=>{if(Z===U.INSTALLED&&!_.isExtensionInstalled(q.id))return;if(Z===U.CUSTOM&&!q.isCustom)return;const F=_.getInstalledExtension(q.id)?.installedVersion||"-";let G=q.latestVersion===F?q.latestVersion:`${F} (<span style='color:var(--c-bg-success);'>${q.latestVersion}</span>)`;if(F==="-")G=q.latestVersion;z.addRow([{columnName:"Name",value:h(q.name)},{columnName:"Version",value:h(G)},{columnName:"Description",value:h(q.description)},{columnName:"Author",value:h(q.author)},{columnName:"Actions",value:k1(q,Z)}],()=>{J.modal.openModal({title:q.name,content:`<div class="eb-extensions__modal">
              <div class="eb-extensions__modal-description">
                <div class="eb-extensions__modal-key">
                  Description
                </div>
                <div class="eb-extensions__modal-value">
                  ${H(q.description)}
                </div>
              </div>
              <div class="eb-extensions__modal-author">
                <div class="eb-extensions__modal-key">
                  Author
                </div>
                <div class="eb-extensions__modal-value">
                  ${H(q.author)}
                </div>
              </div>
              <div class="eb-extensions__modal-url">
                <div class="eb-extensions__modal-key">
                  URL
                </div>
                <div class="eb-extensions__modal-value">
                  <a href="${H(q.url)}" target="_blank">${H(q.url)}</a>
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
                  ${H(q.latestVersion)}
                </div>
              </div>
            </div>`})})})},k1=(Z,z)=>{const q=Z.id,F=document.createElement("div");if(F.innerHTML=`
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
    </div>`,Z?.isCustom){const Y=W.ui.button({label:"Delete",variant:"primary",size:"small",leadingIcon:"fas fa-trash"});Y.addEventListener("click",($)=>{$.stopPropagation(),_.deleteCustomExtension(Z.id),B(z)}),F.querySelector(".evenbetter-table-actions").appendChild(Y)}const G=F.querySelector("#eb-install-ext");if(!G)return F;let K=!1;if(G.addEventListener("click",async(Y)=>{if(Y.stopPropagation(),K)return;if(_.getInstalledExtension(q)){if(!(await _.checkForUpdates(q)).isLatest){K=!0,await _.updateExtension(q),K=!1;return}_.uninstallExtension(q);return}K=!0,await _.installExtension(q),K=!1}),_.isExtensionInstalled(q))R1(G);const Q=_.getInstalledExtension(q);if(Q&&Z.latestVersion!==Q.installedVersion)y1(G);return F},R1=(Z)=>{const z=Z.querySelector(".c-evenbetter_button__label");if(z)z.innerText="Uninstall",z.classList.add("c-evenbetter_button__label--uninstall");const q=Z.querySelector(".c-evenbetter_button__input");if(q)q.classList.add("c-evenbetter_button__input--uninstall")},y1=(Z)=>{const z=Z.querySelector(".c-evenbetter_button__label");if(z)z.innerText="Update",z.classList.remove("c-evenbetter_button__label--uninstall"),z.classList.add("c-evenbetter_button__label--update");const q=Z.querySelector(".c-evenbetter_button__input");if(q)q.classList.remove("c-evenbetter_button__input--uninstall"),q.classList.add("c-evenbetter_button__input--update")},h=(Z)=>{const z=document.createElement("span");return z.innerHTML=Z,z};class c{handlers=[];addHandler(Z){this.handlers.push(Z)}init(){}trigger(Z){this.handlers.forEach((z)=>z(Z))}}var q1=".eb-extensions{flex-direction:column;gap:.5em;height:100%;display:flex;overflow:auto}.eb-extensions__content{background-color:var(--c-bg-subtle);border-radius:5px;height:100%}.evenbetter-table-actions{align-items:center;gap:var(--c-space-2);display:flex}.evenbetter-table-actions__select{width:5em}.c-evenbetter_button{font-size:var(--c-font-size-100);font-weight:var(--c-font-weight-500);--button-focus-color:white;font-size:var(--c-font-size-100);font-weight:var(--c-font-weight-500)}[data-outline=true][data-variant=secondary] .c-evenbetter_button__input{color:var(--c-fg-secondary);border:var(--c-border-width-2)solid var(--c-border-secondary);background-color:#0000}.c-evenbetter_button__input:active{background-color:var(--c-yellow-300)!important;color:var(--c-gray-900)!important}[data-block=true] .c-button,[data-block=true] .c-evenbetter_button__input{width:100%}[data-variant=secondary] .c-evenbetter_button__input{background-color:var(--c-bg-secondary);color:var(--c-fg-onEmphasis)}[data-size=small] .c-evenbetter_button__input{padding:var(--c-space-0)var(--c-space-2);min-height:var(--c-space-8)}.c-evenbetter_button__input{font-size:inherit;border-radius:var(--c-border-radius-1);cursor:pointer;color:var(--c-fg-secondary);border:0;border:var(--c-border-width-2)solid var(--c-border-secondary);font-size:inherit;border-radius:var(--c-border-radius-1);cursor:pointer;background-color:#0000;border:0;align-items:center;width:100%;display:flex}.c-evenbetter_button__label{text-overflow:ellipsis;white-space:nowrap;flex:1;justify-content:center;display:inline-flex;overflow:hidden}.c-evenbetter_button__input--uninstall{border-color:var(--c-fg-danger)!important}.c-evenbetter_button__label--uninstall{color:var(--c-fg-danger)!important}.c-evenbetter_button__input--uninstall:active{background-color:var(--c-fg-danger)!important}.c-evenbetter_button__input--uninstall:active .c-evenbetter_button__label--uninstall{color:var(--c-bg-subtle)!important}.c-evenbetter_button__input--update{border-color:var(--c-bg-info)!important}.c-evenbetter_button__label--update{color:var(--c-bg-info)!important}.c-evenbetter_button__input--update:active{background-color:var(--c-bg-info)!important}.c-evenbetter_button__input--update:active .c-evenbetter_button__label--update{color:var(--c-bg-subtle)!important}.eb-extensions__import-warning{color:var(--c-fg-danger);margin-bottom:.25em}.eb-extensions__import{margin-top:1em}.eb-extensions__modal *{white-space:normal!important}.eb-extensions__modal{flex-direction:column;gap:1em;display:flex}.eb-extensions__modal-description{color:var(--c-fg-subtle);font-size:1rem;font-weight:300}.eb-extensions__modal-key{color:var(--c-fg-default);font-size:16px;font-weight:600}.eb-extensions__modal-value{font-weight:300}.c-content[data-page^=\"#/extensions/\"]{min-width:900px;overflow:auto}.c-content[data-page=\"#/extensions/settings\"] .eb-extensions__content{padding:1em}.eb-extensions__library{height:100%}.eb-extensions__setting-label b{color:#fff}";var w1=function(){if(!localStorage.getItem("eb-show-notifications"))localStorage.setItem("eb-show-notifications","true");if(!localStorage.getItem("eb-show-update-notification"))localStorage.setItem("eb-show-update-notification","true")},L1=function(){J.eventManager.on("onSettingsTabOpen",(Z)=>{switch(Z){case"developer":const z=document.querySelector(".c-custom-js__footer");z.removeEventListener("click",S),z.addEventListener("click",S)}}),J.eventManager.on("onPageOpen",(Z)=>{const z=Array.from(document.querySelectorAll(".c-sidebar-item")).filter((F)=>F.textContent=="Extensions");if(z.length==0)return;z[0].setAttribute("data-is-active",Z.newUrl.startsWith("#/extensions/")?"true":"false")})},T1=function(){W.navigation.addPage("/extensions/all",{body:L(U.ALL)}),W.navigation.addPage("/extensions/installed",{body:L(U.INSTALLED)}),W.navigation.addPage("/extensions/custom",{body:L(U.CUSTOM)}),W.navigation.addPage("/extensions/settings",{body:L(U.SETTINGS)})},h1=function(){W.sidebar.registerItem("Extensions","/extensions/all",{icon:"fas fa-puzzle-piece",group:"EvenBetter"})},B1=function(){W.commands.register("eb:openExtensionsPage",{name:"Go to Extensions",group:"EvenBetter: Navigation",run:()=>{W.navigation.goTo("/extensions/all")}}),W.commandPalette.register("eb:openExtensionsPage")};async function S1(){try{const z=await(await fetch(n,{cache:"no-store"})).text(),q=parseFloat(z.replace("v",""));if(parseFloat(y.replace("v",""))>q)return{isLatest:!0,message:`You are using a development version: ${y}.`};if(z.trim()===y)return{isLatest:!0,message:"You are using the latest version! \uD83C\uDF89"};else return{isLatest:!1,message:`New EvenBetter Extensions version available: ${z}.`,latestVersion:z}}catch(Z){return{isLatest:!1,message:"Failed to check for updates"}}}async function D1(){f({id:"eb-extensions",cssText:q1.toString()}),w1();const Z=new c;if(J.eventManager.registerEvent("onExtensionLoad",Z),T1(),B1(),h1(),L1(),localStorage.getItem("eb-message-onload"))J.modal.openModal({title:"EvenBetter Extensions",content:H(localStorage.getItem("eb-message-onload"))}),localStorage.removeItem("eb-message-onload");if(location.hash=="#/settings/developer"){const q=document.querySelector(".c-custom-js__footer");q.removeEventListener("click",S),q.addEventListener("click",S)}if((await _.initExtensions()).forEach((q)=>{const F=_.getInstalledExtension(q.id);if(!F)return;if(F.installedVersion!=q.latestVersion){if(console.log(`New version available for extension ${q.id}: ${q.latestVersion}`),localStorage.getItem("eb-auto-update")==="true")localStorage.setItem("eb-message-onload",`Auto-updated extension ${q.name} to version ${q.latestVersion}. If you want to disable auto-updates, go to Extensions -> Settings.`),_.updateExtension(F.extensionID);if(localStorage.getItem("eb-show-notifications")==="true")J.modal.openModal({title:"New extension version available",content:`New version available for extension <b style='color:var(--c-fg-default);'>${q.name}</b> (<span style='color:var(--c-bg-danger);'>${F.installedVersion}</span> -> <span style='color:var(--c-bg-success);'>${q.latestVersion}</span>).`})}}),J.eventManager.triggerEvent("onExtensionLoad"),localStorage.getItem("eb-show-update-notification")==="true"){const q=await S1();if(!q.isLatest)J.modal.openModal({title:`EvenBetter Extensions: Update from ${y} to ${q.latestVersion}`,content:"You are using an outdated version of EvenBetter Extensions. Please update to the latest version on http://github.com/bebiksior/EvenBetterExtensions."})}if(localStorage.getItem("previousPage")){const q=localStorage.getItem("previousPage").split("#")[1];console.log("Restoring previous path: "+q),W.navigation.goTo(q),localStorage.removeItem("previousPage")}}var S=()=>{setTimeout(()=>{location.reload()},250)};_.loadInstalledExtensions();_.getInstalledExtensions().forEach((Z)=>{console.log("Running extension: "+Z.extensionID),_.runExtension(Z.extensionID)});J.eventManager.on("onCaidoLoad",()=>{D1()});
