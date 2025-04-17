import { PrismaClient } from '@prisma/client';

interface CustomerData {
    Email: string;
    Nombres: string;
    Apellidos: string;
}

interface CustomerProfile {
    id_cliente: number;
    Email: string;
    Nombres: string;
    Apellidos: string;
}

export class CustomerService {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async findByEmail(email: string) {
        return await this.prisma.cliente.findUnique({
            where: { Email: email },
            select: {
                id_cliente: true,
                Email: true,
                Nombres: true,
                Apellidos: true
            }
        });
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
        return await this.prisma.cliente.create({
            data: {
                Email: data.Email,
                Nombres: data.Nombres,
                Apellidos: data.Apellidos,
                contraseña: Buffer.from('') // Consider generating a random password or handling this differently
            },
            select: {
                id_cliente: true,
                Email: true,
                Nombres: true,
                Apellidos: true
            }
        });
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