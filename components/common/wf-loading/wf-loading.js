// components/common/wf-loading/wf-loading.js
Component({

    lifetimes: {
        attached: function () {
            // 在组件实例进入页面节点树时执行
            this.startAnimate(0)

        },
        detached: function () {
            // 在组件实例被从页面节点树移除时执行
        },
    },

    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {
        startAnimate(index) {
            if(index > 2){
                index = 0
            }
            this.animate(`.spinner-${index}`, [
                { scale: [1, 1] },
                { scale: [1.5, 1.5] },
                { scale: [2.0, 2.0] },
                { scale: [1.5, 1.5] },
                { scale: [1, 1] },
            ], 350, function () {
                
                this.startAnimate(index + 1)
            }.bind(this))
        }
    }
})
