// components/common/sidebar/sidebar.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        list: {
            type: Array,
            value: [
                { index: 0, title: '分类1' },
                { index: 1, title: '分类2' },
                { index: 2, title: '分类3' },
                { index: 3, title: '分类4' },
            ]
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        current: 0
    },

    /**
     * 组件的方法列表
     */
    methods: {
        handleChange(e) {
            let { item } = e.currentTarget.dataset
            this.setData({
                current: item.index
            })
            this.triggerEvent('change', {
                item
            })
        }
    }
})
