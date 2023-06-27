
const InputGroup = ({label, placeholder, type, name, classname=''}) => {
  return(
      <div className="flex flex-col justify-center gap-2">
          <label className="font-medium text-[18px]">{label}</label>
          <input
              className={"border-gray-200 border-2 py-2.5 rounded px-2 " + classname}
              name={name}
              placeholder={placeholder}
              type={type}
          />
      </div>
  )
}

export default InputGroup
