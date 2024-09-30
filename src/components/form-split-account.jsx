const FormSplitAccount = ({
  selectedFriend,
  onSubmitShareBill,
  totalBill,
  onChangeBill,
  mySpend,
  onChangeMySpend,
  whoWillPay,
  onChangeWhoWillPay,
}) =>
  selectedFriend && (
    <form className="form-split-bill" onSubmit={onSubmitShareBill}>
      <h2>Rache a conta com {selectedFriend.name}</h2>
      <label>
        💰 Valor total
        <input value={totalBill} onChange={onChangeBill} type="number" />
      </label>
      <label>
        📊 Seus gastos
        <input value={mySpend} onChange={onChangeMySpend} type="number" />
      </label>
      <label>
        🤑 Quem vai pagar
        <select value={whoWillPay} onChange={onChangeWhoWillPay}>
          <option value="you">Você</option>
          <option value={selectedFriend.name}>{selectedFriend.name}</option>
        </select>
      </label>

      <button className="button">Rachar conta</button>
    </form>
  )

export { FormSplitAccount }
