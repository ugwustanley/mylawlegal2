import React , {useContext} from 'react'
import Dropdown from 'react-dropdown';
import {MonthContext} from '../context/Month'
import 'react-dropdown/style.css';
import './DropDown.css'

//DropDown component
const DropDown = () =>{

//contextAPI 
const [month, setMonth] = useContext(MonthContext)


//change handler
 const HandleChange = (e) =>{
      let selectMonth = e.value
      setMonth(selectMonth)
 }
    const options = [
        `October`, `September`, `August` ,`July`  ,`June` , `May`
      ];
    const defaultOption = options[0];

    return(     

    <div className="dropdown">
      <Dropdown options={options} value={defaultOption} onChange={ HandleChange } menuClassName='dropdown__menu' controlClassName='dropdown__box'  />    
    </div>
    )
}


//default component export
export default DropDown;