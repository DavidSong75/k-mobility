import { Icon } from './Icons.jsx'

export function ResourceRail({ resources }) {
  return (
    <aside className="resource-rail" aria-label="캠프 자료 폴더">
      <h2 className="sr-only">캠프 자료 폴더</h2>
      <nav className="resource-nav">
        {resources.map((resource) => (
          <a
            className="resource-link"
            href={resource.url}
            key={resource.index}
            target="_blank"
            rel="noreferrer"
          >
            <Icon name={resource.icon} size={21} />
            <span className="resource-index">{resource.index}.</span>
            <span>{resource.label}</span>
            <Icon name="external" size={14} className="resource-external" />
          </a>
        ))}
      </nav>
    </aside>
  )
}
