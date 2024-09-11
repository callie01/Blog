---
title: vue+elementUI 动态合并数据相同的单元格（可指定合并列）
date: 2023/07/12
tags:
 - vue
 - elementUI
 - 框架
categories:
 - 前端
---

## 首先，遇到了复杂表格的需求不要慌，先来捋一下思路

## 1.业务需求：
1. 合并相同数据的单元格（仅合并列）；
2. ~~实现条件筛选功能~~（意思是：内容不固定，需要$\color{red}{动态合并}$）；
3. ~~显示数字的列不合并，需要合并指定列~~（意思就是：我想合并哪列就哪列 orz）；
4. 数据相同但$\color{red}{所属父级}$不一致的单元格不合并；
5. 空值不合并;

注：本文由此参考文档[el-table合并单元格](https://blog.csdn.net/qq_23073811/article/details/127004611) 基础上改进。
## 2.效果展示：

![image-files](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a60278083e6f4246acb317cd90d0088f~tplv-k3u1fbpfcp-watermark.image)


![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/783df2df43d64a99a6f33a1a673f5591~tplv-k3u1fbpfcp-watermark.image)
## 3. 实现思路：
#### 3.1 由[文档](https://element.eleme.cn/#/zh-CN/component/table#table-column-scoped-slot) 可知：el-table组件主要靠span-method方法实现合并

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/405f146fa8b242ac8162cd9d257218f7~tplv-k3u1fbpfcp-watermark.image?)
### 3.2 由以下可看出，返回所占单元格的值即可进行合并，那么找出所有单元格的占位即可
* return [rowIndex,columnIndex]
* [5,1] 表示当前单元格占5行，1列
* [0,0] 隐藏单元格
* [1,1] 保持不变

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c7c2f613cd91403d9d8aee88958bb7cc~tplv-k3u1fbpfcp-watermark.image?)

例：生成以下右侧图示数据即可
![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/33ad8a33d2cd433082769ebd7cc2e06a~tplv-k3u1fbpfcp-watermark.image?)

## 4.先看一下表数据格式 （test.vue 页面）

```js 
  tableColumn: [
        { prop: 'School', label: '学校' },
        { prop: 'Grade', label: '年级' },
        { prop: 'Class', label: '班级' },
        { prop: 'Name', label: '姓名' },
        { prop: 'Chinese', label: '中文' },
        { prop: 'Math', label: '数学' },
        { prop: 'English', label: '英文' }
      ],
      tableData: [
        {
          School: '第一小学',
          Grade: '1年级',
          Class: '1班',
          Name: '张三',
          Chinese: '90',
          Math: '100',
          English: '80'
        },
       ...
      ]
```
## 5.关键代码，抽成共用方法（table.js页面）

```js
/**
 * 分析每一列，找出所有【列】可合并（数据相同）的单元格
 * @param {Array} tableData 表数据
 * @param {Array} tableColumn 表字段/表头
 * @param {Array} mergeCols 指定合并哪些列（字段）
 * @returns
 */
export const getMergeCells = (tableData = [], tableColumn = [], mergeCols = []) => {
  const fields = tableColumn?.map(v => v.prop)
  const array = []
  
  if (!tableData?.length || !tableColumn?.length || !mergeCols?.length) return
 
  // 倒叙遍历行（方便统计合并列单元格数至最上方，避免表格塌陷）
  for (let row = tableData.length - 1; row >= 0; row--) {
    array[row] = []
    for (let col = 0; col < fields.length; col++) {
       // 1.最后一行单元格不合并（初始无可对比数据）
       // 2.不在指定列（mergeCols）的单元格不合并
       // 3.空值不合并
      if (row === tableData.length - 1 || !mergeCols.includes(fields[col]) || !tableData[row][fields[col]]) {
        array[row][col] = [1, 1]
        continue
      }

      // 4.数据相同但所属父级不一致的单元格不合并
      const parentFields = mergeCols.slice(0, col) // 在指定合并列中找出所有父级
      if (mergeCols.includes(fields[col]) && parentFields?.includes(fields[col - 1])) {
        const currentParents = parentFields.map(field => tableData[row][field]) // 当前单元格所有父级
        const nextRowParents = parentFields.map(field => tableData[row + 1][field]) // 下一行单元格所有父级
        if (currentParents?.toString() !== nextRowParents?.toString()) {
          array[row][col] = [1, 1]
          continue
        }
      }

      // 5.合并相同数据的单元格
      if (tableData[row][fields[col]] === tableData[row + 1][fields[col]]) {
        const beforeCell = array[row + 1][col]
        array[row][col] = [1 + beforeCell[0], 1]
        beforeCell[0] = 0
        beforeCell[1] = 0
      } else {
        array[row][col] = [1, 1] // 否则不合并
      }
    }
  }
  // console.log(array, 'array')
  return array
}
```

