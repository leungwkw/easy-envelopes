import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Envelope } from '../envelope';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
    cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
        map(({ matches }) => {
        if (matches) {
            return [
            { title: 'Card 1', cols: 1, rows: 1 },
            //   { title: 'Card 2', cols: 1, rows: 1 },
            //   { title: 'Card 3', cols: 1, rows: 1 }
            ];
        }

        return [
            { title: 'July Envelopes', cols: 2, rows: 2 },
            // { title: 'Income', cols: 1, rows: 1 },
            { title: 'Grocery Envelope', cols: 1, rows: 2 }
        ];
        })
    );

    envelopes: Envelope[] = [
        { name: "Groceries", amtSpent: 170, amtAdded: 300 },
        { name: "Recreation", amtSpent: 187, amtAdded: 300 },
        { name: "Rent & Utilities", amtSpent: 899, amtAdded: 1000 },
    ]

    selectedEnvelope: Envelope = this.envelopes[0];

    constructor(
        private breakpointObserver: BreakpointObserver
        ) {}

    onEnvelopeSelected($event: { selectedEnvelope: Envelope; }) {
        this.selectedEnvelope = $event.selectedEnvelope;
    }

}
