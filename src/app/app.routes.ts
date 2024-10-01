import { Routes } from '@angular/router';
import { ReportListComponent } from './components/report-list/report-list.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  { path: 'reports/generate', component: ReportListComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/reports/generate', pathMatch: 'full' }
]
