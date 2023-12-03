import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from '../models/company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
 private baseUrl :string = "https://localhost:7273/";
  constructor(private http:HttpClient) {
   }

  getCompanies():Observable<any>{
    const companiesUrl = `${this.baseUrl}api/companies/coordinate`
    return this.http.get<Company[]>(companiesUrl)
   }
}
