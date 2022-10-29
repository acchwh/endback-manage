import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// 引入全局初始化样式
import "normalize.css";

// 引入自己编写的全局样式
import "@/styles/basestyle.scss";


// 引入element-plus组件库，通过按需引入已经引入在vite.config.js中
// 引入element的组件API样式
import 'element-plus/es/components/message/style/css'
// 创建app实例对象
const app = createApp(App);

app.use(router);
//挂载
app.mount("#app");
