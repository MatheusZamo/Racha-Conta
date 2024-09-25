import { Logo } from "./components/logo"

const App = () => {
  const friends = [
    {
      id: crypto.randomUUID(),
      img: "henrique-48.jpg",
      name: "Henrique",
      classs: "red-debit",
      message: "Você deve 7 reais",
    },
    {
      id: crypto.randomUUID(),
      img: "renata-48.jpg",
      name: "Renata",
      classs: "green-credit",
      message: "Te deve 20 reais",
    },
    {
      id: crypto.randomUUID(),
      img: "antonio-48.jpg",
      name: "Antônio",
      classs: "white-neutral",
      message: "Estão quites",
    },
  ]
  return (
    <>
      <Logo />
      <div className="app">
        <div className="sidebar">
          <ul>
            {friends.map(({ id, img, name, classs, message }) => (
              <li key={id}>
                <img src={img} alt="" />
                <h3>{name}</h3>
                <p className={classs}>{message}</p>
                <button className="button">Selecionar</button>
              </li>
            ))}
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
