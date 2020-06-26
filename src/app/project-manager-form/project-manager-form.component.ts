import { Component, OnInit } from '@angular/core';
import { OfferFormConfigModel } from '../config/offer-form-config.model';
import { SkillType } from '../models/skill.model';

@Component({
  selector: 'app-project-manager-form',
  templateUrl: './project-manager-form.component.html',
  styleUrls: ['./project-manager-form.component.scss']
})
export class ProjectManagerFormComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

}

/*
    public projectManagerConfig: OfferFormConfigModel = {
        skillType: SkillType.Soft,
        actions: [
            (opt) => { opt.on(filter => filter.itemValueChanged("skills"))
                .do((s, opt) => {
                    if(s != null && s.length > 0) {
                        opt.disable("id");
                    }
                });
            },
        ]
    }
*/