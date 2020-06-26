import { LoadOperations } from "../models/load-operations.model";
import { Skill, SkillType } from '../models/skill.model';
import { SkillService } from '../services/skill.service';
import { Injectable } from '@angular/core';
import { OfferFormConfigModel } from '../config/offer-form-config.model';
import { BaseSubcontroller } from './base-subcontroller';

@Injectable()
export class SkillSubcontroller extends BaseSubcontroller {
    public name: string = "skills";
    public skills: Skill[];
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

}