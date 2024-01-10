import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of, from } from 'rxjs';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState } from 'src/model/state.model';
import { EmployeeService } from 'src/service/employee.service';
import {
  loadEmployees,
  updateEmployeeStatus,
  loadEmployeesSuccess,
  loadEmployeesFailure,
  updateEmployeeStatusSuccess,
  updateEmployeeStatusFailure,
} from 'src/app/store/Actions/employee.actions';
import { selectAllEmployees } from './employee.selectors';

@Injectable()
export class EmployeeEffects {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private employeeService: EmployeeService
  ) {}

  loadEmployees$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadEmployees),
      switchMap(() =>
        from(this.employeeService.getDetails()).pipe(
          map((employees) => loadEmployeesSuccess({ employees })),
          catchError((error) => of(loadEmployeesFailure({ error })))
        )
      )
    )
  );

  updateEmployeeStatus$ = createEffect(() =>
  this.actions$.pipe(
    ofType(updateEmployeeStatus),
    withLatestFrom(this.store.select(selectAllEmployees)),
    switchMap(([action, employees]) =>
      from(this.employeeService.updateEmployeeStatus(action.id, action.status)).pipe(
        map(() => updateEmployeeStatusSuccess()),
        catchError((error) => of(updateEmployeeStatusFailure({ error })))
      )
    )
  )
);

}
