var f=window.Caido;var p=new Set,q1=({id:F,cssText:q})=>{if(p.has(F)||document.querySelector(`#${F}`))return;const Z=document.createElement("style");Z.id=F,Z.textContent=q,Z.classList.add("evenbetterapi-css-module"),document.head.appendChild(Z),p.add(F)},W=q1;var z1=`
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
`,d=()=>{W({id:"checkbox",cssText:z1});const F=document.createElement("div");return F.classList.add("eb-button__label"),F.innerHTML=`<div class="eb-checkbox">
            <div class="formkit-outer" data-family="box" data-type="checkbox" data-complete="true">
                <label class="formkit-wrapper eb-checkbox__wrapper" data-checked="true">
                    <span class="formkit-inner eb-checkbox__inner">
                        <input class="formkit-input eb-checkbox__input" type="checkbox">
                        <span class="formkit-decorator" aria-hidden="true"></span>
                    </span>
                </label>
            </div>
        </div>
    `,F};function u(F){const q=document.createElement("div");q.classList.add("c-menu-bar"),q.style.width="100%";const Z=document.createElement("div");Z.classList.add("p-menubar","p-component"),Z.setAttribute("data-pc-name","menubar"),Z.setAttribute("data-pc-section","root");const z=document.createElement("div");z.classList.add("p-menubar-start"),z.setAttribute("data-pc-section","start");const G=document.createElement("div");G.classList.add("c-settings__title"),G.style.padding="0 var(--c-space-4)",G.style.fontWeight="700",G.textContent=F.title,z.appendChild(G);const J=document.createElement("ul");J.classList.add("p-menubar-root-list"),F.items.forEach((Y)=>{const X=document.createElement("li");X.classList.add("p-menuitem"),X.setAttribute("role","menuitem");const O=document.createElement("div");O.classList.add("p-menuitem-content"),O.setAttribute("data-pc-section","content");const N=document.createElement("div");N.classList.add("c-settings__item"),N.setAttribute("data-is-active","true"),N.addEventListener("click",()=>{Z.classList.remove("p-menubar-mobile-active")});const j=document.createElement("a");if(j.setAttribute("href",Y.url),j.setAttribute("draggable","false"),j.draggable=!1,j.classList.add("p-menuitem-link"),$.eventManager.on("onPageOpen",(k)=>{if(k.newUrl===Y.url){if(Y.onOpen)Y.onOpen();j.style.backgroundColor="rgba(255,255,255,.04)",j.style.borderRadius="var(--c-border-radius-2)"}else j.style.backgroundColor="",j.style.borderRadius=""}),Y.icon){const k=document.createElement("i");k.classList.add("c-icon","fas",Y.icon),k.style.marginRight="var(--c-space-2)",j.appendChild(k)}const g=document.createElement("span");g.textContent=Y.title,j.appendChild(g),N.appendChild(j),O.appendChild(N),X.appendChild(O),J.appendChild(X)});const K=document.createElement("a");K.setAttribute("role","button"),K.setAttribute("tabindex","0"),K.classList.add("p-menubar-button"),K.setAttribute("aria-haspopup","true"),K.setAttribute("aria-expanded","false"),K.setAttribute("aria-label","Navigation"),K.setAttribute("data-pc-section","button"),K.setAttribute("aria-controls","pv_id_3"),K.innerHTML='<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="p-icon" aria-hidden="true" data-pc-section="menubuttonicon"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.3226 3.6129H0.677419C0.497757 3.6129 0.325452 3.54152 0.198411 3.41448C0.0713707 3.28744 0 3.11514 0 2.93548C0 2.75581 0.0713707 2.58351 0.198411 2.45647C0.325452 2.32943 0.497757 2.25806 0.677419 2.25806H13.3226C13.5022 2.25806 13.6745 2.32943 13.8016 2.45647C13.9286 2.58351 14 2.75581 14 2.93548C14 3.11514 13.9286 3.28744 13.8016 3.41448C13.6745 3.54152 13.5022 3.6129 13.3226 3.6129ZM13.3226 7.67741H0.677419C0.497757 7.67741 0.325452 7.60604 0.198411 7.479C0.0713707 7.35196 0 7.17965 0 6.99999C0 6.82033 0.0713707 6.64802 0.198411 6.52098C0.325452 6.39394 0.497757 6.32257 0.677419 6.32257H13.3226C13.5022 6.32257 13.6745 6.39394 13.8016 6.52098C13.9286 6.64802 14 6.82033 14 6.99999C14 7.17965 13.9286 7.35196 13.8016 7.479C13.6745 7.60604 13.5022 7.67741 13.3226 7.67741ZM0.677419 11.7419H13.3226C13.5022 11.7419 13.6745 11.6706 13.8016 11.5435C13.9286 11.4165 14 11.2442 14 11.0645C14 10.8848 13.9286 10.7125 13.8016 10.5855C13.6745 10.4585 13.5022 10.3871 13.3226 10.3871H0.677419C0.497757 10.3871 0.325452 10.4585 0.198411 10.5855C0.0713707 10.7125 0 10.8848 0 11.0645C0 11.2442 0.0713707 11.4165 0.198411 11.5435C0.325452 11.6706 0.497757 11.7419 0.677419 11.7419Z" fill="currentColor"></path></svg>',K.addEventListener("click",()=>{Z.classList.toggle("p-menubar-mobile-active"),J.style.zIndex=Z.classList.contains("p-menubar-mobile-active")?"1200":""}),window.addEventListener("resize",()=>{if(window.innerWidth<955)Z.classList.add("p-menubar-mobile");else Z.classList.remove("p-menubar-mobile"),Z.classList.remove("p-menubar-mobile-active")}),window.dispatchEvent(new Event("resize"));const Q=document.createElement("div");if(Q.classList.add("p-menubar-end"),Q.setAttribute("data-pc-section","end"),Q.style.display="flex",Q.style.gap=".5em",Q.style.alignItems="center",F.customButtons)F.customButtons.forEach((Y)=>{Q.appendChild(Y)});return Z.appendChild(z),Z.appendChild(K),Z.appendChild(J),Z.appendChild(Q),q.appendChild(Z),q}var V;(function(z){z["INFO"]="info";z["ERROR"]="error";z["WARN"]="warn"})(V||(V={}));window.global=window;class m{log(F,q){const z=`${(new Date()).toString()} [EvenBetterAPI]`;switch(F){case V.INFO:console.log(`${z} [INFO] ${q}`);break;case V.ERROR:console.error(`${z} [ERROR] ${q}`);break;case V.WARN:console.warn(`${z} [WARN] ${q}`);break;default:console.log(`${z} [UNKNOWN] ${q}`)}}info(F){this.log(V.INFO,F)}error(F){this.log(V.ERROR,F)}warn(F){this.log(V.WARN,F)}}var G1=new m,A=G1;class S{events={};registerEvent(F,q){this.events[F]=q}triggerEvent(F,q){const Z=this.events[F];if(Z)Z.trigger(q);else console.error(`Event "${F}" not registered.`)}on(F,q){const Z=this.events[F];if(Z)Z.addHandler(q);else console.error(`Event "${F}" not registered.`)}initEvents(){A.info(`Initializing ${Object.keys(this.events).length} custom events`);for(let F in this.events)this.events[F].init()}}class D{handlers=[];addHandler(F){this.handlers.push(F)}init(){const F=setInterval(()=>{if(J1())clearInterval(F),this.trigger()},25)}trigger(){this.handlers.forEach((F)=>F())}}var J1=()=>{return document.querySelector(".c-authenticated")!==null};class M{handlers=[];addHandler(F){this.handlers.push(F)}init(){new MutationObserver((q)=>{for(let Z of q)if(Z.type==="childList")Z.addedNodes.forEach((z)=>{const G=z;if(z.nodeType===1&&G.classList.contains("p-contextmenu"))this.trigger(G)})}).observe(document.body,{childList:!0,subtree:!0})}trigger(F){this.handlers.forEach((q)=>q(F))}}class C{handlers=[];eventManager;constructor(F){this.eventManager=F}addHandler(F){this.handlers.push(F)}init(){let F=window.location.href;const q=new MutationObserver(()=>{if(window.location.href!==F){let z=new URL(window.location.href).hash,G=new URL(F).hash;if(F=window.location.href,z.includes("?custom-path="))z=z.split("?custom-path=")[1];if(G.includes("?custom-path="))G=G.split("?custom-path=")[1];document.querySelector(".c-content")?.setAttribute("data-page",z),this.trigger({newUrl:z,oldUrl:G})}}),Z={subtree:!0,childList:!0};q.observe(document,Z)}trigger(F){if(A.info(`Page updated: ${F.oldUrl} -> ${F.newUrl}`),F.newUrl.startsWith("#/settings/"))this.eventManager.triggerEvent("onSettingsTabOpen",F.newUrl.replace("#/settings/",""));this.handlers.forEach((q)=>q(F))}}class P{handlers=[];addHandler(F){this.handlers.push(F)}init(){}trigger(F){A.info(`Settings tab opened: ${F}`),this.handlers.forEach((q)=>q(F))}}var K1=`
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
`;document.addEventListener("keydown",(F)=>{if(F.key==="Escape")y()});var Q1=({title:F,content:q})=>{W({id:"evenbetterapi-modal",cssText:K1});const Z=document.createElement("div");Z.classList.add("evenbetter-modal"),Z.innerHTML=`
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
    `;const z=Z.querySelector(".evenbetter-modal__content-header-title");if(!z)throw new Error("Modal title not found");z.textContent=F;const G=Z.querySelector(".evenbetter-modal__content-body-text");if(!G)throw new Error("Modal body not found");return G.innerHTML=q,Z.setAttribute("data-modal-title",F),Z.querySelector(".evenbetter-modal__content-body-close")?.addEventListener("click",y),Z},Y1=()=>{return document.querySelector(".evenbetter-modal")!==null},y=()=>{document.querySelector(".evenbetter-modal")?.remove()},x=({title:F,content:q})=>{if(Y1())y();const Z=Q1({title:F,content:q});document.body.appendChild(Z)};var $1=`
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
`,X1=(F,q,Z)=>{const z=document.createElement("div");z.classList.add("v-toast"),z.classList.add(`v-toast--${Z}`);const G=document.createElement("div");G.setAttribute("role","alert"),G.classList.add("v-toast__item"),G.classList.add(`v-toast__item--${q}`),G.classList.add(`v-toast__item--${Z}`),z.appendChild(G);const J=document.createElement("div");J.classList.add("v-toast__icon"),G.appendChild(J);const K=document.createElement("p");return K.classList.add("v-toast__text"),K.textContent=F,G.appendChild(K),z.classList.add("v-toast--fade-in"),z},r=(F)=>{const{message:q,type:Z,position:z,duration:G}=F;W({id:"eb-toast",cssText:$1});let J=document.querySelector(`.v-toast--${z}`);if(!J)J=document.createElement("div"),J.classList.add("v-toast"),J.classList.add(`v-toast--${z}`),document.body.appendChild(J);const K=X1(q,Z,z);J.appendChild(K),setTimeout(()=>{K.classList.add("v-toast--fade-out"),setTimeout(()=>{K.remove()},150)},G-150)};function l(F,q="Search...",Z=!1,z){W({id:"eb-text-input",cssText:_1});const G=document.createElement("div");G.classList.add("formkit-outer","c-text-input__outer"),G.setAttribute("style",`width: ${F};`);const J=document.createElement("div");J.classList.add("formkit-wrapper"),J.style.display="flex";const K=document.createElement("div");K.classList.add("formkit-inner","eb-text-input__inner");const Q=document.createElement("div");Q.classList.add("c-text-input__prefix"),Q.setAttribute("style","align-self: center; color: var(--c-fg-subtle);");const Y=document.createElement("i");if(Y.classList.add("c-icon","fas"),z)Y.classList.add(z);const X=document.createElement("input");if(X.setAttribute("placeholder",q),X.setAttribute("spellcheck","false"),X.classList.add("formkit-input","c-text-input__input"),X.setAttribute("type","text"),X.setAttribute("style","width: 100%; background: transparent; border: 0; outline: 0; color: inherit; box-sizing: border-box; line-height: inherit;"),z)Q.appendChild(Y);if(K.appendChild(Q),K.appendChild(X),Z){const O=document.createElement("button");O.innerHTML='<i class="fas fa-copy"></i>',O.setAttribute("style","background: transparent; border: 0; outline: 0; cursor: pointer; padding: 0; margin-left: 10px;"),O.addEventListener("click",()=>{navigator.clipboard.writeText(X.value),$.toast.showToast({message:"Copied to clipboard",position:"bottom",type:"info",duration:1000})}),K.appendChild(O)}return J.appendChild(K),G.appendChild(J),G}var _1=`
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
`;class E{handlers=[];commandObserver=null;selectedCommand=null;addHandler(F){this.handlers.push(F)}init(){const F=(z)=>{this.commandObserver=new MutationObserver((G)=>{const J=q();if(J!==this.selectedCommand)this.selectedCommand=J}),this.commandObserver.observe(z,{attributes:!0,subtree:!0})},q=()=>{return document.querySelector("[command-item][aria-selected='true']")};new MutationObserver((z)=>{for(let G of z)if(G.type==="childList")G.addedNodes.forEach((J)=>{const K=J;if(J.nodeType===1&&K.hasAttribute("command-theme"))F(K)}),G.removedNodes.forEach((J)=>{const K=J;if(J.nodeType===1&&K.hasAttribute("command-theme")){if(!this.selectedCommand)return;const Q=this.selectedCommand.getAttribute("data-value");if(Q)this.trigger(Q);if(this.commandObserver)this.commandObserver.disconnect(),this.commandObserver=null}})}).observe(document.body,{childList:!0,subtree:!0})}trigger(F){this.handlers.forEach((q)=>q(F))}}var i=[],a=(F)=>{F.on("onCommandRun",(q)=>{const Z=i.find((z)=>z.commandName===q);if(!Z)return;f1(Z)})},f1=(F)=>{const q=document.createElement("div");q.classList.add("custom");const Z=document.createElement("div");Z.setAttribute("command-root",""),q.appendChild(Z);const z=document.createElement("div");z.setAttribute("command-dialog",""),Z.appendChild(z);const G=document.createElement("div");G.setAttribute("command-dialog-mask",""),G.style.display="flex",G.style.justifyContent="center",G.style.alignItems="center",G.addEventListener("click",()=>{q.remove()}),z.appendChild(G);const J=document.createElement("div");J.setAttribute("command-dialog-wrapper",""),J.style.minWidth="600px",J.style.padding="1em",J.style.margin="0",G.appendChild(J);const K=document.createElement("div");K.setAttribute("command-dialog-body",""),K.style.display="flex",K.style.gap="0.5em",J.addEventListener("click",(X)=>{X.stopPropagation()}),J.appendChild(K);const Q=$.components.createTextInput("100%",F.promptPlaceholder);Q.style.zIndex="100",Q.addEventListener("click",(X)=>{X.stopPropagation()}),K.appendChild(Q);const Y=f.ui.button({label:"Submit",variant:"primary"});Y.addEventListener("click",()=>{const X=Q.querySelector("input");F.onPrompt(X.value),q.remove()}),K.appendChild(Y),document.body.appendChild(q),Q.querySelector("input")?.focus(),Q.addEventListener("keydown",(X)=>{if(X.key==="Enter")Y.click();if(X.key==="Escape")q.remove()})},W1=(F,q,Z)=>{i.push({commandName:F,promptPlaceholder:q,onPrompt:Z})},s={createPromptCommand:W1};var o=async()=>{if(localStorage.getItem("previousPath"))setTimeout(()=>{window.location.hash=localStorage.getItem("previousPath")||"",localStorage.removeItem("previousPath")},200);const F=new WebSocket("ws://localhost:8081");F.addEventListener("open",()=>{$.toast.showToast({message:"Connected to Caido Hot Reloading Server",duration:2000,type:"success",position:"bottom"})}),F.addEventListener("close",()=>{$.toast.showToast({message:"Disconnected from Caido Hot Reloading Server",duration:2000,type:"error",position:"bottom"})}),F.addEventListener("message",(z)=>{try{const G=JSON.parse(z.data),J=G.event,K=G.data;switch(J){case"caido:loadJS":q(K,"");break;case"caido:loadCSS":q("",K);break;case"caido:reload":localStorage.setItem("previousPath",window.location.hash),location.reload();break;default:console.error("Unknown event type received:",J)}}catch(G){console.error("Error parsing WebSocket message:",G)}});const q=async(z,G)=>{const J=await Z();if(!J)return;const K={input:{data:J.data,migrations:J.migrations}};if(z)K.input.data.js=z;if(G)K.input.data.css=G;return f.graphql.updateViewerSettings(K)},Z=async()=>{return await f.graphql.userSettings().then((z)=>{return z.viewer.settings})}};var H1=`
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
}`,j1=()=>{return'<div class="c-evenbetter_table_card-body"><div class="c-evenbetter_table-container" data-is-empty="false" data-is-loading="false" style="overflow-y: auto;"><div class="c-evenbetter_table_header-row"></div><div class="c-table__wrapper" style="margin-top: 0px;"></div></div></div>'},t=(F)=>{return new v(F)};class v{F;tableElement;tableWrapper;constructor(F){this.config=F;W({id:"eb-table-css",cssText:H1}),this.tableElement=document.createElement("div"),this.tableElement.className="c-evenbetter_table",this.tableElement.style.overflow="auto",this.tableElement.style.width="100%",this.tableElement.style.height=this.config.tableHeight,this.tableElement.setAttribute("data-row-height",this.config.rowHeight||"42px"),this.tableElement.innerHTML=j1(),this.tableWrapper=this.tableElement.querySelector(".c-table__wrapper");const q=this.tableElement.querySelector(".c-evenbetter_table_card-body");if(!q)throw new Error("Card body not found");q.style.height=this.config.tableHeight,q.style.width="100%";const Z=this.tableElement.querySelector(".c-evenbetter_table_header-row");if(!Z)throw new Error("Column row not found");this.config.columns.forEach((z)=>{Z.innerHTML+=`<div class="c-evenbetter_table_header-cell" data-sortable="true" data-resizable="true" data-align="start" data-is-resizing="false" style="--1e00f3f4: 4rem; width: max(${z.width}, 56px);"><div class="c-evenbetter_header-cell_wrapper"><div class="c-evenbetter_header-cell_content">${z.name}</div></div></div>`})}filterRows(F){const q=this.tableWrapper.querySelectorAll(".c-evenbetter_table_row");let Z=1;q.forEach((z,G)=>{const J=z,K=z.querySelectorAll(".c-evenbetter_table-item-cell");let Q=!1;if(K.forEach((Y)=>{if(Y.textContent?.toLowerCase().includes(F.toLowerCase()))Q=!0}),Q)J.style.display="flex",J.setAttribute("data-is-even",(Z%2===0).toString()),Z++;else J.style.display="none",J.removeAttribute("data-is-even")})}clearRows(){this.tableWrapper.innerHTML=""}addRow(F,q){const Z=(this.tableWrapper.children.length+1)%2===0,z=document.createElement("div");z.className="c-evenbetter_table_row",z.setAttribute("data-is-even",Z.toString());const G=document.createElement("div");if(G.className="c-evenbetter_table-item-row",this.config.rowHeight)G.style.height=this.config.rowHeight;if(F.forEach((J)=>{const K=this.config.columns.find((X)=>X.name===J.columnName)?.width,Q=document.createElement("div");Q.className="c-evenbetter_table-item-cell",Q.setAttribute("data-column-id",J.columnName),Q.setAttribute("data-align","start"),Q.style.setProperty("--cellWidth",`max(${K}, 56px)`);const Y=document.createElement("div");if(Y.className="c-evenbetter_table-item-cell__inner",typeof J.value==="string")Y.textContent=J.value;else Y.appendChild(J.value);Q.appendChild(Y),G.appendChild(Q)}),q)G.addEventListener("click",q);z.appendChild(G),this.tableWrapper.appendChild(z)}getHTMLElement(){return this.tableElement}static createTable(F){return new v(F)}}var U1=function(){const F=new S,q=new D,Z=new P,z=new C(F),G=new M,J=new E;return F.registerEvent("onCaidoLoad",q),F.registerEvent("onSettingsTabOpen",Z),F.registerEvent("onPageOpen",z),F.registerEvent("onContextMenuOpen",G),F.registerEvent("onCommandRun",J),F.initEvents(),a(F),{modal:{openModal:x,closeModal:y},toast:{showToast:r},components:{createTable:t,createNavigationBar:u,createCheckbox:d,createTextInput:l},eventManager:F,loadCSS:W,promptCommands:s,hotReloading:o}},L;if(typeof window!=="undefined"&&window.EvenBetterAPI)L=window.EvenBetterAPI;else if(L=U1(),typeof window!=="undefined")window.EvenBetterAPI=L;var $=L;function H(F){return String(F).replace(/[&<>"'\/]/g,(q)=>O1.get(q))}var O1=new Map(Object.entries({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"}));var R="v1.0";var I="https://raw.githubusercontent.com/bebiksior/EvenBetter/dev/extensions.json",n="https://raw.githubusercontent.com/bebiksior/EvenBetterExtensions/main/version.txt";class ExtensionsManager{installedExtensions=[];extensions=[];async installExtension(F){if(this.isExtensionInstalled(F))throw new Error(`Extension with ID ${F} is already installed.`);const q=this.extensions.find((Z)=>Z.id===F);if(!q)throw new Error(`No data found for extension with ID ${F}`);if(q.customJSUrl){const Z=await this.fetchBody(q.customJSUrl);localStorage.setItem(`extensions_${q.id}_javascript`,Z)}if(q.customCSSUrl){const Z=await this.fetchBody(q.customCSSUrl);localStorage.setItem(`extensions_${q.id}_css`,Z)}this.installedExtensions.push({installedVersion:q.latestVersion,extensionID:q.id}),localStorage.setItem("installedExtensions",JSON.stringify(this.installedExtensions)),window.location.reload()}uninstallExtension(F){localStorage.removeItem(`extensions_${F}_javascript`),localStorage.removeItem(`extensions_${F}_css`),this.installedExtensions=this.installedExtensions.filter((q)=>q.extensionID!==F),localStorage.setItem("installedExtensions",JSON.stringify(this.installedExtensions)),window.location.reload()}async updateExtension(F){const q=this.installedExtensions.find((z)=>z.extensionID===F);if(!q)throw new Error(`Extension with ID ${F} is not installed.`);const Z=this.extensions.find((z)=>z.id===F);if(!Z||!Z.versionUrl)throw new Error(`No data found for extension with ID ${F} or version URL not provided.`);if(await this.fetchBody(Z.versionUrl).then((z)=>{q.installedVersion=z,localStorage.setItem("installedExtensions",JSON.stringify(this.installedExtensions))}),Z.customJSUrl)await this.fetchBody(Z.customJSUrl).then((z)=>{localStorage.setItem(`extensions_${F}_javascript`,z)});if(Z.customCSSUrl)await this.fetchBody(Z.customCSSUrl).then((z)=>{localStorage.setItem(`extensions_${F}_css`,z)});window.location.reload()}getInstalledExtension(F){return this.installedExtensions.find((q)=>q.extensionID===F)}isExtensionInstalled(F){return this.installedExtensions.some((q)=>q.extensionID===F)}loadInstalledExtensions(){const F=localStorage.getItem("installedExtensions");if(F)this.installedExtensions=JSON.parse(F)}getExtensions(){return this.extensions}getInstalledExtensions(){return this.installedExtensions}async importCustomExtension(F){if(this.extensions.some((G)=>G.id===F.id))throw new Error(`Extension with ID ${F.id} already exists.`);F.isCustom=!0;const q=await this.fetchBody(F.versionUrl);F.latestVersion=H(q);let Z=localStorage.getItem("customExtensions");if(!Z)Z="[]";const z=JSON.parse(Z);z.push(F),localStorage.setItem("customExtensions",JSON.stringify(z)),this.extensions.push(F)}deleteCustomExtension(F){let q=localStorage.getItem("customExtensions");if(!q)return;const z=JSON.parse(q).filter((G)=>G.id!==F);if(localStorage.setItem("customExtensions",JSON.stringify(z)),this.extensions=this.extensions.filter((G)=>G.id!==F),this.isExtensionInstalled(F))this.uninstallExtension(F)}async initExtensions(){try{const F=await fetch(I);if(!F.ok)throw new Error(`Failed to fetch extensions from ${I}`);const Z=(await F.json()).extensions;for(let G of Z){const J=await this.fetchBody(G.versionUrl);G.latestVersion=H(J)}this.extensions=Z;let z=localStorage.getItem("customExtensions");if(z){const G=JSON.parse(z);this.extensions.push(...G)}return this.extensions}catch(F){throw console.error(`Failed to load extensions from URL: ${F}`),F}}runExtension(extensionID){const installedExtension=this.installedExtensions.find((F)=>F.extensionID===extensionID);if(!installedExtension)throw new Error(`Extension with ID ${extensionID} is not installed.`);const jsCode=localStorage.getItem(`extensions_${extensionID}_javascript`);if(jsCode)try{eval(jsCode)}catch(F){console.error(`Failed to run extension ${extensionID}: ${F}`)}const cssCode=localStorage.getItem(`extensions_${extensionID}_css`);if(cssCode){const F=document.createElement("style");F.textContent=cssCode,document.head.appendChild(F)}}async checkForUpdates(F){const q=this.installedExtensions.find((z)=>z.extensionID===F);if(!q)throw new Error(`Extension with ID ${F} is not installed.`);const Z=this.extensions.find((z)=>z.id===F);if(!Z||!Z.versionUrl)throw new Error(`No data found for extension with ID ${F} or version URL not provided.`);try{const z=await this.fetchBody(Z.versionUrl);if(z!==q.installedVersion)return{latestVersion:z,isLatest:!1};else return{latestVersion:z,isLatest:!0}}catch(z){throw console.error(`Failed to check for updates for extension ${F}: ${z}`),z}}async fetchBody(F){const q=await fetch(F);if(q.ok)return q.text();else throw new Error(`Failed to fetch code from ${F}`)}}var V1=new ExtensionsManager,_=V1;var e=".eb-extensions__setting{align-items:center;display:flex}.eb-extensions__settings--group{background-color:var(--c-bg-default);border-radius:5px;flex-direction:column;gap:1em;padding:1.5em;display:flex}.eb-extensions__setting-label{color:var(--c-fg-subtle);margin-left:1em;font-size:1rem;font-weight:300}.eb-extensions__setting-title{color:var(--c-fg-default);font-size:1.3rem;font-weight:600}.eb-extensions__settings{flex-direction:column;gap:1.5em;display:flex}.eb-extensions__settings-content{flex-direction:column;gap:1em;display:flex}";var F1=()=>{W({id:"eb-extensions-settings",cssText:e.toString()});const F=document.createElement("div");return F.classList.add("eb-extensions__settings"),F.innerHTML=`
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
        </div>
    </div>
  `,F.querySelectorAll(".eb-extensions__setting-checkbox").forEach((q)=>{const Z=q.getAttribute("data-key"),z=localStorage.getItem(`eb-${Z}`)==="true",G=$.components.createCheckbox(),J=G.querySelector('input[type="checkbox"]');J.checked=z,q.appendChild(G),q.addEventListener("change",()=>{localStorage.setItem(`eb-${Z}`,J.checked?"true":"false")})}),F};var U;(function(G){G["ALL"]="all";G["INSTALLED"]="installed";G["CUSTOM"]="custom";G["SETTINGS"]="settings"})(U||(U={}));var b=new Map,w=(F)=>{const q=document.createElement("div");q.style.height="100%",q.innerHTML=`
    <div class="eb-extensions">
      <div class="eb-extensions__content">
      </div>
    </div>
  `;const Z=q.querySelector(".eb-extensions");if(!Z)return q;const z=[{name:"Name",width:"25em"},{name:"Version",width:"9em"},{name:"Description",width:"30em"},{name:"Author",width:"9em"},{name:"Actions",width:"13em"}],G=$.components.createTable({columns:z,tableHeight:"100%"});b.set(F,G);const J=[];if(J.push(N1(F)),F===U.CUSTOM)J.push(A1(F));const K=$.components.createNavigationBar({title:"Extensions",items:[{title:"All",url:"#/extensions/all",icon:"fa-globe"},{title:"Installed",url:"#/extensions/installed",icon:"fa-download"},{title:"Custom",url:"#/extensions/custom",icon:"fa-wrench"},{title:"Settings",url:"#/extensions/settings",icon:"fa-cog"}],customButtons:J});if(Z.prepend(K),F===U.SETTINGS)return Z.querySelector(".eb-extensions__content").appendChild(F1()),q;$.eventManager.on("onPageOpen",(Y)=>{if(Y.newUrl.startsWith("#/extensions/"))h(F)});const Q=document.createElement("div");if(Q.classList.add("eb-extensions__library"),Z.querySelector(".eb-extensions__content").appendChild(Q),Q)Q.appendChild(G.getHTMLElement());return q},A1=(F)=>{const q=f.ui.button({label:"Import",variant:"tertiary",leadingIcon:"fas fa-file-import",size:"small"});return q.addEventListener("click",()=>{const Z=document.createElement("input");Z.type="file",Z.accept=".json",Z.click(),Z.addEventListener("change",async()=>{const z=Z.files?.[0];if(!z)return;const G=new FileReader;G.onload=async()=>{try{const J=JSON.parse(G.result);if(!J)return;await _.importCustomExtension(J),h(F)}catch(J){$.modal.openModal({title:"Error importing extension",content:J.toString()})}},G.readAsText(z)})}),q},N1=(F)=>{const q=f.ui.button({label:"Refresh",variant:"primary",leadingIcon:"fas fa-sync",size:"small"});return q.addEventListener("click",async()=>{await _.initExtensions(),h(F)}),q},h=(F)=>{if(!b.get(F))return;const q=b.get(F);q.clearRows(),_.getExtensions().forEach((Z)=>{if(F===U.INSTALLED&&!_.isExtensionInstalled(Z.id))return;if(F===U.CUSTOM&&!Z.isCustom)return;const z=_.getInstalledExtension(Z.id)?.installedVersion||"-";let G=Z.latestVersion===z?Z.latestVersion:`${z} (<span style='color:var(--c-bg-success);'>${Z.latestVersion}</span>)`;if(z==="-")G=Z.latestVersion;q.addRow([{columnName:"Name",value:T(Z.name)},{columnName:"Version",value:T(G)},{columnName:"Description",value:T(Z.description)},{columnName:"Author",value:T(Z.author)},{columnName:"Actions",value:k1(Z,F)}],()=>{$.modal.openModal({title:Z.name,content:`<div class="eb-extensions__modal">
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
              
              ${z!=="-"?`
                  <div class="eb-extensions__modal-installed">
                    <div class="eb-extensions__modal-key">
                      Installed Version
                    </div>
                    <div class="eb-extensions__modal-value">
                      ${H(z)}
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
            </div>`})})})},k1=(F,q)=>{const Z=F.id,z=document.createElement("div");if(z.innerHTML=`
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
    </div>`,F?.isCustom){const Q=f.ui.button({label:"Delete",variant:"primary",size:"small",leadingIcon:"fas fa-trash"});Q.addEventListener("click",(Y)=>{Y.stopPropagation(),_.deleteCustomExtension(F.id),h(q)}),z.querySelector(".evenbetter-table-actions").appendChild(Q)}const G=z.querySelector("#eb-install-ext");if(!G)return z;let J=!1;if(G.addEventListener("click",async(Q)=>{if(Q.stopPropagation(),J)return;if(_.getInstalledExtension(Z)){if(!(await _.checkForUpdates(Z)).isLatest){J=!0,await _.updateExtension(Z),J=!1;return}_.uninstallExtension(Z);return}J=!0,await _.installExtension(Z),J=!1}),_.isExtensionInstalled(Z))y1(G);const K=_.getInstalledExtension(Z);if(K&&F.latestVersion!==K.installedVersion)R1(G);return z},y1=(F)=>{const q=F.querySelector(".c-evenbetter_button__label");if(q)q.innerText="Uninstall",q.classList.add("c-evenbetter_button__label--uninstall");const Z=F.querySelector(".c-evenbetter_button__input");if(Z)Z.classList.add("c-evenbetter_button__input--uninstall")},R1=(F)=>{const q=F.querySelector(".c-evenbetter_button__label");if(q)q.innerText="Update",q.classList.remove("c-evenbetter_button__label--uninstall"),q.classList.add("c-evenbetter_button__label--update");const Z=F.querySelector(".c-evenbetter_button__input");if(Z)Z.classList.remove("c-evenbetter_button__input--uninstall"),Z.classList.add("c-evenbetter_button__input--update")},T=(F)=>{const q=document.createElement("span");return q.innerHTML=F,q};class c{handlers=[];addHandler(F){this.handlers.push(F)}init(){}trigger(F){this.handlers.forEach((q)=>q(F))}}var Z1=".eb-extensions{flex-direction:column;gap:.5em;height:100%;display:flex;overflow:auto}.eb-extensions__content{background-color:var(--c-bg-subtle);border-radius:5px;height:100%}.evenbetter-table-actions{align-items:center;gap:var(--c-space-2);display:flex}.evenbetter-table-actions__select{width:5em}.c-evenbetter_button{font-size:var(--c-font-size-100);font-weight:var(--c-font-weight-500);--button-focus-color:white;font-size:var(--c-font-size-100);font-weight:var(--c-font-weight-500)}[data-outline=true][data-variant=secondary] .c-evenbetter_button__input{color:var(--c-fg-secondary);border:var(--c-border-width-2)solid var(--c-border-secondary);background-color:#0000}.c-evenbetter_button__input:active{background-color:var(--c-yellow-300)!important;color:var(--c-gray-900)!important}[data-block=true] .c-button,[data-block=true] .c-evenbetter_button__input{width:100%}[data-variant=secondary] .c-evenbetter_button__input{background-color:var(--c-bg-secondary);color:var(--c-fg-onEmphasis)}[data-size=small] .c-evenbetter_button__input{padding:var(--c-space-0)var(--c-space-2);min-height:var(--c-space-8)}.c-evenbetter_button__input{font-size:inherit;border-radius:var(--c-border-radius-1);cursor:pointer;color:var(--c-fg-secondary);border:0;border:var(--c-border-width-2)solid var(--c-border-secondary);font-size:inherit;border-radius:var(--c-border-radius-1);cursor:pointer;background-color:#0000;border:0;align-items:center;width:100%;display:flex}.c-evenbetter_button__label{text-overflow:ellipsis;white-space:nowrap;flex:1;justify-content:center;display:inline-flex;overflow:hidden}.c-evenbetter_button__input--uninstall{border-color:var(--c-fg-danger)!important}.c-evenbetter_button__label--uninstall{color:var(--c-fg-danger)!important}.c-evenbetter_button__input--uninstall:active{background-color:var(--c-fg-danger)!important}.c-evenbetter_button__input--uninstall:active .c-evenbetter_button__label--uninstall{color:var(--c-bg-subtle)!important}.c-evenbetter_button__input--update{border-color:var(--c-bg-info)!important}.c-evenbetter_button__label--update{color:var(--c-bg-info)!important}.c-evenbetter_button__input--update:active{background-color:var(--c-bg-info)!important}.c-evenbetter_button__input--update:active .c-evenbetter_button__label--update{color:var(--c-bg-subtle)!important}.eb-extensions__import-warning{color:var(--c-fg-danger);margin-bottom:.25em}.eb-extensions__import{margin-top:1em}.eb-extensions__modal *{white-space:normal!important}.eb-extensions__modal{flex-direction:column;gap:1em;display:flex}.eb-extensions__modal-description{color:var(--c-fg-subtle);font-size:1rem;font-weight:300}.eb-extensions__modal-key{color:var(--c-fg-default);font-size:16px;font-weight:600}.eb-extensions__modal-value{font-weight:300}.c-content[data-page^=\"#/extensions/\"]{overflow:auto}.c-content[data-page=\"#/extensions/settings\"] .eb-extensions__content{padding:1em}.eb-extensions__library{height:100%}.eb-extensions__setting-label b{color:#fff}";var w1=function(){if(!localStorage.getItem("eb-show-notifications"))localStorage.setItem("eb-show-notifications","true");if(!localStorage.getItem("eb-show-update-notification"))localStorage.setItem("eb-show-update-notification","true")},L1=function(){$.eventManager.on("onSettingsTabOpen",(F)=>{switch(F){case"developer":const q=document.querySelector(".c-custom-js__footer");q.removeEventListener("click",B),q.addEventListener("click",B)}}),$.eventManager.on("onPageOpen",(F)=>{const q=Array.from(document.querySelectorAll(".c-sidebar-item")).filter((z)=>z.textContent=="Extensions");if(q.length==0)return;q[0].setAttribute("data-is-active",F.newUrl.startsWith("#/extensions/")?"true":"false")})},T1=function(){f.navigation.addPage("/extensions/all",{body:w(U.ALL)}),f.navigation.addPage("/extensions/installed",{body:w(U.INSTALLED)}),f.navigation.addPage("/extensions/custom",{body:w(U.CUSTOM)}),f.navigation.addPage("/extensions/settings",{body:w(U.SETTINGS)})},h1=function(){f.sidebar.registerItem("Extensions","/extensions/all",{icon:"fas fa-puzzle-piece",group:"EvenBetter"})},B1=function(){f.commands.register("eb:openExtensionsPage",{name:"Go to Extensions",group:"EvenBetter: Navigation",run:()=>{f.navigation.goTo("/extensions/all")}}),f.commandPalette.register("eb:openExtensionsPage")};async function S1(){try{const q=await(await fetch(n,{cache:"no-store"})).text(),Z=parseFloat(q.replace("v",""));if(parseFloat(R.replace("v",""))>Z)return{isLatest:!0,message:`You are using a development version: ${R}.`};if(q.trim()===R)return{isLatest:!0,message:"You are using the latest version! \uD83C\uDF89"};else return{isLatest:!1,message:`New EvenBetter Extensions version available: ${q}.`,latestVersion:q}}catch(F){return{isLatest:!1,message:"Failed to check for updates"}}}async function D1(){W({id:"eb-extensions",cssText:Z1.toString()}),w1();const F=new c;if($.eventManager.registerEvent("onExtensionLoad",F),T1(),B1(),h1(),L1(),localStorage.getItem("eb-message-onload"))$.modal.openModal({title:"EvenBetter Extensions",content:H(localStorage.getItem("eb-message-onload"))}),localStorage.removeItem("eb-message-onload");if(location.hash=="#/settings/developer"){const Z=document.querySelector(".c-custom-js__footer");Z.removeEventListener("click",B),Z.addEventListener("click",B)}if((await _.initExtensions()).forEach((Z)=>{const z=_.getInstalledExtension(Z.id);if(!z)return;if(z.installedVersion!=Z.latestVersion){if(console.log(`New version available for extension ${Z.id}: ${Z.latestVersion}`),localStorage.getItem("eb-auto-update")==="true")localStorage.setItem("eb-message-onload",`Auto-updated extension ${Z.name} to version ${Z.latestVersion}. If you want to disable auto-updates, go to Extensions -> Settings.`),_.updateExtension(z.extensionID);if(localStorage.getItem("eb-show-notifications")==="true")$.modal.openModal({title:"New extension version available",content:`New version available for extension <b style='color:var(--c-fg-default);'>${Z.name}</b> (<span style='color:var(--c-bg-danger);'>${z.installedVersion}</span> -> <span style='color:var(--c-bg-success);'>${Z.latestVersion}</span>).`})}}),$.eventManager.triggerEvent("onExtensionLoad"),localStorage.getItem("eb-show-update-notification")==="true"){const Z=await S1();if(!Z.isLatest)$.modal.openModal({title:`EvenBetter Extensions: Update from ${R} to ${Z.latestVersion}`,content:"You are using an outdated version of EvenBetter Extensions. Please update to the latest version on http://github.com/bebiksior/EvenBetterExtensions."})}}var B=()=>{setTimeout(()=>{location.reload()},250)};_.loadInstalledExtensions();_.getInstalledExtensions().forEach((F)=>{console.log("Running extension: "+F.extensionID),_.runExtension(F.extensionID)});$.eventManager.on("onCaidoLoad",()=>{D1()});
