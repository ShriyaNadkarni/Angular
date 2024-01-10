import { createAction, props } from '@ngrx/store';
import { Employee } from 'src/model/employee.model';

export const addEmployee = createAction(
  '[Employee Page] Add Employee',
  props<{ employee: Employee }>()
);

export const removeEmployee = createAction(
  '[Employee Page] Remove Employee',
  props<{ id: number }>()
);

export const updateEmployeeStatus = createAction(
  '[Employee Page] Update Employee Status',
  props<{ id: number; status: 'Onboarding' | 'Active'| 'Leave of Absence' | 'Resigned' | 'Terminated' }>()
);

export const updateEmployeeStatusSuccess = createAction(
  '[Employee API] Update Employee Status Success'
);

export const updateEmployeeStatusFailure = createAction(
  '[Employee API] Update Employee Status Failure',
  props<{ error: string }>()
);

export const loadEmployees = createAction('[Employee Page] Load Employees');

export const loadEmployeesSuccess = createAction(
  '[Employee API] Employees Load Success',
  props<{ employees: Employee[] }>()
);

export const loadEmployeesFailure = createAction(
  '[Employee API] Employees Load Failure',
  props<{ error: string }>()
);
