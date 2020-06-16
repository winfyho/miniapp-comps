// components/common/wf-picker/wf-picker.js
import { getYears, getMounths } from "./options/date.js"
Component({

    lifetimes: {
        attached: function () {
            // 在组件实例进入页面节点树时执行
            console.log(getYears(2020), getMounths());
            this.setData({
                years: getYears(2020),
                months: getMounths()
            })
        },

    },

    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
        list: [
            { title: '1月' },
            { title: '2月' },
            { title: '3月' },
            { title: '4月' },
            { title: '5月' },
            { title: '6月' },
            { title: '7月' },
            { title: '8月' },
            { title: '9月' },
            { title: '10月' },
            { title: '11月' },
            { title: '12月' },
        ],
        years: [],
        months: []

    },

    /**
     * 组件的方法列表
     */
    methods: {
        handleChange(e) {
            console.log(e.detail);

        }
    }
})
