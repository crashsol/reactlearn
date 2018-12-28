/* 容器组件 */
import Hello from '../components/Hello'
import * as actions from '../actions'
import { StoreState } from '../types/index'
import { connect} from 'react-redux';
import { Dispatch } from 'redux';

/* 从状态管理器中导出内容给props属性 */
export function mapStateToProps({ enthusiasmLevel, languageName }: StoreState) {
    return {
        enthusiasmLevel,
        languageName
    }
}
/* 将方法从导出 */
export function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>) {
    return {
        onIncrement: () => dispatch(actions.incrementEnthusiasm()),
        onDecrement: () => dispatch(actions.decrementEnthusiasm()),
    }
}
/* 使用connect传递 props 和方法给Hello
相当于装饰器模式
 */
export default connect(mapStateToProps, mapDispatchToProps)(Hello);