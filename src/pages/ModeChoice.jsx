
import { useLocation } from 'react-router-dom'
import CustomTable from '../components/shared/CustomTable'
import data0 from '../json/sample_db_0km.json'
import data1 from '../json/sample_db_5km.json'
import data2 from '../json/sample_db_10km.json'
import data3 from '../json/sample_db_15km.json'
import data4 from '../json/sample_db_20km.json'
import data5 from '../json/sample_db_25km.json'
const MainData = [data0,data1,data2,data3,data4,data5]
const ModeChoice = () => {
   const modes = ['mode_1', 'mode_2', 'mode_4']
   const location =  useLocation()
   let j = location.state.distance
   let i = location.state.travelMode
   const modeValidation = () =>{
    if (i === '2') {
      modes.push('mode_9')
    } else if (i === '3') {
      modes.push('mode_8')
    } else {
      let x = Math.floor(Math.random() * 2) + 8;
      modes.push(`mode_${x}`)
    }

    if(i === '5'){
      modes.push('mode_7')
    }else if(i === '6'){
      modes.push('mode_5')
    }else{
      let x  = Math.floor(Math.random() * 2) * 2 + 5;
      modes.push(`mode_${x}`)
    }

   }  
   if(modes.length < 4){
    modeValidation()
   }
    

   
  return (
    <div className=' p-10'>
          <CustomTable data={MainData[j]["Data"]} modes={modes} />
    </div>
  )
}

export default ModeChoice;