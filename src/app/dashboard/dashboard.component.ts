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
        { name: "Groceries", amtUsed: 170, amtBudgeted: 300 },
        { name: "Recreation", amtUsed: 187, amtBudgeted: 300 },
        { name: "Rent & Utilities", amtUsed: 899, amtBudgeted: 1000 },
    ]

    selectedEnvelope: Envelope = this.envelopes[0];

    constructor(
        private breakpointObserver: BreakpointObserver
        ) {}

    onEnvelopeSelected($event: { selectedEnvelope: Envelope; }) {
        this.selectedEnvelope = $event.selectedEnvelope;
    }

}
