import { PrismaClient } from '@prisma/client';

interface CustomerData {
    Email: string;
    Nombres: string;
    Apellidos: string;
    googleId?: string;
    role?: string;
}

interface CustomerProfile {
    id_cliente: number;
    Email: string;
    Nombres: string;
    Apellidos: string;
    role?: string;
    googleId?: string;
}

export class CustomerService {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async findByEmail(email: string) {
        const result = await this.prisma.cliente.findUnique({
            where: { Email: email }
        });
        
        if (!result) return null;
        
        return {
            id_cliente: result.id_cliente,
            Email: result.Email,
            Nombres: result.Nombres,
            Apellidos: result.Apellidos,
            role: (result as any).role || 'cliente',
            googleId: (result as any).googleId
        };
    }

    async getProfile(id: number): Promise<CustomerProfile | null> {
        return await this.prisma.cliente.findUnique({
            where: { id_cliente: id },
            select: {
                id_cliente: true,
                Email: true,
                Nombres: true,
                Apellidos: true
            }
        });
    }

    async create(data: CustomerData) {
        const customerData = {
            Email: data.Email,
            Nombres: data.Nombres,
            Apellidos: data.Apellidos,
            contraseña: Buffer.from(''),
            ...(data.googleId && { googleId: data.googleId }),
            ...(data.role && { role: data.role })
        };
        
        const result = await this.prisma.cliente.create({
            data: customerData
        });

        return {
            id_cliente: result.id_cliente,
            Email: result.Email,
            Nombres: result.Nombres,
            Apellidos: result.Apellidos,
            role: (result as any).role || 'cliente',
            googleId: (result as any).googleId
        };
    }

    async updateProfile(id: number, data: Partial<CustomerProfile>) {
        return await this.prisma.cliente.update({
            where: { id_cliente: id },
            data,
            select: {
                id_cliente: true,
                Email: true,
                Nombres: true,
                Apellidos: true
            }
        });
    }
} 