import React ,{useState , useEffect} from 'react'
import { Line } from 'react-chartjsx'
import './Chartbody.css'

    //BodyChart component
const BodyChart = ({current , newcases , closed}) =>{

    //states for displayed dataset
    const [close , setClose] = useState(closed);
    const [newcase, setNewcase] = useState(newcases)
    const [curr , setCurr] = useState(current)

    //labels state for the chart label
    const [labels, setLabels] = useState([1,2,3,4,5,6,7,8,9,10,11,12,13,14])

    //initial chart data state
    const [dataset , setDataset] = useState( [{ 
    data: current,
    label: "Active cases", 
    borderColor: "pink", 
    strokeWidth:10,
    pointBackgroundColor:"#fff",
    fill: false ,
    borderWidth:1.5,
    lineTension: 0
    }, { 
    data: closed, 
    label: "Closed cases", 
    borderColor: "tomato", 
    pointBackgroundColor:"#fff",
    fill: false ,
    borderWidth:1.5,
    lineTension: 0
    }, { 
    data: newcases, 
    label: "New cases", 
    borderColor: "#3cba9f", 
    pointBackgroundColor:"#fff",
    pointHitRadius:3,
    borderWidth:1.5,
    fill: false,
    lineTension: 0
  }
] ) 


//reseting of the chart on data change
if(curr !== current || newcase !== newcase || close !== closed){
    setCurr(current)
    setNewcase(newcases)
    setClose(closed)
    setDataset([{ 
        data: current,
        label: "Active cases", 
        borderColor: "pink", 
        strokeWidth:10,
        pointBackgroundColor:"#fff",
        fill: false ,
        borderWidth:1.5,
        lineTension: 0
        }, { 
        data: closed, 
        label: "Closed cases", 
        borderColor: "tomato", 
        pointBackgroundColor:"#fff",
        fill: false ,
        borderWidth:1.5,
        lineTension: 0
        }, { 
        data: newcases, 
        label: "New cases", 
        borderColor: "#3cba9f", 
        pointBackgroundColor:"#fff",
        pointHitRadius:3,
        borderWidth:1.5,
        fill: false,
        lineTension: 0
      }])
}else{

}

//chart options and customizations
const chartOptions = { 
    maintainAspectRatio:false,
    aspectRatio:2,
    responsive:true,
    beizerCurve:false,
    pointHitDetectionRadius: 100,
    datasetStrokeWidth:10,
}

//return section
return ( 
    <div className="chartbody" > 
     {
         current[0] !== undefined?
         <Line 
         style={{height:'900px'}}
         width ={800}
         height = {320}
         options={chartOptions} 
         data={{labels: labels , datasets : dataset}} /> :
         null
     }
    </div> 
  )
  

}


//default export
export default BodyChart;