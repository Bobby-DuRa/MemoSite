import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';

const Addnote = (props) => {
    return (
        <>
                <div className="Addnote">
                    <div className="row">                     
                       <h1 className="title">{props.title}</h1>                    
                       <span className="content">{props.content} </span> <br/><br/>
                       <Button> <DeleteIcon className="deleteicon"/> </Button>               
                                     
                </div>   
                </div>            
                
                         
        </>
    )
}

export default Addnote
