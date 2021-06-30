export class Fish{
    private _name;

    set name(value) {
        this._name = value;
    }

    get name() {
        return this._name;
    }

    get type() {
        return 'fish';
    }

    public makeSound(): string{
        return 'Blub blub'
    }
}