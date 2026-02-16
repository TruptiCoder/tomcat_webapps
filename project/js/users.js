const API_URL = "http://localhost:5050/users";

document.addEventListener("DOMContentLoaded", async () => {
    const deletebtns = document.getElementsByClassName("delete");
    const showResult = document.getElementById("get_result");

    const response = await fetch(`${API_URL}/`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });
    console.log(response)
    const users = await response.json();
    createTable(users);

    function createTable(users) {

        showResult.innerHTML = "";

        const table = document.createElement("table");
        table.border = "1";
        table.style.borderCollapse = "collapse";
        table.style.width = "100%";

        const thead = document.createElement("thead");
        const headerRow = document.createElement("tr");

        ["Username", "Email", "Actions"].forEach(text => {
            const th = document.createElement("th");
            th.innerText = text;
            th.style.padding = "8px";
            headerRow.appendChild(th);
        });

        thead.appendChild(headerRow);
        table.appendChild(thead);

        const tbody = document.createElement("tbody");

        users.forEach(user => {

            const row = document.createElement("tr");

            const usernameCell = document.createElement("td");
            usernameCell.innerText = user.username;
            usernameCell.style.padding = "8px";

            const emailCell = document.createElement("td");
            emailCell.innerText = user.email;
            emailCell.style.padding = "8px";

            const actionCell = document.createElement("td");
            actionCell.style.padding = "8px";

            const deleteBtn = document.createElement("button");
            deleteBtn.innerText = "Delete";
            deleteBtn.style.marginRight = "5px";

            deleteBtn.addEventListener("click", async () => {
                try {
                    await fetch(`${API_URL}/${user.username}`, {
                        method: "DELETE",
                        headers: {
                            "Content-Type": "application/json"
                        },
                    });
                    row.remove();
                } catch (error) {
                    alert("Delete failed");
                }
            });

            const updateBtn = document.createElement("button");
            updateBtn.innerText = "Update";

            updateBtn.addEventListener("click", async () => {

                const newEmail = prompt("Enter new email:", user.email);

                if (!newEmail) return;

                try {
                    await fetch(`${API_URL}/${user.username}`, {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: {email: newEmail}
                    });

                    emailCell.innerText = newEmail;
                } catch (error) {
                    alert("Update failed");
                }
            });

            actionCell.appendChild(deleteBtn);
            actionCell.appendChild(updateBtn);

            row.appendChild(usernameCell);
            row.appendChild(emailCell);
            row.appendChild(actionCell);

            tbody.appendChild(row);
        });

        table.appendChild(tbody);
        showResult.appendChild(table);
    }
});

