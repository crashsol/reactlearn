import * as React from 'react'
import './Hello.css'

/* 定义传入props类型 */
export interface Props {
    name: string;
    enthusiasmLevel?: number;
}
/* 定义本组件的状态 */
interface State {
    currentEnthusiasm: number;
}
/* 具有传入参数，state状态的组件 */
class Hello extends React.Component<Props, State>
{
    constructor(props: Props) {
        super(props);
        console.log('constructor')
        this.state = { currentEnthusiasm: props.enthusiasmLevel || 1 }
    }
    componentDidMount = () => {
        console.log('componentDidMount')
    }
    componentWillMount = () => {
        console.log('componentWillMount')
    }
    componentWillUnmount = () => {
        console.log('componentWillUnmount')
    }
    updateEnthuiasm = (currentEnthusiasm: number) => {
        this.setState({
            currentEnthusiasm
        })
    }

    /* 加 1 */
    onIncrement = () => {
        this.updateEnthuiasm(this.state.currentEnthusiasm + 1)
    }
    /* 减 1 */
    onDecrement = () => {
        this.updateEnthuiasm(this.state.currentEnthusiasm - 1);
    }

    render() {
        const { name } = this.props
        if (this.state.currentEnthusiasm <= 0) {
            throw new Error('currentEnthusiasm 小于0')
        }
        return (
            <div className='hello'>
                <div className='greeting'>
                    Hello {name + getExclamationMarks(this.state.currentEnthusiasm)}
                </div>
                <button onClick={this.onIncrement}>+</button>
                <button onClick={this.onDecrement}>-</button>
            </div>
        )
    }
}
export default Hello;

function getExclamationMarks(numChars: number) {
    return Array(numChars + 1).join('!');
}