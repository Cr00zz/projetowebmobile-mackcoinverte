import React, { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom"
import "./style.css"
import Header from "../../components/header";

let nextId = 0;
export default function Home(){
    const navigate = useNavigate();
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
        const newvalue2 = parseFloat(value2/coin).toFixed(2);
        setCoinSimbol(coinName)
        setCoinConverted(coin)
        setValue1(newvalue2)
      };

      

    return(
        <div>
          <section className="pageHeader">
            <Header />
            <p>Bem-vindo ao nosso site de conversão de moedas! Aqui, você encontrará uma ferramenta prática e atualizada para converter moedas estrangeiras. Ideal para os alunos da Faculdade Mackenzie que estão planejando um intercâmbio, nossa calculadora permite que você tenha uma compreensão clara das taxas de câmbio, facilitando o planejamento financeiro durante sua experiência no exterior.</p>
          </section>
          <section className="conversor">
            <section className="buttons">
              <button onClick={() => newCoin(coins?.USDBRL?.bid, "US$")}>USD</button>
              <button onClick={() => newCoin(coins?.EURBRL?.bid, "€")}>EUR</button>
              <button onClick={() => newCoin(coins?.GBPBRL?.bid, "£")}>GBP</button>
              <button onClick={() => newCoin(coins?.ARSBRL?.bid, "$")}>ARS</button>
              <button onClick={() => newCoin(coins?.JPYBRL?.bid, "J¥")}>JPY</button>
              <button onClick={() => newCoin(coins?.CNYBRL?.bid, "C¥")}>CNY</button>
              <button onClick={() => newCoin(coins?.CADBRL?.bid, "C$")}>CAD</button>
              <button onClick={() => newCoin(coins?.CHFBRL?.bid, "SFr")}>CHF</button>
              <button onClick={() => newCoin(coins?.AUDBRL?.bid, "AU$")}>AUD</button>
            </section>
            <section className="conversion-results-home">
              <div className="coin-input">
              <div className="real">R$</div>
              <input 
              type="number" 
              value={value2}
              onChange={e => {
                const value2 = parseFloat(e.target.value).toFixed(2);
                const value1 = parseFloat(e.target.value / coinConverted).toFixed(2);
                setValue2(value2)
                setValue1(value1)
                }
              }
              />
              </div>
              <div className="arrow"></div>
              <div className="coin-input">
              <div className="outra-moeda">{coinSimbol}</div>
              <input 
              type="number" 
              value={value1}
              onChange={e => {
                const value2 = parseFloat(e.target.value).toFixed(2);
                const value1 = parseFloat(e.target.value * coinConverted).toFixed(2);
                setValue1(value2)
                setValue2(value1)
                }
              }
              />
              </div>
            </section>
            <section className="save-button">
              <button onClick={() => {
                setHistorico([
                  ...historico,
                  {id: nextId++,
                  moeda: coinSimbol,
                  realValue: value2,
                  coinValue: value1}
                ])}}>Salvar</button>
            </section>
          </section>
          <section className="historico">
              <p>Histórico</p>
              <section className="historic-data">
                <section className="historic-list">
                  <section className="historic-header-table">
                    <div className="historic-titles">
                      <p>BRL</p>
                      <p className="outraMoeda">Outra moeda</p>
                      <p>apagar</p>
                    </div>
                    <div className="linhacinza"></div>
                  </section>
                  {historico.map( event => (
                    <div key={event.id} className="historic-results">
                      <p key={event.id}> R$ {event.realValue}</p>
                      <p key={event.id}>{event.moeda} {event.coinValue}</p>
                      <button onClick={() => {
                        setHistorico(
                          historico.filter(e =>
                          e.id !== event.id
                            )
                        );}}>X</button>
                    </div>
                  ))}
                </section>
                <section className="link-buttons">
                  <button className="button-link">Criptomoedas</button>
                  <button className="button-link" onClick={() => {navigate("/valequanto")}}>Vale quanto?</button>
                </section>
              </section>
          </section>
      </div>
    );
}