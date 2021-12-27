import { Injectable } from '@angular/core';

@Injectable()
export class ShareDataService {

    private data:any;
    private selectecMemberId!: number;
    constructor() { }
    
    set selectedOffice(data:any){
        this.data = data;
    }

    get selectedOffice(){
        return this.data;
    }

    set selectedMember(memberId:number){
        this.selectecMemberId = memberId
    }

    get selectedMember(){
        return this.selectecMemberId;
    }
}
