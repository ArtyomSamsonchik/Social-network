import {Component, FunctionComponent} from "react";

type AnyComponent<T> = FunctionComponent<T> | Component<T>
type PropsType<T> = T extends AnyComponent<infer Props> ? Props : never
type PropsKeysType<T> = keyof PropsType<T>

export type MapToPropsType<C extends AnyComponent<any>, K extends PropsKeysType<C>>
    = Pick<PropsType<C>, K>