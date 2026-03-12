let students = []
let filteredStudents = []

let sortAsc = true

const nameInput = document.getElementById("name")
const scoreInput = document.getElementById("score")
const addBtn = document.getElementById("addBtn")

const searchInput = document.getElementById("search")
const filterSelect = document.getElementById("filter")

const tbody = document.getElementById("studentTable")
const stats = document.getElementById("stats")
const scoreHeader = document.getElementById("scoreHeader")

function getRank(score){

if(score >= 8.5) return "Giỏi"
if(score >= 7) return "Khá"
if(score >= 5) return "Trung bình"
return "Yếu"

}

function addStudent(){

const name = nameInput.value.trim()
const score = parseFloat(scoreInput.value)

if(name === ""){
alert("Họ tên không được trống")
return
}

if(isNaN(score) || score < 0 || score > 10){
alert("Điểm phải từ 0 đến 10")
return
}

students.push({
name,
score
})

nameInput.value=""
scoreInput.value=""
nameInput.focus()

applyFilters()

}

function applyFilters(){

const keyword = searchInput.value.toLowerCase()
const rankFilter = filterSelect.value

filteredStudents = students.filter(sv =>{

const matchName = sv.name.toLowerCase().includes(keyword)

const rank = getRank(sv.score)

const matchRank = rankFilter === "all" || rank === rankFilter

return matchName && matchRank

})

filteredStudents.sort((a,b)=>{

return sortAsc ? a.score - b.score : b.score - a.score

})

renderTable()

}

function renderTable(){

tbody.innerHTML=""

if(filteredStudents.length === 0){

tbody.innerHTML = `<tr><td colspan="5">Không có kết quả</td></tr>`
stats.textContent = ""

return

}

let total = 0

filteredStudents.forEach((sv,index)=>{

total += sv.score

const tr = document.createElement("tr")

if(sv.score < 5){
tr.classList.add("low-score")
}

tr.innerHTML = `
<td>${index+1}</td>
<td>${sv.name}</td>
<td>${sv.score}</td>
<td>${getRank(sv.score)}</td>
<td><button data-name="${sv.name}">Xóa</button></td>
`

tbody.appendChild(tr)

})

const avg = (total/filteredStudents.length).toFixed(2)

stats.textContent =
`Tổng SV: ${filteredStudents.length} | Điểm TB: ${avg}`

updateSortIcon()

}

function updateSortIcon(){

scoreHeader.textContent =
`Điểm ${sortAsc ? "▲" : "▼"}`

}

addBtn.addEventListener("click",addStudent)

scoreInput.addEventListener("keypress",e=>{
if(e.key==="Enter"){
addStudent()
}
})

searchInput.addEventListener("input",applyFilters)

filterSelect.addEventListener("change",applyFilters)

scoreHeader.addEventListener("click",()=>{

sortAsc = !sortAsc

applyFilters()

})

tbody.addEventListener("click",e=>{

if(e.target.tagName === "BUTTON"){

const name = e.target.dataset.name

students = students.filter(sv=>sv.name !== name)

applyFilters()

}

})