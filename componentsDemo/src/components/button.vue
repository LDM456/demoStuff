<template>
    <!-- 基本组件的使用 -->
    <Button class="btn" :style="{color:color}">
        <slot/>
    </Button>
</template>

<script>
export default {
    // 组件传值用到props
    props: {
        color:{
            type:String,  //传入的值为 字符转类型
            default:"#000"  //默认颜色为黑色
        }
    }
}
</script>

<style>
    .btn{
        width:200px;
        height: 100px;
        background-color: #ccc;
        font-size: 20px;
    }
</style>
