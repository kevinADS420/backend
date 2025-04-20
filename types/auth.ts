export interface User {
    id_cliente: number;
    Email: string;
    Nombres: string;
    Apellidos: string;
    Telefono?: string;
    Direccion?: string;
    role: string;
    googleId: string;
} 