function generateList(array) {
    let counter = 1
    const res = array.map((item, index) => {
        if (Array.isArray(item)) {
            return `<ul>${generateList(item)}</ul>`
        } else {
            if (item !== array[index - 1]) {
                return `<li>${item}</li>`
            } else {
                return `<li>${item}.${counter++}</li>`
            }
        }
    })
    return res.join("")
}

const arr = [1, 2, 3, [1, 2, 3, 4, [1, 1, 1, 1]]]
const resultHTML = generateList(arr)

document.body.innerHTML += resultHTML
