// components/common/wf-form-item/wf-form-item.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        option: {
            type: Object,
            value: {
                name: "name",
                type: "text",
                title: '表单标题',
                placeholder: '输入表单内容',
                maxlength: '18'
            }
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        value: ''
    },

    /**
     * 组件的方法列表
     */
    methods: {
        handleInput(e) {
            let { value } = e.detail
            // console.log(value);
            this.triggerEvent('input', {
                value,
                name: this.data.option.name
            })
        },
        handleFocus() {
            this.triggerEvent('focus', {
                value
            })
        },
        handleBlur() {
            this.triggerEvent('blur', {
                value
            })
        }
    }
})
