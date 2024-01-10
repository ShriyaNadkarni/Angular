import { createReducer, on } from '@ngrx/store';
import * as employeeActions from '../Actions/employee.actions';
import { Employee } from 'src/model/employee.model';

export interface EmployeeState {
  employees: Employee[];
  error: string | null;
}

export const initialState: EmployeeState = {
  employees: [],
  error: null,
};

export const employeeReducer = createReducer(
  initialState,
  on(employeeActions.loadEmployees, (state) => state),
  on(employeeActions.loadEmployeesSuccess, (state, { employees }) => {
    return { ...state, employees, error: null };
  }),
  on(employeeActions.loadEmployeesFailure, (state, { error }) => {
    return { ...state, error };
  }),
  on(employeeActions.addEmployee, (state, { employee }) => {
    const employees = [...state.employees, employee];
    return { ...state, employees };
  }),
  on(employeeActions.removeEmployee, (state, { id }) => {
    const employees = state.employees.filter((employee) => employee.id !== id);
    return { ...state, employees };
  }),
  on(employeeActions.updateEmployeeStatus, (state) => state),
  on(employeeActions.updateEmployeeStatusSuccess, (state) => {
    return state;
  }),
  on(employeeActions.updateEmployeeStatusFailure, (state, { error }) => {
    return { ...state, error };
  })
);
