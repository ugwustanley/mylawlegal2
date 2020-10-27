import React from 'react'
import DropDown from '../DropDown/DropDown'
import LatestData from '../LatestData/LatestData'
import Chart from '../Chart/Chart'
import {DataProvider} from '../context/ChartData'
import {MonthProvider} from '../context/Month'

//main data component
const MainData = () =>{
    return(
          <div>
            <DataProvider>
              <MonthProvider>
                <LatestData />
                <DropDown />
                <Chart />
              </MonthProvider>
           </DataProvider>
          </div>
        )
}

export default MainData;