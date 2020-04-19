import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserModel} from './user-model';
import {Observable, Subject} from 'rxjs';
import {StateSubject} from 'shared-lib';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private tz: string;
  private user: UserModel;
  public isLoggedIn = new StateSubject<boolean>(false);

  constructor(private http: HttpClient) {
  }

  logIn(tz: string) {
    this.tz = tz;
    return this.loadTzData();
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
            this.isLoggedIn.update(true);
          }
        },
        () => {
          obs.next(false);
        });
    return obs;
  }
}
