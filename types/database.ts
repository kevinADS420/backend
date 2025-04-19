export interface Ruta {
    id: number;
    nombreRuta: string;
    descripcion: string;
    precio: number;
}

export interface ServicioAdicional {
    idServicio: number;
    nombre: string;
    precio: number;
}

export interface Guia {
    id: number;
    primerNombre: string;
    primerApellido: string;
    estado: string;
} 