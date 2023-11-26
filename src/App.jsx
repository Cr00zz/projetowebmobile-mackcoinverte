import React, { useEffect, useState } from "react";
import Logo from "./imgs/coinverter.png"

let nextId = 0;
export default function Home(){
    const [coinSimbol, setCoinSimbol] = useState("US$");
    const [historico, setHistorico] = useState([]);
    const [coins, setCoins] = useState();
    const [coinConverted, setCoinConverted] = useState(0);
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(0);
    const carregarCoin = () => {
        fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,GBP-BRL,ARS-BRL,JPY-BRL,CNY-BRL,CAD-BRL,CHF-BRL,AUD-BRL,BTC-BRL,ETH-BRL,LTC-BRL")
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
        setValue1(value2 / coin)
      };

    return(
        <div>
          <section className="pageHeader">
            <h1>Mack CoinVerte</h1>
            <img src={Logo} alt="mackcoinverte" />
            <p>Bem-vindo ao nosso site de conversão de moedas! Aqui, você encontrará uma ferramenta prática e atualizada para converter moedas estrangeiras. Ideal para os alunos da Faculdade Mackenzie que estão planejando um intercâmbio, nossa calculadora permite que você tenha uma compreensão clara das taxas de câmbio, facilitando o planejamento financeiro durante sua experiência no exterior.</p>
          </section>
          <section className="conversor">
            <section className="buttons">
              <button onClick={() => newCoin(coins?.USDBRL?.bid, "US$")}>Dolar</button>
              <button onClick={() => newCoin(coins?.EURBRL?.bid, "€")}>Euro</button>
              <button onClick={() => newCoin(coins?.GBPBRL?.bid, "£")}>Libra</button>
              <button onClick={() => newCoin(coins?.ARSBRL?.bid, "$")}>Peso arg</button>
              <button onClick={() => newCoin(coins?.JPYBRL?.bid, "J¥")}>Iene Jap</button>
              <button onClick={() => newCoin(coins?.CNYBRL?.bid, "C¥")}>Yuan Chinês</button>
              <button onClick={() => newCoin(coins?.CADBRL?.bid, "C$")}>Dolar Canadense</button>
              <button onClick={() => newCoin(coins?.CHFBRL?.bid, "SFr")}>Franco Suíço</button>
              <button onClick={() => newCoin(coins?.AUDBRL?.bid, "AU$")}>Dólar Australiano</button>
            </section>
            <section className="conversion-results">
              <input 
              type="number" 
              value={value2}
              onChange={e => {
                setValue2(e.target.value)
                setValue1(e.target.value / coinConverted)
                }
              }
              />
              = {coinSimbol} 
              <input 
              type="number" 
              value={value1}
              onChange={e => {
                setValue1(e.target.value)
                setValue2(e.target.value * coinConverted)
                }
              }
              />
            </section>
            <section className="bottom-buttons">
              <button onClick={() => {
                setHistorico([
                  ...historico,
                  {id: nextId++,
                  moeda: coinSimbol,
                  realValue: value2,
                  coinValue: value1}
                ])}}>Salvar</button>
            </section>
            <section className="historico">
              {historico.map( event => (
                <div  >
                  <p key={event.id}> R$ {event.realValue} = {event.moeda} {event.coinValue}</p>
                  <button onClick={() => {
                    setHistorico(
                      historico.filter(e =>
                      e.id !== event.id
                        )
                    );}}>Deletar</button>
                </div>
              ))}
            </section>
          </section>
      </div>
    );
}