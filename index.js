function generateList(array, parentNumbers = []) {
    let result = ""

    array.forEach((item, index) => {
        const numbers = [...parentNumbers, index + 1]
        const number = numbers.join(".")

        result += `<li>${number} ${
            Array.isArray(item) ? "<ul>" + generateList(item, numbers) + "</ul>" : ""
        }</li>`
    })

    return result
}

const data = [1, 2, 3, [1, 2, 3, 4, [1, 2, 3, 4]]]
const listHTML = `<ul>${generateList(data)}</ul>`

document.body.innerHTML += listHTML
