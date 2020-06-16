// components/common/dropdown-menu/dropdown-menu.js
Component({

    lifetimes: {
        attached: function () {
            // 在组件实例进入页面节点树时执行
            this.setData({
                title: this.data.name
            })
        },
    },

    /**
     * 组件的属性列表
     */
    properties: {
        color: {
            type: String,
            value: "#07C160"
        },
        name: {
            type: String,
            value: "菜单"
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        list: [
            { index: 0, title: '商品1' },
            { index: 1, title: '商品2' },
            { index: 2, title: '商品3' },
            { index: 3, title: '商品4' },
        ],
        active: false,
        curIndex: -1,
        title: ""
    },

    /**
     * 组件的方法列表
     */
    methods: {
        handleDrop() {
            this._onDrop()
        },

        handleItemClick(e) {
            let { item } = e.currentTarget.dataset
            console.log(item);
            this.setData({
                curIndex: item.index,
                title: item.title
            })

            let timer = setTimeout(() => {
                this._onDrop()
                clearTimeout(timer)
            }, 100);
            this.triggerEvent('click', {
                item
            })
        },

        _onDrop() {
            this.setData({
                active: !this.data.active,
                curIndex: -1
            })
            this.triggerEvent('drop', {
                active: this.data.active
            })
        }


    }
})
