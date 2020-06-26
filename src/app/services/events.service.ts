import { Injectable } from "@angular/core";
import { Subject, Observable } from "rxjs";
import { ValueChangeEventArgs } from "../models/value-change.event-args";

@Injectable()
export class EventsService {
    public valueChangeSubject = new Subject<ValueChangeEventArgs>();
    public enabledChange = new Subject<ValueChangeEventArgs>();
    public setValue = new Subject<ValueChangeEventArgs>();
}