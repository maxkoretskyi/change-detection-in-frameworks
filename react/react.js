const h = virtualDom.h;
const diff = virtualDom.diff;
const patch = virtualDom.patch;
const createElement = virtualDom.create;

export function reactRender(Cmp, container) {
    const instance = new Cmp();
    instance.update();
    const cmpRoot = instance.getRoot();
    container.appendChild(cmpRoot);
}

export function reactCreateElement(...params) {
    return h(...params);
}

export class ReactComponent {
    constructor() {
        this.vDomTree = h('div', null);
        this.domTree = createElement(this.vDomTree);
    }

    setState(state) {
        this.state = Object.assign(this.state || {}, state);
        this.update()
    }

    getRoot() {
        return this.domTree;
    }

    update() {
        const newVDomTree = this.render();
        const patches = diff(this.vDomTree, newVDomTree);
        this.domTree = patch(this.domTree, patches);
        this.vDomTree = newVDomTree;
    }
}