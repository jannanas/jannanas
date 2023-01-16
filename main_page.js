document.getElementById("submitNoGoal-btn").addEventListener("click", addGoal)
let myGoalsUl = document.getElementById("my-goals-ul")

function addGoal() {
    const goal = document.getElementById("goal").value
    const description = document.getElementById("description").value
    const due = document.getElementById("due").value

    myGoalsUl.innerHTML += `
        <li>
            <div>
                <p>
                    <strong>Goal: </strong>${goal}
                </p>
                <p>
                    <strong>Description: </strong>${description}
                <p>
                    <strong>Due date: </strong>${due}
                </p>
                <button id = "showForm">No Subgoals</button>
                <form class = "subgoal-form" id = "subform" display = 'none'>
                    <div>
                        <label for="subgoal">Subgoal Name</label>
                        <input type="text" id="subgoal" name="subgoal" placeholder = "Name">
                    </div>
                    <div>
                        <label for="subdescription">Subgoal Description</label>
                        <input type="text" id = "subdescription" name = "subdescription" placeholder = "Subgoal Description">
                    </div>
                    <div>
                        <label for="subdue">Due Date</label>
                        <input type="date" id="subdue" name="subdue" placeholder = "Subgoal Due Date">
                    </div>
                    <button type = "button" id = "sub-btn">Add Subgoal</button>
                </form>
                <ul id = "mySubgoalUl">
                </ul>
                <label for = "done">Completed:</label>
                <input type = "checkbox" name = "done">
            </div>
        </li>
    `
    const btn = document.getElementById('showForm');

    btn.addEventListener('click', () => {
        const form = document.getElementById('subform');

        if (form.style.display === 'none') {
            form.style.display = 'block';
            btn.textContent = 'Go back';
        } else {
            form.style.display = 'none';
            btn.textContent = 'Create Subgoal';
        }
    });

    document.getElementById("sub-btn").addEventListener("click", addSubGoal)
    let mySubgoalUl = document.getElementById("mySubgoalUl")

    function addSubGoal() {
        const subgoal = document.getElementById("subgoal").value
        const subdescription = document.getElementById("subdescription").value
        const subdue = document.getElementById("subdue").value

        mySubgoalUl.innerHTML += `
            <ul class = "subgoals">
                <div>
                    <p>
                        <strong>Subgoal Name: </strong>${subgoal}
                    </p>
                    <p>
                        <strong>Subgoal Description: </strong>${subdescription}
                    <p>
                        <strong>Subgoal Due date: </strong>${subdue}
                    </p>
                    <label for = "done">Subgoal Completed:</label>
                    <input type = "checkbox" name = "done">
                </div>
            </ul>
        `
    }
}