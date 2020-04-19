import {BehaviorSubject, Subject} from 'rxjs';

export class StateSubject<U> {
  private readonly data: Subject<U>;
  private valueData: U;

  constructor(initData?: U) {
    this.data = initData ? new Subject() : new BehaviorSubject<U>(initData);
  }

  get data$(): Subject<U> {
    return this.data;
  }

  get value(): U {
    return this.valueData;
  }

  update(data?: U) {
    const newData = data !== undefined ? data : this.value;
    this.valueData = newData;
    this.data$.next(newData);
  }

  complete() {
    this.data$.complete();
  }
}
