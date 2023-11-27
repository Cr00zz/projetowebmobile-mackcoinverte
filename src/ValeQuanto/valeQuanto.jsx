import React, { useEffect, useState } from "react";

export default function valeQaunto(){
    const [coinSimbol, setCoinSimbol] = useState("US$");
    const [coins, setCoins] = useState();
    const [coinConverted, setCoinConverted] = useState(0);
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(0);
    const carregarCoin = () => {
        fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,GBP-BRL,ARS-BRL,JPY-BRL,CNY-BRL,CAD-BRL,CHF-BRL,AUD-BRL")
          .then((response) => response.json())
          .then((data) => {
            setCoins(data);
            setCoinConverted(data?.USDBRL?.bid)
          });
      };

      useEffect(carregarCoin, []);

      const newCoin = (coin, coinName) => {
        setCoinSimbol(coinName)
        setCoinConverted(coin)
      };

    return(
        <div>
          <h1>Mack CoinVerte</h1>
            <button onClick={() => newCoin(coins?.USDBRL?.bid, "US$")}>Dolar</button>
            <button onClick={() => newCoin(coins?.EURBRL?.bid, "€")}>Euro</button>
            <button onClick={() => newCoin(coins?.GBPBRL?.bid, "£")}>Libra</button>
            <button onClick={() => newCoin(coins?.ARSBRL?.bid, "$")}>Peso arg</button>
            <button onClick={() => newCoin(coins?.JPYBRL?.bid, "J¥")}>Iene Jap</button>
            <button onClick={() => newCoin(coins?.CNYBRL?.bid, "C¥")}>Yuan Chinês</button>
            <button onClick={() => newCoin(coins?.CADBRL?.bid, "C$")}>Dolar Canadense</button>
            <button onClick={() => newCoin(coins?.CHFBRL?.bid, "SFr")}>Franco Suíço</button>
            <button onClick={() => newCoin(coins?.AUDBRL?.bid, "AU$")}>Dólar Australiano</button>
            {coinSimbol} 
            <input 
            type="number" 
            value={value2}
            onChange={e => {
              setValue2(e.target.value)
              setValue1(e.target.value * coinConverted)
              }
            }
            />
            {value1 >= 1.72 && (<p>Esse valor é igual a {value1 / 1.72} canetas pic</p>)}
            {value1 >= 26.90 && (<p>Esse valor é igual a {value1 / 26.90} Big macs</p>)}
            {value1 >= 299.99 && (<p>Esse valor é igual a {value1 / 299.99} jogo do Mario</p>)}
            {value1 >= 899.99 && (<p>Esse valor é igual a {value1 / 899.99} Tenis Jordan</p>)}
            {value1 >= 3256.99 && (<p>Esse valor é igual a {value1 / 3256.99} Mensalidade do mackenzie</p>)}
            {value1 >= 5165.10 && (<p>Esse valor é igual a {value1 / 5165.10} iPhones 15</p>)}
            {value1 >= 69999 && (<p>Esse valor é igual a {value1 / 69999} Fiat Mobi</p>)}
        </div>
    );
}