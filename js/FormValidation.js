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
