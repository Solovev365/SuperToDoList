const inputEl = document.getElementById('input')
const createEl = document.getElementById('create')
const listEl = document.getElementById('list-Create')

let jobsList = [{
        jobTitel: 'Погулять с Любовью',
        completed: false
    },
    {
        jobTitel: 'Сходить в церковь',
        completed: true
    }
]

function jobsPrint() {
    listEl.innerHTML = ''
    for (let i = 0; i < jobsList.length; i++) {
        listEl.insertAdjacentHTML('beforeend', jobPattern(jobsList[i], i, jobsList[i].completed))
    }
}

function jobPattern(jobsList, i, completed) {
    return `<li>
        <span class="job-text ${completed ? 'job-text-done':''}">
            ${jobsList.jobTitel}
        </span>
        <div class="btn-job">
            <button id="done-job" class="${completed ? 'done-job-yellow':'greenb'}" data-index= "${i}" data-type="done">&check;</button>
            <button id="del-job" class="redb" data-index= "${i}" data-type="del">&times;</button>
        </div>
    </li>`
}
jobsPrint()
createEl.onclick = function () {
    if (inputEl.value.langht == 0) {
        return
    }
    jobsList.push({
        jobTitel: inputEl.value,
        completed: false
    })
    jobsPrint()
    inputEl.value = ''
}

listEl.onclick = function (event) {
    const index = event.target.dataset.index
    const type = event.target.dataset.type

    if (index) {
        if (type == 'done') {
            jobsList[index].completed = !jobsList[index].completed
            jobsPrint()
        } else if (type == 'del') {
            jobsList.splice(index, 1)
            jobsPrint()
        }
    }
}