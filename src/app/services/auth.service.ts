import { Injectable, signal } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { single, tap } from 'rxjs/operators';

export interface IAuth {
  token: string;
}

export interface ITodo {
  _id: string;
  title: string;
  description: string;
  category: string;
  date: Date;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public _isLoggedIn$ = new BehaviorSubject<boolean>(false);

  isLoggedIn$ = this._isLoggedIn$.asObservable();

  private myToken = '';
  private url: string = 'http://localhost:5000/api/auth';
  private urlRegister: string = 'http://localhost:5000/api/users';

  constructor(private http: HttpClient) {
    this.myToken = localStorage.getItem('authToken')!;
    this._isLoggedIn$.next(!!this.myToken);
  }

  login(email: string, password: string): Observable<IAuth> {
    return this.http
      .post<IAuth>(this.url, {
        email: email,
        password: password,
      })
      .pipe(
        tap((response: any) => {
          this._isLoggedIn$.next(true);

          localStorage.setItem('authToken', response.token);
        })
      );
  }

  logout() {
    this._isLoggedIn$.next(false);

    localStorage.removeItem('authToken');
  }

  register(name: string, email: string, password: string): Observable<IAuth> {
    return this.http
      .post<IAuth>(this.urlRegister, {
        name: name,
        email: email,
        password: password,
      })
      .pipe(
        tap((response: any) => {
          this._isLoggedIn$.next(true);
          localStorage.setItem('authToken', response.token);
        })
      );
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'x-auth-token': this.myToken!,
    }),
  };
  getTodos() {
    return this.http.get<ITodo>(
      'http://localhost:5000/api/todos',
      this.httpOptions
    );
  }
}
