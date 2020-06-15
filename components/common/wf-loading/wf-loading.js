// components/common/wf-loading/wf-loading.js
Component({

    lifetimes: {
        attached: function () {
            // 在组件实例进入页面节点树时执行
            // this.startAnimate()

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
        startAnimate() {

            this.animate(`.spinner-item-active`, [
                { translateX: 0 },
                { translateX: 25 },
                { translateX: 40 },

            ], 1000, function () {

                this.startAnimate()
                
            }.bind(this))
        }
    }
})
