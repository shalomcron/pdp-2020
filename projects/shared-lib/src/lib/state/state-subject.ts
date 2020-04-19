import {BehaviorSubject, Subject} from 'rxjs';

export class StateSubject<U> {
  private data: BehaviorSubject<U>;
  private valueData: U;

  constructor(initData?: U) {
    this.data = new BehaviorSubject<U>(initData);
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
