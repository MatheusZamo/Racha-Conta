import { useState } from "react"
import { Logo } from "./components/logo"

const friends = [
  {
    id: crypto.randomUUID(),
    img: "henrique-48.jpg",
    name: "Henrique",
    value: -7,
  },
  {
    id: crypto.randomUUID(),
    img: "renata-48.jpg",
    name: "Renata",
    value: 20,
  },
  {
    id: crypto.randomUUID(),
    img: "antonio-48.jpg",
    name: "Antônio",
    value: 0,
  },
]

const App = () => {
  const [listFriends, setListFriends] = useState(friends)

  return (
    <>
      <Logo />
      <div className="app">
        <div className="sidebar">
          <ul>
            {listFriends.map(({ id, img, name, value }) => (
              <li key={id}>
                <img src={img} alt="" />
                <h3>{name}</h3>
                <p
                  className={
                    value === 0
                      ? "white-neutral"
                      : value < 0
                      ? "red-debit"
                      : "green-credit"
                  }
                >
                  {value === 0
                    ? "Estão quites"
                    : value < 0
                    ? `Você deve ${Math.abs(value)} reais`
                    : `Te deve ${value} reais`}
                </p>
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
