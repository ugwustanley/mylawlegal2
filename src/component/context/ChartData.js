import React, { useState , createContext , useEffect } from 'react'


// Fetch context
export const DataContext = createContext();

//DataProvider component
export const DataProvider = (props) =>{
    
    const   [datas , setDatas] =  useState([])

    //fetching data fromm a restful api 
 const API = "https://mylawlegal2.herokuapp.com/activities"
 useEffect(() => {
   //fetch data with fetch
  fetch(API)
  .then(res => res.json())
  .then(data => setDatas(data))
  .catch(err => console.log(err))
}, [API , setDatas])


 
 // return data
    return(
        <DataContext.Provider value = {[datas , setDatas]}>
            {props.children}
        </DataContext.Provider>
    )
}