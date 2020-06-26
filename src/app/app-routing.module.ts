import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimpleOfferFormComponent } from './simple-offer-form/simple-offer-form.component';
import { ProjectManagerFormComponent } from './project-manager-form/project-manager-form.component';


const routes: Routes = [
    {
        path: "simple-form",
        component: SimpleOfferFormComponent,
    },
    {
        path: "project-form",
        component: ProjectManagerFormComponent,
    },
    {
        path: "*",
        component: SimpleOfferFormComponent,
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
