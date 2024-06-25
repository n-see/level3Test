import { useEffect, useState } from "react"
import Button from "./Button"

interface toDoItem {
    id: number
    title: string
}


const Todo = () => {
    const [toDoList, setToDoList] = useState<toDoItem[]>([])


    useEffect(() => {
        fetchUserData();
    }, [])

    const fetchUserData = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(data => setToDoList(data))
        
    }

    // add function will add a hard coded item to the useState that will be added to the top/beginning of the array
    const handleAdd = () => {
        const newItem:toDoItem | any = {
            id: Math.random(),
            title:"Added new Item"
        }
        setToDoList([newItem, ...toDoList])

    }
    const handleUpdate = (updateItem:toDoItem) => {
        const changedItem = ({...updateItem, title: updateItem.title + "!"})
        setToDoList(toDoList.map(original => original.id === updateItem.id ? changedItem : original))
    }

    // delete function to delete specific items
    const handleDelete = (deleteId:toDoItem) => {
        setToDoList(toDoList.filter(item => item.id != deleteId.id))
    }

    return (
        <>
            <Button color="primary" handleClick={handleAdd}>Add</Button>
            <ul>
                {/* maps out our fetched api to display in our app.tsx */}
                {toDoList.map(toDo => <li className="toDoContainer" key={toDo.id}>{toDo.title}
                    <div className="btnContainer">
                        <Button color='warning' group='singleBtn' handleClick={() => handleUpdate(toDo)}>Update</Button>
                        <Button color='danger' group='singleBtn' handleClick={() => handleDelete(toDo)}>Delete</Button>
                    </div>
                </li>)}
            </ul>
        </>
    )
}

export default Todo