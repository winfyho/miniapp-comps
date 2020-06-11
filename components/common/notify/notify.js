// components/common/notify/notify.js
Component({

    lifetimes: {
        attached: function () {
            // 在组件实例进入页面节点树时执行
            console.log('attach');


        },
        detached: function () {
            // 在组件实例被从页面节点树移除时执行
        },
    },
    properties: {

    },

    data: {
        title: "提示信息",
        show: false,
        color: '#00B26A',
        timer:null
    },

    methods: {
        showNotify(option={}) {
            clearTimeout(this.data.timer)
            this.setData({
                show: true,
                title: option.title || '提示信息',
                color: option.color || '#00B26A'
            })
            this.startAnimate()

            this.data.timer = setTimeout(() => {
                this.setData({
                    show: false,
                    title: "提示信息",
                    color: "#00B26A"
                })
            }, 3000);
        },
        startAnimate() {
            this.animate('#notify', [
                { translateY: -60, },
                { translateY: 0, },
            ], 300, function () {
                this.clearAnimation('#notify', { translateY: true}, function () {

                })
            }.bind(this))
        }
    }
})

