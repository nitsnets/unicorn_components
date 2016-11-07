import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, Response, URLSearchParams } from '@angular/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class ApiService {
    constructor(private http: Http) { }

    get(url: string, params: Object = null): Observable<any> {
        let search = params ? new URLSearchParams() : null;
        if (search) {
          for (let key in params) {
            if (params.hasOwnProperty(key)) {
              search.set(key, params[key]);
           }
          }
        }
        return this.http.get(environment.api + url, { search }).map(
            (res: Response) => res.json()
        );
    }
    post(url: string, params: Object = null): Observable<any> {
        let body = params ? JSON.stringify(params) : '';
        return this.http.post(environment.api + url, body).map(
            (res: Response) => res.json()
        );
    }
    delete(url: string): Observable<any> {
        return this.http.delete(environment.api + url).map(
            (res: Response) => res.json()
        );
    }
}
