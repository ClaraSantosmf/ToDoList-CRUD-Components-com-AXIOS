import axios from 'axios'

export default {
    getTasks: (callback) => {
        axios.get('http://localhost:3000/tasks/').then((response) => {callback(response.data)
        })
    },
    petTasks: (task) => {
        axios.put(`http://localhost:3000/tasks/${task.id}`, task)
    },
    postTasks:(task) =>{
        axios.post('http://localhost:3000/tasks/', task)
    },
    deleteTasks:(task) => {
        axios.delete(`http://localhost:3000/tasks/${task.id}`)
    },
    
}

