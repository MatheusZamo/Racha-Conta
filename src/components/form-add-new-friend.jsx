const FormAddNewFriend = ({
  showFormAddFriend,
  onSubmitNewFriend,
  nameFriend,
  onChangeName,
  imgFriend,
  onChangeImg,
}) =>
  showFormAddFriend && (
    <form className="form-add-friend" onSubmit={onSubmitNewFriend}>
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
