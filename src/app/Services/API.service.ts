import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class APIService {
    loading:boolean = true;
URL:any = environment.API_URL;

constructor(private http:HttpClient) { }

    createOffice(formData:any):Observable<any>{
        this.loading = true;
        return this.http.post(`${this.URL}/office`,formData);
    }

    getOffices():Observable<any>{
        this.loading = true;
        return this.http.get(`${this.URL}/office`);
    }

    getOffice(id:string):Observable<any>{
        this.loading = true;
        return this.http.get(`${this.URL}/office/${id}`);
    }

    updateOffice(id:string,formData:any):Observable<any>{
        this.loading = true;
        return this.http.put(`${this.URL}/office/${id}`,formData);
    }


    deleteOffice(id:string):Observable<any>{
        this.loading = true;
        return this.http.delete(`${this.URL}/office/${id}`);
    }

}
