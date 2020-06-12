// components/common/wf-icon/wf-icon.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        width: {
            type: Number,
            value: 80
        },
        height: {
            type: Number,
            value: 80
        },
        type: {
            type: String,
            value: "notify" // notify ban
        }
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
        handleClick(e) {
            this.triggerEvent('click', {
                type: this.data.type,
                wxml:`<wf-icon bind:click="" type="${this.data.type}"></wf-icon>`
            })
        }
    }
})
