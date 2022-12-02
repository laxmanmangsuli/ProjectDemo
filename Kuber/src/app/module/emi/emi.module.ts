import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CibilscoreComponent } from './cibilscore/cibilscore.component';
import { DocumentsComponent } from './documents/documents.component';
import { RouterModule, Routes } from '@angular/router';


const emirouting: Routes = [
  {path: 'emidash', component: DashboardComponent},

  {path:'documents',component:DocumentsComponent},
  {path:'cibil',component:CibilscoreComponent}]
  

@NgModule({
  declarations: [DashboardComponent, DocumentsComponent, CibilscoreComponent],
  imports: [
    CommonModule,RouterModule.forChild(emirouting)
  ]
})
export class EmiModule { }
