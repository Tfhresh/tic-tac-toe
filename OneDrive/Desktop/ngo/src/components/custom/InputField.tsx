
interface props {
  type : "text"|"password" |"email";
  placeholder : string
}
const InputField = ({type,placeholder}:props) => {
  return (
      <input type={type} 
      className="bg-white text-slate-500 font-medium w-full p-4 outline-none border-none"
      placeholder={placeholder}
      />
  )
}

export default InputField