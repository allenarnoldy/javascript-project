// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  let employeesArray = [];
  let looping = true;

  while (looping){
    let firstName = prompt('enter employees first name:');
    let lastName = prompt('enter employees last name:');
    let salary = prompt('enter employees salary:');
    
    function returnZero(salary) {
      salary = Number(salary);
      if (Number.isNaN(salary)) {
        salary = 0;
      }
      return salary;
    }
    salary = returnZero(salary);
    var employee = {firstName, lastName, salary};

    employeesArray.push(employee);
    looping = confirm('enter more employees?:');
  }
  return employeesArray;
};

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  const numberOfEmployees = employeesArray.lenght;
  let totalSalary = 0;

  for (let i = 0; i < employeesArray.length; i++) {
    totalSalary += employeesArray[i].salary;
  }
  let averageSalary = totalSalary / employeesArray.length;
  averageSalary = averageSalary.toFixed(2);
  console.log(`the average employee salary between our ${employeesArray.length} employee(s) is ${averageSalary}!`);
};


// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee 
  const randomIndex = Math.floor(Math.random() * employeesArray.length);
  const randomEmployee = employeesArray[randomIndex];
  console.log(`Congratulations to ${randomEmployee.firstName} ${randomEmployee.lastName}, our random drawing winner!`);
};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
