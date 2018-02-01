import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';



import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { User } from '../model/user';

@Injectable()
export class UserService {
    protected basePath = environment.API_PATH;

    /**
     *
     */
    constructor(private httpClient: HttpClient) {}

    public getPosts(): Observable<User[]> {
       return this.httpClient.get<User[]>(this.basePath + 'posts')
       .do(data => console.log('getPosts: ' + JSON.stringify(data)));
    }

    public getPost(id: number): Observable<User> {
        return this.httpClient.get<User>(this.basePath + id);
    }
}
