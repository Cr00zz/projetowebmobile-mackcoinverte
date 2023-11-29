import React, { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom"
import ButtonsCoins from "../../components/ButtonsCoins";
import "./style.css"
import InputCoin from "../../components/InputCoin";
import Header from "../../components/header";

let nextId = 0;
export default function Home({isCripto}){
    const navigate = useNavigate();
    const [coinSimbol, setCoinSimbol] = useState("US$");
    const [historico, setHistorico] = useState([]);
    const [coins, setCoins] = useState();
    const [coinConverted, setCoinConverted] = useState(0);
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(0);

    const carregarCoin = () => {
        fetch(isCripto ? "https://economia.awesomeapi.com.br/json/last/BTC-BRL,LTC-BRL,ETH-BRL,XRP-BRL" : "https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,GBP-BRL,ARS-BRL,JPY-BRL,CNY-BRL,CAD-BRL,CHF-BRL,AUD-BRL")
          .then((response) => response.json())
          .then((data) => {
            setCoins(data);
            setCoinSimbol(isCripto ? "BTC" : "US$")
            setCoinConverted(isCripto ? data?.BTCBRL?.bid : data?.USDBRL?.bid)
          });
      };

      useEffect(carregarCoin, [isCripto]);

      const newCoin = (coin, coinName) => {
        const newvalue2 = parseFloat(value1/coin).toFixed(isCripto ? 6 : 2);
        setCoinSimbol(coinName)
        setCoinConverted(coin)
        setValue2(newvalue2)
      };

      const onChangeInputReal = (value) => {
        const value1 = parseFloat(value);
        const value2 = parseFloat(value / coinConverted).toFixed(isCripto ? 6 : 2);
        setValue2(value2)
        setValue1(value1)
      };

      const onChangeInputCoin = (value) => {
        const value2 = parseFloat(value);
        const value1 = parseFloat(value * coinConverted).toFixed(2);
        setValue2(value2)
        setValue1(value1)
      };

    return(
        <div>
          <section className="pageHeader">
            <Header />
            <p>Bem-vindo ao nosso site de conversão de moedas! Aqui, você encontrará uma ferramenta prática e atualizada para converter moedas estrangeiras. Ideal para os alunos da Faculdade Mackenzie que estão planejando um intercâmbio, nossa calculadora permite que você tenha uma compreensão clara das taxas de câmbio, facilitando o planejamento financeiro durante sua experiência no exterior.</p>
          </section>
          <section className="conversor">
          <ButtonsCoins coins={coins} newCoin={newCoin}/>
            <section className="coinsInputs">
              <InputCoin coinSimbol="R$" value={value1} action={onChangeInputReal}/>
              <div className="arrow"></div>
              <InputCoin coinSimbol={coinSimbol} value={value2} action={onChangeInputCoin}/>
              </section>
            <section className="save-button">
              <button onClick={() => {
                setHistorico([
                  ...historico,
                  {id: nextId++,
                  moeda: coinSimbol,
                  realValue: value1,
                  coinValue: value2}
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
                  <button className="button-link" onClick={() => {
                    navigate(isCripto ? "/" : "/isCripto" )
                    window.location.reload();
                    window.scrollTo(0, 0)
                    }}> {isCripto ? "Moedas": "Criptomoedas" }</button>
                  <button className="button-link" onClick={() => {
                    navigate(isCripto ? "/valequanto/isCripto" : "/valequanto" )
                    }}>Vale quanto?</button>
                </section>
              </section>
          </section>
      </div>
    );
}