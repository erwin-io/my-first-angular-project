import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Contact } from '../models/contact';

const baseUrl: string = environment.baseCustomerServiceUrl;

@Injectable({ providedIn: 'root' })
export class ContactService {

  constructor(private http: HttpClient) { }

  fetchMyContacts(): Observable<Contact[]> {
    let url = `${baseUrl}/contact`;
    //console.log("Fetch my contacts URL is " + url);

    return this.http.get<Contact[]>(url);
  }

  create(contact: Contact): Observable<Contact> {
    let url = `${baseUrl}/contact`;
    //console.log("Create contact URL is " + url);

    return this.http.post<Contact>(url, contact);
  }

  update(contact: Contact): Observable<Contact> {
    let url = `${baseUrl}/contact/${contact.id}`;
    //console.log("Update contact URL is " + url);

    return this.http.put<Contact>(url, contact);
  }

  fetchById(id: string): Observable<Contact> {
    if (id) {
      let url = `${baseUrl}/contact/${id}`;
      //console.log("Fetch contact URL is " + url);

      return this.http.get<Contact>(url);
    } else {
      return of(null);
    }
  }

  doesEmailExist(email: string): Observable<boolean> {
    let url = `${baseUrl}/contact/emailcheck`;

    let content: any = {};
    content.email = email;

    let response$: Observable<boolean> = this.http.post<boolean>(url, content);

    return response$;
  }
}