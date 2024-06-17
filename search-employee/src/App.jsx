
function App(){
  return(
    <div id="a">
    <img id="logo" src="src/midia/logo.png" alt="" />
     <h1>Adicione Seu Funcionario:</h1>
     <div className="eSearch">
      <form action=".">
        <input type="text" placeholder="Nome Completo..." />
        <input type="text"  placeholder="Salario" />
        <select name="cargo" id="cargo">
          <option value="">Estagiario</option>
          <option value="">Junior</option>
          <option value="">Pleno</option>
          <option value="">Senior</option>
        </select>
        <button className="submitBtn">Adicionar</button>
      </form>
     </div>
    </div>
  )
}
export default App