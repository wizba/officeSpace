import { Injectable } from '@angular/core';

@Injectable()
export class StoreService {

    private data:any;
    constructor() { }
    
    set officeData(officeData:any){
        this.data = officeData;
    }

    get officeData(){
        return this.data;
    }
}
