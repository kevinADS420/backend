class DeleteProduct {

    private _nombreP: string;

    constructor(
        nombreP: string

    )
    {
        this._nombreP = nombreP
    }

    //Geters

    get nombreP():string{
        return this._nombreP;
    }

    //seters

    set nombreP(nombreP: string) {
        this._nombreP = nombreP;
    }

}

export default DeleteProduct;