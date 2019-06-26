import MultiMap from '../src';

describe('MultiMap', () => {
    describe('#add', () => {
        it('should add value if key not exists', () => {
            const map = new MultiMap<String, string>();
            map.add('key', 'value');
            expect(map).toMatchSnapshot();
        });

        it('should add value if key exists', () => {
            const map = new MultiMap<String, string>();
            map.add('key', 'value1');
            map.add('key', 'value2');
            expect(map).toMatchSnapshot();
        });

        it('should not add duplicate values', () => {
            const map = new MultiMap<String, string>();
            map.add('key', 'value1');
            map.add('key', 'value1');
            expect(map).toMatchSnapshot();
        });
    });

    describe('#has', () => {
        it('should return true if key exists', () => {
            const map = new MultiMap<String, string>();
            map.add('key', 'value');
            expect(map.has('key')).toBe(true);
        });

        it('should return true if value exists', () => {
            const map = new MultiMap<String, string>();
            map.add('key', 'value');
            expect(map.has('key', 'value')).toBe(true);
        });

        it('should return false if key not exists', () => {
            const map = new MultiMap<String, string>();
            expect(map.has('key')).toBe(false);
        });

        it('should return false if value not exists', () => {
            const map = new MultiMap<String, string>();
            expect(map.has('key', 'value')).toBe(false);
        });
    });

    describe('#get', () => {
        it('should return all values', () => {
            const map = new MultiMap<String, string>();

            map.add('key', 'value1');
            expect(Array.from(map.get('key'))).toEqual(['value1']);

            map.add('key', 'value2');
            expect(Array.from(map.get('key'))).toEqual(['value1', 'value2']);

            map.delete('key', 'value2');
            expect(Array.from(map.get('key'))).toEqual(['value1']);
        });

        it('should return empty iterable if key not exists', () => {
            const map = new MultiMap<String, string>();
            expect(Array.from(map.get('key'))).toEqual([]);
        });
    });

    describe('size', () => {
        it('should return 0 if key not exists', () => {
            const map = new MultiMap<String, string>();
            expect(map.size('key')).toBe(0);
        });

        it('should return count of values if key exists', () => {
            const map = new MultiMap<String, string>();

            map.add('key1', 'value1');
            expect(map.size('key1')).toBe(1);

            map.add('key1', 'value2');
            expect(map.size('key1')).toBe(2);

            map.add('key2', 'value');
            expect(map.size('key1')).toBe(2);
        });
    });

    describe('#keys', () => {
        it('should return all keyes', () => {
            const map = new MultiMap<String, string>();

            map.add('key1', 'value1');
            expect(Array.from(map.keys())).toEqual(['key1']);

            map.add('key1', 'value2');
            expect(Array.from(map.keys())).toEqual(['key1']);

            map.add('key2', 'value');
            expect(Array.from(map.keys())).toEqual(['key1', 'key2']);
        });
    });

    describe('#delete', () => {
        it('should delete and return true if the value exists', () => {
            const map = new MultiMap<String, string>();
            map.add('key', 'value');
            expect(map.delete('key', 'value')).toBe(true);
            expect(map).toMatchSnapshot();
        });

        it('should delete and return true if the key exists', () => {
            const map = new MultiMap<String, string>();
            map.add('key', 'value');
            expect(map.delete('key')).toBe(true);
            expect(map).toMatchSnapshot();
        });

        it('should return false if the value not exists', () => {
            const map = new MultiMap<String, string>();
            expect(map.delete('key', 'value')).toBe(false);
            expect(map).toMatchSnapshot();
        });

        it('should return false if the key not exists', () => {
            const map = new MultiMap<String, string>();
            expect(map.delete('key')).toBe(false);
            expect(map).toMatchSnapshot();
        });
    });
});
