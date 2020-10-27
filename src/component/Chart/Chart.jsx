import React , { useContext , useEffect , useState} from 'react'
import {DataContext} from '../context/ChartData'
import BodyChart from '../ChartBody/BodyChart'
import './Chart.css'
import {MonthContext} from '../context/Month'
import Loading from '../Load/Load'

//Chart component
const Chart =  () =>{

  //context api for API data and month
  const [datas , setDatas] = useContext(DataContext)
  const [month  , setMonth] = useContext(MonthContext)

  //state for datas from the contextapi
  const [closed , setClosed] = useState([])
  const [newest , setNewest] = useState([])
  const [current , setCurrent] = useState([]);

 
//set datas from the api to different states
useEffect(() => {
  if(datas.Data){
     for(let i = 0 ; i < 14 ; i++){
        const requests = datas.Data.filter( one => one.month === month )
        setCurrent(requests.map( one =>  one.current__req  ))
        const newData = datas.Data.filter( one => one.month === month)
        setNewest(newData.map(one => one.new))
        const  newClosed = datas.Data.filter( one => one.month === month)
        setClosed(newClosed.map( one => one.curr__lawyers))
    }
  

  }
   
}, [ month , datas.Data])



//return section
  return(
      <div className="chart">
        {current[0] !== undefined?
        <BodyChart newcases={newest} current = {current} closed = {closed} />:
        <Loading />
        }     
      </div>
  )
}


//export default component
export default Chart;