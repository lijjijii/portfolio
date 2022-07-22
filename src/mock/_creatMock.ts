import { mockInterfaceModel } from '@/api/model/mockModel'

// 首先引入Mock
const Mock = require('mockjs')

// 设置拦截ajax请求的相应时间
Mock.setup({
    timeout: '200-600'
})

let configArray: any[] = []

// 使用webpack的require.context()遍历所有Mock文件
const files = require.context('.', true, /\.ts$/)
files.keys().forEach((key) => {
    if (key === './_createMock.ts' || key === './utils.ts') return
    configArray = configArray.concat(files(key).default)
})
console.log(configArray)
// 注册所有的Mock服务
configArray.forEach((item: mockInterfaceModel) => {
    Mock.mock(new RegExp(item.url), item.method, item.response)
})