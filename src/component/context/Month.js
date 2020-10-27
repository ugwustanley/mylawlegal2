import React, { useState , createContext } from 'react'


//MonthContext context
export const MonthContext = createContext();

//MonthProvider component
export const MonthProvider = (props) =>{
    
    const   [month , setMonth] =  useState('October')

 
    return(
        <MonthContext.Provider value = {[month , setMonth]}>
            {props.children}
        </MonthContext.Provider>
    )
}