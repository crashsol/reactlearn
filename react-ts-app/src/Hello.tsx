import * as React from 'react'

/* 定义Props 类型 */
export interface Props {
    name: string,
    enthusiasmLevel?: number
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
class Hello extends React.Component<Props, object>
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
}
//#ednregion



export default Hello;


// helpers

function getExclamationMarks(numChars: number) {
    return Array(numChars + 1).join('!');
}