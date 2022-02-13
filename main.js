var ul = document.getElementById("myList");
var li;
var itemId;
var item;

addTask = function () {

    if (document.getElementById("task").value != "") {

        item = document.getElementById("task");

        itemId = ul.childElementCount;

        li = createItemEl(item.value, itemId);
        li.appendChild(createRemoveTaskBtn(itemId));
        ul.appendChild(li);
        item.value = "";
    }

}

removeTask = function (itemId) {

    for (i = 0; i < ul.children.length; i++) {

        if (ul.children[i].getAttribute("index") == itemId) {

            ul.children[i].remove();

        }
    }
}

createItemEl = function (itemValue, itemId) {

    let li = document.createElement("li");

    li.setAttribute("index", itemId);

    li.appendChild(document.createTextNode(itemValue));

    return li;
}

createRemoveTaskBtn = function (itemId) {
    let btn = document.createElement("button");
    btn.setAttribute("onclick", "removeTask(" + itemId + ")");
    btn.innerHTML = "X";
    return btn;
}

function getPasswordSimples() {
    var chars = "0123456789";
    var passwordLength = 8;
    var password = "";

    for (var i = 0; i < passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1);
    }
    document.getElementById('password').value = password
}

function getPasswordModerado() {
    var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJLMNOPQRSTUVWXYZ";
    var passwordLength = 8;
    var password = "";

    for (var i = 0; i < passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1);
    }
    document.getElementById('password').value = password
}

function getPasswordDificil() {
    var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJLMNOPQRSTUVWXYZ!@#$%^&*()+?><:{}[]";
    var passwordLength = 8;
    var password = "";

    for (var i = 0; i < passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1);
    }
    document.getElementById('password').value = password
}

setInterval(function () {
    let novaHora = new Date();
    // getHours trará a hora
    // geMinutes trará os minutos
    // getSeconds trará os segundos
    let hora = novaHora.getHours();
    let minuto = novaHora.getMinutes();
    let segundo = novaHora.getSeconds();
    // Chamamos a função zero para que ela retorne a concatenação com os minutos e segundos
    minuto = zero(minuto);
    segundo = zero(segundo);
    document.getElementById('hora').textContent = hora + ':' + minuto + ':' + segundo;
}, 1000)


// Adiciona 0 em frente aos números que são menor que 10
function zero(x) {
    if (x < 10) {
        x = '0' + x;
    }
    return x;
}