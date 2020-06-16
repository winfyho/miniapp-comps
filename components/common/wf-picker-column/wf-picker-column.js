// components/common/wf-picker-column/wf-picker-column.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        list: {
            type: Array,
            value: [
                { title: '选项1' },
                { title: '选项2' },
                { title: '选项3' },
                { title: '选项4' },
            ]
        },
        name: {
            type: String,
            value: "default"
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        scrollY: 0
    },

    scrollTop: 0,
    timer: null,
    trigTimer: null,
    touching: true,
    /**
     * 组件的方法列表
     */
    methods: {
        _startMove(e) {
            this.trigTimer = null
            this.timer = null
            this.touching = true
        },

        _endMove(e) {
            this.touching = false
            this._setScrollTop(Math.round(this.scrollTop / 45) * 45)

            // console.log(this.scrollTop, Math.round(this.scrollTop / 45));
        },
        _onScroll(e) {
            this.scrollTop = e.detail.scrollTop
            if (this.timer !== null) {
                clearTimeout(this.timer)
            }
            this.timer = setTimeout(() => {
                this.scrollTop = e.detail.scrollTop
                clearTimeout(this.timer)
                this.timer = null
                this._setScrollTop(Math.round(e.detail.scrollTop / 45) * 45)
            }, 100);
        },
        _setScrollTop(value = 0) {
            if (!this.touching && this.timer === null) {
                console.log(value);

                let index = value / 45 === 0 ? 0 : value / 45
                let item = this.data.list[index]

                if (this.trigTimer === null) {
                    // console.log(index, item);

                    this.setData({
                        scrollY: value
                    })
                    this.triggerEvent('change', {
                        item,
                        index,
                        name: this.data.name
                    })
                }
                clearTimeout(this.trigTimer)
                this.trigTimer = setTimeout(() => {
                    clearTimeout(this.trigTimer)
                    this.trigTimer = null
                }, 200);

            }

        }
    }
})
