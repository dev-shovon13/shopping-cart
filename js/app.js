function productUpdate(product, price, isIncreasing) {
    const productInput = document.getElementById(product + "-input")
    let productQuantity = productInput.value
    if (isIncreasing) {
        productQuantity = parseInt(productQuantity) + 1
    } else if (productQuantity > 0) {
        productQuantity = parseInt(productQuantity) - 1
    }
    productInput.value = productQuantity
    const productPrice = document.getElementById(product + "-price")
    productPrice.innerText = price * productQuantity
    totalPrice()
}
function productInput(product) {
    const productInput = document.getElementById(product + "-input")
    const productInputValue = parseInt(productInput.value)
    return productInputValue
}
function totalPrice() {
    const phoneTotal = productInput("phone") * 1219
    const caseTotal = productInput("case") * 59
    const subTotal = phoneTotal + caseTotal
    const tax = subTotal / 10
    const total = subTotal + tax

    document.getElementById("sub-total").innerText = subTotal
    document.getElementById("tax").innerText = tax
    document.getElementById("total").innerText = total
}
document.getElementById("phone-plus").addEventListener("click", function () {
    productUpdate("phone", 1219, true)
})
document.getElementById("phone-minus").addEventListener("click", function () {
    productUpdate("phone", 1219, false)
})
document.getElementById("case-plus").addEventListener("click", function () {
    productUpdate("case", 59, true)
})
document.getElementById("case-minus").addEventListener("click", function () {
    productUpdate("case", 59, false)
})
function removeItem(productId) {
    document.getElementById(productId).addEventListener("click", function () {
        document.getElementById(productId).parentNode.parentNode.parentNode.style.display = "none"
    })
}
removeItem("phone-remove")
removeItem("case-remove")