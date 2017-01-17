import { Component, ViewContainerRef } from '@angular/core';
import { ToastService } from '../src/modules/toast/toast.service';
import { ModalService } from '../src/modules/modal/modal.service';
import { TooltipService } from '../src/modules/tooltip/tooltip.service';

import { NtsDemoModalContentComponent } from './demo-modal-content/demo-modal-content.component';


@Component({
  selector: 'nts-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent {
  tabSelected = 'typos';

  charts = [
    {
      class: 'chart-half',
      type: 'line',
      series: [{ label: 'Serie 1', data: [12, 19, 3, 5, 2, 3] }, { label: 'Serie 2', data: [22, 12, 20, 10, 5, 1] }],
      labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5', 'Label 6'],
      options: {},
    },
    {
      class: 'chart-half',
      type: 'line',
      series: [
        { label: 'Serie 1', data: [12, 19, 3, 5, 2, 3], fill: false },
        { label: 'Serie 2', data: [22, 12, 20, 10, 5, 1], fill: false }
      ],
      labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5', 'Label 6'],
      options: {},
    },
    {
      class: 'chart-half',
      type: 'bar',
      series: [{ label: 'Serie 1', data: [12, 19, 3, 5, 2, 3] }, { label: 'Serie 2', data: [22, 12, 20, 10, 5, 1] }],
      labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5', 'Label 6'],
      options: {},
    },
    {
      class: 'chart-half',
      type: 'horizontalBar',
      series: [{ label: 'Serie 1', data: [12, 19, 3, 5, 2, 3] }, { label: 'Serie 2', data: [22, 12, 20, 10, 5, 1] }],
      labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5', 'Label 6'],
      options: {},
    },
    {
      class: 'chart-half',
      type: 'bar',
      series: [{ label: 'Serie 1', data: [12, 19, 3, 5, 2, 3] }, { label: 'Serie 2', data: [22, 12, 20, 10, 5, 1] }],
      labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5', 'Label 6'],
      options: {
        scales: {
          xAxes: [{
            stacked: true
          }],
          yAxes: [{
            stacked: true
          }]
        }
      }
    },
    { // Mixed chart
      class: 'chart-half',
      type: 'bar',
      series: [
        { type: 'bar', label: 'Serie 1', data: [12, 19, 3, 5, 2, 3] },
        { type: 'line', label: 'Serie 2', data: [22, 12, 20, 10, 5, 1] }],
      labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5', 'Label 6'],
      options: {},
    },
    {
      class: 'chart-quarter',
      type: 'pie',
      series: [{ label: 'Serie 1', data: [12, 19, 3, 5, 2, 3] }, { label: 'Serie 2', data: [22, 12, 20, 10, 5, 1] }],
      labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5', 'Label 6'],
      options: {},
    },
    {
      class: 'chart-quarter',
      type: 'radar',
      series: [{ label: 'Serie 1', data: [12, 19, 3, 5, 2, 3] }, { label: 'Serie 2', data: [22, 12, 20, 10, 5, 1] }],
      labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5', 'Label 6'],
      options: {},
    },
    {
      class: 'chart-quarter',
      type: 'doughnut',
      series: [{ label: 'Serie 1', data: [12, 19, 3, 5, 2, 3] }, { label: 'Serie 2', data: [22, 12, 20, 10, 5, 1] }],
      labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5', 'Label 6'],
      options: {},
    },
    {
      class: 'chart-quarter',
      type: 'polarArea',
      series: [{ label: 'Serie 1', data: [12, 19, 3, 5, 2, 3] }, { label: 'Serie 2', data: [22, 12, 20, 10, 5, 1] }],
      labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5', 'Label 6'],
      options: {},
    }
  ];

  constructor(
    private viewContainerRef: ViewContainerRef,
    private toastService: ToastService,
    private tooltipService: TooltipService,
    private modalService: ModalService
  ) { }

  openToast() {
    this.toastService.createToast('Esto es el mensaje', { showClose: true, time: 3000 }, this.viewContainerRef).subscribe(
      _ => { console.log('accept'); }
    );
  }

  openModal(type = null) {
    this.modalService.createModal(NtsDemoModalContentComponent, { title: 'Demo Modal', type }, this.viewContainerRef).subscribe(
      param => { console.log('ok: ', param); }, _ => { console.log('ko'); }
    );
  }

  openTooltip(event) {
    this.tooltipService.createTooltip('Esto es el mensaje del tooltip informativo', {
      x: event.clientX,
      y: event.clientY
    }, this.viewContainerRef).subscribe(
      _ => { console.log('accept'); }
      );
  }

  closeTooltip() {
    this.tooltipService.close();
  }



}
