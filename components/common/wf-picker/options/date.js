export function getYears(current) {
    let years = []
    for (let i = 0; i < 12; i++) {
        years.push({
            title: `${current}年`,
            value: current
        })
        current -= 1
    }
    return years
}

export function getMounths() {
    let months = []
    for (let i = 0; i < 12; i++) {
        months.push({
            title: `${i + 1}月`,
            value: i + 1
        })
    }
    return months
}

export function getDays(year = new Date().getFullYear(), month = new Date().getMonth() + 1) {
    let days = [
        31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31
    ]
    if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
        days[1] = 29
    }

    let res = []
    for (let i = 0; i < days[month - 1]; i++) {
        res.push({
            title: `${i + 1}号`,
            value: i + 1
        })

    }
    return res
}