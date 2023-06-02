import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpUsersListResponse,userType } from '../types/users.type';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  //url='https://reqres.in/api/users';
  constructor(private http: HttpClient) { }
  public perPage=6;
  getUsers(page:Number): Observable<userType[]> {
   return this.http.get<HttpUsersListResponse>(`${environment.apiLink}/?page=${page}&per_page=${this.perPage}`).pipe(
      map(response => response.data)
    );
    
  }
  deleteUser(userId: number): Observable<void> {
    const url = `${environment.apiLink}/${userId}`;
    return this.http.delete<void>(url);
  }
}
