#### `contentWidth`的作用

用于设置表格控件的内容部分的宽度，而非用于设置表格控制的宽度。

#### `contentWidth`接受的值

##### 常量值`auto`
表格会根据单元格内容计算列宽和内容的总宽度。

我们设计的表格列宽默认是不支持随内容自适应的，当给表格设置`contentWidth='auto'`，表格会暂时放开让列宽随内容适应，
然后根据表头和表体自适应后的宽度综合计算出每一列的宽度。`contentWidth`的默认值是`'auto'`，也就是表格组件默认会自适应内容。

需要注意的是，`contentWidth='auto'`计算出来的table总宽度大于组件宽度时，是会自动产生滚动条的。

##### 具体的数值 
将表格的内容部分的宽度设置为该值，如果该值超过表格控件的宽度，则表格控件会自动出现水平滚动条。表格会按照各列内容的比例分配这些宽度。
这个方式一般用于`contentWidth='auto'`的排版过于紧凑的情况，强制表格控件给内容分配更多的宽度，从而让表格的每一列的占用更多的宽度。

#### 其他控制表格列宽的方式
除了可以通过`contentWidth`来设置列宽，我们还可以通过`columnDefines`的`width`属性设置列宽。

这两种调整列宽的方式的差别在于：
- `contentWidth`约束了表格的总体宽度，然后通过内容来计算每一列的比例，最终得到每一列的宽度。简单的说，这个方式下，列宽是由内容计算得到的。
- `columnDefines`的`width`属性对列宽的控制更加精确，并且优先级比`contentWidth`的优先级更高。简单的说，这个方式下，列宽是应用编码指定。

一般用于某列内容的长度已知的情况，比如序号列、操作列、日期列等，这些列可以把`columnDefines`的`width`属性列宽设为某个固定值来实现。
具体的可以参考[这个demo](#/pc/table/renderer)的说明中的“**列宽调整**”部分。

#### 最佳列宽设置建议

我们的建议是：优先使用`contentWidth`自动计算的列宽，然后对局部一些列的宽度通过`columnDefines`的`width`属性做微调。

通过`columnDefines`的`width`属性设置的列宽优先级更好，可以覆盖掉`contentWidth`的计算结果。

