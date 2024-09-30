const FormAddNewFriend = ({
  addFriend,
  onAddNewFriend,
  nameFriend,
  onChangeName,
  imgFriend,
  onChangeImg,
}) =>
  addFriend && (
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
  )

export { FormAddNewFriend }
