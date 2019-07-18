export class LoginRequest {
    id: number;
    password: string;
}

export class LoginResponse {
    id: number;
    password: string;
    status: string;
    message: string;
}
