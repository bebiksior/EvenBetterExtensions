var F = Object.defineProperty;
var V = (r, e, t) => e in r ? F(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var E = (r, e, t) => (V(r, typeof e != "symbol" ? e + "" : e, t), t);
let z = class {
  log(e, t) {
  }
  info(e) {
    this.log("info", e);
  }
  error(e) {
    this.log("error", e);
  }
  warn(e) {
    this.log("warn", e);
  }
};
const k = new z();
class W {
  constructor() {
    this.events = {};
  }
  registerEvent(e, t) {
    this.events[e] = t;
  }
  triggerEvent(e, t) {
    const n = this.events[e];
    n ? n.trigger(t) : console.error(`Event "${e}" not registered.`);
  }
  on(e, t) {
    const n = this.events[e];
    n ? n.addHandler(t) : console.error(`Event "${e}" not registered.`);
  }
  initEvents() {
    k.info(`Initializing ${Object.keys(this.events).length} custom events`);
    for (const e in this.events)
      this.events[e].init();
  }
}
class G {
  constructor() {
    this.handlers = [];
  }
  addHandler(e) {
    this.handlers.push(e);
  }
  init() {
    const e = setInterval(() => {
      j() && (clearInterval(e), this.trigger());
    }, 25);
  }
  trigger() {
    this.handlers.forEach((e) => e());
  }
}
const j = () => document.querySelector(".c-content") !== null;
class X {
  constructor() {
    this.handlers = [];
  }
  addHandler(e) {
    this.handlers.push(e);
  }
  init() {
    new MutationObserver((t) => {
      for (let n of t)
        n.type === "childList" && n.addedNodes.forEach((a) => {
          const s = a;
          a.nodeType === 1 && s.classList.contains("p-contextmenu") && this.trigger(s);
        });
    }).observe(document.body, { childList: !0, subtree: !0 });
  }
  trigger(e) {
    this.handlers.forEach((t) => t(e));
  }
}
class K {
  constructor(e) {
    this.handlers = [], this.eventManager = e;
  }
  addHandler(e) {
    this.handlers.push(e);
  }
  init() {
    let e = window.location.href;
    const t = new MutationObserver(() => {
      var a;
      if (window.location.href !== e) {
        let s = new URL(window.location.href).hash, i = new URL(e).hash;
        e = window.location.href, s.includes("?custom-path=") && (s = s.split("?custom-path=")[1]), i.includes("?custom-path=") && (i = i.split("?custom-path=")[1]), (a = document.querySelector(".c-content")) == null || a.setAttribute("data-page", s), this.trigger({
          newUrl: s,
          oldUrl: i
        });
      }
    }), n = { subtree: !0, childList: !0 };
    t.observe(document, n);
  }
  trigger(e) {
    k.info(`Page updated: ${e.oldUrl} -> ${e.newUrl}`), e.newUrl.startsWith("#/settings/") && this.eventManager.triggerEvent(
      "onSettingsTabOpen",
      e.newUrl.replace("#/settings/", "")
    ), this.handlers.forEach((t) => t(e));
  }
}
class Z {
  constructor() {
    this.handlers = [];
  }
  addHandler(e) {
    this.handlers.push(e);
  }
  init() {
  }
  trigger(e) {
    k.info(`Settings tab opened: ${e}`), this.handlers.forEach((t) => t(e));
  }
}
let x = null;
const J = (r) => {
  x = r;
}, L = () => {
  if (!x)
    throw new Error("PluginData is not set yet!");
  return x;
}, B = async (r, e) => {
  const t = L();
  localStorage.setItem(`ebapi:settings:${t.manifestID}:${r}`, e);
}, w = (r) => {
  const e = L();
  return localStorage.getItem(`ebapi:settings:${e.manifestID}:${r}`);
}, Q = () => localStorage.getItem(`ebapi:${L().manifestID}:welcomeToast`), N = () => {
  localStorage.removeItem(`ebapi:${L().manifestID}:welcomeToast`);
}, Y = async (r) => {
  localStorage.setItem(`ebapi:${L().manifestID}:welcomeToast`, JSON.stringify(r));
}, ee = `
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
}`, te = (r, e, t) => {
  const n = document.createElement("div");
  n.classList.add("v-toast"), n.classList.add(`v-toast--${t}`);
  const a = document.createElement("div");
  a.setAttribute("role", "alert"), a.classList.add("v-toast__item"), a.classList.add(`v-toast__item--${e}`), a.classList.add(`v-toast__item--${t}`), n.appendChild(a);
  const s = document.createElement("div");
  s.classList.add("v-toast__icon"), a.appendChild(s);
  const i = document.createElement("p");
  return i.classList.add("v-toast__text"), i.textContent = r, a.appendChild(i), n.classList.add("v-toast--fade-in"), n;
}, ne = (r) => {
  let { message: e, type: t, position: n, duration: a } = r;
  n || (n = "bottom"), t || (t = "success"), a || (a = 3e3);
  let s = document.querySelector(
    `.v-toast--${n}`
  );
  s || (s = document.createElement("div"), s.classList.add("v-toast"), s.classList.add(`v-toast--${n}`), document.body.appendChild(s));
  const i = te(e, t, n);
  s.appendChild(i), setTimeout(() => {
    i.classList.add("v-toast--fade-out"), setTimeout(() => {
      i.remove();
    }, 150);
  }, a - 150);
};
class ae {
  constructor(e) {
    this.showToast = (t) => {
      ne(t);
    }, this.setWelcomeMessage = (t) => {
      Y(t);
    }, this.evenBetterAPI = e, this.evenBetterAPI.helpers.loadCSS({ id: "eb-toast", cssText: ee });
  }
}
class se {
  constructor() {
    this.handlers = [], this.commandObserver = null, this.selectedCommand = null;
  }
  addHandler(e) {
    this.handlers.push(e);
  }
  init() {
    const e = (a) => {
      this.commandObserver = new MutationObserver((s) => {
        const i = t();
        i !== this.selectedCommand && (this.selectedCommand = i);
      }), this.commandObserver.observe(a, {
        attributes: !0,
        subtree: !0
      });
    }, t = () => document.querySelector("[command-item][aria-selected='true']");
    new MutationObserver((a) => {
      for (let s of a)
        s.type === "childList" && (s.addedNodes.forEach((i) => {
          const o = i;
          i.nodeType === 1 && o.hasAttribute("command-theme") && e(o);
        }), s.removedNodes.forEach((i) => {
          const o = i;
          if (i.nodeType === 1 && o.hasAttribute("command-theme")) {
            if (!this.selectedCommand)
              return;
            const l = this.selectedCommand.getAttribute("data-value");
            l && this.trigger(l), this.commandObserver && (this.commandObserver.disconnect(), this.commandObserver = null);
          }
        }));
    }).observe(document.body, { childList: !0, subtree: !0 });
  }
  trigger(e) {
    this.handlers.forEach((t) => t(e));
  }
}
const ie = "2.0.0";
let P = null;
const re = (r) => {
  P = r;
}, oe = () => {
  if (!P)
    throw new Error("CaidoAPI is not set yet!");
  return P;
}, le = `
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
`, ce = (r) => {
  r.helpers.loadCSS({ id: "checkbox", cssText: le });
  const e = document.createElement("div");
  e.classList.add("eb-button__label");
  const t = document.createElement("div");
  t.classList.add("eb-checkbox");
  const n = document.createElement("div");
  n.classList.add("formkit-outer"), n.dataset.family = "box", n.dataset.type = "checkbox", n.dataset.complete = "true";
  const a = document.createElement("label");
  a.classList.add("formkit-wrapper", "eb-checkbox__wrapper"), a.dataset.checked = "true";
  const s = document.createElement("span");
  s.classList.add("formkit-inner", "eb-checkbox__inner");
  const i = document.createElement("input");
  i.classList.add("formkit-input", "eb-checkbox__input"), i.type = "checkbox";
  const o = document.createElement("span");
  return o.classList.add("formkit-decorator"), o.setAttribute("aria-hidden", "true"), s.appendChild(i), s.appendChild(o), a.appendChild(s), n.appendChild(a), t.appendChild(n), e.appendChild(t), e;
}, de = `
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
`;
function ue(r, e, t, n = !1, a) {
  r.helpers.loadCSS({ id: "eb-text-input", cssText: de });
  const s = document.createElement("div");
  s.classList.add("formkit-outer", "c-text-input__outer"), s.setAttribute("style", `width: ${e};`);
  const i = document.createElement("div");
  i.classList.add("formkit-wrapper"), i.style.display = "flex";
  const o = document.createElement("div");
  o.classList.add("formkit-inner", "eb-text-input__inner");
  const l = document.createElement("div");
  l.classList.add("c-text-input__prefix"), l.setAttribute(
    "style",
    "align-self: center; color: var(--c-fg-subtle);"
  );
  const d = document.createElement("i");
  d.classList.add("c-icon", "fas"), a && d.classList.add(a);
  const c = document.createElement("input");
  if (t && t != "" && c.setAttribute("placeholder", t), c.setAttribute("spellcheck", "false"), c.classList.add("formkit-input", "c-text-input__input"), c.setAttribute("type", "text"), c.setAttribute(
    "style",
    "width: 100%; background: transparent; border: 0; outline: 0; color: inherit; box-sizing: border-box; line-height: inherit;"
  ), a && l.appendChild(d), o.appendChild(l), o.appendChild(c), n) {
    const u = document.createElement("button");
    u.innerHTML = '<i class="fas fa-copy"></i>', u.setAttribute(
      "style",
      "background: transparent; border: 0; outline: 0; cursor: pointer; padding: 0; margin-left: 10px;"
    ), u.addEventListener("click", () => {
      navigator.clipboard.writeText(c.value), r.toast.showToast({
        message: "Copied to clipboard",
        position: "bottom",
        type: "info",
        duration: 1e3
      });
    }), o.appendChild(u);
  }
  return i.appendChild(o), s.appendChild(i), s;
}
function pe(r, e) {
  const t = document.createElement("div");
  t.classList.add("c-menu-bar"), t.style.width = "100%";
  const n = document.createElement("div");
  n.classList.add("p-menubar", "p-component"), n.setAttribute("data-pc-name", "menubar"), n.setAttribute("data-pc-section", "root");
  const a = document.createElement("div");
  a.classList.add("p-menubar-start"), a.setAttribute("data-pc-section", "start");
  const s = document.createElement("div");
  s.classList.add("c-settings__title"), s.style.padding = "0 var(--c-space-4)", s.style.fontWeight = "700", s.textContent = e.title, a.appendChild(s);
  const i = document.createElement("ul");
  i.classList.add("p-menubar-root-list");
  const o = e.items.map((c) => c.url);
  e.items.forEach((c) => {
    const u = document.createElement("li");
    u.classList.add("p-menuitem"), u.setAttribute("role", "menuitem"), u.style.margin = "0";
    const v = document.createElement("div");
    v.classList.add("p-menuitem-content"), v.setAttribute("data-pc-section", "content");
    const g = document.createElement("div");
    g.classList.add("c-settings__item"), g.setAttribute("data-is-active", "true"), g.addEventListener("click", () => {
      n.classList.remove("p-menubar-mobile-active");
    });
    const p = document.createElement("a");
    p.setAttribute("href", c.url), p.setAttribute("draggable", "false"), p.draggable = !1, p.classList.add("p-menuitem-link"), c.url === location.hash && (p.style.backgroundColor = "rgba(255,255,255,.04)", p.style.borderRadius = "var(--c-border-radius-2)");
    let b = null;
    if (r.eventManager.on("onPageOpen", (C) => {
      if (c.sidebarItemName)
        if (o.includes(C.newUrl)) {
          const M = document.querySelectorAll(".c-sidebar-item");
          if (M) {
            const T = Array.from(M).filter(
              (q) => q.textContent === c.sidebarItemName
            );
            T.length >= 1 && (b = T[0], b.setAttribute("data-is-selected", "true"), b.setAttribute("data-is-active", "true"));
          }
        } else
          b && (b.removeAttribute("data-is-selected"), b.removeAttribute("data-is-active"), b = null);
      C.newUrl === c.url ? (c.onOpen && c.onOpen(), p.style.backgroundColor = "rgba(255,255,255,.04)", p.style.borderRadius = "var(--c-border-radius-2)") : (p.style.backgroundColor = "", p.style.borderRadius = "");
    }), c.icon) {
      const C = document.createElement("i");
      C.classList.add("c-icon", "fas", c.icon), C.style.marginRight = "var(--c-space-2)", p.appendChild(C);
    }
    const S = document.createElement("span");
    S.textContent = c.title, p.appendChild(S), g.appendChild(p), v.appendChild(g), u.appendChild(v), i.appendChild(u);
  });
  const l = document.createElement("a");
  l.setAttribute("role", "button"), l.setAttribute("tabindex", "0"), l.classList.add("p-menubar-button"), l.setAttribute("aria-haspopup", "true"), l.setAttribute("aria-expanded", "false"), l.setAttribute("aria-label", "Navigation"), l.setAttribute("data-pc-section", "button"), l.setAttribute("aria-controls", "pv_id_3"), l.innerHTML = '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="p-icon" aria-hidden="true" data-pc-section="menubuttonicon"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.3226 3.6129H0.677419C0.497757 3.6129 0.325452 3.54152 0.198411 3.41448C0.0713707 3.28744 0 3.11514 0 2.93548C0 2.75581 0.0713707 2.58351 0.198411 2.45647C0.325452 2.32943 0.497757 2.25806 0.677419 2.25806H13.3226C13.5022 2.25806 13.6745 2.32943 13.8016 2.45647C13.9286 2.58351 14 2.75581 14 2.93548C14 3.11514 13.9286 3.28744 13.8016 3.41448C13.6745 3.54152 13.5022 3.6129 13.3226 3.6129ZM13.3226 7.67741H0.677419C0.497757 7.67741 0.325452 7.60604 0.198411 7.479C0.0713707 7.35196 0 7.17965 0 6.99999C0 6.82033 0.0713707 6.64802 0.198411 6.52098C0.325452 6.39394 0.497757 6.32257 0.677419 6.32257H13.3226C13.5022 6.32257 13.6745 6.39394 13.8016 6.52098C13.9286 6.64802 14 6.82033 14 6.99999C14 7.17965 13.9286 7.35196 13.8016 7.479C13.6745 7.60604 13.5022 7.67741 13.3226 7.67741ZM0.677419 11.7419H13.3226C13.5022 11.7419 13.6745 11.6706 13.8016 11.5435C13.9286 11.4165 14 11.2442 14 11.0645C14 10.8848 13.9286 10.7125 13.8016 10.5855C13.6745 10.4585 13.5022 10.3871 13.3226 10.3871H0.677419C0.497757 10.3871 0.325452 10.4585 0.198411 10.5855C0.0713707 10.7125 0 10.8848 0 11.0645C0 11.2442 0.0713707 11.4165 0.198411 11.5435C0.325452 11.6706 0.497757 11.7419 0.677419 11.7419Z" fill="currentColor"></path></svg>', l.addEventListener("click", () => {
    n.classList.toggle("p-menubar-mobile-active"), i.style.zIndex = n.classList.contains("p-menubar-mobile-active") ? "1200" : "";
  }), window.addEventListener("resize", () => {
    window.innerWidth < 955 ? n.classList.add("p-menubar-mobile") : (n.classList.remove("p-menubar-mobile"), n.classList.remove("p-menubar-mobile-active"));
  }), window.dispatchEvent(new Event("resize"));
  const d = document.createElement("div");
  return d.classList.add("p-menubar-end"), d.setAttribute("data-pc-section", "end"), d.style.display = "flex", d.style.gap = ".5em", d.style.alignItems = "center", e.customButtons && e.customButtons.forEach((c) => {
    d.appendChild(c);
  }), n.appendChild(a), n.appendChild(l), n.appendChild(i), n.appendChild(d), t.appendChild(n), t;
}
const me = `
.eb-select {
    background-image: url(data:image/svg+xml;charset=US-ASCII,%3Csvg%20viewBox%3D%220%20-4.5%2020%2020%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20fill%3D%22%23ffffff%22%3E%3Cg%20id%3D%22SVGRepo_bgCarrier%22%20stroke-width%3D%220%22%3E%3C%2Fg%3E%3Cg%20id%3D%22SVGRepo_tracerCarrier%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fg%3E%3Cg%20id%3D%22SVGRepo_iconCarrier%22%3E%20%3Ctitle%3Earrow_down%20%5B%23ffffff%5D%3C%2Ftitle%3E%20%3Cdesc%3ECreated%20with%20Sketch.%3C%2Fdesc%3E%20%3Cdefs%3E%20%3C%2Fdefs%3E%20%3Cg%20id%3D%22Page-1%22%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%20%3Cg%20id%3D%22Dribbble-Light-Preview%22%20transform%3D%22translate%28-220.000000%2C%20-6684.000000%29%22%20fill%3D%22%23ffffff%22%3E%20%3Cg%20id%3D%22icons%22%20transform%3D%22translate%2856.000000%2C%20160.000000%29%22%3E%20%3Cpath%20d%3D%22M164.292308%2C6524.36583%20L164.292308%2C6524.36583%20C163.902564%2C6524.77071%20163.902564%2C6525.42619%20164.292308%2C6525.83004%20L172.555873%2C6534.39267%20C173.33636%2C6535.20244%20174.602528%2C6535.20244%20175.383014%2C6534.39267%20L183.70754%2C6525.76791%20C184.093286%2C6525.36716%20184.098283%2C6524.71997%20183.717533%2C6524.31405%20C183.328789%2C6523.89985%20182.68821%2C6523.89467%20182.29347%2C6524.30266%20L174.676479%2C6532.19636%20C174.285736%2C6532.60124%20173.653152%2C6532.60124%20173.262409%2C6532.19636%20L165.705379%2C6524.36583%20C165.315635%2C6523.96094%20164.683051%2C6523.96094%20164.292308%2C6524.36583%22%20id%3D%22arrow_down-%5B%23ffffff%5D%22%3E%20%3C%2Fpath%3E%20%3C%2Fg%3E%20%3C%2Fg%3E%20%3C%2Fg%3E%20%3C%2Fg%3E%3C%2Fsvg%3E);
    background-repeat: no-repeat;
    background-position: right 0.7rem top 50%;
    background-size: 0.65rem auto;
    width: 100%;
    height: var(--c-space-10);
    border-radius: var(--c-border-radius-2) 0px 0px var(--c-border-radius-2) !important;
    border: var(--c-border-width-1) solid var(--c-border-default);
    background-color: var(--c-bg-default);
    color: var(--c-fg-default);
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    padding: 0 0.5em;
}
`;
function he(r, e) {
  r.helpers.loadCSS({ id: "eb-select", cssText: me });
  const t = document.createElement("select");
  return t.classList.add("eb-select"), e.forEach((n) => {
    const a = document.createElement("option");
    a.value = n.value, a.textContent = n.label, t.appendChild(a);
  }), t;
}
function ge(r, ...e) {
  return r.reduce((t, n, a) => {
    let s = n + (e[a] !== void 0 ? e[a] : "");
    return t + s.replace(/\s+/g, " ").trim();
  }, "");
}
const be = () => ge`
      <table role="table" class="p-datatable-table" data-pc-section="table">
        <thead class="p-datatable-thead" role="rowgroup" data-pc-section="thead" style="position: sticky;">
          <tr role="row" data-pc-section="headerrow">
          </tr>
        </thead>
        <tbody class="p-datatable-tbody" role="rowgroup" data-pc-section="tbody">
        </tbody>
      </table>
    `.trim(), fe = (r, e) => new _(e);
class _ {
  constructor(e) {
    this.config = e, this.rows = [], this.tableElement = document.createElement("div"), this.tableElement.className = "p-datatable p-datatable-responsive-scroll p-datatable-striped p-datatable-sm", this.tableElement.style.overflow = "auto", this.tableElement.style.width = "100%", this.tableElement.innerHTML = be(), this.tableBody = this.tableElement.querySelector(
      ".p-datatable-tbody"
    );
    const t = this.tableElement.querySelector("table");
    t.style.width = "100%", t.style.tableLayout = "fixed";
    const n = this.tableElement.querySelector(
      "[data-pc-section=headerrow]"
    );
    if (!n)
      throw new Error("Column row not found");
    this.config.columns.forEach((a) => {
      const s = document.createElement("th");
      s.className = "p-column-header", s.setAttribute("role", "columnheader"), s.setAttribute("data-pc-section", "headercell"), s.setAttribute("data-p-resizable-column", "false"), s.setAttribute("data-p-filter-column", "false"), s.setAttribute("data-p-reorderable-column", "false"), s.setAttribute("first", "0");
      const i = document.createElement("div");
      i.className = "p-column-header-content", i.setAttribute("data-pc-section", "headercontent");
      const o = document.createElement("span");
      o.className = "p-column-title", o.setAttribute("data-pc-section", "headertitle"), o.textContent = a.name, i.appendChild(o), s.appendChild(i), a.width && (s.style.width = a.width), n.appendChild(s);
    });
  }
  filterRows(e) {
    let t = 0;
    this.rows.forEach((n) => {
      const a = n.htmlElement, s = n.cells;
      let i = !1;
      s.forEach((o) => {
        var l;
        typeof o.value == "string" ? o.value.toLowerCase().includes(e.toLowerCase()) && (i = !0) : (l = o.value.textContent) != null && l.toLowerCase().includes(e.toLowerCase()) && (i = !0);
      }), i ? (a.style.removeProperty("display"), a.classList.remove("p-row-even", "p-row-odd"), a.classList.add(
        t % 2 === 0 ? "p-row-even" : "p-row-odd"
      ), t++) : (a.style.display = "none", a.removeAttribute("data-is-even"));
    });
  }
  clearRows() {
    this.rows.forEach((e) => {
      e.htmlElement.remove();
    }), this.rows = [];
  }
  addRow(e, t) {
    const n = (this.tableBody.children.length + 1) % 2 !== 0, a = document.createElement("tr");
    a.className = `p-row-${n ? "even" : "odd"}`, a.setAttribute("tabindex", "-1"), a.setAttribute("role", "row"), a.setAttribute("data-pc-section", "bodyrow"), a.setAttribute("data-p-index", "0"), a.setAttribute("data-p-selectable-row", "false"), a.setAttribute("draggable", "false"), e.forEach((s) => {
      var l;
      const i = (l = this.config.columns.find(
        (d) => d.name === s.columnName
      )) == null ? void 0 : l.width, o = document.createElement("td");
      o.setAttribute("role", "cell"), o.style.whiteSpace = "nowrap", o.style.overflow = "hidden", o.setAttribute("data-pc-section", "bodycell"), o.setAttribute("data-pc-name", "bodycell"), o.setAttribute("data-p-selection-column", "false"), o.setAttribute("data-p-cell-editing", "false"), i && (o.style.width = i), typeof s.value == "string" ? o.textContent = s.value : o.appendChild(s.value), a.appendChild(o);
    }), t && a.addEventListener("click", t), this.tableBody.appendChild(a), this.rows.push({
      htmlElement: a,
      cells: e
    });
  }
  getHTMLElement() {
    return this.tableElement;
  }
  static createTable(e) {
    return new _(e);
  }
}
class ve {
  constructor(e) {
    this.apiInstance = e;
  }
  createTable(e) {
    return fe(this.apiInstance, e);
  }
  createNavigationBar(e) {
    return pe(this.apiInstance, e);
  }
  createCheckbox() {
    return ce(this.apiInstance);
  }
  createTextInput(e, t, n = !1, a) {
    return ue(this.apiInstance, e, t, n, a);
  }
  createSelectInput(e) {
    return he(this.apiInstance, e);
  }
}
let H = [];
const we = (r, e) => {
  var c;
  const t = document.createElement("div");
  t.classList.add("custom");
  const n = document.createElement("div");
  n.setAttribute("command-root", ""), t.appendChild(n);
  const a = document.createElement("div");
  a.setAttribute("command-dialog", ""), n.appendChild(a);
  const s = document.createElement("div");
  s.setAttribute("command-dialog-mask", ""), s.style.display = "flex", s.style.justifyContent = "center", s.style.alignItems = "center", s.addEventListener("click", () => {
    t.remove();
  }), a.appendChild(s);
  const i = document.createElement("div");
  i.setAttribute("command-dialog-wrapper", ""), i.style.minWidth = "600px", i.style.padding = "1em", i.style.margin = "0", s.appendChild(i);
  const o = document.createElement("div");
  o.setAttribute("command-dialog-body", ""), o.style.display = "flex", o.style.gap = "0.5em", i.addEventListener("click", (u) => {
    u.stopPropagation();
  }), i.appendChild(o);
  const l = r.components.createTextInput(
    "100%",
    e.promptPlaceholder
  );
  l.style.zIndex = "100", l.addEventListener("click", (u) => {
    u.stopPropagation();
  }), o.appendChild(l);
  const d = oe().ui.button({
    label: "Submit",
    variant: "primary"
  });
  d.addEventListener("click", () => {
    const u = l.querySelector("input");
    e.onPrompt(u.value), t.remove();
  }), o.appendChild(d), document.body.appendChild(t), (c = l.querySelector("input")) == null || c.focus(), l.addEventListener("keydown", (u) => {
    u.key === "Enter" && d.click(), u.key === "Escape" && t.remove();
  });
}, Ee = (r, e, t, n) => {
  H.push({
    commandName: e,
    promptPlaceholder: t,
    onPrompt: n
  });
};
class Ce {
  constructor(e) {
    this.apiInstance = e, this.apiInstance.eventManager.on("onCommandRun", (t) => {
      const n = H.find(
        (a) => a.commandName === t
      );
      n && we(this.apiInstance, n);
    });
  }
  createPromptCommand(e, t, n) {
    Ee(this.apiInstance, e, t, n);
  }
}
const ye = `
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
`, Le = ({
  modalAPI: r,
  title: e,
  content: t
}) => {
  const n = document.createElement("div");
  n.classList.add("evenbetter-modal");
  const a = document.createElement("div");
  a.classList.add("evenbetter-modal__content");
  const s = document.createElement("div");
  s.classList.add("evenbetter-modal__content-header");
  const i = document.createElement("h2");
  i.classList.add("evenbetter-modal__content-header-title"), i.textContent = e, s.appendChild(i);
  const o = document.createElement("div");
  o.classList.add("evenbetter-modal__content-body");
  const l = document.createElement("p");
  l.classList.add("evenbetter-modal__content-body-text"), typeof t == "string" ? l.innerHTML = t : t instanceof HTMLElement && l.appendChild(t);
  const d = document.createElement("button");
  return d.classList.add("evenbetter-modal__content-body-close"), d.textContent = "Close", d.addEventListener("click", r.closeModal), o.appendChild(l), o.appendChild(d), a.appendChild(s), a.appendChild(o), n.appendChild(a), n.setAttribute("data-modal-title", e), n;
}, xe = () => document.querySelector(".evenbetter-modal") !== null;
class Pe {
  constructor(e) {
    this.evenBetterAPI = e, this.evenBetterAPI.helpers.loadCSS({
      id: "evenbetterapi-modal",
      cssText: ye.toString()
    }), document.addEventListener("keydown", (t) => {
      t.key === "Escape" && this.closeModal();
    });
  }
  openModal({
    title: e,
    content: t
  }) {
    xe() && this.closeModal();
    const n = Le({ modalAPI: this, title: e, content: t });
    document.body.appendChild(n);
  }
  closeModal() {
    const e = document.querySelector(".evenbetter-modal");
    e == null || e.remove();
  }
}
const R = () => typeof __TAURI_INVOKE__ < "u", D = async (r, e) => await __TAURI_INVOKE__(r, e), U = /* @__PURE__ */ new Set();
class Ie {
  constructor() {
    this.downloadFile = async (e, t) => {
      if (R())
        return D("download", { filename: e, data: t });
      {
        const n = new Blob([t], { type: "text/plain" }), a = URL.createObjectURL(n), s = document.createElement("a");
        s.href = a, s.download = e, s.click();
      }
    }, this.openInBrowser = (e) => {
      R() ? D("open_in_browser", { url: e }) : window.open(e, "_blank");
    }, this.loadCSS = ({ id: e, cssText: t }) => {
      if (U.has(e) || document.querySelector(`#${e}`))
        return;
      const n = document.createElement("style");
      n.id = e, n.textContent = t, n.classList.add("evenbetterapi-css-module"), document.head.appendChild(n), U.add(e);
    };
  }
}
var f = /* @__PURE__ */ ((r) => (r.TEXT = "text", r.NUMBER = "number", r.CHECKBOX = "checkbox", r.SELECT = "select", r))(f || {});
let Ae = class {
  constructor(e, t) {
    this.evenBetterAPI = e, this.title = t.title, this.description = t.description, this.inputGroups = t.inputGroups, this.initDefaults();
  }
  async initDefaults() {
    for (const [e, t] of this.inputGroups.entries())
      for (const [n, a] of t.inputs.entries())
        a.defaultValue && !w(a.id) && await B(a.id, a.defaultValue);
  }
  className(e) {
    return `eb-settings-page__${e}`;
  }
  render() {
    const e = document.createElement("div");
    e.classList.add(this.className("container"));
    const t = document.createElement("div");
    t.classList.add(this.className("header"));
    const n = document.createElement("h1");
    n.textContent = this.title, n.classList.add(this.className("title")), t.appendChild(n);
    const a = document.createElement("p");
    a.textContent = this.description, a.classList.add(this.className("description")), t.appendChild(a), e.appendChild(t);
    const s = document.createElement("div");
    return s.classList.add(this.className("groups")), this.inputGroups.forEach((i) => {
      const o = document.createElement("div");
      o.classList.add(this.className("group")), i.width && (i.width.toLowerCase() == "fill-space" ? o.style.flex = "1" : o.style.width = i.width);
      const l = document.createElement("div");
      l.classList.add(this.className("group-header"));
      const d = document.createElement("div");
      d.textContent = i.groupName, d.classList.add(this.className("group-name"));
      const c = document.createElement("p");
      c.textContent = i.groupDescription, c.classList.add(this.className("group-description")), l.appendChild(d), l.appendChild(c), o.appendChild(l);
      const u = document.createElement("div");
      u.classList.add(this.className("group-inputs")), i.inputs.forEach((v) => {
        if (i.separateWithLine) {
          const p = document.createElement("hr");
          p.classList.add(this.className("line")), u.appendChild(p);
        }
        const g = this.createInputElement(v, (p) => {
          B(v.id, p);
        });
        u.appendChild(g);
      }), o.appendChild(u), s.appendChild(o);
    }), e.appendChild(s), e;
  }
  createInputElement(e, t) {
    const n = document.createElement("div");
    n.classList.add(this.className("input-wrapper")), e.type == f.CHECKBOX && n.classList.add(this.className("checkbox-wrapper"));
    const a = document.createElement("label");
    e.labelAsHTML ? a.innerHTML = e.label : a.textContent = e.label, a.setAttribute("for", e.id), n.appendChild(a);
    let s;
    switch (e.type) {
      case f.TEXT:
        s = this.evenBetterAPI.components.createTextInput(
          "100%",
          e.placeholder
        );
        const i = s.querySelector(
          "input"
        ), o = w(e.id);
        o ? i.value = o : i.value = e.defaultValue, t && i.addEventListener("input", (b) => {
          t(i.value);
        });
        break;
      case f.NUMBER:
        s = this.evenBetterAPI.components.createTextInput(
          "100%",
          e.placeholder
        ), s.querySelector("input").type = "number";
        const l = s.querySelector(
          "input"
        ), d = w(e.id);
        d ? l.value = d : l.value = e.defaultValue, t && l.addEventListener("input", (b) => {
          t(l.value);
        });
        break;
      case f.CHECKBOX:
        s = this.evenBetterAPI.components.createCheckbox();
        const c = s.querySelector(
          "input"
        ), u = w(e.id);
        u ? c.checked = u == "true" : c.checked = e.defaultValue == "true", t && c.addEventListener("change", (b) => {
          t(c.checked.toString());
        });
        break;
      case f.SELECT:
        const v = e.options;
        s = this.evenBetterAPI.components.createSelectInput(v);
        const g = s, p = w(e.id);
        p ? g.value = p : g.value = e.defaultValue, t && g.addEventListener("change", (b) => {
          t(g.value);
        });
        break;
      default:
        throw new Error(`Invalid input type: ${e.type}`);
    }
    return n.appendChild(s), n;
  }
};
class ke {
  constructor(e) {
    this.apiInstance = e;
  }
  createSettingsPage(e) {
    return new Ae(this.apiInstance, e);
  }
}
class _e {
  constructor(e, t) {
    re(e), J(t), this.eventManager = new W();
    const n = new G(), a = new Z(), s = new K(this.eventManager), i = new X(), o = new se();
    this.eventManager.registerEvent("onCaidoLoad", n), this.eventManager.registerEvent("onSettingsTabOpen", a), this.eventManager.registerEvent("onPageOpen", s), this.eventManager.registerEvent("onContextMenuOpen", i), this.eventManager.registerEvent("onCommandRun", o), this.eventManager.on("onCaidoLoad", () => {
      this.eventManager.triggerEvent("onPageOpen", {
        newUrl: location.hash,
        oldUrl: ""
      });
      const l = Q();
      if (l) {
        try {
          this.toast.showToast(JSON.parse(l));
        } catch (d) {
          console.error(d), N();
        }
        N();
      }
    }), this.eventManager.initEvents(), this.helpers = new Ie(), this.promptCommands = new Ce(this), this.modal = new Pe(this), this.toast = new ae(this), this.components = new ve(this), this.templates = new ke(this), this.version = ie;
  }
}
let I = null;
const Se = (r) => {
  I = r;
}, h = () => {
  if (!I)
    throw new Error("EvenBetterAPI is not set yet!");
  return I;
};
let A = null;
const Me = (r) => {
  A = r;
}, m = () => {
  if (!A)
    throw new Error("CaidoAPI is not set yet!");
  return A;
}, Te = async (r) => m().graphql.installPluginPackage({
  input: {
    source: {
      file: r
    }
  }
}), Be = () => {
  h().eventManager.on("onPageOpen", (r) => {
    r.newUrl === "#/plugins" && Ne();
  });
}, Ne = () => {
  const r = document.querySelector(
    ".c-table-header__title"
  );
  if (!r || document.getElementById("plugins-navigation-bar"))
    return;
  const e = r.parentElement;
  if (e) {
    e.style.padding = "0", e.style.display = "block";
    const a = e.parentElement;
    a && (a.style.padding = "0");
  }
  const t = document.querySelector(
    ".c-table-header__actions .c-button"
  ), n = h().components.createNavigationBar({
    title: "Plugins",
    items: [
      {
        title: "Installed",
        url: "#/plugins",
        icon: "fa-plug",
        sidebarItemName: "Plugins"
      },
      {
        title: "Library",
        url: "#/plugins/library",
        icon: "fa-download",
        sidebarItemName: "Plugins"
      },
      {
        title: "Settings",
        url: "#/plugins/settings",
        icon: "fa-cog",
        sidebarItemName: "Plugins"
      }
    ],
    customButtons: [t]
  });
  n.id = "plugins-navigation-bar", r.textContent = "", r.appendChild(n);
};
class Re {
  constructor(e) {
    E(this, "serviceName");
    this.serviceName = e;
  }
  formatMessage(e, t) {
    return `${(/* @__PURE__ */ new Date()).toString()} [${this.serviceName}] [${e}] ${t}`;
  }
  info(e) {
    console.log(this.formatMessage("INFO", e));
  }
  warn(e) {
    console.warn(this.formatMessage("WARN", e));
  }
  error(e) {
    console.error(this.formatMessage("ERROR", e));
  }
}
const y = new Re("EvenBetterExtensions");
let De = "https://raw.githubusercontent.com/bebiksior/EvenBetterExtensions/main/extensions.json";
class Ue {
  constructor() {
    E(this, "plugins", []);
    E(this, "callbacks", []);
  }
  register(e) {
    this.plugins.push(e), this.callbacks && this.callbacks.forEach((t) => t(e));
  }
  getPluginsURL() {
    return w("extensions-url") || De;
  }
  getPlugins() {
    return this.plugins;
  }
  async uninstallPlugin(e, t = !1) {
    const { showToast: n, setWelcomeMessage: a } = h().toast;
    try {
      const i = (await m().graphql.pluginPackages()).pluginPackages.find(
        (o) => o.manifestId === e.manifestPackageID
      );
      if (!i)
        throw new Error("Plugin is not installed");
      if (await m().graphql.uninstallPluginPackage({
        id: i.id
      }), t)
        return;
      a({
        message: `Plugin ${e.name} uninstalled successfully`,
        type: "success"
      }), localStorage.setItem("ebe:previousPath", location.hash), setTimeout(() => {
        location.reload();
      }, 50);
    } catch (s) {
      n({
        message: `Failed to uninstall plugin ${e.name}: ${s.message}`,
        type: "error"
      });
    }
  }
  async installPlugin(e, t = !1) {
    const n = await fetch(e.downloadUrl).then(
      (o) => o.blob()
    ), a = new File([n], `${e.manifestPackageID}.zip`, {
      type: "application/zip"
    }), { showToast: s, setWelcomeMessage: i } = h().toast;
    Te(a).then((o) => {
      const l = o.installPluginPackage.error;
      if (l)
        throw l.__typename == "PluginUserError" ? new Error(l.reason) : new Error(l.code);
      t || (i({
        message: `Plugin ${e.name} installed successfully`,
        type: "success"
      }), localStorage.setItem("ebe:previousPath", location.hash), setTimeout(() => {
        location.reload();
      }, 50));
    }).catch((o) => {
      s({
        message: `Failed to install plugin ${e.name}: ${o.message}`,
        type: "error"
      });
    });
  }
  async updatePlugin(e) {
    const { showToast: t, setWelcomeMessage: n } = h().toast;
    try {
      if (!await this.getInstalledPlugin(e))
        throw new Error("Plugin is not installed");
      await this.uninstallPlugin(e, !0), await this.installPlugin(e, !0), n({
        message: `Plugin ${e.name} updated successfully`,
        type: "success"
      }), localStorage.setItem("ebe:previousPath", location.hash), setTimeout(() => {
        location.reload();
      }, 150);
    } catch (a) {
      t({
        message: `Failed to update plugin ${e.name}: ${a.message}`,
        type: "error"
      });
    }
  }
  validatePlugin(e) {
    if (!e.manifestPackageID)
      return new Error("manifestPackageID is required");
    if (!e.pluginsIDs)
      return new Error("pluginsIDs is required");
    if (!e.name)
      return new Error("name is required");
    if (!e.version)
      return new Error("version is required");
    if (!e.description)
      return new Error("description is required");
    if (!e.author)
      return new Error("author is required");
    if (!e.downloadUrl)
      return new Error("downloadUrl is required");
    if (!e.author.name)
      return new Error("author.name is required");
    if (!e.author.email)
      return new Error("author.email is required");
    if (!e.author.url)
      return new Error("author.url is required");
    if (!Array.isArray(e.pluginsIDs))
      return new Error("pluginsIDs should be an array");
    try {
      const t = new URL(e.downloadUrl);
      if (t.protocol !== "https:" && t.protocol !== "http:")
        return new Error("downloadUrl should be a valid http/https URL");
    } catch {
      return new Error("downloadUrl is not a valid URL");
    }
    try {
      const t = new URL(e.author.url);
      if (t.protocol !== "https:" && t.protocol !== "http:")
        return new Error("author.url should be a valid http/https URL");
    } catch {
      return new Error("author.url is not a valid URL");
    }
  }
  async checkForUpdates() {
    this.plugins.forEach(async (e) => {
      const t = await this.getInstalledPlugin(e);
      t && e.version !== t.installedVersion && (w("notifications") === "true" && h().toast.showToast({
        message: `New version of ${e.name} is available!`,
        type: "info"
      }), w("auto-update") === "true" && this.updatePlugin(e));
    });
  }
  async fetchPlugins() {
    this.plugins = [];
    try {
      const t = await (await fetch(this.getPluginsURL())).json();
      y.info(`Fetched ${t.plugins.length} plugins`);
      for (const n of t.plugins) {
        const s = await (await fetch(n.manifestURL)).json(), i = {
          manifestPackageID: s.id,
          pluginsIDs: s.plugins.map((l) => l.id),
          name: s.name,
          version: s.version,
          description: s.description,
          author: s.author,
          downloadUrl: n.downloadURL
        }, o = this.validatePlugin(i);
        if (o) {
          y.error(`Error validating plugin: ${o.message}`), h().toast.showToast({
            message: `Error validating plugin: ${o.message}`,
            type: "error"
          });
          continue;
        }
        y.info(`Registering plugin: ${i.name}`), this.register(i);
      }
      await this.checkForUpdates();
    } catch (e) {
      y.error(`Error fetching plugins: ${e.message}`), h().toast.showToast({
        message: `Error fetching plugins: ${e.message}`,
        type: "error"
      });
    }
  }
  // TODO: i probably should do some caching here, this function is called a lot
  async getInstalledPlugin(e) {
    try {
      const n = (await m().graphql.pluginPackages()).pluginPackages.filter(
        (a) => a.manifestId === e.manifestPackageID
      )[0];
      return n ? {
        installedVersion: n.version,
        packageID: n.id
      } : null;
    } catch (t) {
      return console.error("Error checking if plugin is installed:", t), null;
    }
  }
  onNewPlugin(e) {
    this.callbacks.push(e);
  }
}
const $e = '<button class="p-row-toggler p-link" type="button" aria-expanded="true" aria-controls="pv_id_10_0_expansion" aria-label="Row Expanded" data-pc-section="rowtoggler" data-pc-group-section="rowactionbutton"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="p-icon p-row-toggler-icon" aria-hidden="true" data-pc-section="rowtogglericon"><path d="M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z" fill="currentColor"></path></svg></button>', $ = '<svg width="14" height="14" fill="none" xmlns="http://www.w3.org/2000/svg" class="p-icon p-row-toggler-icon" aria-hidden="true" data-pc-section="rowtogglericon" viewbox="0 0 14 14"><path d="M4.38708 13C4.28408 13.0005 4.18203 12.9804 4.08691 12.9409C3.99178 12.9014 3.9055 12.8433 3.83313 12.7701C3.68634 12.6231 3.60388 12.4238 3.60388 12.2161C3.60388 12.0084 3.68634 11.8091 3.83313 11.6622L8.50507 6.99022L3.83313 2.31827C3.69467 2.16968 3.61928 1.97313 3.62287 1.77005C3.62645 1.56698 3.70872 1.37322 3.85234 1.22959C3.99596 1.08597 4.18972 1.00371 4.3928 1.00012C4.59588 0.996539 4.79242 1.07192 4.94102 1.21039L10.1669 6.43628C10.3137 6.58325 10.3962 6.78249 10.3962 6.99022C10.3962 7.19795 10.3137 7.39718 10.1669 7.54416L4.94102 12.7701C4.86865 12.8433 4.78237 12.9014 4.68724 12.9409C4.59212 12.9804 4.49007 13.0005 4.38708 13Z" fill="currentColor"></path></svg>', Oe = (r) => {
  const e = document.createElement("button");
  e.classList.add("p-row-toggler", "p-link"), e.type = "button", e.setAttribute("aria-expanded", "false"), e.setAttribute("aria-controls", "pv_id_7_0_expansion"), e.setAttribute("aria-label", "Row Collapsed"), e.setAttribute("data-pc-section", "rowtoggler"), e.setAttribute("data-pc-group-section", "rowactionbutton"), e.innerHTML = $;
  let t = !1;
  const n = () => {
    t = !t, e.setAttribute("aria-expanded", t.toString()), e.innerHTML = t ? $e : $;
  };
  return e.addEventListener("click", (a) => {
    var s;
    if (a.preventDefault(), t) {
      const o = a.target.closest("tr");
      o && ((s = o.nextElementSibling) == null || s.remove(), n());
    } else {
      const o = a.target.closest("tr");
      o && (o.after(He(r)), n());
    }
  }), e;
}, He = (r) => {
  const e = document.createElement("tr");
  e.className = "p-datatable-row-expansion", e.setAttribute("role", "row"), e.setAttribute("data-pc-section", "rowexpansion");
  const t = document.createElement("td");
  t.colSpan = 6, t.setAttribute("data-pc-section", "rowexpansioncell");
  const n = document.createElement("div");
  n.className = "c-table-expansion";
  const a = document.createElement("div");
  a.className = "c-table-expansion__meta";
  const s = document.createElement("h3");
  s.textContent = "Website";
  const i = document.createElement("a");
  i.href = r.author.url, i.textContent = r.author.url, i.addEventListener("click", (l) => {
    l.preventDefault(), h().helpers.openInBrowser(r.author.url);
  }), a.appendChild(s), a.appendChild(i);
  const o = document.createElement("div");
  return o.className = "c-table-expansion__plugins", n.appendChild(a), n.appendChild(o), t.appendChild(n), e.appendChild(t), e;
};
class qe {
  constructor(e) {
    E(this, "pluginsManager");
    E(this, "table");
    this.pluginsManager = e, this.table = h().components.createTable({
      columns: [
        { name: "", width: "3rem" },
        { name: "Name" },
        { name: "Description" },
        { name: "Author" },
        { name: "Version" },
        { name: "Actions" }
      ]
    });
  }
  init() {
    m().navigation.addPage("/plugins/library", {
      body: this.createLibraryBody()
    }), m().commands.register("plugins:library", {
      name: "Plugins: Library",
      group: "EvenBetter: Navigation",
      run: () => {
        m().navigation.goTo("/plugins/library");
      }
    }), m().commandPalette.register("plugins:library");
  }
  createLibraryBody() {
    const e = document.createElement("div");
    return e.classList.add("eb-plugins-library"), e.appendChild(this.createNavigation()), e.appendChild(this.createContent()), e;
  }
  createNavigation() {
    const e = m(), t = h(), n = e.ui.button({
      label: "Contribute",
      size: "small",
      variant: "primary",
      leadingIcon: "fas fa-plus"
    });
    n.addEventListener("click", () => {
      t.helpers.openInBrowser(
        "https://github.com/bebiksior/EvenBetterExtensions"
      );
    });
    const a = e.ui.button({
      label: "Refresh",
      size: "small",
      variant: "tertiary",
      leadingIcon: "fas fa-sync"
    });
    a.setAttribute("data-outline", "true"), a.addEventListener("click", () => {
      this.table.clearRows(), this.pluginsManager.fetchPlugins();
    });
    const s = t.components.createNavigationBar({
      title: "Plugins",
      items: [
        {
          title: "Installed",
          url: "#/plugins",
          icon: "fa-plug",
          sidebarItemName: "Plugins"
        },
        {
          title: "Library",
          url: "#/plugins/library",
          icon: "fa-download",
          sidebarItemName: "Plugins"
        },
        {
          title: "Settings",
          url: "#/plugins/settings",
          icon: "fa-cog",
          sidebarItemName: "Plugins"
        }
      ],
      customButtons: [a, n]
    });
    return s.id = "plugins-navigation-bar", s;
  }
  getInstallElement(e) {
    const t = m().ui.button({
      label: "Install",
      size: "small",
      variant: "primary",
      leadingIcon: "fas fa-download"
    });
    return t.addEventListener("click", async () => {
      t.setAttribute("data-disabled", "true"), await this.pluginsManager.installPlugin(e);
    }), t;
  }
  getUpdateElement(e) {
    const t = m().ui.button({
      label: "Update",
      size: "small",
      variant: "primary",
      leadingIcon: "fas fa-download"
    });
    return t.setAttribute("data-variant", "danger"), t.setAttribute("data-outline", "true"), t.addEventListener("click", async () => {
      t.setAttribute("data-disabled", "true"), await this.pluginsManager.updatePlugin(e);
    }), t;
  }
  getUninstallElement(e) {
    const t = m().ui.button({
      label: "Uninstall",
      size: "small",
      variant: "primary",
      leadingIcon: "fas fa-trash"
    });
    return t.setAttribute("data-variant", "danger"), t.setAttribute("data-outline", "true"), t.addEventListener("click", async () => {
      t.setAttribute("data-disabled", "true"), await this.pluginsManager.uninstallPlugin(e);
    }), t;
  }
  createContent() {
    const e = document.createElement("div");
    return e.classList.add("eb-plugins-library__content"), this.pluginsManager.onNewPlugin(async (t) => {
      const n = await this.pluginsManager.getInstalledPlugin(
        t
      );
      let a;
      n ? n.installedVersion !== t.version ? a = this.getUpdateElement(t) : a = this.getUninstallElement(t) : a = this.getInstallElement(t), this.table.addRow([
        {
          columnName: "",
          value: Oe(t)
        },
        {
          columnName: "Name",
          value: t.name
        },
        {
          columnName: "Description",
          value: t.description
        },
        {
          columnName: "Author",
          value: `${t.author.name} <${t.author.email}>`
        },
        {
          columnName: "Version",
          value: t.version
        },
        {
          columnName: "Actions",
          value: a
        }
      ]);
    }), e.appendChild(this.table.getHTMLElement()), e;
  }
}
class Fe {
  constructor(e) {
    E(this, "pluginsManager");
    this.pluginsManager = e;
  }
  init() {
    m().navigation.addPage("/plugins/settings", {
      body: this.createSettingsBody()
    }), m().commands.register("plugins:settings", {
      name: "Plugins: Settings",
      group: "EvenBetter: Navigation",
      run: () => {
        m().navigation.goTo("/plugins/settings");
      }
    }), m().commandPalette.register("plugins:settings");
  }
  createSettingsBody() {
    const e = document.createElement("div");
    return e.classList.add("eb-plugins-settings"), e.appendChild(this.createNavigation()), e.appendChild(this.createContent()), e;
  }
  createNavigation() {
    const e = m(), t = h(), n = e.ui.button({
      label: "Contribute",
      size: "small",
      variant: "primary",
      leadingIcon: "fas fa-plus"
    });
    n.addEventListener("click", () => {
      t.helpers.openInBrowser(
        "https://github.com/bebiksior/EvenBetterExtensions"
      );
    });
    const a = t.components.createNavigationBar({
      title: "Plugins",
      items: [
        {
          title: "Installed",
          url: "#/plugins",
          icon: "fa-plug",
          sidebarItemName: "Plugins"
        },
        {
          title: "Library",
          url: "#/plugins/library",
          icon: "fa-download",
          sidebarItemName: "Plugins"
        },
        {
          title: "Settings",
          url: "#/plugins/settings",
          icon: "fa-cog",
          sidebarItemName: "Plugins"
        }
      ],
      customButtons: [n]
    });
    return a.id = "plugins-navigation-bar", a;
  }
  createContent() {
    const e = document.createElement("div");
    e.classList.add("eb-plugins-settings__content");
    const t = {
      title: "EvenBetter: Extensions Settings",
      description: "Configure EvenBetter: Extensions settings. Here you can toggle auto-updates, notifications and more.",
      inputGroups: [
        {
          width: "100%",
          groupName: "Extensions",
          groupDescription: "Configure extensions settings.",
          separateWithLine: !0,
          inputs: [
            { type: f.CHECKBOX, labelAsHTML: !0, label: "<b>Auto-update extensions:</b> Never miss an update - automatically update installed extensions when new versions are available.", id: "auto-updates", defaultValue: "false" },
            { type: f.CHECKBOX, labelAsHTML: !0, label: "<b>Enable notifications:</b> Get notified about new extensions, updates and more.", id: "notifications", defaultValue: "true" }
          ]
        },
        {
          width: "100%",
          groupName: "EvenBetter: Extensions",
          groupDescription: "Configure settings for EvenBetter: Extensions.",
          separateWithLine: !0,
          inputs: [
            { type: f.CHECKBOX, labelAsHTML: !0, label: "<b>Show update notifications:</b> Get notified when new versions of EvenBetter: Extensions are available.", id: "show-update-notifications", defaultValue: "true" },
            { type: f.TEXT, labelAsHTML: !0, label: "<b>URL to fetch extensions from:</b>", id: "extensions-url", defaultValue: this.pluginsManager.getPluginsURL() }
          ]
        }
      ]
    }, n = h().templates.createSettingsPage(t);
    return e.appendChild(n.render()), e;
  }
}
const O = "2.0.0", Xe = (r) => {
  Me(r);
  const e = new _e(r, {
    manifestID: "evenbetter-extensions",
    name: "EvenBetter: Extensions"
  });
  Se(e), e.eventManager.on("onPageOpen", (s) => {
    s.oldUrl !== "" && localStorage.setItem("ebe:previousPath", s.newUrl);
  }), e.eventManager.on("onCaidoLoad", () => {
    const s = localStorage.getItem("ebe:previousPath");
    s && (r.navigation.goTo(s.slice(1)), localStorage.removeItem("ebe:previousPath"));
  });
  const t = new Ue();
  Be(), new qe(t).init(), new Fe(t).init(), t.fetchPlugins(), localStorage.getItem("ebe:migrateAttempt") && (localStorage.removeItem("ebe:migrateAttempt"), e.toast.showToast({
    message: "Successfully migrated EvenBetter: Extensions to the new Caido plugin system!",
    duration: 5e3
  })), ze(), y.info("EvenBetterExtensions initialized");
}, Ve = "https://raw.githubusercontent.com/bebiksior/EvenBetterExtensions/main/manifest.json", ze = async () => {
  if (await new Promise((t) => setTimeout(t, 1e3)), !w("show-update-notifications"))
    return;
  const e = await (await fetch(Ve)).json();
  if (e.version !== O) {
    const t = document.createElement("div");
    t.innerHTML = "A new version of EvenBetter: Extensions is available!", t.innerHTML += `<br>Current version: ${O}`, t.innerHTML += `<br>New version: ${e.version}`, t.innerHTML += "<br><br>To update, download the latest plugin.zip file from the Releases page, in your Caido go to the Plugins page, uninstall the current version and install the new one.";
    const n = m().ui.button({
      label: "Go to Releases",
      variant: "primary",
      size: "small"
    });
    n.addEventListener("click", () => {
      h().helpers.openInBrowser("https://github.com/bebiksior/EvenBetterExtensions/releases");
    }), t.style.display = "flex", t.style.flexDirection = "column", t.style.gap = "10px", t.style.fontSize = "15px", t.appendChild(n), h().modal.openModal({
      title: "New version available!",
      content: t
    });
  }
};
export {
  Xe as init
};
