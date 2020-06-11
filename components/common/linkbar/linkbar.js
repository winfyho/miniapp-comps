// components/common/linkbar/linkbar.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        url:{
            type:String,
            value:""
        },
        title:{
            type:String,
            value:"跳转链接"
        },
        background:{
            type:String,
            value:"#FFFFFF"
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
        linkTo() {
            this.triggerEvent('linkto', {
                target: this.data.url,
                title:this.data.title
            }, { composed: true })
            wx.navigateTo({
                url: this.data.url
            })

        }
    }
})
