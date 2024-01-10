import { createSelector } from '@ngrx/store';
import { AppState } from 'src/model/state.model';
import { EmployeeState } from './Reducer/employee.reducer';

export const selectEmployeesState = (state: AppState) => state.employees;

export const selectAllEmployees = createSelector(
  selectEmployeesState,
  (state: EmployeeState) => state.employees
);

export const selectEmployeeById = (employeeId: number) => createSelector(
  selectAllEmployees,
  (employees) => employees.find(employee => employee.id === employeeId)
);
