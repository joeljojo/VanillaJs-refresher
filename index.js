document.addEventListener('DOMContentLoaded', function() {
    const usernameInput = document.getElementById('username');
    const occupationInput = document.getElementById('occupation');
    const ageInput = document.getElementById('age');
    const btnSubmit = document.getElementById('submit');
    const form = document.getElementById('pass');

    // Edit state variables
    let isEditing = false;
    let editingRow = null;

    const table = document.createElement('table');
    const tableRow = document.createElement('tr');
    const tableHeader1 = document.createElement('th');
    const tableHeader2 = document.createElement('th');
    const tableHeader3 = document.createElement('th');
    const tableHeader4 = document.createElement('th');
    const tableBody = document.createElement('tbody');
    tableHeader1.innerHTML = 'Name';
    tableHeader2.innerHTML = 'Occupation';
    tableHeader3.innerHTML = 'Age';
    tableHeader4.innerHTML = 'Action';
    tableRow.appendChild(tableHeader1);
    tableRow.appendChild(tableHeader2);
    tableRow.appendChild(tableHeader3);
    tableRow.appendChild(tableHeader4);
    table.appendChild(tableRow);
    table.appendChild(tableBody);
    document.body.appendChild(table);

    function cancelEdit() {
        // Reset editing state
        isEditing = false;
        editingRow = null;
        
        // Clear form
        usernameInput.value = '';
        occupationInput.value = '';
        ageInput.value = '';
        
        btnSubmit.textContent = 'Add Members';
        usernameInput.focus();
    }

    function handleDelete(e, index) {
        if (isEditing && editingRow && editingRow.rowIndex === index) {
            cancelEdit();
        }
        table.deleteRow(index);
    }

    function addOrUpdateUser() {
        const name = usernameInput.value.trim();
        const occupation = occupationInput.value.trim();
        const age = ageInput.value.trim();

        // Prevent Entry when any of the fields is empty
        if(!name || !occupation || !age) {
            alert('Please fill in all fields');
            return;
        }

        if (isEditing && editingRow) {
            // Update existing row
            const cells = editingRow.cells;
            cells[0].firstChild.textContent = name;
            cells[1].firstChild.textContent = occupation;
            cells[2].firstChild.textContent = age;
            
            // Exit edit mode
            cancelEdit();
        } else {
            // Add new row
            const dataTableRow = document.createElement('tr');
            const tableCell1 = document.createElement('td');
            const tableCell2 = document.createElement('td');
            const tableCell3 = document.createElement('td');
            const tableCell4 = document.createElement('td');
            
            const cellData1 = document.createTextNode(name);
            const cellData2 = document.createTextNode(occupation);
            const cellData3 = document.createTextNode(age);

            const actionDiv = document.createElement('div');
            actionDiv.className = 'action-buttons';
            const editButton = document.createElement('button');
            editButton.innerHTML = 'Edit';
            editButton.style.color = 'white';
            editButton.style.backgroundColor = '#007bff';
            editButton.className = 'edit-btn';
            editButton.addEventListener('click', () => handleEdit(dataTableRow));

            const deleteButton = document.createElement('button');
            deleteButton.innerHTML = 'Delete';
            deleteButton.style.color = 'white';
            deleteButton.style.backgroundColor = 'red';
            deleteButton.className = 'delete-btn';
            deleteButton.addEventListener('click', (e) => handleDelete(e, dataTableRow.rowIndex));

            actionDiv.appendChild(editButton);
            actionDiv.appendChild(deleteButton);
            tableCell1.appendChild(cellData1);
            tableCell2.appendChild(cellData2);
            tableCell3.appendChild(cellData3);
            tableCell4.appendChild(actionDiv);

            dataTableRow.appendChild(tableCell1);
            dataTableRow.appendChild(tableCell2);
            dataTableRow.appendChild(tableCell3);
            dataTableRow.appendChild(tableCell4);
            tableBody.appendChild(dataTableRow);

            // Clear the inputs
            usernameInput.value = '';
            occupationInput.value = '';
            ageInput.value = '';

            // Focus on the username input for a new entry
            usernameInput.focus();
        }
    }

    function handleEdit(row) {
        const cells = row.cells;
        const name = cells[0].textContent;
        const occupation = cells[1].textContent;
        const age = cells[2].textContent;

        // Fill the form with existing data
        usernameInput.value = name;
        occupationInput.value = occupation;
        ageInput.value = age;
        
        // Set editing mode
        isEditing = true;
        editingRow = row;
        
        // Update button text
        btnSubmit.textContent = 'Update Member';
        
        // Focus on first input
        usernameInput.focus();
    }

    // Event listener for submit button
    btnSubmit.addEventListener('click', addOrUpdateUser);
    
    // Allow Enter key to submit form
    document.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && (document.activeElement === usernameInput || 
            document.activeElement === occupationInput || 
            document.activeElement === ageInput)) {
            addOrUpdateUser();
        }
    });
});