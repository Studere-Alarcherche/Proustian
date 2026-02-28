import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const SocialLinks: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
  return (
    <div class={classNames(displayClass, "social-links")}>
      {/* 公众号：深邃的维米尔群青质感 */}
      <a href="https://mmbiz.qpic.cn/sz_mmbiz_jpg/ya34mNKDgtmoMOKhkvQsJ5Gg98XceUeBI1Y0yIzUo0OfFdgSrovC2K501bXicya25rznjAOcZNLxotibWBUo0rkt8WVsT061j7tlGB7o1hGz4/0?wx_fmt=jpeg&from=appmsg" class="social-item mp">
        <span class="icon">✉</span>
        <span class="label">WeChat</span>
      </a>
      
      {/* 小红书：热烈的庞贝红质感 */}
      <a href="https://www.xiaohongshu.com/user/profile/5ed25dd2000000000101dc83" class="social-item xhs">
        <span class="icon">❀</span>
        <span class="label">Xiaohongshu</span>
      </a>
    </div>
  )
}

SocialLinks.css = `
.social-links {
  display: flex;
  gap: 1rem;
  margin: 1.5rem 0;
  padding-left: 0.5rem;
}

.social-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  font-family: var(--headerFont);
  font-size: 0.7rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  transition: all 0.3s ease;
  padding: 0.3rem 0.6rem;
  border-radius: 6px;
  border: 1px solid transparent;
}

.social-item.mp { 
  color: #1B3B86; /* 维米尔群青 */
  background: rgba(27, 59, 134, 0.03);
}
.social-item.mp:hover { 
  background: rgba(27, 59, 134, 0.08);
  border-color: rgba(27, 59, 134, 0.2);
  transform: translateY(-2px);
}

.social-item.xhs { 
  color: #9B3226; /* 庞贝红 */
  background: rgba(155, 50, 38, 0.03);
}
.social-item.xhs:hover { 
  background: rgba(155, 50, 38, 0.08);
  border-color: rgba(155, 50, 38, 0.2);
  transform: translateY(-2px);
}

.social-item .icon { font-size: 0.9rem; }
`
export default (() => SocialLinks) satisfies QuartzComponentConstructor