const inquirer = require('inquirer');
const cTable = require('console.table');
const Department = require('./lib/Department');
const Employee = require('./lib/Employee');
const Role = require('./lib/Role')

//instantiate classes
const department = new Department;
const employee = new Employee;
const role = new Role;

//available actions for inquirer
const actions = [
    {
        name: 'View all Departments',
        value: 1
    },
    {
        name: 'View all Roles',
        value: 2
    },
    {
        name: 'View all Employees',
        value: 3
    },
    {
        name: 'Add a Department',
        value: 4
    },
    {
        name: 'Add a Role',
        value: 5
    },
    {
        name: 'Add an Employee',
        value: 6
    },
    {
        name: 'Update an Employee role',
        value: 7
    },
    {
        name: 'Quit',
        value: 100
    }
]

//handles the UpdateEmployee flow
const promptUpdateEmployee = async () => {
    const empChoices = await employee.getEmployeeList()
    const roleChoices = await role.getRolesList();

    return inquirer.prompt([{
                type: 'list',
                name: 'employee_id',
                choices: empChoices,
                message: 'Select an employee to update'
            },
            {
                type: 'list',
                name: 'role_id',
                choices: roleChoices,
                message: `Select the employee's new role`        
            }
    ])
    .then(choices => {
        return employee.updateRole(choices.employee_id, choices.role_id)
    })
    .then(result => console.log(`\n${result.info}`));
        
}

//handles the New Employee flow
const promptAddEmployee = async () => {

    const roleChoices = await role.getRolesList();
    //console.log(roleChoices)
    const empChoices = await employee.getEmployeeList()

    return inquirer.prompt([
        {
            type: 'input',
            name: 'first',
            message: `Enter the new employee's first name`
        },
        {
            type: 'input',
            name: 'last',
            message: `Enter the new employee's last name`
        },
        {
            type: 'list',
            name: 'role',
            choices: roleChoices,
            message: `Select the employee's new role`        
        },
        {
            type: 'list',
            name: 'manager',
            choices: empChoices,
            message: 'which employee will be their manager?'
        }
    ])
    .then((choices) => {
        return employee.addNewEmployee(choices)
            
    })
    .then(result => {
        if (result.affectedRows > 0) {
            
            return `\nSuccess! New ID is ${result.insertId}`;
        }

        return console.log("An error has occured");
         
    });
      
}

//handles the new Role flow
const promptNewRole = async () => {

    const deptChoices = await department.getDepartments();

    return inquirer.prompt([
        {
            type: 'list',
            name: 'department_id',
            choices: deptChoices,
            message: 'Which department should this role belong to?'
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is the role title'
        },
        {
            type: 'input',
            name: 'salary',
            message: 'What is the salary of the role?',
            validate: input => {
                if (isNaN(input)) {
                    console.log("You did not enter a valid salary")
                    return false;
                }

                return true;
            }
        }
    ])
    .then(choices => {
        return role.addNewRole(choices);
    })
    .then(result => {
        if (result.affectedRows > 0) {
            
            return `\nNew Role Created! ID is ${result.insertId}`;
        }
    
        return console.log("An error has occured");
    })
}

//handles the new Department flow
const promptNewDepartment = async () => {
    return inquirer.prompt({
        type: 'input',
        name: 'deptName',
        message: 'What is the name of the new department?'
    })
    .then(choice => {
            //console.log(choice)
        return department.addNewDepartment(choice.deptName);
    })
    .then(result => {
        if (result.affectedRows > 0) {
            
            return `\nNew Department Created! ID is ${result.insertId}`;
        }
    
        return console.log("An error has occured");
    })
}

function startPrompt() {
    console.log(`\n`);
    return inquirer.prompt(
        {
            type: 'list',
            name: 'mainAction',
            choices: actions,
            message: 'What would you like to do?'
        }
    )
        .then(action => {
            console.log(`\n`)
            switch (action.mainAction) {
                case 100:
                    console.log('Exiting, see you again soon!')
                    process.exit();
                    break;
                case 1:
                    department.viewDepartments()
                        .then(result => {
                            console.log(`Viewing All Departments`);
                            console.table(result)
                            startPrompt();
                        })
                    break;
                case 2:
                    role.viewRoles()
                        .then(result => {
                            console.log('Viewing all Roles')
                            console.table(result);
                            startPrompt();
                    })
                    break;
                case 3:
                    employee.viewEmployees()
                        .then(result => {
                            console.log('Viewing all Employees')
                            console.table(result);
                            startPrompt();
                    })
                    break;
                case 4:
                    promptNewDepartment().then(result => {
                        console.log(result);
                        startPrompt();
                    })
                    break;
                case 5:
                    promptNewRole().then(result => {
                        console.log(result);
                        startPrompt();
                    })
                    break;
                case 6:
                    promptAddEmployee().then((result) => {
                        console.log(result);
                        startPrompt()
                    })
                    break;
                case 7:
                    promptUpdateEmployee()
                        .then(() => startPrompt());
                    break;
                default:
                    console.log("This action is not valid, please try again");
                    startPrompt();
                    break;
            }
            
    })
}

startPrompt();






// role.getRolesList()
//     .then(result => {
//         inquirer.prompt(
//             {
//                 type: 'list',
//                 name: 'role_id',
//                 choices: result,
//                 message: 'pick a role'
//             }
//         )
//             .then(choice => console.log(choice.role_id))
//     });



// department.getDepartments()
//     .then(result => {
//         inquirer.prompt(
//             {
//                 type: 'list',
//                 name: 'department',
//                 choices: result,
//                 message: 'pick a department'  
//             }
//         )
//         .then(choice => console.log(choice.department))
//     });

    
    


