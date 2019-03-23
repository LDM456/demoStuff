// 导入全局组件
import ButtonComponent  from "@/components/button/button1.vue"

const Button = {
    install:function(Vue){
        Vue.component('ButtonFirst',ButtonComponent )
    }
}

export default Button