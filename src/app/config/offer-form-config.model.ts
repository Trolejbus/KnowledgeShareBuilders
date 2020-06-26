import { SkillType } from "../models/skill.model";
import { ActionFn } from '../actions/action-start';

export class OfferFormConfigModel {
    public skillType?: SkillType;
    public actions?: ActionFn[];
}