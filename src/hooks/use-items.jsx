import { useReducer } from "react"

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

const initialState = {friends: initialFriends, selectedFriend: null, showFormAddFriend: false}

const reducer = (state, action) => ({
  submitted_share_bill: { 
    ...state, 
    selectedFriend : null, 
    friends: state.friends.map(preview => action.friend?.id === preview.id ? action.friend : preview)
  },
  selected_friend: {
    ...state,
    selectedFriend: state.selectedFriend?.id === action.friend?.id ? null : action.friend
  },
  submitted_new_friend: {
    ...state,
    showFormAddFriend: false,
    friends: [...state.friends, action.newFriend]
  },
  clicked_to_add_new_friend: {
    ...state,
    showFormAddFriend: !state.showFormAddFriend
  }
})[action.type] || state

const useItems = () => {
const [state, dispatch] = useReducer(reducer, initialState)

  const handleClickFriend = (friend) => dispatch({ type: 'selected_friend', friend })

  const handleClickAddFriend = () => dispatch({ type: 'clicked_to_add_new_friend'})

  const handleSubmitShareBill = (friend) => dispatch({ type: 'submitted_share_bill',friend })

  const handleSubmitNewFriend = (newFriend) => dispatch({ type: 'submitted_new_friend', newFriend })

  return {
    friends: state.friends,
    selectedFriend: state.selectedFriend,
    showFormAddFriend: state.showFormAddFriend,
    handleSubmitShareBill,
    handleClickFriend,
    handleClickAddFriend,
    handleSubmitNewFriend,
  }
}

export { useItems }
