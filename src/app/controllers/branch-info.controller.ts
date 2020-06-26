import { LoadOperations } from "../models/load-operations.model";
import { Skill, SkillType } from '../models/skill.model';
import { SkillService } from '../services/skill.service';
import { Injectable } from '@angular/core';
import { OfferFormConfigModel } from '../config/offer-form-config.model';
import { BaseSubcontroller } from './base-subcontroller';
import { BranchSubcontroller } from './branch.controller';

@Injectable()
export class BranchInfoSubcontroller extends BaseSubcontroller {
	public name: string = "branch-info";

	constructor(private branchSubcontroller: BranchSubcontroller) {
		super();
	}

	public init?(config: OfferFormConfigModel): void {
	}

	public async load(opt: LoadOperations): Promise<void> {
		await opt.waitFor("branch");

		return new Promise<void>((resolve) => {
			setTimeout(() => {
				console.log("branch info loaded");
				console.log("Branch loaded? " + this.branchSubcontroller.loaded)
				resolve();
			}, 200);
		});
	}
}

/*

   
    private skillsType: SkillType;

    constructor(private skillService: SkillService) {
        super();
    }

    public init?(config: OfferFormConfigModel): void {
        console.log("Skills inited");
        this.skillsType = config.skillType ?? null;
    }

    public async load(opt: LoadOperations): Promise<void> {
        if(this.skillsType == null) {
            this.skills = await this.skillService.getAll();
            console.log("all skills loaded");

        }
        else {
            this.skills = await this.skillService.getByType(this.skillsType);
            console.log(`skills for type ${this.skillsType} loaded`);
        }
	}
	*/