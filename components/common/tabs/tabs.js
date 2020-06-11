// components/common/tabs/tabs.js
Component({

    lifetimes: {
        attached: function () {
            // 在组件实例进入页面节点树时执行
            const tabs = this.data.tabs
            let width = `${100 / tabs.length}%`
            this.setData({
                width
            })


            console.log(tabs, width);

        },

    },

    properties: {
        tabs: {
            type: Array,
            value: [
                { index: 0, title: 'tab1' },
                { index: 1, title: 'tab2' },
                { index: 2, title: 'tab3' },
                { index: 3, title: 'tab4' },
            ]
        },
        
    },


    /**
     * 组件的初始数据
     */
    data: {
        curIndex: 0,
        width: 0,
        translateX: 0,
    },


    observers: {
        'curIndex': function (curIndex) {
            let x = 100  * curIndex
            this.setData({
                translateX:x
            })
        }
    },

    /**
     * 组件的方法列表
     */
    methods: {
        changeTab(e) {
            let { tab } = e.currentTarget.dataset
            this.setData({
                curIndex: tab.index
            })
            this.triggerEvent('click', {
                tab,
            })


        }
    }
})
