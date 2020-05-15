import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  InternFormComponent,
  InternProfileComponent,
  NexusComponent,
  TailwindDemoComponent,
} from './component';

const routes: Routes = [
  { path: 'intern-profile', component: InternProfileComponent },
  { path: 'intern-form', component: InternFormComponent },
  { path: 'tailwind-demo', component: TailwindDemoComponent },
  { path: '', component: NexusComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
