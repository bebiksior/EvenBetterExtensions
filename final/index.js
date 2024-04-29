var m=window.Caido;var Z=new Set,at=({id:t,cssText:r})=>{if(Z.has(t)||document.querySelector(`#${t}`))return;const e=document.createElement("style");e.id=t,e.textContent=r,e.classList.add("evenbetterapi-css-module"),document.head.appendChild(e),Z.add(t)},v=at;var ot=`
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
`,K=()=>{v({id:"checkbox",cssText:ot});const t=document.createElement("div");t.classList.add("eb-button__label");const r=document.createElement("div");r.classList.add("eb-checkbox");const e=document.createElement("div");e.classList.add("formkit-outer"),e.dataset.family="box",e.dataset.type="checkbox",e.dataset.complete="true";const a=document.createElement("label");a.classList.add("formkit-wrapper","eb-checkbox__wrapper"),a.dataset.checked="true";const o=document.createElement("span");o.classList.add("formkit-inner","eb-checkbox__inner");const d=document.createElement("input");d.classList.add("formkit-input","eb-checkbox__input"),d.type="checkbox";const n=document.createElement("span");return n.classList.add("formkit-decorator"),n.setAttribute("aria-hidden","true"),o.appendChild(d),o.appendChild(n),a.appendChild(o),e.appendChild(a),r.appendChild(e),t.appendChild(r),t};function G(t){const r=document.createElement("div");r.classList.add("c-menu-bar"),r.style.width="100%";const e=document.createElement("div");e.classList.add("p-menubar","p-component"),e.setAttribute("data-pc-name","menubar"),e.setAttribute("data-pc-section","root");const a=document.createElement("div");a.classList.add("p-menubar-start"),a.setAttribute("data-pc-section","start");const o=document.createElement("div");o.classList.add("c-settings__title"),o.style.padding="0 var(--c-space-4)",o.style.fontWeight="700",o.textContent=t.title,a.appendChild(o);const d=document.createElement("ul");d.classList.add("p-menubar-root-list"),t.items.forEach((c)=>{const s=document.createElement("li");s.classList.add("p-menuitem"),s.setAttribute("role","menuitem");const f=document.createElement("div");f.classList.add("p-menuitem-content"),f.setAttribute("data-pc-section","content");const y=document.createElement("div");y.classList.add("c-settings__item"),y.setAttribute("data-is-active","true"),y.addEventListener("click",()=>{e.classList.remove("p-menubar-mobile-active")});const u=document.createElement("a");if(u.setAttribute("href",c.url),u.setAttribute("draggable","false"),u.draggable=!1,u.classList.add("p-menuitem-link"),l.eventManager.on("onPageOpen",(C)=>{if(C.newUrl===c.url){if(c.onOpen)c.onOpen();u.style.backgroundColor="rgba(255,255,255,.04)",u.style.borderRadius="var(--c-border-radius-2)"}else u.style.backgroundColor="",u.style.borderRadius=""}),c.icon){const C=document.createElement("i");C.classList.add("c-icon","fas",c.icon),C.style.marginRight="var(--c-space-2)",u.appendChild(C)}const F=document.createElement("span");F.textContent=c.title,u.appendChild(F),y.appendChild(u),f.appendChild(y),s.appendChild(f),d.appendChild(s)});const n=document.createElement("a");n.setAttribute("role","button"),n.setAttribute("tabindex","0"),n.classList.add("p-menubar-button"),n.setAttribute("aria-haspopup","true"),n.setAttribute("aria-expanded","false"),n.setAttribute("aria-label","Navigation"),n.setAttribute("data-pc-section","button"),n.setAttribute("aria-controls","pv_id_3"),n.innerHTML='<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="p-icon" aria-hidden="true" data-pc-section="menubuttonicon"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.3226 3.6129H0.677419C0.497757 3.6129 0.325452 3.54152 0.198411 3.41448C0.0713707 3.28744 0 3.11514 0 2.93548C0 2.75581 0.0713707 2.58351 0.198411 2.45647C0.325452 2.32943 0.497757 2.25806 0.677419 2.25806H13.3226C13.5022 2.25806 13.6745 2.32943 13.8016 2.45647C13.9286 2.58351 14 2.75581 14 2.93548C14 3.11514 13.9286 3.28744 13.8016 3.41448C13.6745 3.54152 13.5022 3.6129 13.3226 3.6129ZM13.3226 7.67741H0.677419C0.497757 7.67741 0.325452 7.60604 0.198411 7.479C0.0713707 7.35196 0 7.17965 0 6.99999C0 6.82033 0.0713707 6.64802 0.198411 6.52098C0.325452 6.39394 0.497757 6.32257 0.677419 6.32257H13.3226C13.5022 6.32257 13.6745 6.39394 13.8016 6.52098C13.9286 6.64802 14 6.82033 14 6.99999C14 7.17965 13.9286 7.35196 13.8016 7.479C13.6745 7.60604 13.5022 7.67741 13.3226 7.67741ZM0.677419 11.7419H13.3226C13.5022 11.7419 13.6745 11.6706 13.8016 11.5435C13.9286 11.4165 14 11.2442 14 11.0645C14 10.8848 13.9286 10.7125 13.8016 10.5855C13.6745 10.4585 13.5022 10.3871 13.3226 10.3871H0.677419C0.497757 10.3871 0.325452 10.4585 0.198411 10.5855C0.0713707 10.7125 0 10.8848 0 11.0645C0 11.2442 0.0713707 11.4165 0.198411 11.5435C0.325452 11.6706 0.497757 11.7419 0.677419 11.7419Z" fill="currentColor"></path></svg>',n.addEventListener("click",()=>{e.classList.toggle("p-menubar-mobile-active"),d.style.zIndex=e.classList.contains("p-menubar-mobile-active")?"1200":""}),window.addEventListener("resize",()=>{if(window.innerWidth<955)e.classList.add("p-menubar-mobile");else e.classList.remove("p-menubar-mobile"),e.classList.remove("p-menubar-mobile-active")}),window.dispatchEvent(new Event("resize"));const i=document.createElement("div");if(i.classList.add("p-menubar-end"),i.setAttribute("data-pc-section","end"),i.style.display="flex",i.style.gap=".5em",i.style.alignItems="center",t.customButtons)t.customButtons.forEach((c)=>{i.appendChild(c)});return e.appendChild(a),e.appendChild(n),e.appendChild(d),e.appendChild(i),r.appendChild(e),r}var g;(function(a){a["INFO"]="info";a["ERROR"]="error";a["WARN"]="warn"})(g||(g={}));window.global=window;class Q{log(t,r){const a=`${(new Date()).toString()} [EvenBetterAPI]`;switch(t){case g.INFO:console.log(`${a} [INFO] ${r}`);break;case g.ERROR:console.error(`${a} [ERROR] ${r}`);break;case g.WARN:console.warn(`${a} [WARN] ${r}`);break;default:console.log(`${a} [UNKNOWN] ${r}`)}}info(t){this.log(g.INFO,t)}error(t){this.log(g.ERROR,t)}warn(t){this.log(g.WARN,t)}}var dt=new Q,_=dt;class H{events={};registerEvent(t,r){this.events[t]=r}triggerEvent(t,r){const e=this.events[t];if(e)e.trigger(r);else console.error(`Event "${t}" not registered.`)}on(t,r){const e=this.events[t];if(e)e.addHandler(r);else console.error(`Event "${t}" not registered.`)}initEvents(){_.info(`Initializing ${Object.keys(this.events).length} custom events`);for(let t in this.events)this.events[t].init()}}class R{handlers=[];addHandler(t){this.handlers.push(t)}init(){const t=setInterval(()=>{if(nt())clearInterval(t),this.trigger()},25)}trigger(){this.handlers.forEach((t)=>t())}}var nt=()=>{return document.querySelector(".c-authenticated")!==null};class S{handlers=[];addHandler(t){this.handlers.push(t)}init(){new MutationObserver((r)=>{for(let e of r)if(e.type==="childList")e.addedNodes.forEach((a)=>{const o=a;if(a.nodeType===1&&o.classList.contains("p-contextmenu"))this.trigger(o)})}).observe(document.body,{childList:!0,subtree:!0})}trigger(t){this.handlers.forEach((r)=>r(t))}}class z{handlers=[];eventManager;constructor(t){this.eventManager=t}addHandler(t){this.handlers.push(t)}init(){let t=window.location.href;const r=new MutationObserver(()=>{if(window.location.href!==t){let a=new URL(window.location.href).hash,o=new URL(t).hash;if(t=window.location.href,a.includes("?custom-path="))a=a.split("?custom-path=")[1];if(o.includes("?custom-path="))o=o.split("?custom-path=")[1];document.querySelector(".c-content")?.setAttribute("data-page",a),this.trigger({newUrl:a,oldUrl:o})}}),e={subtree:!0,childList:!0};r.observe(document,e)}trigger(t){if(_.info(`Page updated: ${t.oldUrl} -> ${t.newUrl}`),t.newUrl.startsWith("#/settings/"))this.eventManager.triggerEvent("onSettingsTabOpen",t.newUrl.replace("#/settings/",""));this.handlers.forEach((r)=>r(t))}}class N{handlers=[];addHandler(t){this.handlers.push(t)}init(){}trigger(t){_.info(`Settings tab opened: ${t}`),this.handlers.forEach((r)=>r(t))}}var it=`
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
`;document.addEventListener("keydown",(t)=>{if(t.key==="Escape")E()});var ct=({title:t,content:r})=>{v({id:"evenbetterapi-modal",cssText:it.toString()});const e=document.createElement("div");e.classList.add("evenbetter-modal");const a=document.createElement("div");a.classList.add("evenbetter-modal__content");const o=document.createElement("div");o.classList.add("evenbetter-modal__content-header");const d=document.createElement("h2");d.classList.add("evenbetter-modal__content-header-title"),d.textContent=t,o.appendChild(d);const n=document.createElement("div");n.classList.add("evenbetter-modal__content-body");const i=document.createElement("p");if(i.classList.add("evenbetter-modal__content-body-text"),typeof r==="string")i.innerHTML=r;else if(r instanceof HTMLElement)i.appendChild(r);const c=document.createElement("button");return c.classList.add("evenbetter-modal__content-body-close"),c.textContent="Close",c.addEventListener("click",E),n.appendChild(i),n.appendChild(c),a.appendChild(o),a.appendChild(n),e.appendChild(a),e.setAttribute("data-modal-title",t),e},lt=()=>{return document.querySelector(".evenbetter-modal")!==null},E=()=>{document.querySelector(".evenbetter-modal")?.remove()},Y=({title:t,content:r})=>{if(lt())E();const e=ct({title:t,content:r});document.body.appendChild(e)};var st=`
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
}`,mt=(t,r,e)=>{const a=document.createElement("div");a.classList.add("v-toast"),a.classList.add(`v-toast--${e}`);const o=document.createElement("div");o.setAttribute("role","alert"),o.classList.add("v-toast__item"),o.classList.add(`v-toast__item--${r}`),o.classList.add(`v-toast__item--${e}`),a.appendChild(o);const d=document.createElement("div");d.classList.add("v-toast__icon"),o.appendChild(d);const n=document.createElement("p");return n.classList.add("v-toast__text"),n.textContent=t,o.appendChild(n),a.classList.add("v-toast--fade-in"),a},j=(t)=>{const{message:r,type:e,position:a,duration:o}=t;v({id:"eb-toast",cssText:st});let d=document.querySelector(`.v-toast--${a}`);if(!d)d=document.createElement("div"),d.classList.add("v-toast"),d.classList.add(`v-toast--${a}`),document.body.appendChild(d);const n=mt(r,e,a);d.appendChild(n),setTimeout(()=>{n.classList.add("v-toast--fade-out"),setTimeout(()=>{n.remove()},150)},o-150)};function B(t,r="Search...",e=!1,a){v({id:"eb-text-input",cssText:pt});const o=document.createElement("div");o.classList.add("formkit-outer","c-text-input__outer"),o.setAttribute("style",`width: ${t};`);const d=document.createElement("div");d.classList.add("formkit-wrapper"),d.style.display="flex";const n=document.createElement("div");n.classList.add("formkit-inner","eb-text-input__inner");const i=document.createElement("div");i.classList.add("c-text-input__prefix"),i.setAttribute("style","align-self: center; color: var(--c-fg-subtle);");const c=document.createElement("i");if(c.classList.add("c-icon","fas"),a)c.classList.add(a);const s=document.createElement("input");if(s.setAttribute("placeholder",r),s.setAttribute("spellcheck","false"),s.classList.add("formkit-input","c-text-input__input"),s.setAttribute("type","text"),s.setAttribute("style","width: 100%; background: transparent; border: 0; outline: 0; color: inherit; box-sizing: border-box; line-height: inherit;"),a)i.appendChild(c);if(n.appendChild(i),n.appendChild(s),e){const f=document.createElement("button");f.innerHTML='<i class="fas fa-copy"></i>',f.setAttribute("style","background: transparent; border: 0; outline: 0; cursor: pointer; padding: 0; margin-left: 10px;"),f.addEventListener("click",()=>{navigator.clipboard.writeText(s.value),l.toast.showToast({message:"Copied to clipboard",position:"bottom",type:"info",duration:1000})}),n.appendChild(f)}return d.appendChild(n),o.appendChild(d),o}var pt=`
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
`;class ${handlers=[];commandObserver=null;selectedCommand=null;addHandler(t){this.handlers.push(t)}init(){const t=(a)=>{this.commandObserver=new MutationObserver((o)=>{const d=r();if(d!==this.selectedCommand)this.selectedCommand=d}),this.commandObserver.observe(a,{attributes:!0,subtree:!0})},r=()=>{return document.querySelector("[command-item][aria-selected='true']")};new MutationObserver((a)=>{for(let o of a)if(o.type==="childList")o.addedNodes.forEach((d)=>{const n=d;if(d.nodeType===1&&n.hasAttribute("command-theme"))t(n)}),o.removedNodes.forEach((d)=>{const n=d;if(d.nodeType===1&&n.hasAttribute("command-theme")){if(!this.selectedCommand)return;const i=this.selectedCommand.getAttribute("data-value");if(i)this.trigger(i);if(this.commandObserver)this.commandObserver.disconnect(),this.commandObserver=null}})}).observe(document.body,{childList:!0,subtree:!0})}trigger(t){this.handlers.forEach((r)=>r(t))}}var J=[],X=(t)=>{t.on("onCommandRun",(r)=>{const e=J.find((a)=>a.commandName===r);if(!e)return;vt(e)})},vt=(t)=>{const r=document.createElement("div");r.classList.add("custom");const e=document.createElement("div");e.setAttribute("command-root",""),r.appendChild(e);const a=document.createElement("div");a.setAttribute("command-dialog",""),e.appendChild(a);const o=document.createElement("div");o.setAttribute("command-dialog-mask",""),o.style.display="flex",o.style.justifyContent="center",o.style.alignItems="center",o.addEventListener("click",()=>{r.remove()}),a.appendChild(o);const d=document.createElement("div");d.setAttribute("command-dialog-wrapper",""),d.style.minWidth="600px",d.style.padding="1em",d.style.margin="0",o.appendChild(d);const n=document.createElement("div");n.setAttribute("command-dialog-body",""),n.style.display="flex",n.style.gap="0.5em",d.addEventListener("click",(s)=>{s.stopPropagation()}),d.appendChild(n);const i=l.components.createTextInput("100%",t.promptPlaceholder);i.style.zIndex="100",i.addEventListener("click",(s)=>{s.stopPropagation()}),n.appendChild(i);const c=m.ui.button({label:"Submit",variant:"primary"});c.addEventListener("click",()=>{const s=i.querySelector("input");t.onPrompt(s.value),r.remove()}),n.appendChild(c),document.body.appendChild(r),i.querySelector("input")?.focus(),i.addEventListener("keydown",(s)=>{if(s.key==="Enter")c.click();if(s.key==="Escape")r.remove()})},bt=(t,r,e)=>{J.push({commandName:t,promptPlaceholder:r,onPrompt:e})},V={createPromptCommand:bt};var P=async()=>{if(localStorage.getItem("previousPath"))setTimeout(()=>{window.location.hash=localStorage.getItem("previousPath")||"",localStorage.removeItem("previousPath")},200);const t=new WebSocket("ws://localhost:8081");t.addEventListener("open",()=>{l.toast.showToast({message:"Connected to Caido Hot Reloading Server",duration:2000,type:"success",position:"bottom"})}),t.addEventListener("close",()=>{l.toast.showToast({message:"Disconnected from Caido Hot Reloading Server",duration:2000,type:"error",position:"bottom"})}),t.addEventListener("message",(a)=>{try{const o=JSON.parse(a.data),d=o.event,n=o.data;switch(d){case"caido:loadJS":r(n,"").then(()=>{setTimeout(()=>window.location.reload(),25)});break;case"caido:loadCSS":r("",n).then(()=>{setTimeout(()=>window.location.reload(),25)});break;default:console.error("Unknown event type received:",d)}}catch(o){console.error("Error parsing WebSocket message:",o)}});const r=async(a,o)=>{const d=await e();if(!d)return;const n={input:{data:d.data,migrations:d.migrations}};if(a)n.input.data.js=a;if(o)n.input.data.css=o;return m.graphql.updateViewerSettings(n)},e=async()=>{return await m.graphql.userSettings().then((a)=>{return a.viewer.settings})}};var ut=`
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
}`,ht=()=>{return'<div class="c-evenbetter_table_card-body"><div class="c-evenbetter_table-container" data-is-empty="false" data-is-loading="false" style="overflow-y: auto;"><div class="c-evenbetter_table_header-row"></div><div class="c-table__wrapper" style="margin-top: 0px;"></div></div></div>'},I=(t)=>{return new W(t)};class W{t;tableElement;tableWrapper;constructor(t){this.config=t;v({id:"eb-table-css",cssText:ut}),this.tableElement=document.createElement("div"),this.tableElement.className="c-evenbetter_table",this.tableElement.style.overflow="auto",this.tableElement.style.width="100%",this.tableElement.style.height=this.config.tableHeight,this.tableElement.setAttribute("data-row-height",this.config.rowHeight||"42px"),this.tableElement.innerHTML=ht(),this.tableWrapper=this.tableElement.querySelector(".c-table__wrapper");const r=this.tableElement.querySelector(".c-evenbetter_table_card-body");if(!r)throw new Error("Card body not found");r.style.height=this.config.tableHeight,r.style.width="100%";const e=this.tableElement.querySelector(".c-evenbetter_table_header-row");if(!e)throw new Error("Column row not found");this.config.columns.forEach((a)=>{e.innerHTML+=`<div class="c-evenbetter_table_header-cell" data-sortable="true" data-resizable="true" data-align="start" data-is-resizing="false" style="--1e00f3f4: 4rem; width: max(${a.width}, 56px);"><div class="c-evenbetter_header-cell_wrapper"><div class="c-evenbetter_header-cell_content">${a.name}</div></div></div>`})}filterRows(t){const r=this.tableWrapper.querySelectorAll(".c-evenbetter_table_row");let e=1;r.forEach((a,o)=>{const d=a,n=a.querySelectorAll(".c-evenbetter_table-item-cell");let i=!1;if(n.forEach((c)=>{if(c.textContent?.toLowerCase().includes(t.toLowerCase()))i=!0}),i)d.style.display="flex",d.setAttribute("data-is-even",(e%2===0).toString()),e++;else d.style.display="none",d.removeAttribute("data-is-even")})}clearRows(){this.tableWrapper.innerHTML=""}addRow(t,r){const e=(this.tableWrapper.children.length+1)%2===0,a=document.createElement("div");a.className="c-evenbetter_table_row",a.setAttribute("data-is-even",e.toString());const o=document.createElement("div");if(o.className="c-evenbetter_table-item-row",this.config.rowHeight)o.style.height=this.config.rowHeight;if(t.forEach((d)=>{const n=this.config.columns.find((s)=>s.name===d.columnName)?.width,i=document.createElement("div");i.className="c-evenbetter_table-item-cell",i.setAttribute("data-column-id",d.columnName),i.setAttribute("data-align","start"),i.style.setProperty("--cellWidth",`max(${n}, 56px)`);const c=document.createElement("div");if(c.className="c-evenbetter_table-item-cell__inner",typeof d.value==="string")c.textContent=d.value;else c.appendChild(d.value);i.appendChild(c),o.appendChild(i)}),r)o.addEventListener("click",r);a.appendChild(o),this.tableWrapper.appendChild(a)}getHTMLElement(){return this.tableElement}static createTable(t){return new W(t)}}var ft=function(){const t=new H,r=new R,e=new N,a=new z(t),o=new S,d=new $;return t.registerEvent("onCaidoLoad",r),t.registerEvent("onSettingsTabOpen",e),t.registerEvent("onPageOpen",a),t.registerEvent("onContextMenuOpen",o),t.registerEvent("onCommandRun",d),t.initEvents(),X(t),{modal:{openModal:Y,closeModal:E},toast:{showToast:j},components:{createTable:I,createNavigationBar:G,createCheckbox:K,createTextInput:B},eventManager:t,loadCSS:v,promptCommands:V,hotReloading:P,version:"1.2.0"}},O;if(typeof window!=="undefined"&&window.EvenBetterAPI)O=window.EvenBetterAPI;else if(O=ft(),typeof window!=="undefined")window.EvenBetterAPI=O;var l=O;function b(t){return String(t).replace(/[&<>"'\/]/g,(r)=>gt.get(r))}var gt=new Map(Object.entries({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"}));var L="v1.1";var w="https://raw.githubusercontent.com/bebiksior/EvenBetter/main/extensions.json",D="https://raw.githubusercontent.com/bebiksior/EvenBetterExtensions/main/version.txt",x="https://raw.githubusercontent.com/bebiksior/EvenBetterExtensions/main/final/index.js";class ExtensionsManager{installedExtensions=[];extensions=[];async installExtension(t){if(this.isExtensionInstalled(t))throw new Error(`Extension with ID ${t} is already installed.`);const r=this.extensions.find((e)=>e.id===t);if(!r)throw new Error(`No data found for extension with ID ${t}`);if(r.customJSUrl){const e=await this.fetchBody(r.customJSUrl);localStorage.setItem(`extensions_${r.id}_javascript`,e)}if(r.customCSSUrl){const e=await this.fetchBody(r.customCSSUrl);localStorage.setItem(`extensions_${r.id}_css`,e)}this.installedExtensions.push({installedVersion:r.latestVersion,extensionID:r.id}),localStorage.setItem("installedExtensions",JSON.stringify(this.installedExtensions)),localStorage.setItem("previousPage",window.location.hash),window.location.reload()}uninstallExtension(t){localStorage.removeItem(`extensions_${t}_javascript`),localStorage.removeItem(`extensions_${t}_css`),this.installedExtensions=this.installedExtensions.filter((r)=>r.extensionID!==t),localStorage.setItem("installedExtensions",JSON.stringify(this.installedExtensions)),localStorage.setItem("previousPage",window.location.hash),window.location.reload()}async updateExtension(t){const r=this.installedExtensions.find((a)=>a.extensionID===t);if(!r)throw new Error(`Extension with ID ${t} is not installed.`);const e=this.extensions.find((a)=>a.id===t);if(!e||!e.versionUrl)throw new Error(`No data found for extension with ID ${t} or version URL not provided.`);if(await this.fetchBody(e.versionUrl).then((a)=>{r.installedVersion=a,localStorage.setItem("installedExtensions",JSON.stringify(this.installedExtensions))}),e.customJSUrl)await this.fetchBody(e.customJSUrl).then((a)=>{localStorage.setItem(`extensions_${t}_javascript`,a)});if(e.customCSSUrl)await this.fetchBody(e.customCSSUrl).then((a)=>{localStorage.setItem(`extensions_${t}_css`,a)});localStorage.setItem("previousPage",window.location.hash),window.location.reload()}getInstalledExtension(t){return this.installedExtensions.find((r)=>r.extensionID===t)}isExtensionInstalled(t){return this.installedExtensions.some((r)=>r.extensionID===t)}loadInstalledExtensions(){const t=localStorage.getItem("installedExtensions");if(t)this.installedExtensions=JSON.parse(t)}getExtensions(){return this.extensions}getInstalledExtensions(){return this.installedExtensions}async importCustomExtension(t){if(this.extensions.some((o)=>o.id===t.id))throw new Error(`Extension with ID ${t.id} already exists.`);t.isCustom=!0;const r=await this.fetchBody(t.versionUrl);t.latestVersion=b(r),t.name=b(t.name),t.description=b(t.description),t.author=b(t.author),t.url=b(t.url);let e=localStorage.getItem("customExtensions");if(!e)e="[]";const a=JSON.parse(e);a.push(t),localStorage.setItem("customExtensions",JSON.stringify(a)),this.extensions.push(t)}deleteCustomExtension(t){let r=localStorage.getItem("customExtensions");if(!r)return;const a=JSON.parse(r).filter((o)=>o.id!==t);if(localStorage.setItem("customExtensions",JSON.stringify(a)),this.extensions=this.extensions.filter((o)=>o.id!==t),this.isExtensionInstalled(t))this.uninstallExtension(t)}async initExtensions(){try{const t=await fetch(this.getExtensionsURL());if(!t.ok)throw new Error(`Failed to fetch extensions from ${this.getExtensionsURL()}`);const e=(await t.json()).extensions;for(let o of e){const d=await this.fetchBody(o.versionUrl);o.latestVersion=b(d),o.name=b(o.name),o.description=b(o.description),o.author=b(o.author),o.url=b(o.url)}this.extensions=e;let a=localStorage.getItem("customExtensions");if(a){const o=JSON.parse(a);this.extensions.push(...o)}return this.extensions}catch(t){throw console.error(`Failed to load extensions from URL: ${t}`),t}}runExtension(extensionID){const installedExtension=this.installedExtensions.find((t)=>t.extensionID===extensionID);if(!installedExtension)throw new Error(`Extension with ID ${extensionID} is not installed.`);const jsCode=localStorage.getItem(`extensions_${extensionID}_javascript`);if(jsCode)try{eval(jsCode)}catch(t){console.error(`Failed to run extension ${extensionID}: ${t}`)}const cssCode=localStorage.getItem(`extensions_${extensionID}_css`);if(cssCode){const t=document.createElement("style");t.textContent=cssCode,document.head.appendChild(t)}}getExtensionsURL(){return localStorage.getItem("eb-extensions-url")||w}async checkForUpdates(t){const r=this.installedExtensions.find((a)=>a.extensionID===t);if(!r)throw new Error(`Extension with ID ${t} is not installed.`);const e=this.extensions.find((a)=>a.id===t);if(!e||!e.versionUrl)throw new Error(`No data found for extension with ID ${t} or version URL not provided.`);try{const a=await this.fetchBody(e.versionUrl);if(a!==r.installedVersion)return{latestVersion:a,isLatest:!1};else return{latestVersion:a,isLatest:!0}}catch(a){throw console.error(`Failed to check for updates for extension ${t}: ${a}`),a}}async fetchBody(t){const r=await fetch(t);if(r.ok)return r.text();else throw new Error(`Failed to fetch code from ${t}`)}}var _t=new ExtensionsManager,p=_t;var tt=".eb-extensions__setting{align-items:center;display:flex}.eb-extensions__settings--group{background-color:var(--c-bg-default);border-radius:5px;flex-direction:column;gap:1em;padding:1.5em;display:flex}.eb-extensions__setting-label{color:var(--c-fg-subtle);margin-left:1em;font-size:1rem;font-weight:300}.eb-extensions__setting-title{color:var(--c-fg-default);font-size:1.3rem;font-weight:600}.eb-extensions__settings{flex-direction:column;gap:1.5em;display:flex}.eb-extensions__settings-content{flex-direction:column;gap:1em;display:flex}.eb-extensions__textinput-setting{flex-direction:column;align-items:flex-start;padding:0 2.2em;display:flex}.eb-extensions__textinput-setting .eb-extensions__setting-label{margin-left:0!important}";async function Ct(){try{const r=await(await fetch(D,{cache:"no-store"})).text(),e=parseFloat(r.replace("v",""));if(parseFloat(L.replace("v",""))>e)return{isLatest:!0,message:`You are using a development version: ${L}.`};if(r.trim()===L)return{isLatest:!0,message:"You are using the latest version! \uD83C\uDF89"};else return{isLatest:!1,message:`New EvenBetter Extensions version available: ${r}.`,latestVersion:r}}catch(t){return{isLatest:!1,message:"Failed to check for updates"}}}var wt=async(t)=>{const r=await yt();if(!r)return;const e={input:{data:r.data,migrations:r.migrations}};return e.input.data.js=t,m.graphql.updateViewerSettings(e)},yt=async()=>{return await m.graphql.userSettings().then((t)=>{return t.viewer.settings})},et=()=>{v({id:"eb-extensions-settings",cssText:tt.toString()});const t=document.createElement("div");if(t.classList.add("eb-extensions__settings"),t.innerHTML=`
    <div class="eb-extensions__settings-header">
        <div style="font-weight: 600; font-size: 17px;">
            EvenBetter: Extensions ${L} - Settings
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
  `,localStorage.getItem("eb-show-updated-notification")==="true")l.toast.showToast({message:"EvenBetter: Extensions updated successfully!",duration:3500,position:"bottom",type:"success"}),localStorage.removeItem("eb-show-updated-notification");Ct().then((e)=>{if(!e.isLatest){const a=m.ui.button({label:"Update now",variant:"primary",size:"small"});if(a.addEventListener("click",async()=>{const o=await fetch(x).then((d)=>d.text());await wt(o),localStorage.setItem("eb-show-updated-notification","true"),setTimeout(()=>{localStorage.setItem("previousPage",location.hash),location.reload()},250)}),localStorage.getItem("eb-show-update-notification")==="true")l.toast.showToast({message:"New EvenBetter Extensions version available. Go to Extensions -> Settings to update.",duration:3500,position:"bottom",type:"info"});t.querySelector(".eb-extensions__settings-content").prepend(a)}}),t.querySelectorAll(".eb-extensions__setting-checkbox").forEach((e)=>{const a=e.getAttribute("data-key"),o=localStorage.getItem(`eb-${a}`)==="true",d=l.components.createCheckbox(),n=d.querySelector('input[type="checkbox"]');n.checked=o,e.appendChild(d),e.addEventListener("change",()=>{localStorage.setItem(`eb-${a}`,n.checked?"true":"false")})}),t.querySelectorAll(".eb-extensions__setting-textinput").forEach((e)=>{const a=e.getAttribute("data-key");let o=localStorage.getItem(`eb-${a}`);if(!o)localStorage.setItem(`eb-${a}`,w),o=w;const d=l.components.createTextInput("50em"),n=d.querySelector("input");n.value=o,e.appendChild(d),e.addEventListener("change",()=>{localStorage.setItem(`eb-${a}`,n.value)})});const r=m.ui.button({label:"Reset settings",variant:"tertiary",size:"small"});return r.addEventListener("click",()=>{localStorage.setItem("eb-auto-update","false"),localStorage.setItem("eb-show-notifications","true"),localStorage.setItem("eb-show-update-notification","true"),localStorage.setItem("eb-extensions-url",w),Et(t)}),t.appendChild(r),t},Et=(t)=>{t.querySelectorAll(".eb-extensions__setting-checkbox").forEach((r)=>{const e=r.getAttribute("data-key"),a=localStorage.getItem(`eb-${e}`)==="true",o=r.querySelector('input[type="checkbox"]');o.checked=a}),t.querySelectorAll(".eb-extensions__setting-textinput").forEach((r)=>{const e=r.getAttribute("data-key"),a=localStorage.getItem(`eb-${e}`),o=r.querySelector("input");o.value=a})};var h;(function(o){o["ALL"]="all";o["INSTALLED"]="installed";o["CUSTOM"]="custom";o["SETTINGS"]="settings"})(h||(h={}));var q=new Map,k=(t)=>{const r=document.createElement("div");r.style.height="100%",r.innerHTML=`
    <div class="eb-extensions">
      <div class="eb-extensions__content">
      </div>
    </div>
  `;const e=r.querySelector(".eb-extensions");if(!e)return r;const a=[{name:"Name",width:"25em"},{name:"Version",width:"9em"},{name:"Description",width:"30em"},{name:"Author",width:"9em"},{name:"Actions",width:"14em"}],o=l.components.createTable({columns:a,tableHeight:"100%"});q.set(t,o);const d=[];if(d.push(kt(t)),t===h.CUSTOM)d.push(Lt(t));const n=l.components.createNavigationBar({title:"Extensions",items:[{title:"All",url:"#/extensions/all",icon:"fa-globe"},{title:"Installed",url:"#/extensions/installed",icon:"fa-download"},{title:"Custom",url:"#/extensions/custom",icon:"fa-wrench"},{title:"Settings",url:"#/extensions/settings",icon:"fa-cog"}],customButtons:d});if(e.prepend(n),t===h.SETTINGS)return e.querySelector(".eb-extensions__content").appendChild(et()),r;l.eventManager.on("onPageOpen",(c)=>{if(c.newUrl.startsWith("#/extensions/"))M(t)});const i=document.createElement("div");if(i.classList.add("eb-extensions__library"),e.querySelector(".eb-extensions__content").appendChild(i),i)i.appendChild(o.getHTMLElement());return r},Lt=(t)=>{const r=m.ui.button({label:"Import",variant:"tertiary",leadingIcon:"fas fa-file-import",size:"small"});return r.addEventListener("click",()=>{const e=document.createElement("input");e.type="file",e.accept=".json",e.click(),e.addEventListener("change",async()=>{const a=e.files?.[0];if(!a)return;const o=new FileReader;o.onload=async()=>{try{const d=JSON.parse(o.result);if(!d)return;await p.importCustomExtension(d),M(t)}catch(d){l.modal.openModal({title:"Error importing extension",content:d.toString()})}},o.readAsText(a)})}),r},kt=(t)=>{const r=m.ui.button({label:"Refresh",variant:"primary",leadingIcon:"fas fa-sync",size:"small"});return r.addEventListener("click",async()=>{await p.initExtensions(),M(t),l.toast.showToast({message:"Extensions refreshed",type:"success",duration:2000,position:"bottom"})}),r},M=(t)=>{if(!q.get(t))return;const r=q.get(t);r.clearRows(),p.getExtensions().forEach((e)=>{if(t===h.INSTALLED&&!p.isExtensionInstalled(e.id))return;if(t===h.CUSTOM&&!e.isCustom)return;const a=p.getInstalledExtension(e.id)?.installedVersion||"-";let o=e.latestVersion===a?e.latestVersion:`${a} (<span style='color:var(--c-bg-success);'>${e.latestVersion}</span>)`;if(a==="-")o=e.latestVersion;r.addRow([{columnName:"Name",value:T(e.name)},{columnName:"Version",value:T(o)},{columnName:"Description",value:T(e.description)},{columnName:"Author",value:T(e.author)},{columnName:"Actions",value:Ot(e,t)}],()=>{l.modal.openModal({title:e.name,content:`<div class="eb-extensions__modal">
              <div class="eb-extensions__modal-description">
                <div class="eb-extensions__modal-key">
                  Description
                </div>
                <div class="eb-extensions__modal-value">
                  ${e.description}
                </div>
              </div>
              <div class="eb-extensions__modal-author">
                <div class="eb-extensions__modal-key">
                  Author
                </div>
                <div class="eb-extensions__modal-value">
                  ${e.author}
                </div>
              </div>
              <div class="eb-extensions__modal-url">
                <div class="eb-extensions__modal-key">
                  URL
                </div>
                <div class="eb-extensions__modal-value">
                  <a href="${e.url}" target="_blank">${e.url}</a>
                </div>
              </div>
              
              ${a!=="-"?`
                  <div class="eb-extensions__modal-installed">
                    <div class="eb-extensions__modal-key">
                      Installed Version
                    </div>
                    <div class="eb-extensions__modal-value">
                      ${b(a)}
                    </div>
                  </div>
              `:""}

              <div class="eb-extensions__modal-latest">
                <div class="eb-extensions__modal-key">
                  Latest Version
                </div>
                <div class="eb-extensions__modal-value">
                  ${b(e.latestVersion)}
                </div>
              </div>
            </div>`})})})},Ot=(t,r)=>{const e=t.id,a=document.createElement("div");if(a.innerHTML=`
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
    </div>`,t?.isCustom){const i=m.ui.button({label:"Delete",variant:"primary",size:"small",leadingIcon:"fas fa-trash"});i.addEventListener("click",(c)=>{c.stopPropagation(),p.deleteCustomExtension(t.id),M(r)}),a.querySelector(".evenbetter-table-actions").appendChild(i)}const o=a.querySelector("#eb-install-ext");if(!o)return a;let d=!1;if(o.addEventListener("click",async(i)=>{if(i.stopPropagation(),d)return;if(p.getInstalledExtension(e)){if(!(await p.checkForUpdates(e)).isLatest){d=!0,await p.updateExtension(e),d=!1;return}p.uninstallExtension(e);return}d=!0,await p.installExtension(e),d=!1}),p.isExtensionInstalled(e))Tt(o);const n=p.getInstalledExtension(e);if(n&&t.latestVersion!==n.installedVersion)Mt(o);return a},Tt=(t)=>{const r=t.querySelector(".c-evenbetter_button__label");if(r)r.innerText="Uninstall",r.classList.add("c-evenbetter_button__label--uninstall");const e=t.querySelector(".c-evenbetter_button__input");if(e)e.classList.add("c-evenbetter_button__input--uninstall")},Mt=(t)=>{const r=t.querySelector(".c-evenbetter_button__label");if(r)r.innerText="Update",r.classList.remove("c-evenbetter_button__label--uninstall"),r.classList.add("c-evenbetter_button__label--update");const e=t.querySelector(".c-evenbetter_button__input");if(e)e.classList.remove("c-evenbetter_button__input--uninstall"),e.classList.add("c-evenbetter_button__input--update")},T=(t)=>{const r=document.createElement("span");return r.innerHTML=t,r};class U{handlers=[];addHandler(t){this.handlers.push(t)}init(){}trigger(t){this.handlers.forEach((r)=>r(t))}}var rt=".eb-extensions{flex-direction:column;gap:.5em;height:100%;display:flex;overflow:auto}.eb-extensions__content{background-color:var(--c-bg-subtle);border-radius:5px;height:100%}.evenbetter-table-actions{align-items:center;gap:var(--c-space-2);display:flex}.evenbetter-table-actions__select{width:fit-content}.c-evenbetter_button{font-size:var(--c-font-size-100);font-weight:var(--c-font-weight-500);--button-focus-color:white;font-size:var(--c-font-size-100);font-weight:var(--c-font-weight-500)}[data-outline=true][data-variant=secondary] .c-evenbetter_button__input{color:var(--c-fg-secondary);border:var(--c-border-width-2)solid var(--c-border-secondary);background-color:#0000}.c-evenbetter_button__input:active{background-color:var(--c-yellow-300)!important;color:var(--c-gray-900)!important}[data-block=true] .c-button,[data-block=true] .c-evenbetter_button__input{width:100%}[data-variant=secondary] .c-evenbetter_button__input{background-color:var(--c-bg-secondary);color:var(--c-fg-onEmphasis)}[data-size=small] .c-evenbetter_button__input{padding:var(--c-space-0)var(--c-space-2);min-height:var(--c-space-8)}.c-evenbetter_button__input{font-size:inherit;border-radius:var(--c-border-radius-1);cursor:pointer;color:var(--c-fg-secondary);border:0;border:var(--c-border-width-2)solid var(--c-border-secondary);font-size:inherit;border-radius:var(--c-border-radius-1);cursor:pointer;background-color:#0000;border:0;align-items:center;width:100%;display:flex}.c-evenbetter_button__label{text-overflow:ellipsis;white-space:nowrap;flex:1;justify-content:center;display:inline-flex;overflow:hidden}.c-evenbetter_button__input--uninstall{border-color:var(--c-fg-danger)!important}.c-evenbetter_button__label--uninstall{color:var(--c-fg-danger)!important}.c-evenbetter_button__input--uninstall:active{background-color:var(--c-fg-danger)!important}.c-evenbetter_button__input--uninstall:active .c-evenbetter_button__label--uninstall{color:var(--c-bg-subtle)!important}.c-evenbetter_button__input--update{border-color:var(--c-bg-info)!important}.c-evenbetter_button__label--update{color:var(--c-bg-info)!important}.c-evenbetter_button__input--update:active{background-color:var(--c-bg-info)!important}.c-evenbetter_button__input--update:active .c-evenbetter_button__label--update{color:var(--c-bg-subtle)!important}.eb-extensions__import-warning{color:var(--c-fg-danger);margin-bottom:.25em}.eb-extensions__import{margin-top:1em}.eb-extensions__modal *{white-space:normal!important}.eb-extensions__modal{flex-direction:column;gap:1em;display:flex}.eb-extensions__modal-description{color:var(--c-fg-subtle);font-size:1rem;font-weight:300}.eb-extensions__modal-key{color:var(--c-fg-default);font-size:16px;font-weight:600}.eb-extensions__modal-value{font-weight:300}.c-content[data-page^=\"#/extensions/\"]{min-width:900px;overflow:auto}.c-content[data-page=\"#/extensions/settings\"] .eb-extensions__content{padding:1em}.eb-extensions__library{height:100%}.eb-extensions__setting-label b{color:#fff}";var At=function(){if(!localStorage.getItem("eb-show-notifications"))localStorage.setItem("eb-show-notifications","true");if(!localStorage.getItem("eb-show-update-notification"))localStorage.setItem("eb-show-update-notification","true")},Ht=function(){l.eventManager.on("onSettingsTabOpen",(t)=>{switch(t){case"developer":const r=document.querySelector(".c-custom-js__footer");r.removeEventListener("click",A),r.addEventListener("click",A)}}),l.eventManager.on("onPageOpen",(t)=>{const r=Array.from(document.querySelectorAll(".c-sidebar-item")).filter((a)=>a.textContent=="Extensions");if(r.length==0)return;r[0].setAttribute("data-is-active",t.newUrl.startsWith("#/extensions/")?"true":"false")})},Rt=function(){m.navigation.addPage("/extensions/all",{body:k(h.ALL)}),m.navigation.addPage("/extensions/installed",{body:k(h.INSTALLED)}),m.navigation.addPage("/extensions/custom",{body:k(h.CUSTOM)}),m.navigation.addPage("/extensions/settings",{body:k(h.SETTINGS)})},St=function(){m.sidebar.registerItem("Extensions","/extensions/all",{icon:"fas fa-puzzle-piece",group:"EvenBetter"})},zt=function(){m.commands.register("eb:openExtensionsPage",{name:"Go to Extensions",group:"EvenBetter: Navigation",run:()=>{m.navigation.goTo("/extensions/all")}}),m.commandPalette.register("eb:openExtensionsPage")};async function Nt(){v({id:"eb-extensions",cssText:rt.toString()}),At();const t=new U;if(l.eventManager.registerEvent("onExtensionLoad",t),Rt(),zt(),St(),Ht(),localStorage.getItem("eb-message-onload"))l.modal.openModal({title:"EvenBetter Extensions",content:b(localStorage.getItem("eb-message-onload"))}),localStorage.removeItem("eb-message-onload");if(location.hash=="#/settings/developer"){const e=document.querySelector(".c-custom-js__footer");e.removeEventListener("click",A),e.addEventListener("click",A)}if((await p.initExtensions()).forEach((e)=>{const a=p.getInstalledExtension(e.id);if(!a)return;if(a.installedVersion!=e.latestVersion){if(console.log(`New version available for extension ${e.id}: ${e.latestVersion}`),localStorage.getItem("eb-auto-update")==="true")localStorage.setItem("eb-message-onload",`Auto-updated extension ${e.name} to version ${e.latestVersion}. If you want to disable auto-updates, go to Extensions -> Settings.`),p.updateExtension(a.extensionID);if(localStorage.getItem("eb-show-notifications")==="true")l.modal.openModal({title:"New extension version available",content:`New version available for extension <b style='color:var(--c-fg-default);'>${e.name}</b> (<span style='color:var(--c-bg-danger);'>${a.installedVersion}</span> -> <span style='color:var(--c-bg-success);'>${e.latestVersion}</span>).`})}}),l.eventManager.triggerEvent("onExtensionLoad"),localStorage.getItem("previousPage")){const e=localStorage.getItem("previousPage").split("#")[1];console.log("Restoring previous path: "+e),m.navigation.goTo(e),localStorage.removeItem("previousPage")}}var A=()=>{setTimeout(()=>{location.reload()},250)};p.loadInstalledExtensions();p.getInstalledExtensions().forEach((t)=>{console.log("Running extension: "+t.extensionID),p.runExtension(t.extensionID)});l.eventManager.on("onCaidoLoad",()=>{Nt()});