#### 优点：
* 可动态指定需要合并的列
* 空值（null、undefined、空字符串、0）不会被合并
* 数据相同但所属父级不相同的不会被合并，并且不用手动指定父级
#### 缺点：
* 不支持相邻的行合并


## 6.完整代码：（test.vue页面）

```js
<template>
  <div class="main">
    <el-table :data="tableData" :span-method="objectSpanMethod" style="width: 100%">
      <el-table-column v-for="item in tableColumn" :key="item.prop" :prop="item.prop" :label="item.label" min-width="180" />
    </el-table>
  </div>
</template>

<script>
import { getMergeCells } from '@/projects/onemap/utils/table.js'
export default {
  components: {},
  mixins: [],
  props: {},
  data() {
    return {
      tableColumn: [
        { prop: 'School', label: '学校' },
        { prop: 'Grade', label: '年级' },
        { prop: 'Class', label: '班级' },
        { prop: 'Name', label: '姓名' },
        { prop: 'Chinese', label: '中文' },
        { prop: 'Math', label: '数学' },
        { prop: 'English', label: '英文' }
      ],
      tableData: [
        { School: '第一小学', Grade: '1年级', Class: '1班', Name: '张三', Chinese: '90', Math: '100', English: '80' },
        { School: '第一小学', Grade: '1年级', Class: '1班', Name: '张伟', Chinese: '90', Math: '99', English: '89' },
        { School: '第一小学', Grade: '1年级', Class: '2班', Name: '李四', Chinese: '90', Math: '85', English: '80' },
        { School: '第一小学', Grade: '1年级', Class: '3班', Name: '王五', Chinese: '79', Math: '100', English: '80' },
        { School: '第一小学', Grade: '2年级', Class: '1班', Name: '赵六', Chinese: '95', Math: '100', English: '80' },
        { School: '第一小学', Grade: '2年级', Class: '2班', Name: '钱八', Chinese: '98', Math: '85', English: '80' },
        { School: '第一小学', Grade: '2年级', Class: '3班', Name: '陈九', Chinese: '79', Math: '100', English: '100' },
        { School: '第一小学', Grade: '3年级', Class: '1班', Name: '黄十', Chinese: '91', Math: '88', English: '80' },
        { School: '第一小学', Grade: '3年级', Class: '2班', Name: '魏一', Chinese: '90', Math: '86', English: '87' },
        { School: '第一小学', Grade: '3年级', Class: '3班', Name: '杨二', Chinese: '79', Math: '99', English: '80' },
        { School: '第二小学', Grade: '3年级', Class: '3班', Name: '袁零', Chinese: '79', Math: '99', English: '80' }
      ]
    }
  },
  computed: {
    // 获取所有单元格合并数据
    spanArr() {
      if (!this.tableColumn.length) return []
      const mergeCols = ['School', 'Grade', 'Class'] // 需要合并的列（字段）
      return getMergeCells(this.tableData, this.tableColumn, mergeCols)
    }
  },
  watch: {},
  created() {},
  mounted() {},
  destroyed() {},
  methods: {
    // 表数据合并
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      return this.spanArr[rowIndex][columnIndex]
    }
  }
}
</script>
<style lang="scss" scoped>
.main {
  width: 100%;
  height: 100%;
}
</style>

```

