import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { Company, CompanyEssentialInfoResponse, CompanyResponse, UpdateCompany } from "../models/company.interface";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})
export class CompanyService {

    private apiUrl: string = "http://localhost:8080/api/v1/company";

    constructor(private http: HttpClient) {
    }

    getAll(): Observable<CompanyEssentialInfoResponse> {

        return this.http.get<CompanyEssentialInfoResponse>(`${this.apiUrl}/get-all`);
    }

    getById(id: number): Observable<CompanyResponse> {
        const params = new HttpParams()
            .set('id', id);
        return this.http.get<CompanyResponse>(`${this.apiUrl}/get-by-id`, { params })
    }

    update(company: UpdateCompany): Observable<CompanyResponse> {
        return this.http.put<CompanyResponse>(`${this.apiUrl}/update`, company);
    }
}