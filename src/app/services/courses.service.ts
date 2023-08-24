import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Course } from "../model/course";

import { HttpClient } from "@angular/common/http";
import { map, shareReplay } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class CoursesService {
  constructor(private http: HttpClient) {}

  loadAllCourses(): Observable<Course[]> {
    return this.http.get<Course[]>("/api/courses").pipe(
      map((res) => res["payload"]),
      shareReplay()
    );
  }

  saveCourses(id: string, changes: Partial<Course>) {
    return this.http.put(`/api/courses/${id}`, changes).pipe(shareReplay());
  }
}
