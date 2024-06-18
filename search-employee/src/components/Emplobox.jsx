function Emplobox({nome,idade,salario}){
    return(
        <div className="emploBox">
            <p className="emploInfo">Nome: {nome}</p>

            <p className="emploInfo">Idade: {idade}</p>

            <p className="emploInfo">Salario: {salario}</p>
        </div>
    )
}
export default Emplobox