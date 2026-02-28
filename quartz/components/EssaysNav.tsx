import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { resolveRelative } from "../util/path"

const EssaysNav: QuartzComponent = ({ fileData, allFiles, displayClass }: QuartzComponentProps) => {
  // 1. 动态过滤：抓取 Essays 文件夹下所有的随笔文件
  // 关键：排除掉 index.md 自身，只拉取文章内容
  const essays = allFiles
    .filter((f) => f.slug?.startsWith("Essays/") && f.slug !== "Essays/index") 
    .sort((a, b) => (b.dates?.modified?.getTime() ?? 0) - (a.dates?.modified?.getTime() ?? 0))
    .slice(0, 3) 

  // 如果文件夹是空的，返回一个柔软的提示块
  if (essays.length === 0) {
    return (
      <div class={classNames(displayClass, "essays-nav")}>
        <div class="essay-block empty">
          <div class="essay-title">✦ 虚位以待</div>
          <div class="essay-desc">等待第一笔灵感降临...</div>
        </div>
      </div>
    )
  }

  return (
    <div class={classNames(displayClass, "essays-nav")}>
      <div class="essays-nav-label">RECENT ESSAYS</div>
      {essays.map((essay) => (
        <a href={resolveRelative(fileData.slug!, essay.slug!)} class="essay-block">
          {/* 这里的点缀色：庞贝红 */}
          <div class="essay-tag"></div>
          <div class="essay-content">
            <div class="essay-title">{essay.frontmatter?.title ?? essay.slug?.split("/").pop()}</div>
            <div class="essay-desc">{essay.frontmatter?.description ?? "碎片笔记..."}</div>
          </div>
        </a>
      ))}
    </div>
  )
}

EssaysNav.css = `
.essays-nav {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-bottom: 2.5rem;
}

.essays-nav-label {
  font-size: 0.65em;
  color: #9B3226; /* 庞贝红：用于次级指引 */
  letter-spacing: 0.2em;
  opacity: 0.5;
  margin-bottom: 0.5rem;
  padding-left: 0.5rem;
}

.essay-block {
  display: flex;
  align-items: flex-start;
  background: rgba(27, 59, 134, 0.02); /* 维米尔群青：极其微弱的透底 */
  border-radius: 12px;
  padding: 1rem;
  text-decoration: none;
  border: 1px solid rgba(27, 59, 134, 0.05);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.essay-block:hover {
  background: rgba(27, 59, 134, 0.06);
  transform: translateX(5px); /* 刚柔并济：向右滑动的动态感 */
  border-color: rgba(155, 50, 38, 0.3); /* 悬浮时显露庞贝红边框 */
}

.essay-tag {
  width: 4px;
  height: 20px;
  background: #9B3226; /* 庞贝红：作为核心锚点 */
  border-radius: 2px;
  margin-right: 12px;
  flex-shrink: 0;
  opacity: 0.7;
}

.essay-title {
  color: #1B3B86; /* 维米尔群青：作为主色调 */
  font-family: var(--headerFont);
  font-weight: 600;
  font-size: 1em;
  line-height: 1.3;
}

.essay-desc {
  color: var(--gray);
  font-size: 0.75em;
  margin-top: 0.2rem;
  opacity: 0.7;
}
`

export default (() => EssaysNav) satisfies QuartzComponentConstructor