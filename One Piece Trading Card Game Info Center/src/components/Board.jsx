import resources from '../resources'
import ResourceCard from './ResourceCard'

const Board = () => {
  return (
    <main>
      <section className="board-intro">
        <h2>Featured Resources</h2>
        <p>Decklists, events, buying links, and tools for OPTCG players.</p>
      </section>

      <section className="grid">
        {resources.map((item) => (
          <ResourceCard
            key={item.title}
            title={item.title}
            type={item.type}
            description={item.description}
            link={item.link}
          />
        ))}
      </section>
    </main>
  )
}

export default Board