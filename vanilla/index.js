import { RatingsComponent } from './vanilla.js'

document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.ratings-wrapper');
    const instance = new RatingsComponent();
    instance.init(container);

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