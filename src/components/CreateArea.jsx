import React, { useState } from "react";

function CreateArea(props) {
    const [inputText, setInputText] = useState({
        title: "",
        content: "",
    });
    function handleChange(event) {
        const { name, value } = event.target;
        setInputText((prevVal) => {
            return {
                ...prevVal,
                [name]: value,
            };
        });
        console.log(inputText);
    }
    function submit(event) {
        props.onAdd(inputText);
        setInputText({
            title: "",
            content: "",
        });
        event.preventDefault();
    }
    return (
        <div>
            <form>
                <input
                    onChange={handleChange}
                    name="title"
                    placeholder="Title"
                    value={inputText.title}
                />
                <textarea
                    onChange={handleChange}
                    name="content"
                    placeholder="Take a note..."
                    rows="3"
                    value={inputText.content}
                />
                <button onClick={submit}>Add</button>
            </form>
        </div>
    );
}

export default CreateArea;
