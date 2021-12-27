import { Injectable } from '@angular/core';

@Injectable()
export class ShareDataService {

    private data:any;
    constructor() { }
    
    set selectedOffice(data:any){
        this.data = data;
    }

    get selectedOffice(){
        return this.data;
    }
}
