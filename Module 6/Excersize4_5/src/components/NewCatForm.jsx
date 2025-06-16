import { useState } from "react";


function NewCatForm( { onAddCat }) {
    const [name, setName] = useState('');
    const [latinName, setLatinName] = useState('');
    const [image, setImage] = useState ('');

const handleSubmit = (e) => {
    e.preventDefault();
    onAddCat({name, latinName, image})
    // clear the form once a cat has been submitted
    setName('');
    setLatinName('');
    setImage('');
}

    return (
        <div className="NewCatForm">
            <h1>New Cat Form</h1>
            <form onSubmit={handleSubmit}>
                <label>Name:
                <input name="name" value={name}
                onChange={(e) => setName(e.target.value)}></input>
                </label>
                <label>Latin Name:
                    <input name="latinName" value={latinName}
                    onChange={(e) => setLatinName(e.target.value)}></input>
                </label>
                <label>Image:
                    <input name="image" value={image}
                    onChange={(e) => setImage(e.target.value)}></input>
                </label>
                <button>Add Big Cat</button>
            </form>
        </div>

        
    )
}
export default NewCatForm;