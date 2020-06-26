import { BaseFormController } from "./base-form.controller";
import { LoadOperations } from '../models/load-operations.model';
import { BaseSubcontroller } from './base-subcontroller';

describe('base-form.controller test', () => {
    let baseFormController: BaseFormController;
    
    beforeEach(() => {
        baseFormController = new BaseFormController({});
    });
    
    it('test registering', async () => {
        let test1 = new TestSubController1();
        baseFormController.registerSubcontroller(test1);
        expect((baseFormController as any).subcontrollers as BaseSubcontroller)
            .toContain(test1);
        expect(test1.inited).toBeTrue();
    });

    it('test registering with same name', () => {
        let test1 = new TestSubController1();
        let test12 = new TestSubController1();
        baseFormController.registerSubcontroller(test1);

        expect(() => {
            baseFormController.registerSubcontroller(test12);
        }).toThrowError("Subcontroller with given name exists");
    });

    it('test loading', async () => {
        let test1 = new TestSubController1();
        baseFormController.registerSubcontroller(test1);
        expect(test1.loaded).toBeFalse();
        await baseFormController.loadAllSubcontrollers();
        expect(test1.loaded).toBeTrue();
    });

    it('test async loading', async () => {
        let test11 = new TestSubController1();
        test11.name = "test1.1";
        let test12 = new TestSubController1();
        test12.name = "test1.2";
        let test13 = new TestSubController1();
        test13.name = "test1.3";

        baseFormController.registerSubcontroller(test11);
        baseFormController.registerSubcontroller(test12);
        baseFormController.registerSubcontroller(test13);

        let t0 = performance.now();      
        await baseFormController.loadAllSubcontrollers();       
        let t1 = performance.now();
        
        let elapsedTime = t1 - t0;
        expect(elapsedTime).toBeGreaterThan(90);
        expect(elapsedTime).toBeLessThan(150);
    });

    it('test sync loading', async () => {
        let test1 = new TestSubController1();
        let test2 = new TestSubController2();

        baseFormController.registerSubcontroller(test1);
        baseFormController.registerSubcontroller(test2);

        let t0 = performance.now();      
        await baseFormController.loadAllSubcontrollers();       
        let t1 = performance.now();
        
        let elapsedTime = t1 - t0;
        expect(elapsedTime).toBeGreaterThan(290);
        expect(elapsedTime).toBeLessThan(350);
    });

    it('test sync loading (advanced)', async () => {
        let test1 = new TestSubController1();
        let test2 = new TestSubController2();
        let test3 = new TestSubController3();
        let test4 = new TestSubController4();

        baseFormController.registerSubcontroller(test1);
        baseFormController.registerSubcontroller(test2);
        baseFormController.registerSubcontroller(test3);
        baseFormController.registerSubcontroller(test4);

        let t0 = performance.now();      
        await baseFormController.loadAllSubcontrollers();       
        let t1 = performance.now();
        
        let elapsedTime = t1 - t0;
        expect(elapsedTime).toBeGreaterThan(390);
        expect(elapsedTime).toBeLessThan(450);
    });
});

class TestSubController1 extends BaseSubcontroller {
    public name: string = "test1";
    public loaded: boolean = false;
    public inited: boolean = false;

    init(): void {
        this.inited = true;
    }

    async load(opt: LoadOperations): Promise<void> {
        return new Promise<void>((resolve) => {
            setTimeout(() => {
                this.loaded = true;
                resolve();
            }, 100);
        });
    }
}

class TestSubController2 extends BaseSubcontroller {
    public name: string = "test2";

    async load(opt: LoadOperations): Promise<void> {
        await opt.waitFor("test1");
        return new Promise<void>((resolve) => {
            setTimeout(() => {
                resolve();
            }, 200);
        });
    }
}

class TestSubController3 extends BaseSubcontroller {
    public name: string = "test3";

    async load(opt: LoadOperations): Promise<void> {
        return new Promise<void>((resolve) => {
            setTimeout(() => {
                resolve();
            }, 300);
        });
    }
}

class TestSubController4 extends BaseSubcontroller {
    public name: string = "test4";

    async load(opt: LoadOperations): Promise<void> {
        opt.waitFor("test2");
        opt.waitFor("test3");
        return new Promise<void>((resolve) => {
            setTimeout(() => {
                resolve();
            }, 400);
        });
    }
}