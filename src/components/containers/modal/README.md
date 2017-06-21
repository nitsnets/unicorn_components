Modal
===================
`uni-modal`
---
:white_check_mark: Estable

Contenedor flotante que se abre sobre todo el contendido.

## Uso

### Ejemplo básico

#### Componente que invoca la modal
```typescript
import { ModalService } from 'unicorn-components/unicorn-components';

@Component({
    selector: 'my-comopnent',
    templateUrl: 'my-component.component.html',
})
export class MyComponent {
    constructor(private modalService: ModalService) { }

    openModal() {
        const options = {
            title: 'El título de la modal',
            class: 'la__clase o__las--clases',
            type: 'aside',
            size: 'large',
            hideHeader: true,
            miAtributoExtra: 'valor'
        };
        this.modalService.createModal(MyModalContentComponent, options).subscribe(
            param => { console.log('aceptado'); },
            error => { console.log('cancelado'); }
        );
    }
}
```
#### Clase del contenido
```typescript
import { IModalContent } from '../../../containers/modal/modal.interface';

@Component({
    selector: 'my-modal-content',
    templateUrl: './my-modal-content.component.html',
})
export class MyModalContentComponent implements IModalContent {

    @Output() submitModal = new EventEmitter();
    @Output() cancelModal = new EventEmitter();

    miAtributoExtra : string;

    initModalOptions(options: {}) {
        this.miAtributoExtra = options['miAtributoExtra'];
    }
}
```

### Atributos de opciones

| Nombre      | Tipo                         | Por defecto | Descripción 
| ----------- | ---------------------------- | ----------- | -----------
| title       | `string`                     | `''`        | Texto que se situa en el titular de la modal
| class       | `string`                     | `''`        | Clase(s) extra para colocar en el contenedor de la modal
| type        | `'aside' | 'full' | null`    | `''`        | Formato de la modal, puede versar entre varios predefinidos
| size        | `'large' | 'medium'`         | `''`        | Ancho de la modal
| hideHeader  | `boolean`                    | `false`     | Estado deshabilitado que impide la apertura del acordeón

Los atributos descritos son los que utiliza el componente modal. Pero se pueden añadir tantos atributos de opciones extra como sea necesario, para utilizarlos desde el componente contenido.

### Eventos de salida

El método de creación de modal es un Observable que recibe eventos cuando la modal se cierra. Estos eventos se pueden lanzar desde el componente contenido, mediante los emisores `submitModal` y `cancelModal`. En estos eventos se puede incluir el contenido que se considere oportuno ambos cerrarán la modal. 

## Mejoras previstas (TODO)

- Implementación de los parámetros `size=small` y `color`.
- Renombrar este componente a `uni-accordion-item` y crear un `uni-acordion` que gestiones los grupos de items para, por ejemplo: que solo pueda haber uno abierto.
