
export class LoadOperations {
    public controllerPromises: { [filterKey: string]: Promise<void> };

    public async waitFor(controllerName: string): Promise<void> {
        if (this.controllerPromises[controllerName] == null) {
            throw new Error(`Controller with name not found or have not been inoked yet`);
        }

        await this.controllerPromises[controllerName] ;
    }
}