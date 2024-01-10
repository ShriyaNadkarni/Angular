
export interface Employee {
    id: number;
    name: string;
    gender: string;
    email: string;
    education: string;
    department: string;
    phonenumber: number;
    password: string;
    status: 'Onboarding' | 'Active' | 'Leave of Absence' | 'Resigned' | 'Terminated';
    Image: string;
  }
  