import { environment } from '../environments/environment';

export const Constants = {
    api: {
        getGender: environment.apiUrl + 'gender',
        employee: environment.apiUrl + 'employee',
        getRole: environment.apiUrl + 'role'
    }
};
