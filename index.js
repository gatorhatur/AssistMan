const inquirer = require('inquirer');
const cTable = require('console.table');
const Department = require('./lib/Department');
const Employee = require('./lib/Employee');
const Role = require('./lib/Role')

const department = new Department;
const employee = new Employee;
const role = new Role;

let deptList = []

// department.getDepartments()
//     .then(result => deptList = result);

// console.log(deptList);

role.getRolesList()
    .then(result => {
        inquirer.prompt(
            {
                type: 'list',
                name: 'role_id',
                choices: result,
                message: 'pick a role'
            }
        )
            .then(choice => console.log(choice.role_id))
    });

// employee.getEmployeeList()
//     .then(result => {
//         inquirer.prompt(
//             {
//                 type: 'list',
//                 name: 'manager_id',
//                 choices: result,
//                 message: 'pick a amanager'  
//             }
//         )
//         .then(choice => console.log(choice.manager_id))
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

    
    


