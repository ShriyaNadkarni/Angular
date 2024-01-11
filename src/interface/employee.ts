export interface Employee {
    filter(arg0: (emp: any) => any): any;
    id: number;
    name: string;
    gender: string;
    email: string;
    education: string;
    department: string;
    phonenumber: number;
    password: string;
    status: 'Onboarding' | 'Active' | 'Leave of Absence' | 'Resigned' | 'Terminated';
    Image:string;
    isAdmin?: boolean;
}

