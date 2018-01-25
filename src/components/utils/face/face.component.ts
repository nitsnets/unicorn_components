import { Component, Input, OnInit, HostBinding } from '@angular/core';

@Component({
    selector: 'uni-face',
    templateUrl: './face.component.html',
    styleUrls: ['./face.component.scss']
})
export class UniFaceComponent implements OnInit {

    @HostBinding('class.uni-face') componentClass = true;
    @Input() size: 'small' | 'big';
    @Input() user: { name: string, image: string };
    @Input() icon = 'person';
    @Input() badge = 0;

    constructor() { }

    ngOnInit() {

    }
}
