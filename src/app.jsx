import { Logo } from "./components/logo"

const App = () => {
  return (
    <>
      <Logo />
      <div className="app">
        <div className="sidebar">
          <ul>
            <li>
              <img src="henrique-48.jpg" alt="" />
              <h3>Henrique</h3>
              <p className="red-debit">Você deve 7 reais</p>
              <button className="button">Selecionar</button>
            </li>
            <li>
              <img src="renata-48.jpg" alt="" />
              <h3>Renata</h3>
              <p className="green-credit">Te deve 20 reais</p>
              <button className="button">Selecionar</button>
            </li>
            <li>
              <img src="antonio-48.jpg" alt="" />
              <h3>Antônio</h3>
              <p>Estão quites</p>
              <button className="button">Selecionar</button>
            </li>
          </ul>
          <button className="button">Adicionar</button>
        </div>
        <form className="form-add-friend form-split-bill">
          <h2>Rache a conta com Ântonio</h2>
          <label>
            💰 Valor total
            <input type="text" />
          </label>
          <label>
            📊 Seus gastos
            <input type="text" />
          </label>
          <label>
            🤑 Quem vai pagar
            <select>
              <option value="">Você</option>
              <option value="">Ântonio</option>
            </select>
          </label>

          <button className="button">Rachar conta</button>
        </form>
      </div>
    </>
  )
}

export { App }
