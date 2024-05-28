
var btn = document.getElementById('todoBtn');
var todo = document.getElementById('todo');
var histroyDiv = document.getElementById('histroyDiv')

btn.addEventListener('click', function(){
    if(todo.value.trim() === '') return alert('Please add todo')

    var now = new Date()
    var time = now.toLocaleTimeString()

    var li = `<li><h5>${todo.value.trim()}</h5><i class="fa-solid fa-pen-to-square" onclick = "edit(this)"></i> <i class="fa-solid fa-trash" onclick = "console.log(this.parentNode.remove())"></i></li>`

    histroyDiv.innerHTML += li

    histroyDiv.style.listStyle = 'none'

    todo.value = ''
})

function edit(element){
    console.log('Edit =>', element.previousElementSibling.innerText)

    var previousValue = element.previousElementSibling.innerText

    var updatedValue = prompt('Edit Value', previousValue)

    element.previousElementSibling.innerText = updatedValue
}