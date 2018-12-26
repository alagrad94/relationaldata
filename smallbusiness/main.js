employeeObjects = [];

const employeeBuilder = function () {

    for (let i = 0; i < employees.length; i++) {
        let departmentId = employees[i].departmentId
        let computerId = employees[i].computerId
        let department = "";
        let computer = "";


        if (departmentId == 1) {
            department = "C-Suite"
        } else if (departmentId == 2) {
            department = "Janitorial"
        } else if (departmentId == 3){
            department = "Rock Crushing"
        }

        if (computerId == 1) {
            computer = "MacBook Pro 2018, 15-inch"
        } else if (computerId == 2) {
            computer = "Comodore 64"
        } else if (computerId == 3){
            computer = "Tandy 1000"
        }

        let employeeObject =
            {
            "name" : employees[i].name,
            "department" : department,
            "computer" : computer
            }

        employeeObjects.push(employeeObject);
    }
    console.log(employeeObjects)
    employeeObjects.forEach(employee => {

        let employeeName = employee.name;
        let employeeDept = employee.department;
        let employeeComp = employee.computer;


        let empoyeedContainer = document.getElementById("output");

        let employeeArticle = document.createElement("article");
        employeeArticle.classList.add("employee");
        let employeeNameHeader = document.createElement("h1");
        employeeNameHeader.classList.add("employee__name");
        employeeNameHeader.textContent = `${employeeName}`;
        let employeeDeptSection = document.createElement("section");
        employeeDeptSection.classList.add("employee__department");
        employeeDeptSection.textContent = `${employeeDept}`;
        let employeeCompSection = document.createElement("section");
        employeeCompSection.classList.add("employee__computer");
        employeeCompSection.textContent = `${employeeComp}`;

        employeeArticle.appendChild(employeeNameHeader);
        employeeArticle.appendChild(employeeDeptSection);
        employeeArticle.appendChild(employeeCompSection);
        empoyeedContainer.appendChild(employeeArticle);

    });
}
employeeBuilder();
