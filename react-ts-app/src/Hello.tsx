import * as React from 'react'
import './Hello.css'

/* 定义传入 Props 类型 */
export interface Props {
    name: string,
    enthusiasmLevel?: number
}
/* 定义当前组件的状态 */
interface State {
    currentEnthusiasm: number;
}

//#region 使用function 定义组件 
/*  function Hello({ name, enthusiasmLevel = 1 }: Props) {
    if (enthusiasmLevel <= 0) {
        throw new Error('You could be a little more enthusiastic. :D');
    }
    return (
        <div className="Hello">
            <div className="greeting">
                Hello {name + getExclamationMarks(enthusiasmLevel)}
            </div>
        </div>
    )
} */
//#endregion

//#region 使用 Class 定义组件
/* class Hello extends React.Component<Props, object>
{
    render() {
        const { name, enthusiasmLevel = 1 } = this.props

        if (enthusiasmLevel <= 0) {
            throw new Error('You could be a little more enthusiastic. :D');
        }
        return (
            <div className="hello">
                <div className='greeting' >
                    Hello from class {name + getExclamationMarks(enthusiasmLevel)}
                </div>
            </div>

        )
    }
} */
//#ednregion

class Hello extends React.Component<Props, State>{

    constructor(props: Props) {
        super(props);
        //根据传入的数据设定当前State
        this.state = { currentEnthusiasm: props.enthusiasmLevel || 1 }
    }

    //更新状态
    updateEnthusiasm(currentEnthusiasm: number): void {
        this.setState({ currentEnthusiasm })
    }

    onIncrement = () => {
        this.updateEnthusiasm(this.state.currentEnthusiasm + 1);
    }
    onDecrement = () => {
        this.updateEnthusiasm(this.state.currentEnthusiasm - 1);
    }

    render() {
        const { name } = this.props
        if (this.state.currentEnthusiasm <= 0) {
            throw new Error('You could be a little more enthusiastic. :D');
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


// helpers

function getExclamationMarks(numChars: number) {
    return Array(numChars + 1).join('!');
}