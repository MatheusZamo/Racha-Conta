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
  const [totalBill, setTotalBill] = useState("")
  const [mySpend, setMySpend] = useState("")
  const [whoWillPay, setWhoWillPay] = useState("you")
  const [showFormAddFriend, setShowFormAddFriend] = useState(false)
  const [nameFriend, setNameFriend] = useState("")
  const [imgFriend, setImgFriend] = useState("")

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
                  : friend.balance - +mySpend,
            }
          : friend,
      ),
    )

    setSelectedFriend(null)
    setTotalBill("")
    setMySpend("")
    setWhoWillPay("you")
  }

  const handleClickAddFriend = () => {
    setShowFormAddFriend(!showFormAddFriend)
  }
  const handleChangeName = (e) => setNameFriend(e.target.value)
  const handleChangeImg = (e) => setImgFriend(e.target.value)

  const handleSubmitNewFriend = (e) => {
    e.preventDefault()

    nameFriend.length && imgFriend.length
      ? setFriends((preview) => [
          ...preview,
          {
            id: crypto.randomUUID(),
            img: imgFriend,
            name: nameFriend,
            balance: 0,
          },
        ])
      : friends

    setNameFriend("")
    setImgFriend("")
    nameFriend.length && imgFriend.length
      ? setShowFormAddFriend(false)
      : setShowFormAddFriend(true)
  }

  return {
    friends,
    selectedFriend,
    totalBill,
    mySpend,
    whoWillPay,
    showFormAddFriend,
    nameFriend,
    imgFriend,
    handleClickFriend,
    handleChangeBill,
    handleChangeMySpend,
    handleChangeWhoWillPay,
    handleSubmitShareBill,
    handleClickAddFriend,
    handleChangeName,
    handleChangeImg,
    handleSubmitNewFriend,
  }
}

export { useItems }
