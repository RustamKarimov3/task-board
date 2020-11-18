export type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never; // TODO: возможно переделать работу со стором используя redux-utils, там это вроде из коробки
