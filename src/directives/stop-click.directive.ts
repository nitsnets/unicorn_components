import { Directive, HostListener } from "@angular/core";

@Directive({
    selector: "[uniStopClick]"
})
export class UniStopClickDirective {
    @HostListener('click', ['$event'])
    onClick(event: MouseEvent): void {
        event.stopPropagation();
    }
}
