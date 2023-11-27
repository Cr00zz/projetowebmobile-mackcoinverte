"use client";
import React, { useEffect, useState } from "react";

export default function valeQuanto() {
  const [coinSimbol, setCoinSimbol] = useState("US$");
  const [coins, setCoins] = useState();
  const [coinConverted, setCoinConverted] = useState(0);
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const carregarCoin = () => {
    fetch(
      "https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,GBP-BRL,ARS-BRL,JPY-BRL,CNY-BRL,CAD-BRL,CHF-BRL,AUD-BRL",
    )
      .then((response) => response.json())
      .then((data) => {
        setCoins(data);
        setCoinConverted(data?.USDBRL?.bid);
      });
  };

  useEffect(carregarCoin, []);

  const newCoin = (coin, coinName) => {
    setCoinSimbol(coinName);
    setCoinConverted(coin);
    setValue1(value2 * coin);
  };

  return (
    <section>
      <h1>Vale Quanto?</h1>
      <button onClick={() => newCoin(coins?.USDBRL?.bid, "US$")}>Dolar</button>
      <button onClick={() => newCoin(coins?.EURBRL?.bid, "€")}>Euro</button>
      <button onClick={() => newCoin(coins?.GBPBRL?.bid, "£")}>Libra</button>
      <button onClick={() => newCoin(coins?.ARSBRL?.bid, "$")}>Peso arg</button>
      <button onClick={() => newCoin(coins?.JPYBRL?.bid, "J¥")}>
        Iene Jap
      </button>
      <button onClick={() => newCoin(coins?.CNYBRL?.bid, "C¥")}>
        Yuan Chinês
      </button>
      <button onClick={() => newCoin(coins?.CADBRL?.bid, "C$")}>
        Dolar Canadense
      </button>
      <button onClick={() => newCoin(coins?.CHFBRL?.bid, "SFr")}>
        Franco Suíço
      </button>
      <button onClick={() => newCoin(coins?.AUDBRL?.bid, "AU$")}>
        Dólar Australiano
      </button>
      <p>{coinSimbol}</p>
      <input
        type="number"
        value={value2}
        onChange={(e) => {
          setValue2(e.target.value);
          setValue1(e.target.value * coinConverted);
        }}
      />
      <section className="cards"> 
      {value1 >= 1.72 && (
        <div className="cell">
          <img src="https://www.centertechscs.com.br/arquivos/produtos/1480423459caneta-bic-azul.png" />
          <p>Com esse valor você compra {value1 / 1.72} canetas pic</p>
        </div>
      )}
      {value1 >= 6.69 && (
        <div className="cell">
          <img src="https://api-siterefrigerantes.brasal.com.br/uploads/files/6e649292113b9d60a834731fc137678a.png" />
          <p>Esse valor é igual a {value1 / 6.69} coca cola 1.5L</p>
        </div>
      )}
      {value1 >= 16.5 && (
        <div className="cell">
          <img src="https://64.media.tumblr.com/2c6c6e7b46fd1ce9e438387b4d02dc8d/a94b649ba0408986-d6/s640x960/1b18b2012c82fe82c413a981f646b5802d04f563.pnj" />
          <p>Esse valor é igual a {value1 / 16.5} starbucks frappuccino</p>
        </div>
      )}
      {value1 >= 26.9 && (
        <div className="cell">
          <img src="https://assets.stickpng.com/images/5882482de81acb96424ffaac.png" />
          <p>Esse valor é igual a {value1 / 26.9} Big macs</p>
        </div>
      )}
      {value1 >= 299.99 && (
        <div className="cell">
          <img src="https://images-ext-2.discordapp.net/external/_7UvDJNGdqNR78sy66i-0JNYFeN_v9muAbrfAQnqBwQ/https/sm.ign.com/ign_br/screenshot/default/blob_j5m6.jpg?width=2588&height=1456" />
          <p>Esse valor é igual a {value1 / 299.99} jogo do Mario</p>
        </div>
      )}
      {value1 >= 899.99 && (
        <div className="cell">
          <img src="https://image.goat.com/glow-4-5-25/750/attachments/product_template_pictures/images/085/116/986/original/1103114_00.png.png" />
          <p>Esse valor é igual a {value1 / 899.99} Tenis Jordan</p>
        </div>
      )}
      {value1 >= 3256.99 && (
        <div className="cell">
          <img src="https://images-ext-1.discordapp.net/external/5BRhDmzj6nfW5NlrDzMcnIHxLA_S3QmFWFE5DleS-Lg/%3Fv%3D1/https/imgv2-1-f.scribdassets.com/img/document/256233994/original/050e544743/1698831511?width=1092&height=1456" />
          <p>
            Esse valor é igual a {value1 / 3256.99} Mensalidade do mackenzie
          </p>
        </div>
      )}
      {value1 >= 5165.1 && (
        <div className="cell">
          <img src="https://planoscelular.claro.com.br/medias/300Wx300H-productCard-18756-zero.png?context=bWFzdGVyfGltYWdlc3w5NjQ5OHxpbWFnZS9wbmd8YUdabEwyZ3lZaTg1TnpNeU1URXhPVGt3T0RFMEx6TXdNRmQ0TXpBd1NGOXdjbTlrZFdOMFEyRnlaRjh4T0RjMU5sOTZaWEp2TG5CdVp3fGQ2MTc4N2M3Nzg1ZDhkNWQwNzUwYTdmZTVlMTMxNTFlMDdiMjA3MDk5MWI4ZjU2YmNiOWYwYjU3NjFiMmRhYjc" />
          <p>Esse valor é igual a {value1 / 5165.1} iPhones 15</p>
        </div>
      )}
      {value1 >= 69999 && (
        <div className="cell">
          <img src="https://cdn.appdealersites.com.br/saga/blog/1.png" />
          <p>Esse valor é igual a {value1 / 69999} Fiat Mobi</p>
        </div>
      )}
      </section>
    </section>
  );
}
