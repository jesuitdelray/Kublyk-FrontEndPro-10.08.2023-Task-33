function generateList(array) {
    const res = array.map(item =>
        typeof item === "number" ? `<li>${item}</li>` : `<ul>${generateList(item)}</ul>`
    )
    return res.join("")
}

const arr = [1, 2, 3, [1, 2, 3, 4, [1, 2]]]
const resultHTML = generateList(arr)

document.body.innerHTML += resultHTML
