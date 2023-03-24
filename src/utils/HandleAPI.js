import axios from 'axios'

const baseUrl = "https://todo-app-fullstack-mern-backend.onrender.com"

const getAllToDo = (setToDo) => {
    axios.get(baseUrl)
    .then(({data}) => {
        console.log('data ==> ',data);
        setToDo(data)
    })
}

const addToDo = (Text, setText, setToDo) => {

    axios
    .post(`${baseUrl}/save`, {Text})
    .then((data) => {
        console.log(data);
        setText("")
        getAllToDo(setToDo)
    })
    .catch((err) => console.log(err))

}

const updateToDo = (toDoId, Text, setToDo, setText, setIsUpdating) => {

    axios
    .post(`${baseUrl}/update`, {_id: toDoId, Text})
    .then((data) => {
        setText("")
        setIsUpdating(false)
        getAllToDo(setToDo)
    })
    .catch((err) => console.log(err))

}

const deleteToDo = (_id, setToDo) => {

    axios
    .post(`${baseUrl}/delete`, {_id})
    .then((data) => {
        console.log(data)
        getAllToDo(setToDo)
    })
    .catch((err) => console.log(err))

}


export {getAllToDo, addToDo, updateToDo, deleteToDo}