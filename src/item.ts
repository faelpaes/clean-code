export default class Item {
    private _id: number;
    private _description: string;
    private _value: number;
    private _quantity: number;

    constructor(id: number, description: string, value: number, quantity: number) {
        this._id = id;
        this._description = description;
        this._value = value;
        this._quantity = quantity;
    }

    public get total(): number {
        return this._value * this._quantity;
    }
}