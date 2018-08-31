const VNode = virtualDom.VNode;
const VText = virtualDom.VText;

const h = virtualDom.h;
const diff = virtualDom.diff;
const patch = virtualDom.patch;
const createElement = virtualDom.create;

/*
// returned from `render`

React.createElement('li', {
    className: 'fa-star ' + (this.state.rating > 0 ? 'fas' : 'far')
});
*/

// framework
const vnode1 = h('li.fa-star.fas');
const dom = createElement(vnode1);

/*
// returned from `render`

React.createElement('li', {
    className: 'fa-star fas'
});
*/
const vnode2 = h('li.fa-star.far');

// difference between virtual nodes
const patches = diff(vnode1, vnode2);

// applying changes
const node = patch(dom, patches);

/*
<li data-value="1" className={'fa-star ' + (this.state.rating > 0 ? 'fas' : 'far')}></li>

render
React.createElement('li', {
    className: 'fa-star ' + (this.state.rating > 0 ? 'fas' : 'far')
});

return1
React.createElement('li', {
    className: 'fa-star fas'
});

return2
React.createElement('li', {
    className: 'fa-star far'
});
*/