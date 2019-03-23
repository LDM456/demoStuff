import ButtonComponents1 from "./button1.vue";
import ButtonComponents2 from "./button1.vue";
import ButtonComponents3 from "./button1.vue";

const buttonList = [
    ButtonComponents1,
    ButtonComponents2,
    ButtonComponents3
]

// 添加install方法，(插件方法)
const Button = {
    install:function(Vue){
        buttonList.forEach( button => {
            // 这里使用每个组件的name属性作为组件名
            Vue.prototype.component(button.name, button)
        });
    }
}

export defalut Button