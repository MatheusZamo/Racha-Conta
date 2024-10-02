import { useState } from "react"

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

const useItems = () => {
  const [friends, setFriends] = useState(initialFriends)
  const [selectedFriend, setSelectedFriend] = useState(null)
  const [showFormAddFriend, setShowFormAddFriend] = useState(false)

  const handleClickFriend = (friend) =>
    setSelectedFriend((preview) => (preview?.id === friend.id ? null : friend))

  const handleClickAddFriend = () => {
    setShowFormAddFriend(!showFormAddFriend)
  }

  const handleSubmitShareBill = (friend) => {
    setFriends((prev) => prev.map((p) => (friend.id === p.id ? friend : p)))
    setSelectedFriend(null)
  }

  const handleSubmitNewFriend = (newFriend) => {
    setFriends((preview) => [...preview, newFriend])
    setShowFormAddFriend(false)
  }

  return {
    friends,
    selectedFriend,
    showFormAddFriend,
    handleSubmitShareBill,
    handleClickFriend,
    handleClickAddFriend,
    handleSubmitNewFriend,
  }
}

export { useItems }
