export interface ReadonlyMultiMap<TKey, TValue> {
    get(key: TKey): Iterable<TValue>;
    size(key: TKey): number;

    has(key: TKey): boolean;
    has(key: TKey, value: TValue): boolean;

    keys(): Iterable<TKey>;
}

export default class MultiMap<TKey, TValue> implements ReadonlyMultiMap<TKey, TValue> {
    private _map: Map<TKey, Set<TValue>> = new Map();

    public add(key: TKey, value: TValue): void {
        let set = this._map.get(key);
        if (typeof set === 'undefined') {
            set = new Set();
            this._map.set(key, set);
        }

        set.add(value);
    }

    public get(key: TKey): Iterable<TValue> {
        return this._map.get(key) || [];
    }

    public size(key: TKey): number {
        const set = this._map.get(key);
        if (typeof set === 'undefined') {
            return 0;
        }

        return set.size;
    }

    public keys(): Iterable<TKey> {
        return this._map.keys();
    }

    public has(key: TKey): boolean;
    public has(key: TKey, value: TValue): boolean;
    public has(key: TKey, value?: TValue): boolean {
        const set = this._map.get(key);
        if (typeof set === 'undefined') {
            return false;
        }

        if (arguments.length === 1) {
            return true;
        } else {
            return set.has(value!);
        }
    }

    public delete(key: TKey): boolean;
    public delete(key: TKey, value: TValue): boolean;
    public delete(key: TKey, value?: TValue): boolean {
        const set = this._map.get(key);
        if (typeof set === 'undefined') {
            return false;
        }

        if (arguments.length === 1) {
            this._map.delete(key);
            return true;
        } else {
            return set.delete(value!);
        }
    }
}
