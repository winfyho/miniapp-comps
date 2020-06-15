// components/common/number-keyboard/number-keyboard.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        showClose:{
            type:Boolean,
            value:true
        },
        show:{
            type:Boolean,
            value:true
        },
        showInputToast:{
            type:Boolean,
            value:false
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        keys: [
            { key: '1' },
            { key: '2' },
            { key: '3' },
            { key: '4' },
            { key: '5' },
            { key: '6' },
            { key: '7' },
            { key: '8' },
            { key: '9' },
            { key: '0' },
            { key: '00' },
        ],

        value: "0",
    },

    /**
     * 组件的方法列表
     */
    methods: {
        handleNumberClick(e) {
            let { key } = e.currentTarget.dataset
            let value = this.data.value
            if (key === '0' ||
                key === '00'
            ) {
                if (value === '0') {
                    // console.log('fail', this.data.value);
                } else {
                    this._input(key)
                }

            } else if (key === '.') {
                // console.log('fail', key, this.data.value);
            }
            else {
                this._input(key)
            }

        },
        _input(key) {
            let value = this.data.value === '0' ? '' : this.data.value
            value += key

            this.handleInput(value)
            // console.log('number', this.data.value);
        },
        _delete() {
            let value = this.data.value.slice(0, -1)
            value = value.length === 0 ? '0' : value

            this.handleInput(value)
            // console.log('delete', this.data.value);

        },
        _clear() {
            this.handleInput("0")
            // console.log('clear', this.data.value);
        },
        complete() {
            // console.log('complete', this.data.value);
            this.triggerEvent('complete', {
                value: this.data.value,
                action:'complete'
            })
        },
        handleInput(value) {
            if (value.length <= 18) {
                this.setData({
                    value
                })
                this.triggerEvent('input', {
                    value: this.data.value
                })
            }
        },
        closeKeyboard() {
            this.triggerEvent('close', {
                action: 'close',
                show:false
            })
        }
    }
})
