import {FunctionComponent} from "react";

export type FCPropsType<T> = T extends FunctionComponent<infer Props>
    ? Props
    : never
export type FCPropsKeysType<T> = keyof FCPropsType<T>
export type MapToPropsType<C extends FunctionComponent<any>, K extends FCPropsKeysType<C>>
    = Pick<FCPropsType<C>, K>