import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import EssaysNav from "./quartz/components/EssaysNav" 
import ProjectMeta from "./quartz/components/ProjectMeta" 
import SocialLinks from "./quartz/components/SocialLinks" // <--- 补上！引入社交枢纽组件

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

// 目录树配置：过滤隐藏后台文件夹，并强制 Essays 置顶
const explorerFilter = Component.Explorer({
  title: "探索",
  filterFn: (node) => {
    const excludeFolders = [
      "Bricks", 
      "Seeds", 
      "99_Archive", 
      "Active_Projects", 
      "System", 
      "Asserts", 
      "00_System"
    ]
    return !excludeFolders.includes(node.name)
  },
  sortFn: (a, b) => {
    if (a.name === "Essays") return -1
    if (b.name === "Essays") return 1
    return a.displayName.localeCompare(b.displayName)
  },
})

// 笔记详情页布局 (长文页)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    ProjectMeta(), // <--- 博物馆铭牌：实时解析 YAML 字段与真内链
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    SocialLinks(),   // <--- 社交枢纽：在这里挂载你的公众号与小红书
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        { Component: Component.Search(), grow: true },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    EssaysNav(),     // <--- 维米尔群青随笔气泡
    explorerFilter, 
  ],
  right: [
    Component.TableOfContents(), 
    Component.Graph(), 
    Component.RecentNotes({
      title: "✦ CONSTELLATIONS",
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

// 列表页布局 (首页或文件夹预览)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(), 
    Component.ArticleTitle(), 
    ProjectMeta(), 
    Component.ContentMeta()
  ],
  left: [
    Component.PageTitle(),
    SocialLinks(),   // <--- 列表页同步保持挂载
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        { Component: Component.Search(), grow: true },
        { Component: Component.Darkmode() }, 
      ],
    }),
    EssaysNav(), 
    explorerFilter,
  ],
  right: [
    Component.RecentNotes({
      title: "✦ CONSTELLATIONS",
      limit: 4,
      filter: (f) => f.frontmatter?.status === "active",
      sort: (f1, f2) => (f2.dates?.modified.getTime() ?? 0) - (f1.dates?.modified.getTime() ?? 0),
    }),
  ],
}