import "./style.css"

export default function CellQuantoVale({src, value, nome}) {
  return (
    <div className="cell">
      <img src={src} />
      <p>Com esse valor você compra {value} {nome}</p>
    </div>
  );
}