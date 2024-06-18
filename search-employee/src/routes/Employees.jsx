import Emplobox from "../components/Emplobox"
function Employees(){
    return(
     <>
        <h1>Seus Funcionarios:</h1>
        <Emplobox
        nome='Funcionario'
        idade = '32'
        salario ='3.200 R$'
        />
     </>
    )
}
export default Employees