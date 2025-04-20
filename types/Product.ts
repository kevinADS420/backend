import { RowDataPacket } from 'mysql2';

export interface Product extends RowDataPacket {
    id_producto: number;
    nombreP: string;
    tipo: string;
    Precio: number;
    imagen: Buffer | null;
    id_inventario: number;
    id_proveedor: number;
}

export interface ProcessedProduct extends Omit<Product, 'imagen'> {
    imagen: string | null;
}

export interface ProductDto {
    nombreP: string;
    tipo: string;
    Precio: number;
    imagen: Buffer;
    id_inventario?: number;
    id_proveedor?: number;
} 