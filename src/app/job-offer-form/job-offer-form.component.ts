import { Component, OnInit, Input } from '@angular/core';
import { Skill } from '../models/skill.model';
import { BaseFormController } from '../controllers/base-form.controller';
import { SkillSubcontroller } from '../controllers/skills.controller';
import { OfferFormConfigModel } from '../config/offer-form-config.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActionsSubcontroller } from '../controllers/actions.controller';
import { FormGroupSubController } from '../controllers/form-group.controller';
import { BranchSubcontroller } from '../controllers/branch.controller';
import { BranchInfoSubcontroller } from '../controllers/branch-info.controller';

@Component({
    selector: 'app-job-offer-form',
    templateUrl: './job-offer-form.component.html',
    styleUrls: ['./job-offer-form.component.scss']
})
export class JobOfferFormComponent implements OnInit {

    public baseFormController: BaseFormController;

    public sourceSkills: Skill[] = [];
    public targetSkills: Skill[] = [];
	
	@Input()
	public config: OfferFormConfigModel = {};

	constructor(private skillSubcontroller: SkillSubcontroller,
		private branchSubcontroller: BranchSubcontroller,
		private branchInfoSubcontroller: BranchInfoSubcontroller,
		private actionsSubcontroller: ActionsSubcontroller,
		private formGroupSubcontroller: FormGroupSubController) { }

    async ngOnInit(): Promise<void> {

		this.baseFormController = new BaseFormController(this.config);
		this.baseFormController.registerSubcontroller(this.skillSubcontroller);
		this.baseFormController.registerSubcontroller(this.branchSubcontroller);
		this.baseFormController.registerSubcontroller(this.branchInfoSubcontroller);
		this.baseFormController.registerSubcontroller(this.formGroupSubcontroller);
		this.baseFormController.registerSubcontroller(this.actionsSubcontroller);

		await this.baseFormController.loadAllSubcontrollers();
		this.sourceSkills = this.skillSubcontroller.skills;
    }

    public changeTarget(skills: any): void {
        this.formGroup.get("skills").setValue((skills.items as Skill[]).map(i => i.id));
    }

    public get isLoading(): boolean {
        return this.baseFormController.isLoading;
	}
	
	public get formGroup(): FormGroup {
		return this.formGroupSubcontroller.formGroup;
	}
}

/*


 
*/
