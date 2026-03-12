const form = document.getElementById("orderForm")

const product = document.getElementById("product")
const quantity = document.getElementById("quantity")
const delivery = document.getElementById("delivery")
const address = document.getElementById("address")
const note = document.getElementById("note")

const totalEl = document.getElementById("total")
const noteCounter = document.getElementById("noteCounter")

const confirmBox = document.getElementById("confirmBox")
const success = document.getElementById("success")

const prices = {
"Áo":150000,
"Quần":200000,
"Giày":300000
}

function showError(id,msg){
document.getElementById(id+"Error").textContent = msg
}

function clearError(id){
document.getElementById(id+"Error").textContent = ""
}

function validateProduct(){

if(product.value === ""){
showError("product","Hãy chọn sản phẩm")
return false
}

clearError("product")
return true

}

function validateQuantity(){

const q = Number(quantity.value)

if(!Number.isInteger(q) || q < 1 || q > 99){
showError("quantity","Số lượng từ 1-99")
return false
}

clearError("quantity")
return true

}

function validateDelivery(){

const d = new Date(delivery.value)
const today = new Date()

today.setHours(0,0,0,0)

const max = new Date()
max.setDate(today.getDate()+30)

if(delivery.value===""){
showError("delivery","Chọn ngày giao")
return false
}

if(d < today){
showError("delivery","Không chọn ngày quá khứ")
return false
}

if(d > max){
showError("delivery","Không quá 30 ngày")
return false
}

clearError("delivery")
return true

}

function validateAddress(){

if(address.value.trim().length < 10){
showError("address","Địa chỉ ≥ 10 ký tự")
return false
}

clearError("address")
return true

}

function validateNote(){

if(note.value.length > 200){
showError("note","Tối đa 200 ký tự")
return false
}

clearError("note")
return true

}

function validatePay(){

const pay = document.querySelector('input[name="pay"]:checked')

if(!pay){
showError("pay","Chọn phương thức thanh toán")
return false
}

clearError("pay")
return true

}

function updateTotal(){

const price = prices[product.value] || 0
const qty = Number(quantity.value) || 0

const total = price * qty

totalEl.textContent = total.toLocaleString("vi-VN")

}

product.addEventListener("change",updateTotal)
quantity.addEventListener("input",updateTotal)

note.addEventListener("input",()=>{

const len = note.value.length

noteCounter.textContent = `${len}/200`

if(len > 200){
noteCounter.style.color="red"
}else{
noteCounter.style.color="black"
}

})

product.addEventListener("blur",validateProduct)
quantity.addEventListener("blur",validateQuantity)
delivery.addEventListener("blur",validateDelivery)
address.addEventListener("blur",validateAddress)
note.addEventListener("blur",validateNote)

product.addEventListener("input",()=>clearError("product"))
quantity.addEventListener("input",()=>clearError("quantity"))
address.addEventListener("input",()=>clearError("address"))

form.addEventListener("submit",(e)=>{

e.preventDefault()

const valid =
validateProduct() &
validateQuantity() &
validateDelivery() &
validateAddress() &
validateNote() &
validatePay()

if(!valid) return

const total = totalEl.textContent

confirmBox.style.display="block"

confirmBox.innerHTML = `
<h3>Xác nhận đặt hàng</h3>
<p>Sản phẩm: ${product.value}</p>
<p>Số lượng: ${quantity.value}</p>
<p>Tổng tiền: ${total} VND</p>
<p>Ngày giao: ${delivery.value}</p>

<button id="confirmBtn">Xác nhận</button>
<button id="cancelBtn">Hủy</button>
`

document.getElementById("confirmBtn").onclick = ()=>{

form.style.display="none"
confirmBox.style.display="none"

success.innerHTML = "<h3>Đặt hàng thành công 🎉</h3>"

}

document.getElementById("cancelBtn").onclick = ()=>{
confirmBox.style.display="none"
}

})