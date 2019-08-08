export class LoginRequest {
    role: string;
    id: number;
    password: string;
}

export class LoginResponse {
    id: number;
    role: number;
    password: string;
    status: number;
    message: string;
}
