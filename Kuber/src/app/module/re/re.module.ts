import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CibilscoreComponent } from './cibilscore/cibilscore.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DocumentsComponent } from './documents/documents.component';


const rerouting: Routes = [
  {path: 'redash', component: DashboardComponent},

  {path:'documents',component:DocumentsComponent},
  {path:'cibil',component:CibilscoreComponent}]
  

@NgModule({
  declarations: [CibilscoreComponent, DashboardComponent, DocumentsComponent],
  imports: [
    CommonModule,RouterModule.forChild(rerouting)
  ]
})
export class ReModule { }
