import { Component, OnInit, Input } from '@angular/core';
import { Skill } from '../models/skill.model';
import { BaseFormController } from '../controllers/base-form.controller';
import { SkillSubcontroller } from '../controllers/skills.controller';
import { OfferFormConfigModel } from '../config/offer-form-config.model';
import { FormGroup } from '@angular/forms';
import { ActionsSubcontroller } from '../controllers/actions.controller';
import { FormGroupSubController } from '../controllers/form-group.controller';

@Component({
    selector: 'app-job-offer-form',
    templateUrl: './job-offer-form.component.html',
    styleUrls: ['./job-offer-form.component.scss']
})
export class JobOfferFormComponent implements OnInit {

    public baseFormController: BaseFormController;

    @Input()
    public config: OfferFormConfigModel = {};

    public text: string;
    public sourceSkills: Skill[] = [];
    public targetSkills: Skill[] = [];
    public formGroup: FormGroup;

    constructor(
        private skillController: SkillSubcontroller,
        private actionsSubcontroller: ActionsSubcontroller,
        private formGroupSubController: FormGroupSubController) { }

    async ngOnInit(): Promise<void> {
        this.baseFormController = new BaseFormController(this.config);
        this.baseFormController.registerSubcontroller(this.skillController);
        this.baseFormController.registerSubcontroller(this.actionsSubcontroller);
        this.baseFormController.registerSubcontroller(this.formGroupSubController);
        await this.baseFormController.load();
        this.sourceSkills = this.skillController.skills;
        this.formGroup = this.formGroupSubController.formGroup;
    }

    public changeTarget(skills: any): void {
        this.formGroup.get("skills").setValue((skills.items as Skill[]).map(i => i.id));
    }
}
