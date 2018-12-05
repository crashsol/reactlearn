/* 使用dva管理状态 */
import request from "../util/request";

const delay = (millisecond) =>{
    return new Promise((resolve) =>{
        setTimeout(resolve, millisecond);
    })
}
const endPointURI = 'https://localhost:5001/api/values';



export default {
    namespace: 'puzzlecards',
    state: {
        data: [],
        counter: 100

    },
    //* 异步方法 */
    effects: {
        * queryInitCards(_, sagaEffects) {
            const {
                call,
                put
            } = sagaEffects;

            const puzzle = yield call(request, endPointURI);
            yield put({
                type: 'addNewCard',
                payload: puzzle
            });

            yield call(delay, 3000);

            const puzzle2 = yield call(request, endPointURI);
            yield put({
                type: 'addNewCard',
                payload: puzzle2
            });
        }
    },

    /* 状态管理方法 纯函数，返回的内容将完全替代status */
    reducers: {
        /* 添加一个添加Card的方法 */
        addNewCard(state, {
            payload: newCard
        }) {
            const nextCounter = state.counter + 1;
            const newCardWithId = { ...newCard,
                id: nextCounter
            };
            const nextData = state.data.concat(newCardWithId);
            return {
                data: nextData,
                counter: nextCounter
            }

        }
    }
}