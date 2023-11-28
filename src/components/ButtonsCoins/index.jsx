import Bandeira from "../Bandeira";
import "./style.css"

export default function ButtonsCoins({coins, newCoin}) {
  return (
    <section className="buttonsCoins">
      <button onClick={() => newCoin(coins?.USDBRL?.bid, "US$")}><Bandeira nomePais="US$" /> USD</button>
      <button onClick={() => newCoin(coins?.EURBRL?.bid, "€")}><Bandeira nomePais="€" />EUR</button>
      <button onClick={() => newCoin(coins?.GBPBRL?.bid, "£")}><Bandeira nomePais="£" />GBP</button>
      <button onClick={() => newCoin(coins?.ARSBRL?.bid, "$")}><Bandeira nomePais="$" />ARS</button>
      <button onClick={() => newCoin(coins?.JPYBRL?.bid, "J¥")}><Bandeira nomePais="J¥" />JPY</button>
      <button onClick={() => newCoin(coins?.CNYBRL?.bid, "C¥")}><Bandeira nomePais="C¥" />CNY</button>
      <button onClick={() => newCoin(coins?.CADBRL?.bid, "C$")}><Bandeira nomePais="C$" />CAD</button>
      <button onClick={() => newCoin(coins?.CHFBRL?.bid, "SFr")}><Bandeira nomePais="SFr" />CHF</button>
      <button onClick={() => newCoin(coins?.AUDBRL?.bid, "AU$")}><Bandeira nomePais="AU$" />AUD</button>
  </section>
  );
}