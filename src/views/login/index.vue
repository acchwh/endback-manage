<template>
    <div class="page-login">
        <div class="page-login__container">
            <h2 class="title">洗脚管理系统</h2>
            <el-form ref="formRef" :model="formData" :rules="formRules">
                <el-form-item prop="username">
                    <el-input v-model="formData.username" placeholder="请输入用户名" />
                </el-form-item>
                <el-form-item prop="password">
                    <el-input v-model="formData.password" placeholder="请输入密码" type="password" />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" :loading="isLoading" @click="handleLogin">
                        登录
                    </el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
  
<script>
// 引入 api 请求的方法
// import { login } from "@/api/user.js";

export default {
    name: "login",
    data() {
        return {
            // 存放表单数据的
            formData: {
                username: "", // 用户名
                password: "", // 密码
            },
            // 配置表单校验规则
            formRules: {
                username: [
                    // 每一个对象是一个校验规则
                    // https://github.com/yiminghe/async-validator
                    // type: 'string' | 'eamil' | '...'
                    // { type: "email", message: "请输入邮箱地址" },
                    // { min: 4, message: "最少输入4位" },
                    // { message: "请满足我的规则", pattern: /^[a-z]+$/ },
                    { required: true, message: "请输入用户名" },
                ],
                password: [{ required: true, message: "请输入密码" }],
            },
            // 是否登录中
            isLoading: false,
        };
    },

    // methods: {
    //     async handleLogin() {
    //         try {
    //             // 表单校验
    //             await this.$refs.formRef.validate();

    //             // 请求开始的时候，先将 isLoading 设置为 true , 防止登录按钮的重复点击
    //             this.isLoading = true;
    //             // 表单校验通过，准备调用登录接口
    //             login({
    //                 adminname: this.formData.username,
    //                 password: this.formData.password,
    //             })
    //                 .then((data) => {
    //                     // 需要判断 code 是否为 '200'
    //                     // if (response.code === "200") {
    //                     //   alert("登录成功");
    //                     // } else {
    //                     //   alert(response.message);
    //                     // }
    //                     // 上面的判断200的操作，统一封装到了 request.js 中

    //                     // 1. 将 token 写入 本地存储
    //                     localStorage.setItem("token", data.data.token);

    //                     // 2. 跳转页面
    //                     this.$router.push("/");
    //                 })
    //                 .catch((error) => {
    //                     console.log("catch  2222", error);
    //                 })
    //                 .finally(() => {
    //                     // 接口完成之后，将 isLoading 设置为 false，让按钮可以再次响应点击。
    //                     this.isLoading = false;
    //                 });
    //         } catch (error) { }
    //     },

    //     /**
    //      * 处理登录
    //      */
    //     // async handleLogin() {
    //     //   // console.log(this.$refs.formRef);
    //     //   // 主动调用 表单组件的 validate 方法，让表单自己校验一次
    //     //   // this.$refs.formRef.validate((isOk) => {
    //     //   //   console.log("isOk", isOk);
    //     //   //   // 根据 isOk 为 true，代表校验通过，逻辑可以往下走
    //     //   // });
    //     //   // this.$refs.formRef
    //     //   //   .validate()
    //     //   //   .then(() => {
    //     //   //     console.log("true");
    //     //   //   })
    //     //   //   .catch((error) => {
    //     //   //     console.log("false");
    //     //   //   });
    //     //   try {
    //     //     await this.$refs.formRef.validate();
    //     //     console.log("true");
    //     //   } catch (error) {
    //     //     console.log("false");
    //     //   }
    //     // },
    // },
};
</script>
  
<style lang="scss" scoped>
.page-login {
    height: 100%;
    overflow: hidden;
    background-color: #505253;

    .title {
        color: #fff;
        text-align: center;
    }

    &__container {
        // width: ;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .el-form {
        padding: 32px 32px 14px;
        width: 320px;
        border-radius: 10px;
        background-color: #fff;
    }

    .el-button {
        width: 100%;
    }

    // :deep(".el-button span") {
    //   color: red;
    // }
}
</style>
  