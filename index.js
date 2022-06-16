class Avatar extends HTMLElement {}
class Button extends HTMLElement {}
class Checkbox extends HTMLElement {}
class Input extends HTMLElement {}
class Loader extends HTMLElement {}
class Modal extends HTMLElement {}
class Pill extends HTMLElement {
    constructor(){
        super();
        this.color;
        this.label;
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.render()
        this.addCssDynamic();
    }

    addCssDynamic() {
        const linkElem = document.createElement('link');
        linkElem.setAttribute('rel', 'stylesheet');
        linkElem.setAttribute('href', 'styles/Global.modules.css');
        this.shadowRoot.appendChild(linkElem);
    }

    render(){
        this.shadowRoot.innerHTML = `   
        <div class="pill">
            <div class="flex items-center">
                <span class="h-1 w-1 mr-1 rounded-full bg-green-500"></span>
                <slot name="icon"></slot>
                <slot name="label"></slot>
            </div>
        </div>
        `;
    }

}
class Radio extends HTMLElement {}
class Select extends HTMLElement {}
class Toast extends HTMLElement {}
class Toggle extends HTMLElement {}
class Tooltip extends HTMLElement {}

customElements.define('rui-avatar', Avatar)
customElements.define('rui-button', Button)
customElements.define('rui-checkbox', Checkbox)
customElements.define('rui-input', Input)
customElements.define('rui-loader', Loader)
customElements.define('rui-modal', Modal)
customElements.define('rui-pill', Pill)
customElements.define('rui-radio', Radio)
customElements.define('rui-select', Select)
customElements.define('rui-toast', Toast)
customElements.define('rui-toggle', Toggle)
customElements.define('rui-tooltip', Tooltip)   