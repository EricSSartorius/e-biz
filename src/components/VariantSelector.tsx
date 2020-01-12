import React from "react"

type Value = {}

type Option = {
  name: ""
  values: Value[]
}

type Props = {
  option: Option
  handleOptionChange: () => void
}

const VariantSelector = ({ option, handleOptionChange }: Props) => {
  return (
    <select
      name={option.name}
      key={option.name}
      onChange={e => handleOptionChange(e)}
      // value={option.values[index]}
    >
      {option.values.map(value => (
        <option
          value={value}
          key={`${option.name}-${value}`}
        >{`${value}`}</option>
      ))}
    </select>
  )
}

export default VariantSelector
