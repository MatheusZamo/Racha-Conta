import { Logo } from "./components/logo"
import { FriendsList } from "./components/friends-list"
import { FormSplitAccount } from "./components/form-split-account"
import { useItems } from "./hooks/use-items"

const App = () => {
  const {
    friends,
    selectedFriend,
    totalBill,
    mySpend,
    whoWillPay,
    addFriend,
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
  } = useItems()

  return (
    <main>
      <Logo />
      <div className="app">
        <FriendsList
          friends={friends}
          selectedFriend={selectedFriend}
          onClickFriend={handleClickFriend}
          addFriend={addFriend}
          onAddNewFriend={handleSubmitNewFriend}
          nameFriend={nameFriend}
          onChangeName={handleChangeName}
          imgFriend={imgFriend}
          onChangeImg={handleChangeImg}
          onClickAddFriend={handleClickAddFriend}
        />

        <FormSplitAccount
          selectedFriend={selectedFriend}
          onSubmitShareBill={handleSubmitShareBill}
          totalBill={totalBill}
          onChangeBill={handleChangeBill}
          mySpend={mySpend}
          onChangeMySpend={handleChangeMySpend}
          whoWillPay={whoWillPay}
          onChangeWhoWillPay={handleChangeWhoWillPay}
        />
      </div>
    </main>
  )
}

export { App }
