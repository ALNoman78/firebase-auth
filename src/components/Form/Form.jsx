import { useState } from 'react'

const Form = () => {
    const [name , setName] = useState(null)
    const handleSubmit = e => {
        e.preventDefault()
        console.log(name.target.value)
        console.log(e.target.name.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={setName} type="text" name="name" id="" />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

Form.propTypes = {}

export default Form