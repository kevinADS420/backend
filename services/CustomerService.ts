import { PrismaClient } from '@prisma/client';

interface CustomerData {
    email: string;
    name: string;
}

interface CustomerProfile {
    id: string;
    email: string;
    name: string;
    address: string;
    phone: string;
}

export class CustomerService {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async findByEmail(email: string) {
        return await this.prisma.customer.findUnique({
            where: { email },
            select: {
                id: true,
                email: true,
                name: true,
                address: true,
                phone: true
            }
        });
    }

    async getProfile(id: string): Promise<CustomerProfile | null> {
        return await this.prisma.customer.findUnique({
            where: { id },
            select: {
                id: true,
                email: true,
                name: true,
                address: true,
                phone: true
            }
        });
    }

    async create(data: CustomerData) {
        return await this.prisma.customer.create({
            data: {
                email: data.email,
                name: data.name,
                // Add default values for required fields
                address: '',
                phone: '',
                password: '' // Consider generating a random password or handling this differently
            },
            select: {
                id: true,
                email: true,
                name: true,
                address: true,
                phone: true
            }
        });
    }

    async updateProfile(id: string, data: Partial<CustomerProfile>) {
        return await this.prisma.customer.update({
            where: { id },
            data,
            select: {
                id: true,
                email: true,
                name: true,
                address: true,
                phone: true
            }
        });
    }
} 