import Item from "./item";

export default class Order {
    private _id: number;
    private _customer: string;
    private _itens: Array<Item>;
    private _cupon: string;

    constructor(id: number, customer: string, cupon: string, itens: Array<Item>) {
        this._id = id;
        this._customer = customer;
        this._itens = itens;
        this._cupon = cupon;
    }

    public get total(): number {
        return this._itens.reduce((total, item) => total + item.total, 0);
    }
}