import { Injectable } from '@angular/core';
import { Employee } from '../models/Employee';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CrudAppService {
  baseUrl = 'http://localhost:4200';

  constructor(private http: HttpClient) {}

  createEmployee(Employee: Employee) {
    return this.http.post(`${this.baseUrl}/employee`, {
      Employee,
    });
  }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.baseUrl}/employee`)
  }

  updateEmployee(Employee: Employee) {
    return this.http.put(this.baseUrl, {
      Employee,
    });
  }

  deleteEmployee(id: number) {
    return this.http.delete<any>(
      `${this.baseUrl}/${id}`,
    );
  }
}
