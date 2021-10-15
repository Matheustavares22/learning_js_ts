export class Negociation {
    constructor(
        private _date: Date,
        public readonly quantity: number,
        public readonly value: number
    ) {}

    get date(): Date {
        const data = new Date(this._date.getTime());
        return this.date;
    }

    get volume(): number {
        return this.quantity * this.value;
    }
}