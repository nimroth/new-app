export class LoginRequest {
    role: string;
    id: number;
    password: string;
}

export class LoginResponse {
    id: number;
    password: string;
    status: string;
    message: string;
}
