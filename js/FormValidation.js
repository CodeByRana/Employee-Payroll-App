window.addEventListener('DOMContentLoaded', (event) => {
    validateName();
    validateSalary();
});
//validation for name
function validateName(){
    const name = document.querySelector('#name');
    const textError = document.querySelector('.text-error')
    name.addEventListener('input',function(){
        try{
            let empData = new EmployeePayrollData();
            empData.name = name.value;
            textError.textContent  = "";
        }catch(e){
            textError.textContent = e;
        }
    });
}
//validation for salary
function validateSalary(){
    const salary = document.querySelector("#salary");
    const output = document.querySelector('.salary-output');
    output.textContent = salary.value;
    salary.addEventListener('input',function(){
        output.textContent= salary.value;
    });
}

//On Save Create Employee Payroll Data Object 
const save = () =>{

    let employeePayrollData = createEmployeePayroll();

}

const createEmployeePayroll = () =>{
    
    let employeePayrollData = new EmployeePayrollData();
    try {
        employeePayrollData.name = getInputValueById('#name');
    } catch (e) {
        setTextValue('.text-error',e);
    }

    try {
        let date = getInputValueById('#day') + " " + getInputValueById('#month') + " " + getInputValueById('#year');
        employeePayrollData.startDate = new Date(Date.parse(date));
        setTextValue('.date-error', "");
    } catch (e) {
        setTextValue('.date-error', e);
    }
    alert(JSON.stringify(employeePayrollData));
}

const getInputValueById = (id) => {
    return value = document.querySelector(id).value;
}

const setTextValue = (id, message) => {
    const textError = document.querySelector(id);
    textError.textContent = message;
}