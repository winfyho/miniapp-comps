// components/common/popup/popup.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
        show: false,
        title: "标题"
    },

    /**
     * 组件的方法列表
     */
    methods: {
        _closePopup() {
            console.log('close popup');
            this.clearAnimation('#popup-wraper', { translateY: true })

            this.setData({
                show: false,
                title: "标题"
            })
        },
        showPopup(option = {}) {
            if (this.data.show) {
                return
            }

            this.setData({
                show: true,
                title: option.title || "标题"
            })
            this.startAnimate()

        },

        startAnimate() {
            this.animate('#popup-wraper', [
                { translateY: 500, },
                { translateY: 0, },
            ], 300, function () {
                this.clearAnimation('#popup-wraper', { translateY: true })
            }.bind(this))

        }

    }
})
