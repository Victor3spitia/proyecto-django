import axios from "axios"

const tasksApi = axios.create({
    baseURL: "http://localhost:8000/tasks/api/v1/tasks/"
})


export const getAllTasks =() => {return tasksApi.get("/")};

export const getTask = (id) => tasksApi.get(`/${id}/`)

export const createTask = (task) => {
    return axios.post("http://localhost:8000/tasks/api/v1/tasks/")
}

export const deletTask = (id) => tasksApi.delete(`/${id}`)

export const updateTask = (id, task) => tasksApi.put(`/${id}/`, task)