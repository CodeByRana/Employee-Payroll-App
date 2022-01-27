window.addEventListener('DOMContentLoaded', () => {
    createInnerHTML();
});

//Template literal ES6 feature
const createInnerHTML = () => {
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
    const innerHtml = `${headerHtml}
                <tr>
                    <td>
                        <img class="profile" alt="profile-images" src="../assets/profile-images/Ellipse -2.png">
                    </td>
                    <td>Narayan Mahadevan</td>
                    <td>Male</td>
                    <td>
                        <div class="dept-label">HR</div>
                        <div class="dept-label">Finance</div>
                    </td>
                    <td>3000000</td>
                    <td>1 Nav 2022</td>
                    <td>
                        <img id="1" onclick="remove(this)" alt="delete" src="../assets/icons/delete-black-18dp.svg">
                        <img id="1" onclick="update(this)" alt="edit" src="../assets/icons/create-black-18dp.svg">
                    </td>
                </tr>
    `;
    document.querySelector('#display').innerHTML = innerHtml;
}