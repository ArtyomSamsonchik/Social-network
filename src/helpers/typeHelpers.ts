import {Component, FunctionComponent} from "react";
import {Action, AnyAction} from "redux";
import {ThunkAction} from "redux-thunk";

//TODO: Duplicate Action and AnyAction types from redux to make them independent from redux library.
type AnyComponent<T> = FunctionComponent<T> | Component<T>
type PropsType<T> = T extends AnyComponent<infer Props> ? Props : never
type PropsKeysType<T> = keyof PropsType<T>
type ActionCreatorReturnType<A extends AnyAction, R> = A | ThunkAction<R, any, any, A>

export type MapToPropsReturnType<C extends AnyComponent<any>, K extends PropsKeysType<C>>
    = Pick<PropsType<C>, K>

export type MapActionCreators<C extends AnyComponent<any>, K extends PropsKeysType<C>, A extends Action = AnyAction> = {
    [P in K]: (...args: Parameters<PropsType<C>[P]>) => ActionCreatorReturnType<A, ReturnType<PropsType<C>[P]>>
}