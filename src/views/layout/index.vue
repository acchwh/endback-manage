<!-- 
    把首页样式布局搞过来
 -->
<template>
    <div class="layout">
        <!-- BEM CSS命名规范 -->
        <div class="layout__left">
            <el-menu :default-active="activeIndex" router>
                <el-menu-item index="/">首页</el-menu-item>
                <el-sub-menu index="/banner">
                    <template #title>轮播图管理</template>
                    <el-menu-item index="/banner/list">轮播图列表</el-menu-item>
                    <el-menu-item index="/banner/add">轮播图新增</el-menu-item>
                </el-sub-menu>
                <el-sub-menu index="/manager">
                    <template #title>管理员管理</template>
                    <el-menu-item index="/manager/list">管理员列表</el-menu-item>
                </el-sub-menu>
            </el-menu>
        </div>
        <div class="layout__right">
            <div class="layout__header"></div>
            <div class="layout__body">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
};
</script>
  
<style lang="scss" scoped>
.layout {
    display: flex;
    height: 100%;
    overflow: hidden;

    &__left {
        width: 200px;
        height: 100%;
        background-color: rgb(24, 23, 23);
    }

    &__right {
        flex: 1;
        display: flex;
        flex-direction: column;
        height: 100%;
        overflow: hidden;
        background-color: yellowgreen;
    }

    &__header {
        height: 60px;
        background-color: purple;
    }

    &__body {
        padding: 20px;
        flex: 1;
        overflow-y: auto;
        background-color: #ccc;
    }
}
</style>
  