import React from 'react'
const CustomRadio = ({options, name, value, onChange}) => {
    return(
        <div>
       {options && options.map((option)=>(
        <label key={option.value} className="mr-4 flex space-x-3">
        <input
          type="radio"
          name={name}
          value={option.value}
          checked={value === option.value}
          onChange={onChange}
        />
        
        {option.label}
      </label>   
       ))
       }
       </div>
    )
        
}

export default CustomRadio;




