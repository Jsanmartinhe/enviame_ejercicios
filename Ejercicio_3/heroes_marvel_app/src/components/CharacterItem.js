import React from 'react'

const CharacterItem = ({item}) => {
   
    const favorite = (item)=>{
      // getting the previous element and adding the new favorite item
      var previousData = JSON.parse(localStorage.getItem('favorites'))
      previousData.push(item)
      localStorage.setItem('favorites',JSON.stringify(previousData))
    }
    
    var fecha = item.modified.split('T')[0];
    fecha = fecha.split("-").reverse().join("-");

    return (
    <div className='content'>
      <div className='content-inner'>
        <div className='content-front'>
          <img src={item.thumbnail.path + "/portrait_xlarge.jpg"} alt='' />
        </div>
        <div className='content-back'>
          <h1>{item.name}</h1>
          <ul>
            <li>
              <strong>Name:</strong> {item.name}
            </li>
            <li>
              <strong>Description:</strong> {item.description}
            </li>
            <li>
              <strong>Thumbnail:</strong> {item.thumbnail.path}
            </li>
            <li>
              <strong>Modified:</strong> {fecha}
            </li>
          </ul>
        </div>
      </div>
    </div>
    )
}

export default CharacterItem
