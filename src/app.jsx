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
  const [selectedFriend, setSelectedFriend] = useState(null)

  const handleClickFriend = (friend) =>
    setSelectedFriend((preview) => (preview?.id === friend.id ? null : friend))

  return (
    <main>
      <Logo />
      <div className="app">
        <aside className="sidebar">
          <ul>
            {friends.map((friend) => {
              const { message, color } = getMsgInfo(friend.balance)
              const isSelectedFriend = friend.id === selectedFriend?.id

              return (
                <li key={friend.id}>
                  <img src={friend.img} alt={`Foto do ${friend.name}`} />
                  <h3>{friend.name}</h3>
                  <p className={color}>{message}</p>
                  <button
                    className={`button ${
                      isSelectedFriend ? "button-close" : ""
                    }`}
                    onClick={() => handleClickFriend(friend)}
                  >
                    {isSelectedFriend ? "Fechar" : "Selecionar"}
                  </button>
                </li>
              )
            })}
          </ul>
          <button className="button">Adicionar</button>
        </aside>

        {selectedFriend && (
          <form className="form-add-friend form-split-bill">
            <h2>Rache a conta com {selectedFriend.name}</h2>
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
                <option value={selectedFriend.name}>
                  {selectedFriend.name}
                </option>
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
