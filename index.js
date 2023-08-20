function generateList(array) {
    let result = ""
    let number = ""

    array.forEach((item, index) => {
        const numberCounter = number + (index + 1)
        result += `<li>${numberCounter}. ${item}`

        if (Array.isArray(item)) {
            result += `<ul>${generateList(item, numberCounter + ".")}</ul>`
        }

        result += "</li>"
    })

    return result
}

const data = [1, 2, 3, [1, 2, 3, 4, [1, 2, 3, 4]]]
const nestedListHTML = `<ul>${generateList(data)}</ul>`

document.body.innerHTML += nestedListHTML
