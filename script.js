
function generateTable() {
    const table = document.createElement("table");
    const tableBody = document.createElement("tbody");
    for (let x = 0; x < 10; x++) {
        const row = document.createElement("tr");
        for (let y = 0; y < 10; y++) {
            const cell = document.createElement("td");
            const cellText = document.createTextNode((y + 10 * x) + 1);
            cell.appendChild(cellText);
            row.appendChild(cell);
        }
        tableBody.appendChild(row);
    }
    table.appendChild(tableBody);
    document.body.appendChild(table);
    table.setAttribute("border", "1");
}
