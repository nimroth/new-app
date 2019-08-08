import { environment } from '../environments/environment';

export const Constants = {
    api: {
        userLogin: environment.apiUrl + 'login.php',
        getUserId: environment.apiUrl + 'get_user_id.php',
        getUser: environment.apiUrl + 'get_user.php',
        getGender: environment.apiUrl + 'get_gender.php',
        createUser: environment.apiUrl + 'create_user.php',
        getRole: environment.apiUrl + 'get_role.php'
    }
};
