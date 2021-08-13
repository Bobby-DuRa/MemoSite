import React,{useState} from 'react'
import Header from './component/Header'
import Footer from './component/Footer'
import Note from './component/Note'
import Addnote from './component/Addnote'

const App = () => {
  const[addItem,setAddItem] = useState([])

  const addNote = (note)=>{
   setAddItem((prevData)=>{
     return [...prevData,note];
   })

  }
  return (
    <>
    <Header/>
    <Note passNote={addNote}/>
   

    {addItem.map((val,index)=>{
      return  <Addnote
      key ={index}
      id ={index}
      title = {val.title}
      content = {val.content}
      />
    })
  }
    <Footer/>
   
    </>
  )
}

export default App
