### 面包屑搭配路由

面包屑与路由搭配，只要设置好各级路由的信息，面包屑会自己根据路由状态生成路径

#### 关于路由配置里的 `*`

Angular的路由非常强大且灵活，当url的某段是由变量组成时，静态的路由信息无法搞定，此时可以使用 `*`
来替代，如果生成的面包屑的描述信息里需要使用到 `*` 匹配到的文本时，可以参考demo的源码，
提供一个生成面包屑节点信息的函数即可，面包屑组件会把匹配到的参数值文本传递给这个函数，
从而可以生成一个更加具体、生动的面包屑节点。