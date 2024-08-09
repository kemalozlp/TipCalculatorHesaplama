import './App.css'

function App() {
  

  return (
    <>
      <div className="container">
        < Calculator />
      </div>
    </>
  )
}

function Calculator () {
  return (
    <div className="container">
    <div className="header">
      <img src="assets/img/SPLITTER.svg" alt="" />
    </div>
    <div className="calc">
      <div className="calcBill">
        <div className="makina">
          <p>Hesap</p>
          <p className="hata"></p>
        </div>
        <input type="number" name="bill" placeholder="$" required className="tip" />
        <p>Bahşiş %'sini seçin</p>
        <div className="selectTip">
          <button>5</button>
          <button>10</button>
          <button>15</button>
          <button>25</button>
          <button>50</button>
          <form className="customer">
            <input name="cust" placeholder="CUSTOM" className="custom" />
          </form>
        </div>
        <div className="makina">
          <p>İnsanların sayısı</p>
          <p className="uyari"></p>
        </div>
        <input type="number" name="people" placeholder="👤" className="peoples" />
      </div>
      <div className="calcTip">
        <div className="calcTipBox">
          <div className="calcTipText">
            <h4>Bahşiş Tutarı</h4>
            <p>/ kişi</p>
          </div>
          <div className="amount">
            <h3 className="peopleOfTip">$0</h3>
          </div>
        </div>
        <div className="calcTipBox mb">
          <div className="calcTipText">
            <h4>Bahşiş Tutarı</h4>
            <p>/ kişi</p>
          </div>
          <div className="amount">
            <h3 className="totalTip">$0</h3>
          </div>
        </div>
        <button className="res">RESET</button>
      </div>
    </div>
  </div>
  )
}

export default App
