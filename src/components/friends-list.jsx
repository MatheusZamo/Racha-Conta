const getMsgInfo = (balance) =>
  balance < 0
    ? { message: `Você deve ${Math.abs(balance)} reais`, color: "red-debit" }
    : balance > 0
    ? { message: `Te deve ${balance} reais`, color: "green-credit" }
    : { message: "Estão quites", color: "white-neutral" }

const FriendsList = ({
  friends,
  selectedFriend,
  onClickFriend,
  addFriend,
  onAddNewFriend,
  nameFriend,
  onChangeName,
  imgFriend,
  onChangeImg,
  onClickAddFriend,
}) => (
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
              className={`button ${isSelectedFriend ? "button-close" : ""}`}
              onClick={() => onClickFriend(friend)}
            >
              {isSelectedFriend ? "Fechar" : "Selecionar"}
            </button>
          </li>
        )
      })}
    </ul>
    {addFriend && (
      <form className="form-add-friend" onSubmit={onAddNewFriend}>
        <label>
          🧍‍♂️ Nome
          <input type="text" value={nameFriend} onChange={onChangeName} />
        </label>
        <label>
          📸 Foto
          <input type="text" value={imgFriend} onChange={onChangeImg} />
        </label>
        <button className="button">Adicionar</button>
      </form>
    )}

    <button
      className={`button ${addFriend ? "button-close" : ""}`}
      onClick={onClickAddFriend}
    >
      {addFriend ? "Fechar" : "Adicionar amigo(a)"}
    </button>
  </aside>
)

export { FriendsList }
