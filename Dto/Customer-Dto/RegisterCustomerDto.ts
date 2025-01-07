class Customer {
    
    private _nombre: string;
    private _apellido1: string;
    private _apellido2: string;
    private _direccion: string;
    private _calle: string;
    private _carrera: string;
    private _email: string;
    private _contraseña: string

    constructor(
        nombre: string,
        apellido1: string, 
        apellido2: string, 
        direccion: string,
        calle: string,
        carrera: string,
        email: string,
        contraseña: string
    ) {
        this._nombre = nombre;
        this._apellido1 = apellido1;
        this._apellido2 = apellido2;
        this._direccion = direccion;
        this._calle = calle;
        this._carrera = carrera
        this._email = email;
        this._contraseña = contraseña;
    }

    // Getters
    
    get nombre(): string {
        return this._nombre;
    }

    get apellido1(): string {
        return this._apellido1;
    }

    get apellido2(): string {
        return this._apellido2;
    }

    get direccion(): string {
        return this._direccion;
    }

    get calle(): string {
        return this._calle
    }

    get carrera(): string {
        return this._carrera;
    }
    
    get email(): string {
        return this._email;
    }

    get contraseña(): string {
        return this._contraseña;
    }

    // Setters
    
    set nombre(nombre: string) {
        this._nombre = nombre;
    }

    set apellido1(apellido1: string) {
        this._apellido1 = apellido1;
    }

    set apellido2(apellido2: string) {
        this._apellido2 = apellido2;
    }

    set direccion(direccion: string) {
        this._direccion = direccion;
    }

    set calle(calle: string) {
        this._calle = calle;
    }

    set carrera(carrera: string) {
        this._carrera = carrera;
    }
    
    set email(email: string) {
        this._email = email;
    }

    set contraseña(contraseña: string) {
        this._contraseña = contraseña;
    }
}

export default Customer;