import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Course } from "../model/course";

import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { CourseDialogComponent } from "../course-dialog/course-dialog.component";
import { filter, tap } from "rxjs/operators";

@Component({
  selector: "course-card-list",
  templateUrl: "./course-card-list.component.html",
  styleUrls: ["./course-card-list.component.scss"],
})
export class CourseCardListComponent {
  @Input()
  courses: Course[];

  @Output()
  coursesChanges = new EventEmitter();

  constructor(private dialog: MatDialog) {}

  editCourse(course: Course) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "400px";

    dialogConfig.data = course;

    const dialogRef = this.dialog.open(CourseDialogComponent, dialogConfig);

    dialogRef.afterClosed().pipe(
      filter((val) => !!val),
      tap(() => this.coursesChanges.emit)
    );
  }
}
