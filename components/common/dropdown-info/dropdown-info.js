// components/common/dropdown-info/dropdown-info.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        title: {
            type: String,
            value: '问题标题'
        },
        info: {
            type: String,
            value: '老师，第一次单元测试错过了，会不会不合格呀？'
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        show: false
    },

    /**
     * 组件的方法列表
     */
    methods: {
        switchShow() {
            this.setData({
                show: !this.data.show
            })
        }
    }
})
