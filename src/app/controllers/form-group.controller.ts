import { BaseSubcontroller } from './base-subcontroller';
import { LoadOperations } from '../models/load-operations.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EventsService } from '../services/events.service';
import { Injectable } from '@angular/core';

@Injectable()
export class FormGroupSubController extends BaseSubcontroller {
    public name: string = "form-group";
    public formGroup: FormGroup;

    constructor(private eventsService: EventsService) {
        super();
    }

    public async load(opt: LoadOperations): Promise<void> {
        this.buildFormGroup();
        this.eventsService.enabledChange.subscribe(s => {
            let formControl = this.formGroup.get(s.key);
            if (s.value) {
                formControl.enable();
            }
            else {
                formControl.disable();
            }
        });
        this.eventsService.setValue.subscribe(s => {
            let formControl = this.formGroup.get(s.key);
            formControl.setValue(s.value);
        });
    }

    private buildFormGroup(): void {
        this.formGroup = new FormGroup({
            name: new FormControl("", Validators.required),
            id: new FormControl(),
            description: new FormControl(),
            skills: new FormControl([]),
        });
        
        this.formGroup.get("name").valueChanges
            .subscribe(s => this.eventsService.invokeElementValueChange("name", s));
        this.formGroup.get("id").valueChanges
            .subscribe(s => this.eventsService.invokeElementValueChange("id", s));
        this.formGroup.get("description").valueChanges
            .subscribe(s => this.eventsService.invokeElementValueChange("description", s));
        this.formGroup.get("skills").valueChanges
            .subscribe(s => this.eventsService.invokeElementValueChange("skills", s));
    }
}