import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { DocumentsComponent } from './documents/documents.component';
import { CibilscoreComponent } from './cibilscore/cibilscore.component';


const cmrouting: Routes = [
  {path: 'cmdash', component: DashboardComponent},

  {path:'documents',component:DocumentsComponent},
  {path:'cibil',component:CibilscoreComponent}]
  

@NgModule({
  declarations: [DashboardComponent, DocumentsComponent, CibilscoreComponent],
  imports: [
    CommonModule,RouterModule.forChild(cmrouting)
  ]
})
export class CmModule { }
