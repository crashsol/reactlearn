<<<<<<< HEAD
/* 定义 Adding actions */

export const INCREMENT_ENTHUSIASM = 'INCREMENT_ENTHUSIASM';
/* 自定义类型 */
export type INCREMENT_ENTHUSIASM = typeof INCREMENT_ENTHUSIASM;


export const DECREMENT_ENTHUSIASM = 'DECREMENT_ENTHUSIASM';
/* 自定义类型 */
export type DECREMENT_ENTHUSIASM = typeof DECREMENT_ENTHUSIASM;
=======

/* Adding Actions
这种Const/type模式允许我们以一种容易访问和可重构的方式使用type escript的字符串文字类型。
接下来，
我们将创建一组操作和函数，
可以在src/action/index.tsx中创建这些操作。*/
export const INCREMENT_ENTHUSIASM = 'INCREMENT_ENTHUSIASM';

/* 定义action类型 */
export type INCREMENT_ENTHUSIASM = typeof INCREMENT_ENTHUSIASM;

export const DECREMENT_ENTHUSIASM = 'DECREMENT_ENTHUSIASM'
/* 定义acion类型 */
export type DECREMENT_ENTHUSIASM = typeof DECREMENT_ENTHUSIASM
>>>>>>> 17dd89db877f97fd01181e95215a80b39277e50b
