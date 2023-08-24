import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { filter } from "rxjs/operators";

@Injectable()
export class MessagesService {
  messagesSubject = new BehaviorSubject<string[]>([]);
  errors$: Observable<string[]> = this.messagesSubject
    .asObservable()
    .pipe(filter((el) => el && el.length > 0));

  constructor() {}

  showErrors(...errors: string[]) {
    console.log(errors);
    this.messagesSubject.next(errors);
  }
}
