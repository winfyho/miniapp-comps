export function getYears(current) {
    let years = []
    for (let i = 0; i < 12; i++) {
        years.push({
            title: `${current}`
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

export function getDays(month) {
    let days = [
        31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31
    ]
    return days
}