// components/common/wf-form/wf-form.js
import option from "./option/option.js"
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
        option: option,
        form: {}
    },

    /**
     * 组件的方法列表
     */
    methods: {
        handleInput(e) {
            let { name, value } = e.detail
            let form = this.data.form
            form[name] = value
            this.setData({
                form: this.data.form
            })
        },
        handleSubmit() {
            console.log(this.data.form);

        }
    }
})
