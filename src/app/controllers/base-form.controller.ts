import { Injectable } from "@angular/core";
import { LoadOperations } from '../models/load-operations.model';
import { OfferFormConfigModel } from '../config/offer-form-config.model';
import { BaseSubcontroller } from './base-subcontroller';

@Injectable()
export class BaseFormController {
    private _isLoading: boolean;
    private subcontrollers: BaseSubcontroller[] = [];

    constructor(private config: OfferFormConfigModel) {

	}
	
	public registerSubcontroller(subcontroller: BaseSubcontroller): void {
      
        if (this.subcontrollers.some(s => s.name == subcontroller.name)) {
            throw new Error("Subcontroller with given name exists");
        }

        this.subcontrollers.push(subcontroller);
        if (subcontroller.init != null) {
            subcontroller.init(this.config);
        }
	}
	
	public async loadAllSubcontrollers(): Promise<void> {

        this._isLoading = true;
        
        let cyclePromises: { [filterKey: string]: Promise<void> } = {};
        let promises = [];
        let operations = new LoadOperations();
        operations.controllerPromises = cyclePromises;
        for (let subcontroller of this.subcontrollers) {
            cyclePromises[subcontroller.name] = subcontroller.load(operations);
            promises.push(cyclePromises[subcontroller.name]);
        }
        await Promise.all(promises);
        this._isLoading = false;
	}
	
	public get isLoading(): boolean {
        return this._isLoading;
    }
}


    /*

    public async load(): Promise<void> {

        
    }

    */