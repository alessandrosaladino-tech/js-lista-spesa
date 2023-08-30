/*
Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.
*/


let list = ["Pane", "Burro", "Pasta", "Pomodori", "Insalata", "Frutta", "Biscotti"] ;
const ulEl = document.querySelector("ul")

i = 0;

while (i < list.length) {
    const listEl = list[i];
    const liEl = document.createElement("li")
    liEl.append(listEl)
    ulEl.append(liEl)
    i++
}