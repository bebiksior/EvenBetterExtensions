var X=window.Caido;var p=new Set,z1=({id:Z,cssText:q})=>{if(p.has(Z)||document.querySelector(`#${Z}`))return;const $=document.createElement("style");$.id=Z,$.textContent=q,$.classList.add("evenbetterapi-css-module"),document.head.appendChild($),p.add(Z)},f=z1;var F1=`
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
`,d=()=>{f({id:"checkbox",cssText:F1});const Z=document.createElement("div");return Z.classList.add("eb-button__label"),Z.innerHTML=`<div class="eb-checkbox">
            <div class="formkit-outer" data-family="box" data-type="checkbox" data-complete="true">
                <label class="formkit-wrapper eb-checkbox__wrapper" data-checked="true">
                    <span class="formkit-inner eb-checkbox__inner">
                        <input class="formkit-input eb-checkbox__input" type="checkbox">
                        <span class="formkit-decorator" aria-hidden="true"></span>
                    </span>
                </label>
            </div>
        </div>
    `,Z};function u(Z){const q=document.createElement("div");q.classList.add("c-menu-bar"),q.style.width="100%";const $=document.createElement("div");$.classList.add("p-menubar","p-component"),$.setAttribute("data-pc-name","menubar"),$.setAttribute("data-pc-section","root");const z=document.createElement("div");z.classList.add("p-menubar-start"),z.setAttribute("data-pc-section","start");const F=document.createElement("div");F.classList.add("c-settings__title"),F.style.padding="0 var(--c-space-4)",F.style.fontWeight="700",F.textContent=Z.title,z.appendChild(F);const G=document.createElement("ul");G.classList.add("p-menubar-root-list"),Z.items.forEach((Y)=>{const _=document.createElement("li");_.classList.add("p-menuitem"),_.setAttribute("role","menuitem");const V=document.createElement("div");V.classList.add("p-menuitem-content"),V.setAttribute("data-pc-section","content");const R=document.createElement("div");R.classList.add("c-settings__item"),R.setAttribute("data-is-active","true"),R.addEventListener("click",()=>{$.classList.remove("p-menubar-mobile-active")});const H=document.createElement("a");if(H.setAttribute("href",Y.url),H.setAttribute("draggable","false"),H.draggable=!1,H.classList.add("p-menuitem-link"),J.eventManager.on("onPageOpen",(k)=>{if(k.newUrl===Y.url){if(Y.onOpen)Y.onOpen();H.style.backgroundColor="rgba(255,255,255,.04)",H.style.borderRadius="var(--c-border-radius-2)"}else H.style.backgroundColor="",H.style.borderRadius=""}),Y.icon){const k=document.createElement("i");k.classList.add("c-icon","fas",Y.icon),k.style.marginRight="var(--c-space-2)",H.appendChild(k)}const c=document.createElement("span");c.textContent=Y.title,H.appendChild(c),R.appendChild(H),V.appendChild(R),_.appendChild(V),G.appendChild(_)});const K=document.createElement("a");K.setAttribute("role","button"),K.setAttribute("tabindex","0"),K.classList.add("p-menubar-button"),K.setAttribute("aria-haspopup","true"),K.setAttribute("aria-expanded","false"),K.setAttribute("aria-label","Navigation"),K.setAttribute("data-pc-section","button"),K.setAttribute("aria-controls","pv_id_3"),K.innerHTML='<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="p-icon" aria-hidden="true" data-pc-section="menubuttonicon"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.3226 3.6129H0.677419C0.497757 3.6129 0.325452 3.54152 0.198411 3.41448C0.0713707 3.28744 0 3.11514 0 2.93548C0 2.75581 0.0713707 2.58351 0.198411 2.45647C0.325452 2.32943 0.497757 2.25806 0.677419 2.25806H13.3226C13.5022 2.25806 13.6745 2.32943 13.8016 2.45647C13.9286 2.58351 14 2.75581 14 2.93548C14 3.11514 13.9286 3.28744 13.8016 3.41448C13.6745 3.54152 13.5022 3.6129 13.3226 3.6129ZM13.3226 7.67741H0.677419C0.497757 7.67741 0.325452 7.60604 0.198411 7.479C0.0713707 7.35196 0 7.17965 0 6.99999C0 6.82033 0.0713707 6.64802 0.198411 6.52098C0.325452 6.39394 0.497757 6.32257 0.677419 6.32257H13.3226C13.5022 6.32257 13.6745 6.39394 13.8016 6.52098C13.9286 6.64802 14 6.82033 14 6.99999C14 7.17965 13.9286 7.35196 13.8016 7.479C13.6745 7.60604 13.5022 7.67741 13.3226 7.67741ZM0.677419 11.7419H13.3226C13.5022 11.7419 13.6745 11.6706 13.8016 11.5435C13.9286 11.4165 14 11.2442 14 11.0645C14 10.8848 13.9286 10.7125 13.8016 10.5855C13.6745 10.4585 13.5022 10.3871 13.3226 10.3871H0.677419C0.497757 10.3871 0.325452 10.4585 0.198411 10.5855C0.0713707 10.7125 0 10.8848 0 11.0645C0 11.2442 0.0713707 11.4165 0.198411 11.5435C0.325452 11.6706 0.497757 11.7419 0.677419 11.7419Z" fill="currentColor"></path></svg>',K.addEventListener("click",()=>{$.classList.toggle("p-menubar-mobile-active"),G.style.zIndex=$.classList.contains("p-menubar-mobile-active")?"1200":""}),window.addEventListener("resize",()=>{if(window.innerWidth<955)$.classList.add("p-menubar-mobile");else $.classList.remove("p-menubar-mobile"),$.classList.remove("p-menubar-mobile-active")}),window.dispatchEvent(new Event("resize"));const Q=document.createElement("div");if(Q.classList.add("p-menubar-end"),Q.setAttribute("data-pc-section","end"),Q.style.display="flex",Q.style.gap=".5em",Q.style.alignItems="center",Z.customButtons)Z.customButtons.forEach((Y)=>{Q.appendChild(Y)});return $.appendChild(z),$.appendChild(K),$.appendChild(G),$.appendChild(Q),q.appendChild($),q}var O;(function(z){z["INFO"]="info";z["ERROR"]="error";z["WARN"]="warn"})(O||(O={}));window.global=window;class m{log(Z,q){const z=`${(new Date()).toString()} [EvenBetterAPI]`;switch(Z){case O.INFO:console.log(`${z} [INFO] ${q}`);break;case O.ERROR:console.error(`${z} [ERROR] ${q}`);break;case O.WARN:console.warn(`${z} [WARN] ${q}`);break;default:console.log(`${z} [UNKNOWN] ${q}`)}}info(Z){this.log(O.INFO,Z)}error(Z){this.log(O.ERROR,Z)}warn(Z){this.log(O.WARN,Z)}}var G1=new m,A=G1;class M{events={};registerEvent(Z,q){this.events[Z]=q}triggerEvent(Z,q){const $=this.events[Z];if($)$.trigger(q);else console.error(`Event "${Z}" not registered.`)}on(Z,q){const $=this.events[Z];if($)$.addHandler(q);else console.error(`Event "${Z}" not registered.`)}initEvents(){A.info(`Initializing ${Object.keys(this.events).length} custom events`);for(let Z in this.events)this.events[Z].init()}}class S{handlers=[];addHandler(Z){this.handlers.push(Z)}init(){const Z=setInterval(()=>{if(K1())clearInterval(Z),this.trigger()},25)}trigger(){this.handlers.forEach((Z)=>Z())}}var K1=()=>{return document.querySelector(".c-authenticated")!==null};class P{handlers=[];addHandler(Z){this.handlers.push(Z)}init(){new MutationObserver((q)=>{for(let $ of q)if($.type==="childList")$.addedNodes.forEach((z)=>{const F=z;if(z.nodeType===1&&F.classList.contains("p-contextmenu"))this.trigger(F)})}).observe(document.body,{childList:!0,subtree:!0})}trigger(Z){this.handlers.forEach((q)=>q(Z))}}class C{handlers=[];eventManager;constructor(Z){this.eventManager=Z}addHandler(Z){this.handlers.push(Z)}init(){let Z=window.location.href;const q=new MutationObserver(()=>{if(window.location.href!==Z){let z=new URL(window.location.href).hash,F=new URL(Z).hash;if(Z=window.location.href,z.includes("?custom-path="))z=z.split("?custom-path=")[1];if(F.includes("?custom-path="))F=F.split("?custom-path=")[1];document.querySelector(".c-content")?.setAttribute("data-page",z),this.trigger({newUrl:z,oldUrl:F})}}),$={subtree:!0,childList:!0};q.observe(document,$)}trigger(Z){if(A.info(`Page updated: ${Z.oldUrl} -> ${Z.newUrl}`),Z.newUrl.startsWith("#/settings/"))this.eventManager.triggerEvent("onSettingsTabOpen",Z.newUrl.replace("#/settings/",""));this.handlers.forEach((q)=>q(Z))}}class E{handlers=[];addHandler(Z){this.handlers.push(Z)}init(){}trigger(Z){A.info(`Settings tab opened: ${Z}`),this.handlers.forEach((q)=>q(Z))}}var Q1=`
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
`;document.addEventListener("keydown",(Z)=>{if(Z.key==="Escape")y()});var Y1=({title:Z,content:q})=>{f({id:"evenbetterapi-modal",cssText:Q1});const $=document.createElement("div");$.classList.add("evenbetter-modal"),$.innerHTML=`
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
    `;const z=$.querySelector(".evenbetter-modal__content-header-title");if(!z)throw new Error("Modal title not found");z.textContent=Z;const F=$.querySelector(".evenbetter-modal__content-body-text");if(!F)throw new Error("Modal body not found");return F.innerHTML=q,$.setAttribute("data-modal-title",Z),$.querySelector(".evenbetter-modal__content-body-close")?.addEventListener("click",y),$},J1=()=>{return document.querySelector(".evenbetter-modal")!==null},y=()=>{document.querySelector(".evenbetter-modal")?.remove()},r=({title:Z,content:q})=>{if(J1())y();const $=Y1({title:Z,content:q});document.body.appendChild($)};var _1=`
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
}`,X1=(Z,q,$)=>{const z=document.createElement("div");z.classList.add("v-toast"),z.classList.add(`v-toast--${$}`);const F=document.createElement("div");F.setAttribute("role","alert"),F.classList.add("v-toast__item"),F.classList.add(`v-toast__item--${q}`),F.classList.add(`v-toast__item--${$}`),z.appendChild(F);const G=document.createElement("div");G.classList.add("v-toast__icon"),F.appendChild(G);const K=document.createElement("p");return K.classList.add("v-toast__text"),K.textContent=Z,F.appendChild(K),z.classList.add("v-toast--fade-in"),z},x=(Z)=>{const{message:q,type:$,position:z,duration:F}=Z;f({id:"eb-toast",cssText:_1});let G=document.querySelector(`.v-toast--${z}`);if(!G)G=document.createElement("div"),G.classList.add("v-toast"),G.classList.add(`v-toast--${z}`),document.body.appendChild(G);const K=X1(q,$,z);G.appendChild(K),setTimeout(()=>{K.classList.add("v-toast--fade-out"),setTimeout(()=>{K.remove()},150)},F-150)};function l(Z,q="Search...",$=!1,z){f({id:"eb-text-input",cssText:W1});const F=document.createElement("div");F.classList.add("formkit-outer","c-text-input__outer"),F.setAttribute("style",`width: ${Z};`);const G=document.createElement("div");G.classList.add("formkit-wrapper"),G.style.display="flex";const K=document.createElement("div");K.classList.add("formkit-inner","eb-text-input__inner");const Q=document.createElement("div");Q.classList.add("c-text-input__prefix"),Q.setAttribute("style","align-self: center; color: var(--c-fg-subtle);");const Y=document.createElement("i");if(Y.classList.add("c-icon","fas"),z)Y.classList.add(z);const _=document.createElement("input");if(_.setAttribute("placeholder",q),_.setAttribute("spellcheck","false"),_.classList.add("formkit-input","c-text-input__input"),_.setAttribute("type","text"),_.setAttribute("style","width: 100%; background: transparent; border: 0; outline: 0; color: inherit; box-sizing: border-box; line-height: inherit;"),z)Q.appendChild(Y);if(K.appendChild(Q),K.appendChild(_),$){const V=document.createElement("button");V.innerHTML='<i class="fas fa-copy"></i>',V.setAttribute("style","background: transparent; border: 0; outline: 0; cursor: pointer; padding: 0; margin-left: 10px;"),V.addEventListener("click",()=>{navigator.clipboard.writeText(_.value),J.toast.showToast({message:"Copied to clipboard",position:"bottom",type:"info",duration:1000})}),K.appendChild(V)}return G.appendChild(K),F.appendChild(G),F}var W1=`
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
`;class I{handlers=[];commandObserver=null;selectedCommand=null;addHandler(Z){this.handlers.push(Z)}init(){const Z=(z)=>{this.commandObserver=new MutationObserver((F)=>{const G=q();if(G!==this.selectedCommand)this.selectedCommand=G}),this.commandObserver.observe(z,{attributes:!0,subtree:!0})},q=()=>{return document.querySelector("[command-item][aria-selected='true']")};new MutationObserver((z)=>{for(let F of z)if(F.type==="childList")F.addedNodes.forEach((G)=>{const K=G;if(G.nodeType===1&&K.hasAttribute("command-theme"))Z(K)}),F.removedNodes.forEach((G)=>{const K=G;if(G.nodeType===1&&K.hasAttribute("command-theme")){if(!this.selectedCommand)return;const Q=this.selectedCommand.getAttribute("data-value");if(Q)this.trigger(Q);if(this.commandObserver)this.commandObserver.disconnect(),this.commandObserver=null}})}).observe(document.body,{childList:!0,subtree:!0})}trigger(Z){this.handlers.forEach((q)=>q(Z))}}var i=[],a=(Z)=>{Z.on("onCommandRun",(q)=>{const $=i.find((z)=>z.commandName===q);if(!$)return;f1($)})},f1=(Z)=>{const q=document.createElement("div");q.classList.add("custom");const $=document.createElement("div");$.setAttribute("command-root",""),q.appendChild($);const z=document.createElement("div");z.setAttribute("command-dialog",""),$.appendChild(z);const F=document.createElement("div");F.setAttribute("command-dialog-mask",""),F.style.display="flex",F.style.justifyContent="center",F.style.alignItems="center",F.addEventListener("click",()=>{q.remove()}),z.appendChild(F);const G=document.createElement("div");G.setAttribute("command-dialog-wrapper",""),G.style.minWidth="600px",G.style.padding="1em",G.style.margin="0",F.appendChild(G);const K=document.createElement("div");K.setAttribute("command-dialog-body",""),K.style.display="flex",K.style.gap="0.5em",G.addEventListener("click",(_)=>{_.stopPropagation()}),G.appendChild(K);const Q=J.components.createTextInput("100%",Z.promptPlaceholder);Q.style.zIndex="100",Q.addEventListener("click",(_)=>{_.stopPropagation()}),K.appendChild(Q);const Y=X.ui.button({label:"Submit",variant:"primary"});Y.addEventListener("click",()=>{const _=Q.querySelector("input");Z.onPrompt(_.value),q.remove()}),K.appendChild(Y),document.body.appendChild(q),Q.querySelector("input")?.focus(),Q.addEventListener("keydown",(_)=>{if(_.key==="Enter")Y.click();if(_.key==="Escape")q.remove()})},j1=(Z,q,$)=>{i.push({commandName:Z,promptPlaceholder:q,onPrompt:$})},s={createPromptCommand:j1};var o=async()=>{if(localStorage.getItem("previousPath"))setTimeout(()=>{window.location.hash=localStorage.getItem("previousPath")||"",localStorage.removeItem("previousPath")},200);const Z=new WebSocket("ws://localhost:8081");Z.addEventListener("open",()=>{J.toast.showToast({message:"Connected to Caido Hot Reloading Server",duration:2000,type:"success",position:"bottom"})}),Z.addEventListener("close",()=>{J.toast.showToast({message:"Disconnected from Caido Hot Reloading Server",duration:2000,type:"error",position:"bottom"})}),Z.addEventListener("message",(z)=>{try{const F=JSON.parse(z.data),G=F.event,K=F.data;switch(G){case"caido:loadJS":q(K,"");break;case"caido:loadCSS":q("",K);break;case"caido:reload":localStorage.setItem("previousPath",window.location.hash),location.reload();break;default:console.error("Unknown event type received:",G)}}catch(F){console.error("Error parsing WebSocket message:",F)}});const q=async(z,F)=>{const G=await $();if(!G)return;const K={input:{data:G.data,migrations:G.migrations}};if(z)K.input.data.js=z;if(F)K.input.data.css=F;return X.graphql.updateViewerSettings(K)},$=async()=>{return await X.graphql.userSettings().then((z)=>{return z.viewer.settings})}};var H1=`
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
}`,U1=()=>{return'<div class="c-evenbetter_table_card-body"><div class="c-evenbetter_table-container" data-is-empty="false" data-is-loading="false" style="overflow-y: auto;"><div class="c-evenbetter_table_header-row"></div><div class="c-table__wrapper" style="margin-top: 0px;"></div></div></div>'},t=(Z)=>{return new v(Z)};class v{Z;tableElement;tableWrapper;constructor(Z){this.config=Z;f({id:"eb-table-css",cssText:H1}),this.tableElement=document.createElement("div"),this.tableElement.className="c-evenbetter_table",this.tableElement.style.overflow="auto",this.tableElement.style.width="100%",this.tableElement.style.height=this.config.tableHeight,this.tableElement.setAttribute("data-row-height",this.config.rowHeight||"42px"),this.tableElement.innerHTML=U1(),this.tableWrapper=this.tableElement.querySelector(".c-table__wrapper");const q=this.tableElement.querySelector(".c-evenbetter_table_card-body");if(!q)throw new Error("Card body not found");q.style.height=this.config.tableHeight,q.style.width="100%";const $=this.tableElement.querySelector(".c-evenbetter_table_header-row");if(!$)throw new Error("Column row not found");this.config.columns.forEach((z)=>{$.innerHTML+=`<div class="c-evenbetter_table_header-cell" data-sortable="true" data-resizable="true" data-align="start" data-is-resizing="false" style="--1e00f3f4: 4rem; width: max(${z.width}, 56px);"><div class="c-evenbetter_header-cell_wrapper"><div class="c-evenbetter_header-cell_content">${z.name}</div></div></div>`})}filterRows(Z){const q=this.tableWrapper.querySelectorAll(".c-evenbetter_table_row");let $=1;q.forEach((z,F)=>{const G=z,K=z.querySelectorAll(".c-evenbetter_table-item-cell");let Q=!1;if(K.forEach((Y)=>{if(Y.textContent?.toLowerCase().includes(Z.toLowerCase()))Q=!0}),Q)G.style.display="flex",G.setAttribute("data-is-even",($%2===0).toString()),$++;else G.style.display="none",G.removeAttribute("data-is-even")})}clearRows(){this.tableWrapper.innerHTML=""}addRow(Z,q){const $=(this.tableWrapper.children.length+1)%2===0,z=document.createElement("div");z.className="c-evenbetter_table_row",z.setAttribute("data-is-even",$.toString());const F=document.createElement("div");if(F.className="c-evenbetter_table-item-row",this.config.rowHeight)F.style.height=this.config.rowHeight;if(Z.forEach((G)=>{const K=this.config.columns.find((_)=>_.name===G.columnName)?.width,Q=document.createElement("div");Q.className="c-evenbetter_table-item-cell",Q.setAttribute("data-column-id",G.columnName),Q.setAttribute("data-align","start"),Q.style.setProperty("--cellWidth",`max(${K}, 56px)`);const Y=document.createElement("div");if(Y.className="c-evenbetter_table-item-cell__inner",typeof G.value==="string")Y.textContent=G.value;else Y.appendChild(G.value);Q.appendChild(Y),F.appendChild(Q)}),q)F.addEventListener("click",q);z.appendChild(F),this.tableWrapper.appendChild(z)}getHTMLElement(){return this.tableElement}static createTable(Z){return new v(Z)}}var V1=function(){const Z=new M,q=new S,$=new E,z=new C(Z),F=new P,G=new I;return Z.registerEvent("onCaidoLoad",q),Z.registerEvent("onSettingsTabOpen",$),Z.registerEvent("onPageOpen",z),Z.registerEvent("onContextMenuOpen",F),Z.registerEvent("onCommandRun",G),Z.initEvents(),a(Z),{modal:{openModal:r,closeModal:y},toast:{showToast:x},components:{createTable:t,createNavigationBar:u,createCheckbox:d,createTextInput:l},eventManager:Z,loadCSS:f,promptCommands:s,hotReloading:o}},T;if(typeof window!=="undefined"&&window.EvenBetterAPI)T=window.EvenBetterAPI;else if(T=V1(),typeof window!=="undefined")window.EvenBetterAPI=T;var J=T;function j(Z){return String(Z).replace(/[&<>"'\/]/g,(q)=>O1.get(q))}var O1=new Map(Object.entries({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"}));var w="v1.0";var N="https://raw.githubusercontent.com/bebiksior/EvenBetter/main/extensions.json",n="https://raw.githubusercontent.com/bebiksior/EvenBetterExtensions/main/version.txt",e="https://raw.githubusercontent.com/bebiksior/EvenBetterExtensions/main/final/index.js";class ExtensionsManager{installedExtensions=[];extensions=[];async installExtension(Z){if(this.isExtensionInstalled(Z))throw new Error(`Extension with ID ${Z} is already installed.`);const q=this.extensions.find(($)=>$.id===Z);if(!q)throw new Error(`No data found for extension with ID ${Z}`);if(q.customJSUrl){const $=await this.fetchBody(q.customJSUrl);localStorage.setItem(`extensions_${q.id}_javascript`,$)}if(q.customCSSUrl){const $=await this.fetchBody(q.customCSSUrl);localStorage.setItem(`extensions_${q.id}_css`,$)}this.installedExtensions.push({installedVersion:q.latestVersion,extensionID:q.id}),localStorage.setItem("installedExtensions",JSON.stringify(this.installedExtensions)),localStorage.setItem("previousPage",window.location.hash),window.location.reload()}uninstallExtension(Z){localStorage.removeItem(`extensions_${Z}_javascript`),localStorage.removeItem(`extensions_${Z}_css`),this.installedExtensions=this.installedExtensions.filter((q)=>q.extensionID!==Z),localStorage.setItem("installedExtensions",JSON.stringify(this.installedExtensions)),localStorage.setItem("previousPage",window.location.hash),window.location.reload()}async updateExtension(Z){const q=this.installedExtensions.find((z)=>z.extensionID===Z);if(!q)throw new Error(`Extension with ID ${Z} is not installed.`);const $=this.extensions.find((z)=>z.id===Z);if(!$||!$.versionUrl)throw new Error(`No data found for extension with ID ${Z} or version URL not provided.`);if(await this.fetchBody($.versionUrl).then((z)=>{q.installedVersion=z,localStorage.setItem("installedExtensions",JSON.stringify(this.installedExtensions))}),$.customJSUrl)await this.fetchBody($.customJSUrl).then((z)=>{localStorage.setItem(`extensions_${Z}_javascript`,z)});if($.customCSSUrl)await this.fetchBody($.customCSSUrl).then((z)=>{localStorage.setItem(`extensions_${Z}_css`,z)});localStorage.setItem("previousPage",window.location.hash),window.location.reload()}getInstalledExtension(Z){return this.installedExtensions.find((q)=>q.extensionID===Z)}isExtensionInstalled(Z){return this.installedExtensions.some((q)=>q.extensionID===Z)}loadInstalledExtensions(){const Z=localStorage.getItem("installedExtensions");if(Z)this.installedExtensions=JSON.parse(Z)}getExtensions(){return this.extensions}getInstalledExtensions(){return this.installedExtensions}async importCustomExtension(Z){if(this.extensions.some((F)=>F.id===Z.id))throw new Error(`Extension with ID ${Z.id} already exists.`);Z.isCustom=!0;const q=await this.fetchBody(Z.versionUrl);Z.latestVersion=j(q),Z.name=j(Z.name),Z.description=j(Z.description),Z.author=j(Z.author),Z.url=j(Z.url);let $=localStorage.getItem("customExtensions");if(!$)$="[]";const z=JSON.parse($);z.push(Z),localStorage.setItem("customExtensions",JSON.stringify(z)),this.extensions.push(Z)}deleteCustomExtension(Z){let q=localStorage.getItem("customExtensions");if(!q)return;const z=JSON.parse(q).filter((F)=>F.id!==Z);if(localStorage.setItem("customExtensions",JSON.stringify(z)),this.extensions=this.extensions.filter((F)=>F.id!==Z),this.isExtensionInstalled(Z))this.uninstallExtension(Z)}async initExtensions(){try{const Z=await fetch(this.getExtensionsURL());if(!Z.ok)throw new Error(`Failed to fetch extensions from ${this.getExtensionsURL()}`);const $=(await Z.json()).extensions;for(let F of $){const G=await this.fetchBody(F.versionUrl);F.latestVersion=j(G),F.name=j(F.name),F.description=j(F.description),F.author=j(F.author),F.url=j(F.url)}this.extensions=$;let z=localStorage.getItem("customExtensions");if(z){const F=JSON.parse(z);this.extensions.push(...F)}return this.extensions}catch(Z){throw console.error(`Failed to load extensions from URL: ${Z}`),Z}}runExtension(extensionID){const installedExtension=this.installedExtensions.find((Z)=>Z.extensionID===extensionID);if(!installedExtension)throw new Error(`Extension with ID ${extensionID} is not installed.`);const jsCode=localStorage.getItem(`extensions_${extensionID}_javascript`);if(jsCode)try{eval(jsCode)}catch(Z){console.error(`Failed to run extension ${extensionID}: ${Z}`)}const cssCode=localStorage.getItem(`extensions_${extensionID}_css`);if(cssCode){const Z=document.createElement("style");Z.textContent=cssCode,document.head.appendChild(Z)}}getExtensionsURL(){return localStorage.getItem("eb-extensions-url")||N}async checkForUpdates(Z){const q=this.installedExtensions.find((z)=>z.extensionID===Z);if(!q)throw new Error(`Extension with ID ${Z} is not installed.`);const $=this.extensions.find((z)=>z.id===Z);if(!$||!$.versionUrl)throw new Error(`No data found for extension with ID ${Z} or version URL not provided.`);try{const z=await this.fetchBody($.versionUrl);if(z!==q.installedVersion)return{latestVersion:z,isLatest:!1};else return{latestVersion:z,isLatest:!0}}catch(z){throw console.error(`Failed to check for updates for extension ${Z}: ${z}`),z}}async fetchBody(Z){const q=await fetch(Z);if(q.ok)return q.text();else throw new Error(`Failed to fetch code from ${Z}`)}}var A1=new ExtensionsManager,W=A1;var Z1=".eb-extensions__setting{align-items:center;display:flex}.eb-extensions__settings--group{background-color:var(--c-bg-default);border-radius:5px;flex-direction:column;gap:1em;padding:1.5em;display:flex}.eb-extensions__setting-label{color:var(--c-fg-subtle);margin-left:1em;font-size:1rem;font-weight:300}.eb-extensions__setting-title{color:var(--c-fg-default);font-size:1.3rem;font-weight:600}.eb-extensions__settings{flex-direction:column;gap:1.5em;display:flex}.eb-extensions__settings-content{flex-direction:column;gap:1em;display:flex}.eb-extensions__textinput-setting{flex-direction:column;align-items:flex-start;padding:0 2.2em;display:flex}.eb-extensions__textinput-setting .eb-extensions__setting-label{margin-left:0!important}";async function k1(){try{const q=await(await fetch(n,{cache:"no-store"})).text(),$=parseFloat(q.replace("v",""));if(parseFloat(w.replace("v",""))>$)return{isLatest:!0,message:`You are using a development version: ${w}.`};if(q.trim()===w)return{isLatest:!0,message:"You are using the latest version! \uD83C\uDF89"};else return{isLatest:!1,message:`New EvenBetter Extensions version available: ${q}.`,latestVersion:q}}catch(Z){return{isLatest:!1,message:"Failed to check for updates"}}}var N1=async(Z)=>{const q=await R1();if(!q)return;const $={input:{data:q.data,migrations:q.migrations}};return $.input.data.js=Z,X.graphql.updateViewerSettings($)},R1=async()=>{return await X.graphql.userSettings().then((Z)=>{return Z.viewer.settings})},$1=()=>{f({id:"eb-extensions-settings",cssText:Z1.toString()});const Z=document.createElement("div");if(Z.classList.add("eb-extensions__settings"),Z.innerHTML=`
    <div class="eb-extensions__settings-header">
        <div style="font-weight: 600; font-size: 17px;">
            EvenBetter: Extensions ${w} - Settings
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
  `,localStorage.getItem("eb-show-updated-notification")==="true")J.toast.showToast({message:"EvenBetter: Extensions updated successfully!",duration:3500,position:"bottom",type:"success"}),localStorage.removeItem("eb-show-updated-notification");k1().then(($)=>{if(!$.isLatest){const z=X.ui.button({label:"Update now",variant:"primary",size:"small"});if(z.addEventListener("click",async()=>{const F=await fetch(e).then((G)=>G.text());await N1(F),localStorage.setItem("eb-show-updated-notification","true"),setTimeout(()=>{localStorage.setItem("previousPage",location.hash),location.reload()},250)}),localStorage.getItem("eb-show-update-notification")==="true")J.toast.showToast({message:"New EvenBetter Extensions version available. Go to Extensions -> Settings to update.",duration:3500,position:"bottom",type:"info"});Z.querySelector(".eb-extensions__settings-content").prepend(z)}}),Z.querySelectorAll(".eb-extensions__setting-checkbox").forEach(($)=>{const z=$.getAttribute("data-key"),F=localStorage.getItem(`eb-${z}`)==="true",G=J.components.createCheckbox(),K=G.querySelector('input[type="checkbox"]');K.checked=F,$.appendChild(G),$.addEventListener("change",()=>{localStorage.setItem(`eb-${z}`,K.checked?"true":"false")})}),Z.querySelectorAll(".eb-extensions__setting-textinput").forEach(($)=>{const z=$.getAttribute("data-key");let F=localStorage.getItem(`eb-${z}`);if(!F)localStorage.setItem(`eb-${z}`,N),F=N;const G=J.components.createTextInput("50em"),K=G.querySelector("input");K.value=F,$.appendChild(G),$.addEventListener("change",()=>{localStorage.setItem(`eb-${z}`,K.value)})});const q=X.ui.button({label:"Reset settings",variant:"tertiary",size:"small"});return q.addEventListener("click",()=>{localStorage.setItem("eb-auto-update","false"),localStorage.setItem("eb-show-notifications","true"),localStorage.setItem("eb-show-update-notification","true"),localStorage.setItem("eb-extensions-url",N),y1(Z)}),Z.appendChild(q),Z},y1=(Z)=>{Z.querySelectorAll(".eb-extensions__setting-checkbox").forEach((q)=>{const $=q.getAttribute("data-key"),z=localStorage.getItem(`eb-${$}`)==="true",F=q.querySelector('input[type="checkbox"]');F.checked=z}),Z.querySelectorAll(".eb-extensions__setting-textinput").forEach((q)=>{const $=q.getAttribute("data-key"),z=localStorage.getItem(`eb-${$}`),F=q.querySelector("input");F.value=z})};var U;(function(F){F["ALL"]="all";F["INSTALLED"]="installed";F["CUSTOM"]="custom";F["SETTINGS"]="settings"})(U||(U={}));var b=new Map,L=(Z)=>{const q=document.createElement("div");q.style.height="100%",q.innerHTML=`
    <div class="eb-extensions">
      <div class="eb-extensions__content">
      </div>
    </div>
  `;const $=q.querySelector(".eb-extensions");if(!$)return q;const z=[{name:"Name",width:"25em"},{name:"Version",width:"9em"},{name:"Description",width:"30em"},{name:"Author",width:"9em"},{name:"Actions",width:"14em"}],F=J.components.createTable({columns:z,tableHeight:"100%"});b.set(Z,F);const G=[];if(G.push(L1(Z)),Z===U.CUSTOM)G.push(w1(Z));const K=J.components.createNavigationBar({title:"Extensions",items:[{title:"All",url:"#/extensions/all",icon:"fa-globe"},{title:"Installed",url:"#/extensions/installed",icon:"fa-download"},{title:"Custom",url:"#/extensions/custom",icon:"fa-wrench"},{title:"Settings",url:"#/extensions/settings",icon:"fa-cog"}],customButtons:G});if($.prepend(K),Z===U.SETTINGS)return $.querySelector(".eb-extensions__content").appendChild($1()),q;J.eventManager.on("onPageOpen",(Y)=>{if(Y.newUrl.startsWith("#/extensions/"))B(Z)});const Q=document.createElement("div");if(Q.classList.add("eb-extensions__library"),$.querySelector(".eb-extensions__content").appendChild(Q),Q)Q.appendChild(F.getHTMLElement());return q},w1=(Z)=>{const q=X.ui.button({label:"Import",variant:"tertiary",leadingIcon:"fas fa-file-import",size:"small"});return q.addEventListener("click",()=>{const $=document.createElement("input");$.type="file",$.accept=".json",$.click(),$.addEventListener("change",async()=>{const z=$.files?.[0];if(!z)return;const F=new FileReader;F.onload=async()=>{try{const G=JSON.parse(F.result);if(!G)return;await W.importCustomExtension(G),B(Z)}catch(G){J.modal.openModal({title:"Error importing extension",content:G.toString()})}},F.readAsText(z)})}),q},L1=(Z)=>{const q=X.ui.button({label:"Refresh",variant:"primary",leadingIcon:"fas fa-sync",size:"small"});return q.addEventListener("click",async()=>{await W.initExtensions(),B(Z),J.toast.showToast({message:"Extensions refreshed",type:"success",duration:2000,position:"bottom"})}),q},B=(Z)=>{if(!b.get(Z))return;const q=b.get(Z);q.clearRows(),W.getExtensions().forEach(($)=>{if(Z===U.INSTALLED&&!W.isExtensionInstalled($.id))return;if(Z===U.CUSTOM&&!$.isCustom)return;const z=W.getInstalledExtension($.id)?.installedVersion||"-";let F=$.latestVersion===z?$.latestVersion:`${z} (<span style='color:var(--c-bg-success);'>${$.latestVersion}</span>)`;if(z==="-")F=$.latestVersion;q.addRow([{columnName:"Name",value:h($.name)},{columnName:"Version",value:h(F)},{columnName:"Description",value:h($.description)},{columnName:"Author",value:h($.author)},{columnName:"Actions",value:T1($,Z)}],()=>{J.modal.openModal({title:$.name,content:`<div class="eb-extensions__modal">
              <div class="eb-extensions__modal-description">
                <div class="eb-extensions__modal-key">
                  Description
                </div>
                <div class="eb-extensions__modal-value">
                  ${$.description}
                </div>
              </div>
              <div class="eb-extensions__modal-author">
                <div class="eb-extensions__modal-key">
                  Author
                </div>
                <div class="eb-extensions__modal-value">
                  ${$.author}
                </div>
              </div>
              <div class="eb-extensions__modal-url">
                <div class="eb-extensions__modal-key">
                  URL
                </div>
                <div class="eb-extensions__modal-value">
                  <a href="${$.url}" target="_blank">${$.url}</a>
                </div>
              </div>
              
              ${z!=="-"?`
                  <div class="eb-extensions__modal-installed">
                    <div class="eb-extensions__modal-key">
                      Installed Version
                    </div>
                    <div class="eb-extensions__modal-value">
                      ${j(z)}
                    </div>
                  </div>
              `:""}

              <div class="eb-extensions__modal-latest">
                <div class="eb-extensions__modal-key">
                  Latest Version
                </div>
                <div class="eb-extensions__modal-value">
                  ${j($.latestVersion)}
                </div>
              </div>
            </div>`})})})},T1=(Z,q)=>{const $=Z.id,z=document.createElement("div");if(z.innerHTML=`
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
    </div>`,Z?.isCustom){const Q=X.ui.button({label:"Delete",variant:"primary",size:"small",leadingIcon:"fas fa-trash"});Q.addEventListener("click",(Y)=>{Y.stopPropagation(),W.deleteCustomExtension(Z.id),B(q)}),z.querySelector(".evenbetter-table-actions").appendChild(Q)}const F=z.querySelector("#eb-install-ext");if(!F)return z;let G=!1;if(F.addEventListener("click",async(Q)=>{if(Q.stopPropagation(),G)return;if(W.getInstalledExtension($)){if(!(await W.checkForUpdates($)).isLatest){G=!0,await W.updateExtension($),G=!1;return}W.uninstallExtension($);return}G=!0,await W.installExtension($),G=!1}),W.isExtensionInstalled($))h1(F);const K=W.getInstalledExtension($);if(K&&Z.latestVersion!==K.installedVersion)B1(F);return z},h1=(Z)=>{const q=Z.querySelector(".c-evenbetter_button__label");if(q)q.innerText="Uninstall",q.classList.add("c-evenbetter_button__label--uninstall");const $=Z.querySelector(".c-evenbetter_button__input");if($)$.classList.add("c-evenbetter_button__input--uninstall")},B1=(Z)=>{const q=Z.querySelector(".c-evenbetter_button__label");if(q)q.innerText="Update",q.classList.remove("c-evenbetter_button__label--uninstall"),q.classList.add("c-evenbetter_button__label--update");const $=Z.querySelector(".c-evenbetter_button__input");if($)$.classList.remove("c-evenbetter_button__input--uninstall"),$.classList.add("c-evenbetter_button__input--update")},h=(Z)=>{const q=document.createElement("span");return q.innerHTML=Z,q};class g{handlers=[];addHandler(Z){this.handlers.push(Z)}init(){}trigger(Z){this.handlers.forEach((q)=>q(Z))}}var q1=".eb-extensions{flex-direction:column;gap:.5em;height:100%;display:flex;overflow:auto}.eb-extensions__content{background-color:var(--c-bg-subtle);border-radius:5px;height:100%}.evenbetter-table-actions{align-items:center;gap:var(--c-space-2);display:flex}.evenbetter-table-actions__select{width:fit-content}.c-evenbetter_button{font-size:var(--c-font-size-100);font-weight:var(--c-font-weight-500);--button-focus-color:white;font-size:var(--c-font-size-100);font-weight:var(--c-font-weight-500)}[data-outline=true][data-variant=secondary] .c-evenbetter_button__input{color:var(--c-fg-secondary);border:var(--c-border-width-2)solid var(--c-border-secondary);background-color:#0000}.c-evenbetter_button__input:active{background-color:var(--c-yellow-300)!important;color:var(--c-gray-900)!important}[data-block=true] .c-button,[data-block=true] .c-evenbetter_button__input{width:100%}[data-variant=secondary] .c-evenbetter_button__input{background-color:var(--c-bg-secondary);color:var(--c-fg-onEmphasis)}[data-size=small] .c-evenbetter_button__input{padding:var(--c-space-0)var(--c-space-2);min-height:var(--c-space-8)}.c-evenbetter_button__input{font-size:inherit;border-radius:var(--c-border-radius-1);cursor:pointer;color:var(--c-fg-secondary);border:0;border:var(--c-border-width-2)solid var(--c-border-secondary);font-size:inherit;border-radius:var(--c-border-radius-1);cursor:pointer;background-color:#0000;border:0;align-items:center;width:100%;display:flex}.c-evenbetter_button__label{text-overflow:ellipsis;white-space:nowrap;flex:1;justify-content:center;display:inline-flex;overflow:hidden}.c-evenbetter_button__input--uninstall{border-color:var(--c-fg-danger)!important}.c-evenbetter_button__label--uninstall{color:var(--c-fg-danger)!important}.c-evenbetter_button__input--uninstall:active{background-color:var(--c-fg-danger)!important}.c-evenbetter_button__input--uninstall:active .c-evenbetter_button__label--uninstall{color:var(--c-bg-subtle)!important}.c-evenbetter_button__input--update{border-color:var(--c-bg-info)!important}.c-evenbetter_button__label--update{color:var(--c-bg-info)!important}.c-evenbetter_button__input--update:active{background-color:var(--c-bg-info)!important}.c-evenbetter_button__input--update:active .c-evenbetter_button__label--update{color:var(--c-bg-subtle)!important}.eb-extensions__import-warning{color:var(--c-fg-danger);margin-bottom:.25em}.eb-extensions__import{margin-top:1em}.eb-extensions__modal *{white-space:normal!important}.eb-extensions__modal{flex-direction:column;gap:1em;display:flex}.eb-extensions__modal-description{color:var(--c-fg-subtle);font-size:1rem;font-weight:300}.eb-extensions__modal-key{color:var(--c-fg-default);font-size:16px;font-weight:600}.eb-extensions__modal-value{font-weight:300}.c-content[data-page^=\"#/extensions/\"]{min-width:900px;overflow:auto}.c-content[data-page=\"#/extensions/settings\"] .eb-extensions__content{padding:1em}.eb-extensions__library{height:100%}.eb-extensions__setting-label b{color:#fff}";var D1=function(){if(!localStorage.getItem("eb-show-notifications"))localStorage.setItem("eb-show-notifications","true");if(!localStorage.getItem("eb-show-update-notification"))localStorage.setItem("eb-show-update-notification","true")},M1=function(){J.eventManager.on("onSettingsTabOpen",(Z)=>{switch(Z){case"developer":const q=document.querySelector(".c-custom-js__footer");q.removeEventListener("click",D),q.addEventListener("click",D)}}),J.eventManager.on("onPageOpen",(Z)=>{const q=Array.from(document.querySelectorAll(".c-sidebar-item")).filter((z)=>z.textContent=="Extensions");if(q.length==0)return;q[0].setAttribute("data-is-active",Z.newUrl.startsWith("#/extensions/")?"true":"false")})},S1=function(){X.navigation.addPage("/extensions/all",{body:L(U.ALL)}),X.navigation.addPage("/extensions/installed",{body:L(U.INSTALLED)}),X.navigation.addPage("/extensions/custom",{body:L(U.CUSTOM)}),X.navigation.addPage("/extensions/settings",{body:L(U.SETTINGS)})},P1=function(){X.sidebar.registerItem("Extensions","/extensions/all",{icon:"fas fa-puzzle-piece",group:"EvenBetter"})},C1=function(){X.commands.register("eb:openExtensionsPage",{name:"Go to Extensions",group:"EvenBetter: Navigation",run:()=>{X.navigation.goTo("/extensions/all")}}),X.commandPalette.register("eb:openExtensionsPage")};async function E1(){f({id:"eb-extensions",cssText:q1.toString()}),D1();const Z=new g;if(J.eventManager.registerEvent("onExtensionLoad",Z),S1(),C1(),P1(),M1(),localStorage.getItem("eb-message-onload"))J.modal.openModal({title:"EvenBetter Extensions",content:j(localStorage.getItem("eb-message-onload"))}),localStorage.removeItem("eb-message-onload");if(location.hash=="#/settings/developer"){const $=document.querySelector(".c-custom-js__footer");$.removeEventListener("click",D),$.addEventListener("click",D)}if((await W.initExtensions()).forEach(($)=>{const z=W.getInstalledExtension($.id);if(!z)return;if(z.installedVersion!=$.latestVersion){if(console.log(`New version available for extension ${$.id}: ${$.latestVersion}`),localStorage.getItem("eb-auto-update")==="true")localStorage.setItem("eb-message-onload",`Auto-updated extension ${$.name} to version ${$.latestVersion}. If you want to disable auto-updates, go to Extensions -> Settings.`),W.updateExtension(z.extensionID);if(localStorage.getItem("eb-show-notifications")==="true")J.modal.openModal({title:"New extension version available",content:`New version available for extension <b style='color:var(--c-fg-default);'>${$.name}</b> (<span style='color:var(--c-bg-danger);'>${z.installedVersion}</span> -> <span style='color:var(--c-bg-success);'>${$.latestVersion}</span>).`})}}),J.eventManager.triggerEvent("onExtensionLoad"),localStorage.getItem("previousPage")){const $=localStorage.getItem("previousPage").split("#")[1];console.log("Restoring previous path: "+$),X.navigation.goTo($),localStorage.removeItem("previousPage")}}var D=()=>{setTimeout(()=>{location.reload()},250)};W.loadInstalledExtensions();W.getInstalledExtensions().forEach((Z)=>{console.log("Running extension: "+Z.extensionID),W.runExtension(Z.extensionID)});J.eventManager.on("onCaidoLoad",()=>{E1()});
