import { EventEmitter } from '@angular/core';

export interface IModalContent {
    submitModal: any;
    cancelModal: any;
    initModalOptions(obj: {});
}
