import { RatingsComponent } from './react-component.js'
import { reactRender } from './react.js';

document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.ratings-wrapper');
    reactRender(RatingsComponent, container);

    /*setTimeout(() => {
        console.log(instance.rating);
    }, 3000);

    setTimeout(() => {
        instance.rating = 3;
    }, 5000);

    setTimeout(() => {
        instance.destroy();
    }, 7000);*/
});