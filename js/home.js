let empPayrollList;
window.addEventListener('DOMContentLoaded', () => {
  empPayrollList = getEmployeePayrollDataFromStorage();
  document.querySelector(".emp-count").textContent = empPayrollList.length;
  createInnerHtml();
  localStorage.removeItem('editEmp');
});

const getEmployeePayrollDataFromStorage = () =>{
  return localStorage.getItem('employeePayrollList') ? JSON.parse(localStorage.getItem('employeePayrollList')) : [];
}

//Template literal ES6 feature
const createInnerHtml = () => {

  const headerHtml = `
    <tr>
    <th></th>
    <th>Name</th>
    <th>Gender</th>
    <th>Department</th>
    <th>Salary</th>
    <th>Start Date</th>
    <th>Actions</th>
</tr>`;
  let innerHtml = `${headerHtml}`;

  for (const empPayrollData of empPayrollList) {
    innerHtml = `${innerHtml}
                <tr>
                    <td>
                        <img class="profile" alt="profile-images" src="${empPayrollData
        ._profilePic}">
                    </td>
                    <td>${empPayrollData._name}</td>
                    <td>${empPayrollData._gender}</td>
                    <td>${getDeptHtml(empPayrollData._department)}</td>
                    <td>${empPayrollData._salary}</td>
                    <td>${empPayrollData._startDate}</td>
                    <td>
                        <img name="${empPayrollData._id}" onclick="remove(this)" alt="delete" src="../assets/icons/delete-black-18dp.svg">
                        <img name="${empPayrollData._id}" onclick="update(this)" alt="edit" src="../assets/icons/create-black-18dp.svg">
                    </td>
                </tr>
    `;
  }
  document.querySelector('#display').innerHTML = innerHtml;
}

const createEmployeePayrollJSON = () => {
  let empPayrollListLocal = [
    {
      "_id": 1,
      "_name": "Mark",
      "_gender": "male",
      "_department": [
        "Finance",
        "Engineer"
      ],
      "_salary": "500000",
      "_startDate": '28 jan 2022',
      "_note": "All In One",
      "_profilePic": "../assets/profile-images/Ellipse -3.png"
    },
    {
      "_id": 2,
      "_name": "Bill",
      "_gender": "male",
      "_department": [
        "Engineering"
      ],
      "_salary": "500000",
      "_startDate": "29 Oct 2019",
      "_note": "Terrific Engineer",
      "_profilePic": "../assets/profile-images/Ellipse -1.png"
    },
    {
      "_id": 3,
      "_name": "Keerthi",
      "_gender": "female",
      "_department": [
        "Sales"
      ],
      "_salary": "400000",
      "_startDate": "29 Oct 2019",
      "_note": "",
      "_profilePic": "../assets/profile-images/Ellipse -1.png"
    },
    {
      "_id": 4,
      "_name": "Kavya",
      "_profilePic": "../assets/profile-images/Ellipse -1.png",
      "_gender": "female",
      "_department": [
        "Finance",
        "Engineer"
      ],
      "_salary": "428100",
      "_note": "                ",
      "_startDate": '27 oct 2022'
    }
  ];
  return empPayrollListLocal;
}
