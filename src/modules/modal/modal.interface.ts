import { EventEmitter } from '@angular/core';

export interface IModalContent {
    submitModal: EventEmitter<any>;
    cancelModal: EventEmitter<any>;
    initModalOptions(obj: {});
}
