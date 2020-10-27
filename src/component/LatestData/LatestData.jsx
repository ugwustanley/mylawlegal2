import React , {useContext} from 'react'
import './LatestData.css'
import {DataContext} from '../context/ChartData'

const LatestData = () =>{
    
    //usecontext for data from API endpoint
    const [datas , setDatas] = useContext(DataContext)
    return(
        <div className="latest__data">
            <div className="new__requests latest"><p>Total requests</p><h1>{  datas.Data !== undefined ? datas.Data[datas.Data.length  -1 ].total :  0}</h1></div>
          <div className="current__requests latest"><p>Requests in progress</p><h1>{  datas.Data !== undefined ? datas.Data[datas.Data.length  -1 ].current__req :  0}</h1></div>
          <div className="new__requests latest"><p>New cases today</p><h1>{  datas.Data !== undefined ? datas.Data[datas.Data.length  -1 ].new :  0}</h1></div>
          <div className="current__lawyers latest"><p>Lawyers available</p><h1>{  datas.Data !== undefined ? datas.Data[datas.Data.length  -1 ].curr__lawyers:  0}</h1></div>
          <div className="new__requests latest"><p>Requests per lawyer</p><h1>{  datas.Data !== undefined ? datas.Data[datas.Data.length  -1 ].reqLaw__ratio :  0}</h1></div>
        </div>
    )
}

export default LatestData;