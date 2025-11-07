// TODO: Fetch data from the PostgreSQL database (to be implemented later)
function fetchGradebookData() {
    console.log("Fetching gradebook data...");
    // Create a new request for HTTP data
    let xhr = new XMLHttpRequest();
    
    // This is the address on the machine we're asking for the data
    let apiRoute = "/api/grades";
    
    // When the request changes status, we run this anonymous function
    xhr.onreadystatechange = function() {
        let results;
        // Check if we're done
        if (xhr.readyState === xhr.DONE) {
            // Check if we're successful
            if (xhr.status !== 200) {
                console.error(`Could not get grades. Status: ${xhr.status}`);
                return;
            }
            // And then call the function to update the HTML with our data
            populateGradebookTable(JSON.parse(xhr.responseText));
        }
    };
    
    xhr.open("GET", apiRoute, true);
    xhr.send();
}

// TODO: Populate the tble with grade data
function populateGradebookTable(data) {
    console.log("Populating gradebook table with data:", data);  
    let tableElm = document.getElementById("gradebook");
    
    // reset the table each time
    tableElm.innerHTML = '';

    // i over the data and create rows
    data.forEach((assignment) => {
        let row = document.createElement("tr");
        let columns = { name: null, grade: null }; 
        
        // Create the 'name' column (could be assignment.name)
        columns.name = document.createElement('td');
        columns.name.appendChild(document.createTextNode(assignment.name));  // assuming 'name' is a property in 'assignment'
        row.appendChild(columns.name);
        
        // Create the 'grade' column (could assignment.grade)
        columns.grade = document.createElement('td');
        columns.grade.appendChild(document.createTextNode(assignment.grade));  // assuming 'grade' is a property in 'assignment'
        row.appendChild(columns.grade);

        // Append the row to the table
        tableElm.appendChild(row);
    });
}

// Call the fetchGradebookData function 
fetchGradebookData();
