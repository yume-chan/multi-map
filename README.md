# MultiMap

A single key multiple values map

- [MultiMap](#MultiMap)
  - [Install](#Install)
  - [API](#API)
  - [Development](#Development)
    - [Install dependencies:](#Install-dependencies)
    - [Testing](#Testing)
    - [Coverage](#Coverage)
  - [License](#License)

## Install

``` shell
npm i @yume-chan/multi-map
```

## API

``` ts
export interface ReadonlyMultiMap<TKey, TValue> {
    keys(): Iterable<TKey>;

    get(key: TKey): Iterable<TValue>;
}

export default class MultiMap<TKey, TValue> implements ReadonlyMultiMap<TKey, TValue> {
    add(key: TKey, value: TValue): void;

    get(key: TKey): Iterable<TValue>;
    size(key: TKey): number;

    keys(): Iterable<TKey>;

    has(key: TKey): boolean;
    has(key: TKey, value: TValue): boolean;

    delete(key: TKey): boolean;
    delete(key: TKey, value: TValue): boolean;
}
```

## Development

This project uses [pnpm](https://pnpm.js.org/) ([GitHub](https://github.com/pnpm/pnpm)) to manage dependency packages.

### Install dependencies:

``` shell
pnpm i
```

You may also use `npm`, but the lockfile may become out of sync.

### Testing

``` shell
npm test
```

### Coverage

``` shell
npm run coverage
```

## License

MIT
