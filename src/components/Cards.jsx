
export function Cards(props) {
  return (
    <section className="Cards">
      <div className="Card-header">
        <h1>{props.title}</h1>
        <p>{props.subtitle}</p>
      </div>
      <div className="Card-Body">
        {props.children}
      </div>
    </section>
  )
}