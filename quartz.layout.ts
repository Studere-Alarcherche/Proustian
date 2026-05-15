import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import EssaysNav from "./quartz/components/EssaysNav" 
import ProjectMeta from "./quartz/components/ProjectMeta" 
import SocialLinks from "./quartz/components/SocialLinks" // <--- 补上！引入社交枢纽组件

const isLandingPage = (page: any) =>
  page.fileData.frontmatter?.layout === "landing" || page.fileData.frontmatter?.pageType === "landing"

const isReadingPage = (page: any) =>
  page.fileData.frontmatter?.layout === "reading" || page.fileData.frontmatter?.pageType === "reading"

const isFocusedLayout = (page: any) => isLandingPage(page) || isReadingPage(page)

const hideOnLanding = (component: any) =>
  Component.ConditionalRender({
    component,
    condition: (page) => !isLandingPage(page),
  })

const hideOnFocusedLayout = (component: any) =>
  Component.ConditionalRender({
    component,
    condition: (page) => !isFocusedLayout(page),
  })

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

// 目录树配置：把 Explorer 当作公共目录，而不是仓库文件浏览器
const explorerFilter = Component.Explorer({
  title: "探索",
  useSavedState: false,
  filterFn: (node) => {
    if (node.isFolder) return false

    const publicSlugs = [
      "Proustian-2.0",
      "Reading-Map",
      "Question-Gradient",
      "Passage-Cards",
      "U1-U6-Repository-Index",
      "Language-Training",
      "LTF-A0-to-B1-Course-Outline",
      "LTF-Chapter-001-Cognates-and-Reading-Confidence",
      "LTF-Chapter-002-False-Friends-and-Controlled-Guessing",
      "LTF-Chapter-003-Word-Families-and-Recognition-Patterns",
      "LTF-Chapter-004-Function-Words-I",
      "LTF-Chapter-005-What-Is-a-French-Sentence",
      "Build-Log",
      "U1-General-Introduction-Memory-Cliche-to-Polycentric-Reading",
    ]
    const internalPrefixes = [
      "AGENT-",
      "SKILL-",
      "CARD-",
      "DIAG-",
      "SELFTEST-",
      "OBS-",
      "TT-",
      "LTF-V0-1-",
      "_archive",
    ]
    const internalPages = [
      "AGENT-Pedagogical-Audit-Principles",
      "Codex-Operating-Rules",
      "Repository-Maintenance",
      "Source-Locator-iBooks",
      "NotebookLM-Evidence-Packet-Plan",
      "Literature-Importance-Ranking-V0.1",
      "Literature Importance Ranking",
      "Ranking V0.1",
      "Archive",
      "private",
    ]
    const name = node.displayName ?? ""
    const slug = node.slugSegment ?? ""
    const filePath = node.data?.filePath ?? ""
    const title = node.data?.title ?? ""

    return (
      publicSlugs.includes(slug) &&
      !internalPages.some(
        (page) => name.includes(page) || slug.includes(page) || title.includes(page) || filePath.includes(page),
      ) &&
      !internalPrefixes.some(
        (prefix) =>
          name.startsWith(prefix) ||
          slug.startsWith(prefix) ||
          title.startsWith(prefix) ||
          filePath.includes(`/${prefix}`),
      )
    )
  },
  sortFn: (a, b) => {
    const publicOrder = [
      "Proustian-2.0",
      "Reading-Map",
      "Question-Gradient",
      "Passage-Cards",
      "U1-U6-Repository-Index",
      "Language-Training",
      "LTF-A0-to-B1-Course-Outline",
      "LTF-Chapter-001-Cognates-and-Reading-Confidence",
      "LTF-Chapter-002-False-Friends-and-Controlled-Guessing",
      "LTF-Chapter-003-Word-Families-and-Recognition-Patterns",
      "LTF-Chapter-004-Function-Words-I",
      "LTF-Chapter-005-What-Is-a-French-Sentence",
      "Build-Log",
      "U1-General-Introduction-Memory-Cliche-to-Polycentric-Reading",
    ]
    const aIndex = publicOrder.indexOf(a.slugSegment)
    const bIndex = publicOrder.indexOf(b.slugSegment)
    if (aIndex !== -1 || bIndex !== -1) {
      return (aIndex === -1 ? Number.MAX_SAFE_INTEGER : aIndex) - (bIndex === -1 ? Number.MAX_SAFE_INTEGER : bIndex)
    }
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
    hideOnFocusedLayout(Component.PageTitle()),
    hideOnFocusedLayout(SocialLinks()),   // <--- 社交枢纽：在这里挂载你的公众号与小红书
    hideOnFocusedLayout(Component.MobileOnly(Component.Spacer())),
    hideOnFocusedLayout(Component.Flex({
      components: [
        { Component: Component.Search(), grow: true },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    })),
    hideOnFocusedLayout(EssaysNav()),     // <--- 维米尔群青随笔气泡
    hideOnFocusedLayout(explorerFilter), 
  ],
  right: [
    hideOnLanding(Component.TableOfContents()), 
    hideOnFocusedLayout(Component.Graph()), 
    hideOnFocusedLayout(Component.RecentNotes({
      title: "✦ CONSTELLATIONS",
      limit: 4,
      filter: (f) => f.frontmatter?.status === "active",
      sort: (f1, f2) => (f2.dates?.modified.getTime() ?? 0) - (f1.dates?.modified.getTime() ?? 0),
    })),
    hideOnFocusedLayout(Component.Backlinks()),
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
    hideOnFocusedLayout(Component.PageTitle()),
    hideOnFocusedLayout(SocialLinks()),   // <--- 列表页同步保持挂载
    hideOnFocusedLayout(Component.MobileOnly(Component.Spacer())),
    hideOnFocusedLayout(Component.Flex({
      components: [
        { Component: Component.Search(), grow: true },
        { Component: Component.Darkmode() }, 
      ],
    })),
    hideOnFocusedLayout(EssaysNav()), 
    hideOnFocusedLayout(explorerFilter),
  ],
  right: [
    hideOnFocusedLayout(Component.RecentNotes({
      title: "✦ CONSTELLATIONS",
      limit: 4,
      filter: (f) => f.frontmatter?.status === "active",
      sort: (f1, f2) => (f2.dates?.modified.getTime() ?? 0) - (f1.dates?.modified.getTime() ?? 0),
    })),
  ],
}
