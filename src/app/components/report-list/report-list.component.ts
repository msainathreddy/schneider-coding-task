import { Component } from '@angular/core';
import { ReportCardComponent } from '../report-card/report-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-report-list',
  standalone: true,
  imports: [ReportCardComponent, CommonModule],
  templateUrl: './report-list.component.html',
  styleUrl: './report-list.component.scss'
})
export class ReportListComponent {
  reports = [
    { title: 'Blocks Report', description: 'Lorem ipsum dolor sit amet consectetur.' },
    { title: 'IO Report', description: 'Ac tellus odio commodo eu aliquam cras.' },
    { title: 'CS Report', description: 'Lorem ipsum dolor sit amet consectetur.' },
    { title: 'Displays Report', description: 'Dictum porttitor sed arcu lacus.' },
  ];
}
