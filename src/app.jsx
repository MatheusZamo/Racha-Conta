import { useState } from "react"
import { Logo } from "./components/logo"

const getMsgInfo = (balance) =>
  balance < 0
    ? { message: `Você deve ${Math.abs(balance)} reais`, color: "red-debit" }
    : balance > 0
    ? { message: `Te deve ${balance} reais`, color: "green-credit" }
    : { message: "Estão quites", color: "white-neutral" }

const initialFriends = [
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
  const [friends, setFriends] = useState(initialFriends)
  const [selectedFriend, setSelectedFriend] = useState(null)
  const [totalBill, setTotalBill] = useState("")
  const [mySpend, setMySpend] = useState("")
  const [whoWillPay, setWhoWillPay] = useState("you")

  const handleClickFriend = (friend) =>
    setSelectedFriend((preview) => (preview?.id === friend.id ? null : friend))

  const handleChangeBill = (e) => setTotalBill(e.target.value)
  const handleChangeMySpend = (e) => setMySpend(e.target.value)
  const handleChangeWhoWillPay = (e) => setWhoWillPay(e.target.value)

  const handleSubmitShareBill = (e) => {
    e.preventDefault()

    setFriends((prev) =>
      prev.map((friend) =>
        selectedFriend.id === friend.id
          ? {
              ...friend,
              balance:
                whoWillPay === "you"
                  ? friend.balance + (+totalBill - +mySpend)
                  : friend.balance - mySpend,
            }
          : friend,
      ),
    )

    setSelectedFriend(null)
    setTotalBill("")
    setMySpend("")
    setWhoWillPay("you")
  }

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
          <form className="form-split-bill" onSubmit={handleSubmitShareBill}>
            <h2>Rache a conta com {selectedFriend.name}</h2>
            <label>
              💰 Valor total
              <input
                value={totalBill}
                onChange={handleChangeBill}
                type="number"
              />
            </label>
            <label>
              📊 Seus gastos
              <input
                value={mySpend}
                onChange={handleChangeMySpend}
                type="number"
              />
            </label>
            <label>
              🤑 Quem vai pagar
              <select value={whoWillPay} onChange={handleChangeWhoWillPay}>
                <option value="you">Você</option>
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
