import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const SystemConsole: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
  return (
    <div class={`system-console-wrapper ${displayClass ?? ""}`}>
      <div class="console-title">⚡ System Console</div>
      <a href="/Active_Projects/" class="console-link active-projects">
        <span class="console-icon">⌬</span> Active Projects
      </a>
      <a href="/99_Archive/" class="console-link historical-archive">
        <span class="console-icon">☖</span> Historical Archive
      </a>
    </div>
  )
}

SystemConsole.css = `
.system-console-wrapper {
  margin-top: 1.5rem;
  padding: 1rem;
  border: 1px solid var(--secondary);
  border-radius: 4px;
  background: rgba(var(--secondary-rgb), 0.03);
  border-left: 3px solid var(--secondary);
}
.console-title {
  font-size: 0.7em;
  color: var(--gray);
  letter-spacing: 0.15em;
  margin-bottom: 0.8rem;
  text-transform: uppercase;
  font-weight: bold;
}
.console-link {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  text-decoration: none;
  font-weight: bold;
  font-size: 0.9em;
  margin-bottom: 0.6rem;
  transition: transform 0.2s ease;
}
.console-link:hover {
  transform: translateX(4px);
}
.active-projects {
  color: var(--secondary);
}
.historical-archive {
  color: var(--gray);
  font-size: 0.85em;
  margin-bottom: 0;
}
.console-icon {
  font-size: 1.2em;
}
`
export default (() => SystemConsole) satisfies QuartzComponentConstructor