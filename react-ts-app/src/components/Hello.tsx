import * as React from 'react'

/* 定义传入参数的类型 */
export interface Props {
    name: string,
    enthusiasmLevel?: number
}
/* 使用function 创建组件 */
/* function Hello({ name, enthusiasmLevel = 1 }: Props) {
    if (enthusiasmLevel <= 0) {
        throw new Error('enthusiasmLevel 参数错误!')
    }
    return (
        <div className='hello'>
            <div className='greeting'>
                Hello {name + getExclamationMarks(enthusiasmLevel)}
            </div>
        </div>
    )
}
 */
/* 使用class 类构建组件，但是该组件是无状态组件， */
class Hello extends React.Component<Props, object>{
    render() {
        const { name, enthusiasmLevel = 1 } = this.props
        if (enthusiasmLevel <= 0) {
            throw new Error('You could be a little more enthusiastic. :D');
        }
        return (
            <div className="hello">
                <div className="greeting">
                    Hello {name + getExclamationMarks(enthusiasmLevel)}
                </div>
            </div>
        );

    }
}

export default Hello;

// helpers

function getExclamationMarks(numChars: number) {
    return Array(numChars + 1).join('!');
}