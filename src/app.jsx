import { Logo } from "./components/logo"
import { FriendsList } from "./components/friends-list"
import { FormAddNewFriend } from "./components/form-add-new-friend"
import { ButtonAddFriend } from "./components/button-add-friend"
import { FormSplitAccount } from "./components/form-split-account"
import { useItems } from "./hooks/use-items"

const App = () => {
  const {
    friends,
    selectedFriend,
    showFormAddFriend,
    handleClickFriend,
    handleSubmitShareBill,
    handleClickAddFriend,
    handleSubmitNewFriend,
  } = useItems()

  return (
    <main>
      <Logo />
      <div className="app">
        <aside className="sidebar">
          <FriendsList
            friends={friends}
            selectedFriend={selectedFriend}
            onClickFriend={handleClickFriend}
          />
          <FormAddNewFriend
            showFormAddFriend={showFormAddFriend}
            onSubmitNewFriend={handleSubmitNewFriend}
          />

          <ButtonAddFriend
            showFormAddFriend={showFormAddFriend}
            onClickAddFriend={handleClickAddFriend}
          />
        </aside>
        <FormSplitAccount
          selectedFriend={selectedFriend}
          onSubmitShareBill={handleSubmitShareBill}
        />
      </div>
    </main>
  )
}

export { App }
