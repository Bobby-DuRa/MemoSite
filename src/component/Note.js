import React,{useState} from 'react'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';


const Note = (props) => {
    const [note,setnote] = useState({
    title:"",
    content:"",
})

const InputEvent =(event) =>{
    const {name,value} = event.target;
    setnote((prevData)=>{
        return{
            ...prevData,
            [name] : value,
        
        }
    })
}
const addEvent =()=>{
    props.passNote(note);
}

    return (
        <>
        <div className="main">
            <form >
                <input type ="text" name="title" value= {note.title} onChange={InputEvent} 
                placeholder ="Title" autoComplete="off" className="input"/><br/>

                <textarea rows='' name ="content" column='' value= {note.content} onChange={InputEvent} 
                placeholder="Write a note" className="text"/> <br/>
                <Button onClick={addEvent}>
                    <AddIcon className="icon"/>
               </Button>                     
            </form>
        </div>          
    </>
    )
}

export default Note
