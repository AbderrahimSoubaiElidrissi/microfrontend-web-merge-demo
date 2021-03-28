import '@soubai/web-merge'


const react = document.querySelector('#checkout').shadowRoot.querySelector("iframe");
const vue = document.querySelector('#shipping').shadowRoot.querySelector("iframe");
react.onload = () => {
    react.contentWindow.postMessage([], '*');
}
vue.onload = () => {
    vue.contentWindow.postMessage([], '*');
}