import { Observable } from "rxjs";
import { EventsService } from "../services/events.service";
import { filter, map } from 'rxjs/operators';
import { ActionStep, ActionStepOperations } from "./action-step";

export class ActionStart {
    constructor(private eventsService: EventsService) {
    }

    public on<TValue>(filterEvent: (on: OnAction) => Observable<TValue>): ActionStep<TValue> {
        let onActions = new OnAction(this.eventsService);
        let observable = filterEvent(onActions);
        let nextStep = new ActionStep<TValue>();
        observable.subscribe(o => {
            let opt = new ActionStepOperations(this.eventsService);
            nextStep.execute(o, opt);
        });
        return nextStep;
    }
}

export class OnAction {
    constructor(private eventsService: EventsService) {
    }

    public itemValueChanged(key: string): Observable<any> {
        
        return this.eventsService.valueChangeSubject.asObservable()
            .pipe(filter(arg => arg.key == key))
            .pipe(map(arg => arg.value));
    }
}

export declare type ActionFn = (opt: ActionStart) => void

export declare type StepActionFn<TValue> =
    (params: TValue, opt: ActionStepOperations<TValue>) => void;
