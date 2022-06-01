import { defineComponent, reactive, withModifiers } from 'vue'
import styles from './login.module.scss'

const LoginForm = defineComponent({
    name: 'LoginForm',
    setup() {
        const openCaptcha = function () {
            console.log(43333)
        }
        const loginInfo = reactive({
            username: '',
            password: '',
            alwaysLogin: false
        })
        return () => {
            return (
                <>
                    <el-form
                        label-position="top"
                        onKey={withModifiers(openCaptcha, ['enter', 'stop'])}
                    >
                        <el-form-item label="账号">
                            <el-input v-model={loginInfo.username}></el-input>
                        </el-form-item>
                    </el-form>
                </>
            )
        }
    }
})

const Login = defineComponent({
    name: 'Login',
    setup() {
        return () => {
            return (
                <>
                    <div class={styles.Login}>
                        <div class={styles.LoginCard}>
                            <div class={styles.RegisterTip}>
                                <span>没有账号？点击</span>
                                <span class={styles.CreateRegister}>
                                    创建账号
                                </span>
                            </div>
                            <LoginForm></LoginForm>
                        </div>
                    </div>
                </>
            )
        }
    }
})

export default Login
