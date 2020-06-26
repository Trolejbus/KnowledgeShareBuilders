import { LoadOperations } from "../models/load-operations.model";
import { Injectable } from '@angular/core';
import { ActionStart } from '../actions/action-start';
import { EventsService } from '../services/events.service';
import { BaseSubcontroller } from './base-subcontroller';

@Injectable()
export class ActionsSubcontroller extends BaseSubcontroller {
    public name: string = "actions";

    constructor(private eventsService: EventsService) {
        super();
	}
	
	public async load(opt: LoadOperations): Promise<void> {
        let actions = this.config.actions ?? [];
        let actionStart = new ActionStart(this.eventsService);
        for (let action of actions) {
            action(actionStart);
        }
    }

}

/*
    
*/