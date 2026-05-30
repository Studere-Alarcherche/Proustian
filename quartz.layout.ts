import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import EssaysNav from "./quartz/components/EssaysNav" 
import ProjectMeta from "./quartz/components/ProjectMeta" 
import SocialLinks from "./quartz/components/SocialLinks" // <--- 补上！引入社交枢纽组件

const isLandingPage = (page: any) =>
  page.fileData.frontmatter?.layout === "landing" || page.fileData.frontmatter?.pageType === "landing"
const isReadingPage = (page: any) =>
  page.fileData.frontmatter?.layout === "reading" || page.fileData.frontmatter?.pageType === "reading"

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
  title: "Explore",
  folderDefaultState: "open",
  useSavedState: false,
  filterFn: (node) => {
    const publicSlugs = [
      "Proustian",
      "Language-Training",
      "Writing",
      "Constellations",
      "Learn-to-Read-Proust",
      "EN-CN-Recomposition",
      "Comparative-Literary-Induction",
      "Chapter-001-Waiting-for-the-Main-Clause",
      "Chapter-002-Inserted-Phrases-and-Suspended-Attention",
      "Chapter-003-The-Sentence-That-Refuses-to-End",
      "Chapter-004-Delay-as-a-Form-of-Thought",
      "Chapter-001-Proust-and-Woolf",
      "Chapter-002-Proust-and-Faulkner",
      "Chapter-003-Proust-and-Yourcenar",
      "Build-Log",
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
    const allowedFolders = [
      "Proustian",
      "Language-Training",
      "Writing",
      "Constellations",
      "Learn-to-Read-Proust",
      "EN-CN-Recomposition",
      "Comparative-Literary-Induction",
    ]

    if (node.isFolder) {
      return allowedFolders.includes(slug) || allowedFolders.includes(name)
    }

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
      "Proustian",
      "Language-Training",
      "Writing",
      "Constellations",
      "Learn-to-Read-Proust",
      "EN-CN-Recomposition",
      "Comparative-Literary-Induction",
      "Chapter-001-Waiting-for-the-Main-Clause",
      "Chapter-002-Inserted-Phrases-and-Suspended-Attention",
      "Chapter-003-The-Sentence-That-Refuses-to-End",
      "Chapter-004-Delay-as-a-Form-of-Thought",
      "Chapter-001-Proust-and-Woolf",
      "Chapter-002-Proust-and-Faulkner",
      "Chapter-003-Proust-and-Yourcenar",
      "Build-Log",
    ]
    const aIndex = publicOrder.indexOf(a.slugSegment)
    const bIndex = publicOrder.indexOf(b.slugSegment)
    if (aIndex !== -1 || bIndex !== -1) {
      return (aIndex === -1 ? Number.MAX_SAFE_INTEGER : aIndex) - (bIndex === -1 ? Number.MAX_SAFE_INTEGER : bIndex)
    }
    return a.displayName.localeCompare(b.displayName)
  },
})

const rightRailGraph = Component.Graph({
  localGraph: {
    drag: true,
    zoom: true,
    depth: 1,
    scale: 1,
    repelForce: 0.45,
    centerForce: 0.35,
    linkDistance: 34,
    fontSize: 0.58,
    opacityScale: 1,
    removeTags: [],
    showTags: false,
    enableRadial: false,
  },
  globalGraph: {
    drag: true,
    zoom: true,
    depth: -1,
    scale: 0.9,
    repelForce: 0.5,
    centerForce: 0.25,
    linkDistance: 30,
    fontSize: 0.6,
    opacityScale: 1,
    removeTags: [],
    showTags: true,
    enableRadial: true,
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
    Component.Backlinks({ hideWhenEmpty: false }),
    rightRailGraph,
  ],
  afterBody: [
    Component.ConditionalRender({
      component: Component.Graph(),
      condition: (page) => isReadingPage(page),
    }),
    Component.ConditionalRender({
      component: Component.Backlinks(),
      condition: (page) => isReadingPage(page),
    }),
    Component.ConditionalRender({
      component: Component.Comments({
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
      condition: (page) =>
        page.fileData.slug !== "index" &&
        !isLandingPage(page) &&
        !isReadingPage(page) &&
        page.fileData.frontmatter?.comments !== false,
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
    Component.Backlinks({ hideWhenEmpty: false }),
    rightRailGraph,
  ],
}
