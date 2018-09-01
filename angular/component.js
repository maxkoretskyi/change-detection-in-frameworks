const core = ng.core;

// const i = core.ɵinjectChangeDetectorRef();

class AppComponent {
    constructor(cd) {

        this.rating = 1;
        this.cd = cd;

        setTimeout(() => {
            this.rating = 3;
            this.cd.markForCheck();
        }, 3000);
    }

    handleClick(event) {
        this.rating = event.target.dataset.value;
    };
}

AppComponent.ngComponentDef = core.ɵdefineComponent({
    type: AppComponent,
    selectors: [['app-root']],
    factory: function AppComponent_Factory() {
        // doesn't work - why?
        // return new AppComponent(core.ɵdirectiveInject(core.ChangeDetectorRef));

        // my custom implementation of ChangeDetectorRef
        const changeDetector = {};
        const instance = new AppComponent(changeDetector);
        changeDetector.markForCheck = () => {
            core.ɵdetectChanges(instance);
        };
        return instance;
    },
    template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
            core.ɵE(0, 'ul');
            core.ɵs(['ratings', 1, 'ratings', true]);
            core.ɵL('click', function AppComponent_Template_ul_click_listener($event) {
                return ctx.handleClick($event);
            });
            core.ɵE(1, 'li', ['data-value', '1']);
            core.ɵs();
            core.ɵe();
            core.ɵE(2, 'li', ['data-value', '2']);
            core.ɵs();
            core.ɵe();
            core.ɵE(3, 'li', ['data-value', '3']);
            core.ɵs();
            core.ɵe();
            core.ɵE(4, 'li', ['data-value', '4']);
            core.ɵs();
            core.ɵe();
            core.ɵE(5, 'li', ['data-value', '5']);
            core.ɵs();
            core.ɵe();
            core.ɵe();
        }
        if (rf & 2) {
            core.ɵsm(1, ('fa-star ' + ((ctx.rating > 0) ? 'fas' : 'far')));
            core.ɵsa(1);
            core.ɵsm(2, ('fa-star ' + ((ctx.rating > 1) ? 'fas' : 'far')));
            core.ɵsa(2);
            core.ɵsm(3, ('fa-star ' + ((ctx.rating > 2) ? 'fas' : 'far')));
            core.ɵsa(3);
            core.ɵsm(4, ('fa-star ' + ((ctx.rating > 3) ? 'fas' : 'far')));
            core.ɵsa(4);
            core.ɵsm(5, ('fa-star ' + ((ctx.rating > 4) ? 'fas' : 'far')));
            core.ɵsa(5);
        }
    }
});

let cmp;
document.addEventListener('DOMContentLoaded', () => {
    cmp = core.ɵrenderComponent(AppComponent);
});

/*
setTimeout(() => {
    core.ɵdetectChanges(cmp)
}, 3000);
*/