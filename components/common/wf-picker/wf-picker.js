// components/common/wf-picker/wf-picker.js
import { getYears, getMounths, getDays } from "./options/date.js"
Component({

    lifetimes: {
        attached: function () {
            // 在组件实例进入页面节点树时执行
            // console.log(getYears(2020), getMounths(), getDays(2020, 5));
            this.setData({
                years: getYears(2020),
                months: getMounths(),
                days: getDays()
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
        year: new Date().getFullYear(),

        months: [],
        month: new Date().getMonth() + 1,

        days: [],
        day: new Date().getDate(),


    },

    /**
     * 组件的方法列表
     */
    methods: {
        _handleChange(e) {
            let config = {
                '年': 'year',
                '月': 'month',
                '日': 'day',
            }
            let field = config[e.detail.name]
            let data = {}
            data[field] = e.detail.item.value
            // console.log(e.detail, field, e.detail.item.value);
            this.setData(data)
            this.onChange()
        },
        onChange() {
            let { year, month, day } = this.data
            console.log(`${year}-${month}-${day}`);


            this.triggerEvent('change', {
                dateStr: `${year}-${month}-${day}`
            })

        }
    }
})
