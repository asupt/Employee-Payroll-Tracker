// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// initialize main employee array
let employeeInfo = [];

// Collect employee data
const collectEmployees = function() {
  affirmer = window.prompt("Add a new employee? (y/n)");
  if (affirmer == "n") {}
  else if (affirmer == "y") {
    
    // variable to detect whether to finalize user input
    stopper = false; 

    while (stopper == false) {
      // initialize temp variable to log object values
      tempLogger = {};
      tempLogger.firstName = window.prompt("First name?");
      tempLogger.lastName = window.prompt("Last name?");
      tempLogger.salary = +(window.prompt("Salary? (Numbers only)"));
      // push object to main employee array
      employeeInfo.push(tempLogger);
      continueVerification = window.prompt("Add another employee? (y/n)")
      // stop or continue process
      if (continueVerification == "y") stopper = false;
      else stopper = true;
    }
    return employeeInfo;
  }
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // init salary variable
  averageSalary = 0;
  for (let i = 0; i < employeeInfo.length; i++) {
    // add salaries
    averageSalary += employeeInfo[i].salary;
  }
  // divide by emp count for avg
  averageSalary /= employeeInfo.length;
  // log
  console.log(`Average Salary: $${averageSalary}`);
  if (employeeInfo.length <= 1) plurality = "";
  else plurality = "s";
  console.log(`We have ${employeeInfo.length} employee${plurality}.`);
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
}

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
