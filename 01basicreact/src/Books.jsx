import React from 'react'

const Books = () => {
    let books = [
        {title: 'Rich Dad Poor Dad', author: 'Author 1'},
        {title: 'Psychology', author: 'Author 2'},
        {title: 'Power of mind', author: 'Author 3'},
        
    ]
  return (
    <div>
        {
            books.map((items)=>{
               return <div style={{backgroundColor:"purple", padding:"10px",margin:"10px",color:"#fff" }}>
                    <h2>{items.title}</h2>
                    <p>{items.author}</p>
                </div>
            })
        }
    </div>
  )
}

export default Books