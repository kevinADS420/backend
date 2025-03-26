class DeleteProduct {

    private _nombrePP: string;

    constructor(
        nombreP: string

    )
    {
        this._nombrePP = nombreP
    }

    //Geters

    get nombreP():string{
        return this._nombrePP;
    }

    //seters

    set nombreP(nombreP: string) {
        this._nombrePP = nombreP;
    }

}

export default DeleteProduct;