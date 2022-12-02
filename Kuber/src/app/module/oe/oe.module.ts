import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CibilscoreComponent } from './cibilscore/cibilscore.component';
import { DocumentsComponent } from './documents/documents.component';
import { RouterModule, Routes } from '@angular/router';


const oerouting: Routes = [
  {path: 'oedash', component: DashboardComponent},

  {path:'documents',component:DocumentsComponent},
  {path:'cibil',component:CibilscoreComponent}]
  


@NgModule({
  declarations: [DashboardComponent, CibilscoreComponent, DocumentsComponent],
  imports: [
    CommonModule,RouterModule.forChild(oerouting)
  ]
})
export class OeModule { }
