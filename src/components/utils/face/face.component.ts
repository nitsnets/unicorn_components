import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'nts-face',
    templateUrl: './face.component.html',
    styleUrls: ['./face.component.scss']
})
export class NtsFaceComponent implements OnInit {
    @Input() size: 'small' | 'big';
    @Input() user: { name: string, image: string };
    @Input() icon = 'user';
    @Input() badge = 0;

    constructor() { }

    ngOnInit() {

    }
}
