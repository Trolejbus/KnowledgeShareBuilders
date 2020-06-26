export class Skill {
    public id: number;
    public name: string;
    public type: SkillType;
}

export enum SkillType {
    Soft,
    Dev,
    Program,
    Other,
}