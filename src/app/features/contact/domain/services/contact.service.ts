import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { AllContactsResponse, ContactResponse, UpdateContact } from "../models/contact.interface";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})
export class ContactService {

    private apiUrl: string = "http://localhost:8085/api/v1/contact";

    constructor(private http: HttpClient) {
    }

    getAll(): Observable<AllContactsResponse> {
        return this.http.get<AllContactsResponse>(`${this.apiUrl}/get-all`);
    }

    getById(id: string): Observable<ContactResponse> {
        const params = new HttpParams()
            .set('id', id);
        return this.http.get<ContactResponse>(`${this.apiUrl}/get-by-id`, { params })
    }

    update(contact: UpdateContact): Observable<ContactResponse> {
        return this.http.put<ContactResponse>(`${this.apiUrl}/update`, contact);
    }
}