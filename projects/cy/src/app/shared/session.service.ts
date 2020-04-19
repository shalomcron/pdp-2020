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
  public user =  new StateSubject<UserModel>();
  public isLoggedIn = new StateSubject<boolean>(false);

  constructor(private http: HttpClient) {
  }

  logIn(tz: string) {
    this.tz = tz;
    return this.loadTzData();
  }

  private loadTzData() {
    this.http.get(`/../assets/json/users/${this.tz}.json`)
      .subscribe((user: UserModel)  => {
          if (this.tz === user.tz) {
            this.user.update(new UserModel(user));
            this.isLoggedIn.update(true);
          }
        },
        () => {
          // obs.next(false);
        });
  }
}
