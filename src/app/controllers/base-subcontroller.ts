import { LoadOperations } from '../models/load-operations.model';
import { OfferFormConfigModel } from '../config/offer-form-config.model';

export abstract class BaseSubcontroller {
    public abstract name: string;
    protected config: OfferFormConfigModel;

    public init?(config: OfferFormConfigModel): void {
        this.config = config;
    }
    
    public async load(opt: LoadOperations): Promise<void> {

    }
}