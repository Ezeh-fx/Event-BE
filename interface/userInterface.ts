export interface user {
    name: string;
    email: string;
    phoneNumber: string;
    password: string;
    role:"organisers" | "attendies";
}