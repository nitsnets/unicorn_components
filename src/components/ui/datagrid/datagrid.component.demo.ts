import { UnicornComponentsModule } from './../../../unicorn.module';
import { storiesOf } from '@storybook/angular';

const moduleMetadata = { imports: [UnicornComponentsModule.forRoot()] };

const data = [
    { id: 1, name: 'Alvaro Yuste', city: 'Sant Vicent', progress: 75, alerts: 3 },
    { id: 2, name: 'Elad Rodriguez', city: 'Sant Joan', progress: 25, alerts: 8 },
    { id: 3, name: 'Albert Pastor', city: 'Alicante', progress: 50, alerts: 1 }
]
const bigData = [
    { id: 1, subject: "Id labore ex et quam laborum", recipient: "Eliseo@gardner.biz" },
    { id: 2, subject: "Quo vero reiciendis velit earum", recipient: "Jayne_Kuhic@sydney.com" },
    { id: 3, subject: "Odio adipisci rerum aut animi", recipient: "Nikita@garfield.biz" },
    { id: 4, subject: "Alias odio sit", recipient: "Lew@alysha.tv" },
    { id: 5, subject: "Vero eaque aliquid et culpa", recipient: "Hayden@althea.biz" },
    { id: 6, subject: "Et fugit quidem qui sint nihil autem", recipient: "Presley.Mueller@myrl.com" },
    { id: 7, subject: "Consequatur  vel minus molestias", recipient: "Dallas@ole.me" },
    { id: 8, subject: "Et omnis dolorem", recipient: "Mallory_Kunze@marie.org" },
    { id: 9, subject: "Provident id voluptas", recipient: "Meghan_Littel@rene.us" },
    { id: 10, subject: "Eaque et deleniti atque tenetur ut quo ut", recipient: "Carmen_Keeling@caroline.subject" },
    { id: 11, subject: "Fugit labore quia quas nostrum sunt", recipient: "Veronica_Goodwin@timmothy.net" },
    { id: 12, subject: "Modi ut eos dolores illum nam dolor", recipient: "Oswald.Vandervort@leanne.org" },
    { id: 13, subject: "Aut inventore non pariatur sit  sapiente", recipient: "Kariane@jadyn.tv" },
    { id: 14, subject: "Et officiis id praesentium hic aut ipsa", recipient: "Nathan@solon.io" },
    { id: 15, subject: "Debitis magnam hic odit aut ulla ", recipient: "Maynard.Hodkiewicz@roberta.com" },
    { id: 16, subject: "Perferendis temporibus optio ea eu", recipient: "Christine@ayana.info" },
    { id: 17, subject: "Eos est animi quis", recipient: "Preston_Hudson@blaise.tv" },
    { id: 18, subject: "Aut et tenetur ducimus illum aut ab", recipient: "Vincenza_Klocko@albertha.subject" },
    { id: 19, subject: "Sed impedit rerum quia et et unde", recipient: "Madelynn.Gorczany@darion.biz" },
    { id: 20, subject: "Molestias expedita iste aliquid", recipient: "Mariana_Orn@preston.org" },
    { id: 21, subject: "Aliquid rerum mollitia qui a eum sed", recipient: "Noemie@marques.me" },
    { id: 22, subject: "Porro repellendus aut tempore quis hic", recipient: "Khalil@emile.co.uk" },
    { id: 23, subject: "Quis tempora quidem nihil iste", recipient: "Sophia@arianna.co.uk" },
    { id: 24, subject: "In tempore eos beatae est", recipient: "Jeffery@juwan.us" },
    { id: 25, subject: "Autem ab ea sit alias hic provident sit", recipient: "Isaias_Kuhic@jarrett.net" },
    { id: 26, subject: "In deleniti soluta ratione veniam quam ", recipient: "Russel.Parker@kameron.io" },
    { id: 27, subject: "Doloribus quibusdam molestiae amet illum", recipient: "Francesco.Gleason@nella.us" },
    { id: 28, subject: "Quo voluptas nisi veritatis dignissimos", recipient: "Ronny@rosina.org" },
    { id: 29, subject: "Eum distinctio amet dolor", recipient: "Jennings_Pouros@erica.biz" },
    { id: 30, subject: "Quasi nulla ducimus facilis non voluptas aut", recipient: "Lurline@marvin.biz" },
    { id: 31, subject: "Ex velit ut cum eius odio ad placeat", recipient: "Buford@shaylee.biz" },
    { id: 32, subject: "Dolorem ut pariatur quae qui suscipit", recipient: "Maria@laurel.subject" },
    { id: 33, subject: "Voluptatum totam vel voluptate omnis", recipient: "Jaeden.Towne@arlene.tv" },
    { id: 34, subject: "Omnis nemo sunt ab autem", recipient: "Ethelyn.Schneider@emelia.co.uk" },
    { id: 35, subject: "Repellendus entium aliquam omnis", recipient: "Georgianna@florence.io" },
]
const columns = `
    <uni-datagrid-column field="name" title="Full name"></uni-datagrid-column>
    <uni-datagrid-column field="city" title="Location"></uni-datagrid-column>
    <uni-datagrid-column field="progress" title="Progress"></uni-datagrid-column>
    <uni-datagrid-column field="alerts" title="Alerts"></uni-datagrid-column>
`;
const bigColumns = `
    <uni-datagrid-column field="recipient" title="Recipient"></uni-datagrid-column>
    <uni-datagrid-column field="subject" title="Subject"></uni-datagrid-column>
`;
storiesOf('Datagrid/General', module)
    .add('Basic', () => ({
        moduleMetadata, template: `
        <uni-datagrid [data]="data" [sortable]="false" [highlightRow]="false" [showHeader]="false">
            ${columns}
        </uni-datagrid>
    `, props: { data }
    }))
    .add('Header', () => ({
        moduleMetadata, template: `
        <uni-datagrid [data]="data" [sortable]="false" [highlightRow]="false">
            ${columns}
        </uni-datagrid>
    `, props: { data }
    }))
    .add('Labels', () => ({
        moduleMetadata, template: `
        <uni-datagrid [data]="data" [sortable]="false" [highlightRow]="false" [showHeader]="false" [showLabels]="true">
            ${columns}
        </uni-datagrid>
    `, props: { data }
    }))
    .add('Highlight rows', () => ({
        moduleMetadata, template: `
        <uni-datagrid [data]="data" [sortable]="false">
            ${columns}
        </uni-datagrid>
    `, props: { data }
    }))
    .add('Highlight cells', () => ({
        moduleMetadata, template: `
        <uni-datagrid [data]="data" [sortable]="false" [highlightCell]="true">
            ${columns}
        </uni-datagrid>
    `, props: { data }
    }))
    .add('Sortable', () => ({
        moduleMetadata, template: `
        <uni-datagrid [data]="data">
            ${columns}
        </uni-datagrid>
    `, props: { data }
    }))
    .add('Initial sort', () => ({
        moduleMetadata, template: `
        <uni-datagrid [data]="data" [sort]="{ field: 'progress', dir: false }">
            ${columns}
        </uni-datagrid>
    `, props: { data }
    }))
    .add('Tracking sort', () => ({
        moduleMetadata, template: `
        <uni-datagrid [data]="data" [(sort)]="value">
            ${columns}
        </uni-datagrid>
        <p *ngIf="value">Sorting by {{value?.field}} {{value?.dir ? 'descending' : 'ascending'}} </p>
    `, props: { data }
    }))
    .add('Selectable', () => ({
        moduleMetadata, template: `
        <uni-datagrid [data]="data" [selectable]="true">
            ${columns}
        </uni-datagrid>
    `, props: { data }
    }))
    .add('Tracking selection', () => ({
        moduleMetadata, template: `
        <uni-datagrid [data]="data" [selectable]="true" [(selected)]="value">
            ${columns}
        </uni-datagrid>
        <p *ngIf="value">Selected ids {{value | json}}</p>
        `, props: { data }
    }))
    .add('Deletable', () => ({
        moduleMetadata, template: `
        <uni-datagrid [data]="data" [deletable]="true">
            ${columns}
        </uni-datagrid>
    `, props: { data }
    }))
    .add('Deletable on batch', () => ({
        moduleMetadata, template: `
        <uni-datagrid [data]="data" [deletable]="true" [selectable]="true">
            ${columns}
        </uni-datagrid>
    `, props: { data }
    }))
    .add('Modal to confirm deletion', () => ({
        moduleMetadata, template: `
        <uni-datagrid [data]="data" [deletable]="true" deleteConfirm="modal">
            ${columns}
        </uni-datagrid>
    `, props: { data }
    }))
    .add('Pageable', () => ({
        moduleMetadata, template: `
        <uni-datagrid [data]="bigData" [selectable]="true" [deletable]="true" [pageable]="true">
            ${bigColumns}
        </uni-datagrid>
    `, props: { bigData }
    }))
    .add('Custom page size', () => ({
        moduleMetadata, template: `
        <uni-datagrid [data]="bigData" [selectable]="true" [deletable]="true" [pageable]="true" [pageSize]="4">
            ${bigColumns}
        </uni-datagrid>
    `, props: { bigData }
    }))
    .add('Initial page', () => ({
        moduleMetadata, template: `
        <uni-datagrid [data]="bigData" [selectable]="true" [deletable]="true" [pageable]="true" [page]="2">
            ${bigColumns}
        </uni-datagrid>
    `, props: { bigData }
    }))
    .add('Tracking page', () => ({
        moduleMetadata, template: `
        <uni-datagrid [data]="bigData" [pageSize]="5" [pageable]="true" (pageChange)="value = $event">
            ${bigColumns}
        </uni-datagrid>
        <p *ngIf="value >= 0">Current page: {{value + 1}}</p>
    `, props: { bigData }
    }))
    .add('Tracking clicks', () => ({
        moduleMetadata, template: `
        <uni-datagrid [data]="data" (cellClick)="value = $event">
            ${columns}
        </uni-datagrid>
        <p *ngIf="value">
            Clicked <strong>{{value?.column?.title}}</strong>
            at item named <strong>{{value?.row?.name}}</strong>.<br>
            The value is <strong>{{value?.cell}}</strong>.
        </p>
    `, props: { data }
    }))
    ;
