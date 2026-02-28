import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// 所有页面通用的组件
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/jackyzha0/quartz",
    },
  }),
}

// --- 核心修改 1：定义严格屏蔽的目录树 ---
const explorerFilter = Component.Explorer({
  title: "探索",
  filterFn: (node) => {
    // 强制屏蔽这些文件夹，保持目录树纯净
    const excludeFolders = ["99_Archive", "Seeds", "Active_Projects", "Bricks", "System", "Asserts", "00_System"]
    return !excludeFolders.includes(node.name)
  },
})

// --- 核心修改 2：符合 Quartz 规范的左侧控制台组件 ---
const SystemConsole = () => {
  return (
    <div class="system-console-wrapper">
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

// 注入组件专属 CSS，确保 Hover 动画在静态页面中完美生效
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
// 补齐必要的生命周期属性，防止 TypeScript 报错
SystemConsole.afterDOMLoaded = ""

// 笔记详情页布局
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        { Component: Component.Search(), grow: true },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    SystemConsole,   // <--- 炫酷的控制台作为标准组件挂载
    explorerFilter,  // <--- 净化后的目录树跟在后面
  ],
  right: [
    Component.DesktopOnly(Component.TableOfContents()), 
    Component.Graph(), 
    Component.RecentNotes({
      title: "✦ Constellations",
      limit: 4,
      filter: (f) => f.frontmatter?.status === "active",
      sort: (f1, f2) => (f2.dates?.modified.getTime() ?? 0) - (f1.dates?.modified.getTime() ?? 0),
    }),
    Component.Backlinks(),
  ],
  afterBody: [
    Component.Comments({
      provider: 'giscus',
      options: {
        repo: 'Studere-Alarcherche/Proustian',
        repoId: 'R_kgDORYpwTA',
        category: 'General',
        categoryId: 'DIC_kwDORYpwTM4C3Q3J',
        mapping: 'pathname',
        strict: false,
        reactionsEnabled: true,
        inputPosition: 'bottom',
        theme: 'preferred_color_scheme',
      }
    }),
  ],
}

// 列表页布局
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        { Component: Component.Search(), grow: true },
        { Component: Component.Darkmode() },
      ],
    }),
    SystemConsole,   // <--- 列表页同步保持一致性
    explorerFilter,
  ],
  right: [
    Component.RecentNotes({
      title: "✦ Constellations",
      limit: 4,
      filter: (f) => f.frontmatter?.status === "active",
      sort: (f1, f2) => (f2.dates?.modified.getTime() ?? 0) - (f1.dates?.modified.getTime() ?? 0),
    }),
  ],
}