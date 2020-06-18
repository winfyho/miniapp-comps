// components/common/tree-select/tree-select.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        selectList: {
            type: Array,
            value: [
                { id: "s1", title: "标题1" },
                { id: "s2", title: "标题2" },
                { id: "s3", title: "标题3" },
                { id: "s4", title: "标题4" },
                { id: "s5", title: "标题5" },
            ]
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        current: 0,
        curId: 's1'
    },

    /**
     * 组件的方法列表
     */
    methods: {
        handleTreeChange(e) {
            let { item } = e.detail
            console.log(item, `s${item.index + 1}`);
            this.setData({
                curId: `s${item.index + 1}`
            })

        }
    }
})
