const inquirer = require('inquirer');
const ui = new inquirer.ui.BottomBar()
const cTable = require('console.table');
const Department = require('./lib/Department');
const Employee = require('./lib/Employee');
const Role = require('./lib/Role')

const department = new Department;
const employee = new Employee;
const role = new Role;

//available actions
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

const updateEmployee = async () => {
    const empData = {}
    empData["id"] = await employee.getEmployeeList()
        .then(result => {
            return inquirer.prompt({
                type: 'list',
                name: 'employee_id',
                choices: result,
                message: 'Select an employee to update'
            })
            .then(choice => choice.employee_id)           
        })

    empData["role"] = await role.getRolesList()
        .then(result => {
            return inquirer.prompt({
                type: 'list',
                name: 'role_id',
                choices: result,
                message: `Select the employee's new role`        
            })
            .then(choice => choice.role_id)
        })
        
    //console.log(empData);
    employee.updateRole(empData.id, empData.role)
        .then(result => console.log(`\n${result.info}`));
        
}

const addEmployee = async () => {
    const empData = {}

    return inquirer.prompt(
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
    )
        .then(choices => {
            empData["first"] = choices.first;
            empData["last"] = choices.last;
            empData["role"] = await role.getRolesList()
            .then(result => {
                return inquirer.prompt({
                    type: 'list',
                    name: 'role_id',
                    choices: result,
                    message: `Select the employee's new role`        
                })
                .then(choice => choice.role_id)
            })

            empData["manager"] = await employee.getEmployeeList()
            .then(result => {
                return inquirer.prompt({
                    type: 'list',
                    name: 'employee_id',
                    choices: result,
                    message: 'which employee will be their manager?'
                })
                .then(choice => choice.employee_id)           
            })
                

        })
        .then(() => {
            employee.addNewEmployee(empData)
                .then(result => console.log(`\n${result.info}`));
    })
}

const listActions = () => {
    return inquirer.prompt(
        {
            type: 'list',
            name: 'mainAction',
            choices: actions,
            message: 'What would you like to do?'
        }
    )
        .then(action => {
            switch (action.mainAction) {
                case 1:
                    department.viewDepartments()
                        .then(result => {
                            console.log(`\n-----------------\nViewing All Departments`);
                            console.table(result)
                        })
                    break;
                case 2:
                    role.viewRoles()
                        .then(result => {
                            console.log('Viewing all Roles')
                            console.table(result);
                    })
                    break;
                case 3:
                    employee.viewEmployees()
                        .then(result => {
                            console.log('Viewing all Employees')
                            console.table(result);
                    })
                    break;
                case 4:
                    break;
                case 5:
                    break;
                case 6:
                    break;
                case 7:
                    updateEmployee();
                    break;
                default:
                    //accounts for exit and 
                    return;
            }
            return listActions();
    })
}

listActions();




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

    
    


