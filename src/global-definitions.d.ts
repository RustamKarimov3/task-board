// import { ObjectKeys } from './types/common';

interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: any;
}

type ObjectKeys<T> = T extends object
    ? (keyof T)[]
    : T extends number
    ? []
    : T extends Array<any> | string
    ? string[]
    : never;

interface ObjectConstructor {
    keys<T>(o: T): ObjectKeys<T>;
}
