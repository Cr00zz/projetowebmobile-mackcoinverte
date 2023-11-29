import React, { useEffect, useState } from "react";
import InputCoin from "../../components/InputCoin";
import ButtonsCoins from "../../components/ButtonsCoins";
import CellQuantoVale from "../../components/CellQuantovale";
import "./style.css"
import bigMac from "../../imgs/bigmac.png"

export default function ValeQuanto({isCripto}) {
  const [coinSimbol, setCoinSimbol] = useState("US$");
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

  useEffect(carregarCoin, []);

  const newCoin = (coin, coinName) => {
    setCoinSimbol(coinName);
    setCoinConverted(coin);
    const newValue = parseFloat(value2 * coin);
    setValue1(newValue);
  };

  const onChangeInputCoin = (value) => {
    const value2 = parseFloat(value);
    const value1 = parseFloat(value* coinConverted);
    setValue2(value2)
    setValue1(value1)
  }

  return (
    <section>
      <section className="pageHeader">
        <h1 className="titlepage">Vale Quanto?</h1>
      </section>
      <ButtonsCoins coins={coins} newCoin={newCoin}/>
      <div className="quantovaleinput">
        <InputCoin coinSimbol={coinSimbol} value={value2} action={onChangeInputCoin}/>
      </div>
      <section className="cards"> 
      {value1 >= 1.72 && (<CellQuantoVale src={"https://www.centertechscs.com.br/arquivos/produtos/1480423459caneta-bic-azul.png"} value={(value1 / 1.72).toFixed(0)} nome={"canetas bic"}/>)}
      {value1 >= 6.69 && (<CellQuantoVale src={"https://api-siterefrigerantes.brasal.com.br/uploads/files/6e649292113b9d60a834731fc137678a.png"} value={(value1 / 6.69).toFixed(0)} nome={"coca cola 1.5L"}/>)}
      {value1 >= 16.5 && (<CellQuantoVale src={"https://64.media.tumblr.com/2c6c6e7b46fd1ce9e438387b4d02dc8d/a94b649ba0408986-d6/s640x960/1b18b2012c82fe82c413a981f646b5802d04f563.pnj"} value={(value1 / 16.5).toFixed(0)} nome={"starbucks frappuccino"}/>)}
      {value1 >= 26.9 && (<CellQuantoVale src={bigMac} value={(value1 / 26.9).toFixed(0)} nome={"Big macs"}/>)}
      {value1 >= 299.99 && (<CellQuantoVale src={"https://images-ext-2.discordapp.net/external/_7UvDJNGdqNR78sy66i-0JNYFeN_v9muAbrfAQnqBwQ/https/sm.ign.com/ign_br/screenshot/default/blob_j5m6.jpg?width=2588&height=1456"} value={(value1 / 299.99).toFixed(0)} nome={"jogo do Mario"}/>)}
      {value1 >= 899.99 && (<CellQuantoVale src={"https://image.goat.com/glow-4-5-25/750/attachments/product_template_pictures/images/085/116/986/original/1103114_00.png.png"} value={(value1 / 899.99).toFixed(0)} nome={"Tenis Jordan"}/>)}
      {value1 >= 3256.99 && (<CellQuantoVale src={"https://images-ext-1.discordapp.net/external/5BRhDmzj6nfW5NlrDzMcnIHxLA_S3QmFWFE5DleS-Lg/%3Fv%3D1/https/imgv2-1-f.scribdassets.com/img/document/256233994/original/050e544743/1698831511?width=1092&height=1456"} value={(value1 / 3256.99).toFixed(0)} nome={"Mensalidade do mackenzie"}/>)}
      {value1 >= 5165.1 && (<CellQuantoVale src={"https://planoscelular.claro.com.br/medias/300Wx300H-productCard-18756-zero.png?context=bWFzdGVyfGltYWdlc3w5NjQ5OHxpbWFnZS9wbmd8YUdabEwyZ3lZaTg1TnpNeU1URXhPVGt3T0RFMEx6TXdNRmQ0TXpBd1NGOXdjbTlrZFdOMFEyRnlaRjh4T0RjMU5sOTZaWEp2TG5CdVp3fGQ2MTc4N2M3Nzg1ZDhkNWQwNzUwYTdmZTVlMTMxNTFlMDdiMjA3MDk5MWI4ZjU2YmNiOWYwYjU3NjFiMmRhYjc"} value={(value1 / 5165.1).toFixed(0)} nome={"iPhones 15"}/>)}
      {value1 >= 69999 && (<CellQuantoVale src={"https://cdn.appdealersites.com.br/saga/blog/1.png"} value={(value1 / 69999).toFixed(0)} nome={"Fiat Mobi"}/>)}
      </section>
    </section>
  );
}