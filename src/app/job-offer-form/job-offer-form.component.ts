import { Component, OnInit, Input } from '@angular/core';
import { Skill } from '../models/skill.model';
import { BaseFormController } from '../controllers/base-form.controller';
import { SkillSubcontroller } from '../controllers/skills.controller';
import { OfferFormConfigModel } from '../config/offer-form-config.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActionsSubcontroller } from '../controllers/actions.controller';
import { FormGroupSubController } from '../controllers/form-group.controller';

@Component({
    selector: 'app-job-offer-form',
    templateUrl: './job-offer-form.component.html',
    styleUrls: ['./job-offer-form.component.scss']
})
export class JobOfferFormComponent implements OnInit {

    public baseFormController: BaseFormController;

    public sourceSkills: Skill[] = [];
    public targetSkills: Skill[] = [];
    public formGroup: FormGroup;

    constructor() { }

    async ngOnInit(): Promise<void> {
        this.buildFormGroup();
    }

    public changeTarget(skills: any): void {
        this.formGroup.get("skills").setValue((skills.items as Skill[]).map(i => i.id));
    }

    public get isLoading(): boolean {
        return false;
    }

    private buildFormGroup(): void {
        this.formGroup = new FormGroup({
            name: new FormControl("", Validators.required),
            id: new FormControl(),
            description: new FormControl(),
            skills: new FormControl([]),
        });
    }
}

/*
@Input()
public config: OfferFormConfigModel = {};

this.baseFormController = new BaseFormController(this.config);
 
*/
