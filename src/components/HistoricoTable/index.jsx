import "./style.css"

export default function HistoricoTable({historico, setHistorico}) {
  return (
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
  );
}