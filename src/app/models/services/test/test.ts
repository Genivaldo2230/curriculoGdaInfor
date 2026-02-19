
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TestService {
  private readonly apiUrl = 'http://localhost:8080/api/ping';

  constructor(private readonly http: HttpClient) {}

  testarApi(): Observable<string> {
    return this.http.get(this.apiUrl, { responseType: 'text' });
  }
}
