import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { Envelope } from '../envelope';

@Component({
    selector: 'app-envelope-list',
    templateUrl: './envelope-list.component.html',
    styleUrls: ['./envelope-list.component.css']
})
export class EnvelopeListComponent implements OnInit {
    @Input() envelopes: Envelope[];
    @Output() envelopeSelected = new EventEmitter();
    @ViewChild('envelopeList') envelopeList; 

    constructor() { }

    ngOnInit(): void {
    }

    // TODO: instead of detecting a click, try to detect changes in the "selectedOptions.selected[0]" property,
    //       perhaps through the use of an observable
    onSelected(): void {
        this.envelopeSelected.emit(
            {
                selectedEnvelope: this.envelopeList.selectedOptions.selected[0]?.value
            });
    }

}
