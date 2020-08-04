import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Envelope } from '../envelope';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-envelope-details',
  templateUrl: './envelope-details.component.html',
  styleUrls: ['./envelope-details.component.css']
})
export class EnvelopeDetailsComponent implements OnInit {
    @Input() envelope: Envelope;
    @ViewChild(MatAccordion) accordion: MatAccordion;

    // TODO: change type of @ViewChild in envelope-list component
    // TODO: find way to ensure that form fields with '$' prefix are of same width as other form fields

    constructor() { }

    ngOnInit(): void {
    }

    clearSpendFields() {
        
    }

}
