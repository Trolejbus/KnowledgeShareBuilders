import { Injectable } from "@angular/core";
import { Subject, Observable } from "rxjs";
import { ValueChangeEventArgs } from "../models/value-change.event-args";

@Injectable()
export class EventsService {
    private valueChangeSubject = new Subject<ValueChangeEventArgs>();
    public enabledChange = new Subject<ValueChangeEventArgs>();
    public setValue = new Subject<ValueChangeEventArgs>();

    public onElementValueChange(): Observable<ValueChangeEventArgs> {
        return this.valueChangeSubject.asObservable();
    }

    public invokeElementValueChange(key: string, value: any): void {
        this.valueChangeSubject.next({
            key: key,
            value: value,
        });
    }
}