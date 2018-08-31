const elementOpen = IncrementalDOM.elementOpen;
const elementClose = IncrementalDOM.elementClose;
const elementVoid = IncrementalDOM.elementVoid;
const text = IncrementalDOM.text;
const patch = IncrementalDOM.patch;

function renderPart() {
    elementOpen('div');
    text('Hello world');
    elementClose('div');
}

document.addEventListener('DOMContentLoaded', () => {
    patch(document.querySelector('.ratings-wrapper'), renderPart);
});
