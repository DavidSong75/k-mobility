import { Icon } from './components/Icons.jsx'
import { ResourceRail } from './components/ResourceRail.jsx'
import { ScheduleGrid } from './components/ScheduleGrid.jsx'
import { days, driveLinks, schedule } from './data/schedule.js'

function App() {
  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="brand-block">
          <div>
            <h1>AI 주니어랩 6기</h1>
            <p>3박 4일 프로그램 일정표</p>
          </div>
        </div>
        <a className="root-drive-link" href={driveLinks.root} target="_blank" rel="noreferrer">
          <Icon name="folder" size={19} />
          <span>전체 드라이브 열기</span>
          <Icon name="external" size={15} />
        </a>
      </header>

      <main className="app-main">
        <ResourceRail resources={driveLinks.resources} />
        <ScheduleGrid days={days} events={schedule} />
      </main>
    </div>
  )
}

export default App
