import { EventsService } from '../services/events.service';

export class ActionStep<TValue> {
    private doAction: StepActionFn<TValue>;

    public do(stepAction: StepActionFn<TValue>): void {
        this.doAction = stepAction;
    }

    public execute(value: TValue, opt: ActionStepOperations<TValue>): void {
        this.doAction(value, opt);
    }
}

export declare type StepActionFn<TValue> =
    (params: TValue, opt: ActionStepOperations<TValue>) => void;

export class ActionStepOperations<TValue> {

    constructor(private eventsService: EventsService) {

    }

    public disable(key: string): void {
        this.eventsService.enabledChange.next({ key: key, value: false});
    }

    public enable(key: string): void {
        this.eventsService.enabledChange.next({ key: key, value: true});
    }

    public setValue(key: string, value: TValue): void {
        this.eventsService.setValue.next({ key: key, value: value });
    }
}