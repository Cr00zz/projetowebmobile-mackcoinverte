import Bandeira from "../Bandeira";
import "./style.css"

export default function InputCoin({coinSimbol, value, action}) {
  return (
      <section className="conversion-results">
              <div className="conversion-details">
              <Bandeira nomePais={coinSimbol}/>
              <div className="coinSimbol">{coinSimbol}</div>
              </div>
              <input 
              type="number" 
              value={value}
              onChange={e => {
                action(e.target.value);
                }
              }
              />
      </section>
  );
}