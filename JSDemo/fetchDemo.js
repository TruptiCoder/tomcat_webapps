const getEmployees = async () => {
    try {
        const response = await fetch("employees.json");
        let data = await response.json();
        data = data.employees;
        let thead = document.getElementById("trhead");
        let tbody = document.getElementById("tbody");
        Object.keys(data[0]).forEach((key) => {
            thead.innerHTML += `<th>${key}</th>`;
        });
        data.forEach((employee) => {
            let row = `<tr>
                <td>${employee.firstName}</td>
                <td>${employee.lastName}</td>
                <td>${employee.age}</td>
                <td>${employee.department}</td>
            </tr>`;
            tbody.innerHTML += row;
        })
    } catch (err) {
        console.log("Error is: ", err);
    }
}

getEmployees();

async function verifyUser(user) {
    let response = await fetch("verifyUser.jsp", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: "username=" + user
    });
    console.log(await response.text())

}