import { useState } from "react"

function EmploForm(){
    const [name,sendName] = useState()
    const [salary,setSalary] = useState()
    const [cargo,setCargo] = useState()
    function showName(event){
        event.preventDefault()
        console.log(name,salary,cargo)
    }
    
    return(
        <div className="eSearch">
      <form onSubmit={showName} action="">

        <input onChange={(e)=>{
            sendName(e.target.value)
        }} type="text" placeholder="Nome Completo..." />

        <input 
        onChange={(e)=>{
            setSalary(e.target.value)}}
        type="text"
        placeholder="Salario"
        />
        <select onChange={(e)=>{
            setCargo(e.target.value)
        }} name="cargo" id="cargo">
          <option value="Estagiario">Estagiario</option>
          <option value="Junior">Junior</option>
          <option value="Pleno">Pleno</option>
          <option value="Senior">Senior</option>
        </select>
        <button className="submitBtn">Adicionar</button>
      </form>
     </div>
    )
}
export default EmploForm