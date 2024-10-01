const ButtonAddFriend = ({ showFormAddFriend, onClickAddFriend }) => (
  <button
    className={`button ${showFormAddFriend ? "button-close" : ""}`}
    onClick={onClickAddFriend}
  >
    {showFormAddFriend ? "Fechar" : "Adicionar amigo(a)"}
  </button>
)

export { ButtonAddFriend }
