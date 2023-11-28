import "./style.css"
import bra from "../../imgs/bra.png"
import eua from "../../imgs/eua.png"
import eur from "../../imgs/eur.png"
import eng from "../../imgs/eng.png"
import arg from "../../imgs/arg.png"
import jap from "../../imgs/jap.png"
import chi from "../../imgs/chi.png"
import can from "../../imgs/can.png"
import sui from "../../imgs/sui.png"
import aus from "../../imgs/aus.png"

export default function Bandeira({nomePais}) {
  return (
    <section className="bandeira">
        {nomePais == "R$" && (
          <img src={bra} />
        )}
        {nomePais == "US$" && (
          <img src={eua} />
        )}
        {nomePais == "€" && (
          <img src={eur} />
        )}
        {nomePais == "£" && (
          <img src={eng} />
        )}
        {nomePais == "$" && (
          <img src={arg} />
        )}
        {nomePais == "J¥" && (
          <img src={jap} />
        )}
        {nomePais == "C¥" && (
          <img src={chi} />
        )}
        {nomePais == "C$" && (
          <img src={can} />
        )}
        {nomePais == "SFr" && (
          <img src={sui} />
        )}
        {nomePais == "AU$" && (
          <img src={aus} />
        )}
    </section>
  );
}