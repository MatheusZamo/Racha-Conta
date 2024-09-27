import { useState } from "react"
import { Logo } from "./components/logo"

const getMsgInfo = (balance) =>
  balance < 0
    ? { message: `Você deve ${Math.abs(balance)} reais`, color: "red-debit" }
    : balance > 0
    ? { message: `Te deve ${balance} reais`, color: "green-credit" }
    : { message: "Estão quites", color: "white-neutral" }

const friends = [
  {
    id: crypto.randomUUID(),
    img: "henrique-48.jpg",
    name: "Henrique",
    balance: -7,
  },
  {
    id: crypto.randomUUID(),
    img: "renata-48.jpg",
    name: "Renata",
    balance: 20,
  },
  {
    id: crypto.randomUUID(),
    img: "antonio-48.jpg",
    name: "Antônio",
    balance: 0,
  },
]

const App = () => {
  const [listFriends, setListFriends] = useState(friends)
  const [form, setForm] = useState(false)

  const handleClick = (index) => {
    setForm(!form)
    return index
  }

  return (
    <main>
      <Logo />
      <div className="app">
        <aside className="sidebar">
          <ul>
            {listFriends.map(({ id, img, name, balance }) => {
              const { message, color } = getMsgInfo(balance)

              return (
                <li key={id}>
                  <img src={img} alt={`Foto do ${name}`} />
                  <h3>{name}</h3>
                  <p className={color}>{message}</p>
                  <button className="button" onClick={() => handleClick("")}>
                    Selecionar
                  </button>
                </li>
              )
            })}
          </ul>
          <button className="button">Adicionar</button>
        </aside>

        {form && (
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
        )}
      </div>
    </main>
  )
}

export { App }
