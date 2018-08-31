const core = ng.core;

class ManualComponent {
    constructor(cd) {
        this.name = 'Component';

        setTimeout(() => {
            this.name = 'updated';
        }, 3000);
    }

    updateName(newName) {
        this.name = newName;
    };
}

ManualComponent.ngComponentDef = core.ɵdefineComponent({
    type: ManualComponent, selectors: [['manual-component']],
    factory: function ManualComponent_Factory() {
        // return new ManualComponent(core.ɵdirectiveInject(core.ChangeDetectorRef));
        return new ManualComponent();
    },
    template: function ManualComponent_Template(rf, ctx) {
        if (rf & 1) {
            core.ɵE(0, 'h2');
            core.ɵT(1);
            core.ɵe();
            core.ɵT(2, ' Your name: ');
            core.ɵE(3, 'input');
            core.ɵL('input', function ManualComponent_Template_input_input_listener($event) {
                return ctx.updateName($event.target.value);
            });
            core.ɵe();
        }
        if (rf & 2) {
            core.ɵt(1, core.ɵi1('Hello, ', ctx.name, ''));
            core.ɵp(3, 'value', core.ɵb(ctx.name));
        }
    }
});

let cmp;
document.addEventListener('DOMContentLoaded', () => {
    cmp = core.ɵrenderComponent(ManualComponent);
});

/*
setTimeout(() => {
    core.ɵdetectChanges(cmp)
}, 3000);
*/
