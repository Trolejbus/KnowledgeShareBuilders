import { Skill, SkillType } from '../models/skill.model';
import { Injectable } from "@angular/core";

@Injectable()
export class SkillService {
    private skills: Skill[] = [
        {
            id: 1,
            name: "C#",
            type: SkillType.Dev,
        },
        {
            id: 2,
            name: "Java",
            type: SkillType.Dev,
        },
        {
            id: 3,
            name: "Pascal",
            type: SkillType.Dev,
        },
        {
            id: 4,
            name: "Azure",
            type: SkillType.Dev,
        },
        {
            id: 5,
            name: "Managmenet",
            type: SkillType.Soft,
        },
        {
            id: 6,
            name: "Awesomest",
            type: SkillType.Soft,
        },
        {
            id: 7,
            name: "Communication",
            type: SkillType.Soft,
        },
        {
            id: 8,
            name: "Office 365",
            type: SkillType.Program,
        },
        {
            id: 9,
            name: "Photoshop",
            type: SkillType.Program,
        },
        {
            id: 10,
            name: "Winamp",
            type: SkillType.Program,
        },
        {
            id: 11,
            name: "Billard",
            type: SkillType.Other,
        },
        {
            id: 12,
            name: "Soccer",
            type: SkillType.Other,
        },
        {
            id: 13,
            name: "Bridge",
            type: SkillType.Other,
        },
    ];

    public async getAll(): Promise<Skill[]> {
        return new Promise((resolve) => {
            setTimeout(() => {
				console.log("skill loaded");

                resolve(this.skills.filter(f => true));
            }, 1000);
        });
    }

    public async getByType(skillsType: SkillType): Promise<Skill[]> {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.skills.filter(s => s.type == skillsType));
            }, 1000);
        });
    }
}