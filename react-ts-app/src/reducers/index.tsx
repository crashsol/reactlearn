<<<<<<< HEAD
import { EnthusiasmAction } from '../actions';
import { StoreState } from '../types/index';
import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM } from '../constants/index'

export function enthusiasm(state: StoreState, action: EnthusiasmAction): StoreState {
    switch (action.type) {
        case INCREMENT_ENTHUSIASM:
            return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 };
        case DECREMENT_ENTHUSIASM:
            return { ...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1) };
    }
    return state;
}
=======
/* 定义Reducer */
import { EnthusiasmAction } from '../actions/index'
import { StoreState } from '../types/index'
import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM } from '../constants/index'

/* 定义一个函数，传入一个StoreState对象，EnthusiasmAction 对象，处理后返回一个 StoreState*/
export function enthusiasm(state: StoreState, action: EnthusiasmAction): StoreState {

    switch (action.type) {
        /* 如果增加 */
        case INCREMENT_ENTHUSIASM:
            return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 }

        case DECREMENT_ENTHUSIASM:
            return { ...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1) }
    }
    return state;
}
>>>>>>> 17dd89db877f97fd01181e95215a80b39277e50b
