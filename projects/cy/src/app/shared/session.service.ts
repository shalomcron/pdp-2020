import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserModel} from './user-model';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private tz: string;
  private user: UserModel;

  constructor(private http: HttpClient) {
  }

  setTz(tz: string): Observable<boolean> {
    this.tz = tz;
    return this.loadTzData();
  }

  geTz(): string {
    return this.tz;
  }

  geName(): string {
    return this.user ? this.user.name : 'nullll';
  }

  private loadTzData(): Observable<boolean> {
    const obs = new Subject<boolean>();
    this.http.get(`/../assets/json/users/${this.tz}.json`)
      .subscribe(user => {
          this.user = new UserModel(user);
          if (this.tz === this.user.tz) {
            obs.next(true);
          }
        },
        () => {
          obs.next(false);
        });
    return obs;
  }
}
