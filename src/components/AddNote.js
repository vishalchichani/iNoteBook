import React, {useContext, useState} from 'react'
import noteContext from '../context/notes/noteContext'
const AddNote = () => {

  const context = useContext(noteContext)
  const {addNote}  = context;
  
  const [note, setNote] = useState({title:"", description:"", tag:""});

  const handleChange = (e) => {
        setNote( {...note, [e.target.name]: e.target.value})
  }
 
  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({title:"", description:"", tag:""})
  }
  return (
    <div className="container my-4">
    <h1>Add a Note</h1>
    <form className="my-3">
        <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" value ={note.title}onChange={handleChange}minLength={3} />
                
        </div>
        <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <input type="text" className="form-control" id="description" name="description" value = {note.description} onChange={handleChange} minLength={5}/>
        </div>
        <div className="mb-3">
            <label htmlFor="tag" className="form-label">Tag</label>
            <input type="text" className="form-control" id="tag" name="tag" value={note.tag} onChange={handleChange}/>
        </div>
        
        <button disabled={note.title.length<5 || note.description.length<5}type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
    </form>
    </div>
  )
}

export default AddNote