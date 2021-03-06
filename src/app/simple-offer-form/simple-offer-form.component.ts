import { Component, OnInit } from '@angular/core';
import { OfferFormConfigModel } from '../config/offer-form-config.model';

@Component({
  selector: 'app-simple-offer-form',
  templateUrl: './simple-offer-form.component.html',
  styleUrls: ['./simple-offer-form.component.scss']
})
export class SimpleOfferFormComponent implements OnInit {

	public simpleConfig: OfferFormConfigModel = {
		actions: [
			(opt) => opt.on(event => event.itemValueChanged("name")).do((value, act) => { act.setValue("id", value + "_ID") })
		]
	}

	constructor() { }

    ngOnInit(): void {
    }
}

   /* public simpleConfig: OfferFormConfigModel = {
        actions: [
            (opt) => {
                opt.on(filter => filter.itemValueChanged("name"))
                    .do((s, opt) => { opt.setValue("id", s + "_ID"); });
            },
        ]
    }
*/
    
