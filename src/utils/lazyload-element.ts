import {
    ElAside,
    ElCascader,
    ElForm,
    ElFormItem,
    ElInput,
    ElSelect,
    ElTable,
    ElTableColumn
} from 'element-plus'
import { App } from 'vue'

const usedComponents = [
    ElForm,
    ElFormItem,
    ElInput,
    ElSelect,
    ElAside,
    ElCascader,
    ElTable,
    ElTableColumn
]

export default (app: App) => {
    usedComponents.forEach((component) => {
        app.use(component)
    })
}
