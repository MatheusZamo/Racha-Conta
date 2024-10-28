import { useState } from "react"

const FormAddNewFriend = ({ onSubmitNewFriend }) => {
  const [nameFriend, setNameFriend] = useState("")
  const [imgFriend, setImgFriend] = useState("")

  const handleChangeName = (e) => setNameFriend(e.target.value)
  const handleChangeImg = (e) => setImgFriend(e.target.value)

  const handleSubmit = (e) => {
    e.preventDefault()

    const newFriend = {
      id: crypto.randomUUID(),
      img: imgFriend,
      name: nameFriend,
      balance: 0,
    }

    onSubmitNewFriend(newFriend)
    setNameFriend("")
    setImgFriend("")
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>
        🧍‍♂️ Nome
        <input type="text" value={nameFriend} onChange={handleChangeName} />
      </label>
      <label>
        📸 Foto
        <input type="text" value={imgFriend} onChange={handleChangeImg} />
      </label>
      <button className="button">Adicionar</button>
    </form>
  )
}

export { FormAddNewFriend }
