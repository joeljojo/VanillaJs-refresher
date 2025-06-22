// DOM elements
document.addEventListener('DOMContentLoaded', function() {
    const usernameInput = document.getElementById('username');
    const occupationInput = document.getElementById('occupation');
    const ageInput = document.getElementById('age');
    const btnSubmit = document.getElementById('submit');
    const form = document.getElementById('pass');

    const table = document.createElement('table');
    const tableRow = document.createElement('tr');
    const tableHeader1 = document.createElement('th');
    const tableHeader2 = document.createElement('th');
    const tableHeader3 = document.createElement('th');
    const tableBody = document.createElement('tbody');
    tableHeader1.innerHTML = 'Name';
    tableHeader2.innerHTML = 'Occupation';
    tableHeader3.innerHTML = 'Age';
    tableRow.appendChild(tableHeader1);
    tableRow.appendChild(tableHeader2);
    tableRow.appendChild(tableHeader3);
    table.appendChild(tableRow);
    table.appendChild(tableBody);
    document.body.appendChild(table);

    function addUser() {
        const name = usernameInput.value;
        const occupation = occupationInput.value;
        const age = ageInput.value;

        const dataTableRow = document.createElement('tr');
        const tableCell1 = document.createElement('td');
        const tableCell2 = document.createElement('td');
        const tableCell3 = document.createElement('td');
        const cellData1 = document.createTextNode(name);
        const cellData2 = document.createTextNode(occupation);
        const cellData3 = document.createTextNode(age);
        tableCell1.appendChild(cellData1);
        tableCell2.appendChild(cellData2);
        tableCell3.appendChild(cellData3);
        dataTableRow.appendChild(tableCell1);
        dataTableRow.appendChild(tableCell2);
        dataTableRow.appendChild(tableCell3);
        tableBody.appendChild(dataTableRow);

        // Clear the inputs
        usernameInput.value = '';
        occupationInput.value = '';
        ageInput.value = '';
        // Focus on the username input for a new entry
        usernameInput.focus();
    }

    btnSubmit.addEventListener('click', addUser);
});