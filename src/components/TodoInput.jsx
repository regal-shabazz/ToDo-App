import { useState } from "react"

export const TodoInput = (props) => {
    const { handleAddTodo } = props
    const [inputValue, setInputValue] = useState('')

    return (
        <div className="input-container">
            <input type="text" value={inputValue} onChange={(e) => {
                setInputValue(e.target.value)
            }} placeholder="Enter Task"/>
            <button onClick={() => {
                if (!inputValue) {
                    return;
                }
                handleAddTodo(inputValue)
                setInputValue('')
            }}>Add</button>
        </div>
    )
}