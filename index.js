const radius = 8;
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
    }

    render(){
        this.shadowRoot.innerHTML = `
        <style>
        --rui-radius: ${radius}%;
        :host {
            display: inline-block;
                padding: 0.5rem;
                font-weight: bold;
                transition duration: 300ms;
                select: none;
                border-radius: var(--rui-radius);
                font-size: 0.579rem;
                border: black 2px solid;
            }
            </style>
        <div class="pill bg-green-500/20 font-bold text-green-500 duration-300 hover:text-green-400 select-none w-fit px-2 py-0.5 text-[9.26px] rounded-[8px]">
            <div class="flex items-center">
                <span class="h-1 w-1 mr-1 rounded-full bg-green-500"></span>
                <slot name="label">processed</slot>
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