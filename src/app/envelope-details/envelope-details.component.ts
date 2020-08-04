import { Component, OnInit, Input } from '@angular/core';
import { Envelope } from '../envelope';

@Component({
  selector: 'app-envelope-details',
  templateUrl: './envelope-details.component.html',
  styleUrls: ['./envelope-details.component.css']
})
export class EnvelopeDetailsComponent implements OnInit {
    @Input() envelope: Envelope;

    constructor() { }

    ngOnInit(): void {
    }

}
