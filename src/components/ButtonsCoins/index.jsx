import Bandeira from "../Bandeira";
import "./style.css"

export default function ButtonsCoins({coins, newCoin}) {
  return (
    <section className="buttonsCoins">
      {coins?.USDBRL != null && (<button onClick={() => newCoin(coins?.USDBRL?.bid, "US$")}><Bandeira nomePais="US$" /> USD</button>)}
      {coins?.EURBRL != null && (<button onClick={() => newCoin(coins?.EURBRL?.bid, "€")}><Bandeira nomePais="€" />EUR</button>)}
      {coins?.GBPBRL != null && (<button onClick={() => newCoin(coins?.GBPBRL?.bid, "£")}><Bandeira nomePais="£" />GBP</button>)}
      {coins?.ARSBRL != null && (<button onClick={() => newCoin(coins?.ARSBRL?.bid, "$")}><Bandeira nomePais="$" />ARS</button>)}
      {coins?.JPYBRL != null && (<button onClick={() => newCoin(coins?.JPYBRL?.bid, "J¥")}><Bandeira nomePais="J¥" />JPY</button>)}
      {coins?.CNYBRL != null && (<button onClick={() => newCoin(coins?.CNYBRL?.bid, "C¥")}><Bandeira nomePais="C¥" />CNY</button>)}
      {coins?.CADBRL != null && (<button onClick={() => newCoin(coins?.CADBRL?.bid, "C$")}><Bandeira nomePais="C$" />CAD</button>)}
      {coins?.CHFBRL != null && (<button onClick={() => newCoin(coins?.CHFBRL?.bid, "SFr")}><Bandeira nomePais="SFr" />CHF</button>)}
      {coins?.AUDBRL != null && (<button onClick={() => newCoin(coins?.AUDBRL?.bid, "AU$")}><Bandeira nomePais="AU$" />AUD</button>)}
      {coins?.BTCBRL != null && (<button onClick={() => newCoin(coins?.BTCBRL?.bid, "BTC")}><Bandeira nomePais="BTC" />BTC</button>)}
      {coins?.LTCBRL != null && (<button onClick={() => newCoin(coins?.LTCBRL?.bid, "LTC")}><Bandeira nomePais="LTC" />LTC</button>)}
      {coins?.ETHBRL != null && (<button onClick={() => newCoin(coins?.ETHBRL?.bid, "ETH")}><Bandeira nomePais="ETH" />ETH</button>)}
      {coins?.XRPBRL != null && (<button onClick={() => newCoin(coins?.XRPBRL?.bid, "XRP")}><Bandeira nomePais="XRP" />XRP</button>)}
  </section>
  );
}