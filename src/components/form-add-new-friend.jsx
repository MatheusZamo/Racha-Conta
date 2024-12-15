const FormAddNewFriend = ({ onSubmitNewFriend }) => {
  const handleSubmit = (e) => {
    e.preventDefault()

    const {imgFriend, nameFriend} = e.target.elements

    const newFriend = {
      id: crypto.randomUUID(),
      img: imgFriend.value,
      name: nameFriend.value,
      balance: 0,
    }

    onSubmitNewFriend(newFriend)
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>
        🧍‍♂️ Nome
        <input type="text" name='nameFriend' />
      </label>
      <label>
        📸 Foto
        <input type="text" name='imgFriend' />
      </label>
      <button className="button">Adicionar</button>
    </form>
  )
}

export { FormAddNewFriend }
