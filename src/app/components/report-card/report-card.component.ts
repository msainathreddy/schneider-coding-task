import { Component, Input, OnChanges } from '@angular/core';
import { ReportListComponent } from '../report-list/report-list.component';
import { CommonModule } from '@angular/common';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-report-card',
  standalone: true,
  imports: [ReportListComponent, CommonModule],
  templateUrl: './report-card.component.html',
  styleUrl: './report-card.component.scss'
})
export class ReportCardComponent {

  @Input() reportTitle!: string;
  @Input() reportDescription!: string;

  downloadPDF() {
    const doc = new jsPDF();

    doc.setFontSize(16);
    doc.text(this.reportTitle, 10, 10);
    doc.setFontSize(12);
    doc.text(this.reportDescription, 10, 20);

    doc.text('This is a dummy report for testing PDF generation.', 10, 30);

    doc.save(`${this.reportTitle}.pdf`);
  }

}

