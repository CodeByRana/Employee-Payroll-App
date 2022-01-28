window.addEventListener('DOMContentLoaded', () => {
    validateName();
    validateSalary();
});
//validation for name
function validateName() {
    const name = document.querySelector('#name');
    const textError = document.querySelector('.text-error')
    name.addEventListener('input', function () {
        try {
            let empData = new EmployeePayrollData();
            empData.name = name.value;
            textError.textContent = "";
        } catch (e) {
            textError.textContent = e;
        }
    });
}
//validation for salary range
function validateSalary() {
    const salary = document.querySelector("#salary");
    const output = document.querySelector('.salary-output');
    output.textContent = salary.value;
    salary.addEventListener('input', function () {
        output.textContent = salary.value;
    });
}

//UC11 - On Save Create Employee Payroll Data Object 
const save = () => {

    let employeePayrollData = createEmployeePayroll();
    createAndUpadteLocalStorage(employeePayrollData);
}

const createEmployeePayroll = () => {

    let employeePayrollData = new EmployeePayrollData();
    try {
        employeePayrollData.name = getInputValueById('#name');
        setTextValue('.text-error', "");
    } catch (e) {
        setTextValue('.text-error', e);
    }

    try {
        let date = getInputValueById('#day') + " " + getInputValueById('#month') + " " + getInputValueById('#year');
        employeePayrollData.startDate = new Date(Date.parse(date));
        setTextValue('.date-error', "");
    } catch (e) {
        setTextValue('.date-error', e);
    }

    employeePayrollData.profilePic = getSelectValue('[name=profile]').pop();
    employeePayrollData.gender = getSelectValue('[name=gender]').pop();
    employeePayrollData.department = getSelectValue('[name=department]');
    employeePayrollData.salary = getInputValueById('#salary');
    employeePayrollData.notes = getInputValueById('#notes');
    employeePayrollData.id = new Date().getTime() + 1;
    alert(employeePayrollData.toString());
    console.log(employeePayrollData);
    return employeePayrollData;
}

const getInputValueById = (id) => {
    return value = document.querySelector(id).value;
}

const setTextValue = (id, message) => {
    const textError = document.querySelector(id);
    textError.textContent = message;
}

const getSelectValue = (propertyValue) => {
    let allItems = document.querySelectorAll(propertyValue);
    let setItems = [];
    allItems.forEach(item => {
        if (item.checked == true) {
            setItems.push(item.value);
        }
    });
    return setItems;
}

//Data store in local storage
const createAndUpadteLocalStorage = (empData) => {
    let dataList = JSON.parse(localStorage.getItem("employeePayrollList"));
    console.log("Data from local stroage" );
    console.log(dataList);
    if (dataList != null) {
    if (dataList != undefined) {
        dataList.push(empData);
    } else {
        dataList = [empData];
    }
    localStorage.setItem('employeePayrollList',JSON.stringify(dataList));
    alert("Data stored with name "+empData.name);
}

/** Reset employee payroll form */

const resetForm = () => {
    setTextValue('#name', '');
    unsetSelectedValues('[name=profile]');
    unsetSelectedValues('[name=gender]');
    unsetSelectedValues('[name=department]');
    setValue('#salary','');
    setValue('#notes','');
    setValue('#day','1');
    setValue('#month','January');
    setValue('#year','2021');
}

const unsetSelectedValues =(propertyValue) =>{
    let allItems = document.querySelectorAll(propertyValue);
    allItems.forEach (item =>{
        item.checked = false;
    });
}

const setValue = (id, value) =>{
    const element = document.querySelector(id);
    element.value = value;
    }
}