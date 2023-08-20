function generateList(array, prevItem = null, counter = 1) {
    return array
        .map(item => {
            if (Array.isArray(item)) {
                return `<ul>${generateList(item)}</ul>`
            } else {
                if (item !== prevItem) {
                    counter = 0
                    prevItem = item
                } else {
                    counter++
                }
                return `<li>${item}${counter > 0 ? "." + counter : ""}</li>`
            }
        })
        .join("")
}

const arr = [1, 2, 3, [1, 2, 3, 4, [1, 1.2, 1.2, 1.2]]]
const resultHTML = generateList(arr)

document.body.innerHTML += resultHTML
