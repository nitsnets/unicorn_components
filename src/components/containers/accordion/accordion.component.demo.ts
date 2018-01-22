import { UniAccordionComponent } from './accordion.component';
import { UniAccordionItemComponent } from './item/item.component';
import { UniIconComponent } from '../../utils/icon/icon.component';
import { UniButtonComponent } from '../../ui/button/button.component';
import { UniMenuComponent, UniMenuTriggerDirective } from '../../ui/menu/menu.component';
import { UniMenuContainerComponent } from '../../ui/menu/container/container.component';
import { UniMenuItemComponent } from '../../ui/menu/item/item.component';
import { UniSpinnerComponent } from '../../utils/spinner/spinner.component';
import { storiesOf } from '@storybook/angular';


const moduleMetadata = {
    declarations: [
        UniAccordionComponent,
        UniAccordionItemComponent,
        UniMenuComponent,
        UniMenuItemComponent,
        UniMenuContainerComponent,
        UniMenuTriggerDirective,
        UniButtonComponent,
        UniIconComponent,
        UniSpinnerComponent,
    ]
};
const lorem = `
    Est labore fugiat irure aliquip laborum minim ea eu in irure pariatur nulla.
    Incididunt incididunt aute et occaecat ut eiusmod incididunt laboris eu proident
    id minim. Velit exercitation ea amet exercitation officia nisi aliquip tempor.
`;
const templateBasic = `
    <uni-accordion [mode]="mode">
        <uni-accordion-item label="Header of item 1">
            ${lorem}
        </uni-accordion-item>
        <uni-accordion-item label="Header of item 2">
            ${lorem}
        </uni-accordion-item>
        <uni-accordion-item label="Header of item 3">
            ${lorem}
        </uni-accordion-item>
    </uni-accordion>
`;
const buttons = `
    <uni-button [icon]="buttonIcon1"></uni-button>
    <uni-button [icon]="buttonIcon2"></uni-button>
`;
const templateButtons = `
    <uni-accordion [mode]="mode">
        <uni-accordion-item label="Header of item 1" [buttons]="true">
            <div uni-accordion-content>${lorem}</div>
            <div uni-accordion-buttons>${buttons}</div>
        </uni-accordion-item>
        <uni-accordion-item label="Header of item 2" [buttons]="true">
            <div uni-accordion-content>${lorem}</div>
            <div uni-accordion-buttons>${buttons}</div>
        </uni-accordion-item>
        <uni-accordion-item label="Header of item 3" [buttons]="true">
            <div uni-accordion-content>${lorem}</div>
            <div uni-accordion-buttons>${buttons}</div>
        </uni-accordion-item>
    </uni-accordion>
`;
const menu = `
    <uni-menu-item [label]="menu1.label" [icon]="menu1.icon"></uni-menu-item>
    <uni-menu-item [label]="menu2.label" [icon]="menu2.icon"></uni-menu-item>
`;
const templateMenu = `
    <uni-accordion [mode]="mode">
        <uni-accordion-item label="Header of item 1" [menu]="true">
            <div uni-accordion-content>${lorem}</div>
            <div uni-accordion-menu>${menu}</div>
        </uni-accordion-item>
        <uni-accordion-item label="Header of item 2" [menu]="true">
            <div uni-accordion-content>${lorem} holi</div>
            <div uni-accordion-menu>${menu}</div>
        </uni-accordion-item>
        <uni-accordion-item label="Header of item 3" [menu]="true">
            <div uni-accordion-content>${lorem}</div>
            <div uni-accordion-menu>${menu}</div>
        </uni-accordion-item>
    </uni-accordion>
`;
storiesOf('Accordion', module)
    .add('Basic', () => ({
        template: templateBasic, moduleMetadata, props: {
            mode: 'multiple'
        }
    }))
    .add('Auto-collapse', () => ({
        template: templateBasic, moduleMetadata, props: {
            mode: 'single'
        }
    }))
    .add('Buttons', () => ({
        template: templateButtons, moduleMetadata, props: {
            mode: 'single',
            buttonIcon1: 'check',
            buttonIcon2: 'close'
        }
    }))
    .add('Menu', () => ({
        template: templateMenu, moduleMetadata, props: {
            mode: 'single',
            menu1: { icon: 'check', label: 'Complete' },
            menu2: { icon: 'close', label: 'Delete' }
        }
    }))
    ;
