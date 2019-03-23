import Message from "./message.vue"
import Vue from "vue"

// 构建组件
const MessageConstructor = Vue.extend(Message)

// 设置删除组件
const removeDom = (target) =>{
    target.parentNode.removeChild(target)
}

// 构造组件的添加关闭方法
MessageConstructor.prototype.close = function(){
    this.visible = false;
    removeDom(this.$el)
}

// 创建标签
const MessageDiv = (options)=>{
    // 实例化组件
    const instance = new MessageConstructor({
        el:document.createElement('div'),
        // 设置组件参数，使用到组件的data
        data: options
    });
    // 然后再body中添加这个弹窗
    document.body.appendChild(instance.$el)
    Vue.nextTick(()=>{
        instance.timer = setTimeout(() => {
            // 定时关闭组件
            instance.close()
        }, 3000);    
    })
    return instance
}

export default MessageDiv