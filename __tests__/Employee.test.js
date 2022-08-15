const Employee = require('../lib/Employee');

describe('Employee Test', () => {
    const employee = new Employee;

    describe('Should retrieve employee data', () => {
        let result = employee.viewEmployees();

        it('Should contain an array of data', () => expect(result.data).toBe(typeof Array))
    });

    describe('Should retrieve manager data', () => {
        let result = employee.viewByManager(1);

        it('Should contain an array of data', () => expect(result.data).toBe(typeof Array))
    })

    describe('Should retrieve employee data by department id', () => {
        let result = employee.viewByDepartment(1);

        it('Should contain an array of data', () => expect(result.data).toBe(typeof Array))
    })

    
})