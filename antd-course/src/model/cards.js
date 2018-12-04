import request from '../util/request'
const delay = (millisecond) => {
    return new Promise((resolve) => {
        setTimeout(resolve, millisecond);
    })
}
export default {
    namespaces: 'cards',
    state: {
        cards: []
    },
    effects: {
        *queryList(_, sagaEffects) {
            const listData = [{
                name: 'umi',
                desc: '极快的类 Next.js 的 React 应用框架',
                url: 'https://umijs.org'
            },
            {
                name: 'antd',
                desc: '一个服务于企业级产品的设计体系',
                url: 'https://ant.design/index-cn'
            },
            {
                name: 'antd-pro',
                desc: '一个服务于企业级产品的设计体系',
                url: 'https://ant.design/index-cn'
            }];
            const { call, put } = sagaEffects;
            yield call(delay, 3000);
            yield put({ type: 'initList', payload: listData });
        }
    },

    reducers: {
        initList(state, { payload }) {
            const cardsList = [...payload]
            return {
                cardsList
            }
        },
        //添加一条记录
        addOne(state, { payload }) {
            console.log(state);
            //获取原来的数据
            let cardsList = state.cardsList;
            console.log(payload);
            //将添加的数据与原来数据merge
            cardsList.push({ ...payload })
            //返回新的数据
            return {
                cardsList
            }
        }
    }

}
