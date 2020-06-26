import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabViewModule } from 'primeng/tabview';
import { JobOfferFormComponent } from './job-offer-form/job-offer-form.component';
import { SimpleOfferFormComponent } from './simple-offer-form/simple-offer-form.component';
import { InputTextModule } from 'primeng/inputtext';
import { EditorModule } from 'primeng/editor';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PickListModule } from 'primeng/picklist';
import { BaseFormController } from './controllers/base-form.controller';
import { SkillSubcontroller } from './controllers/skills.controller';
import { SkillService } from './services/skill.service';
import { ProjectManagerFormComponent } from './project-manager-form/project-manager-form.component'; 
import { ActionsSubcontroller } from './controllers/actions.controller';
import { EventsService } from './services/events.service';
import { FormGroupSubController } from './controllers/form-group.controller';
import { BranchSubcontroller } from './controllers/branch.controller';
import { BranchInfoSubcontroller } from './controllers/branch-info.controller';

@NgModule({
    declarations: [
        AppComponent,
        JobOfferFormComponent,
        SimpleOfferFormComponent,
        ProjectManagerFormComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        TabViewModule,
        InputTextModule,
        EditorModule,
        PickListModule,
    ],
    providers: [
        BaseFormController,
        SkillSubcontroller,
        SkillService,
        ActionsSubcontroller,
        EventsService,
		FormGroupSubController,
		BranchSubcontroller,
		BranchInfoSubcontroller,
    ],
    bootstrap: [AppComponent],  
})
export class AppModule { }
