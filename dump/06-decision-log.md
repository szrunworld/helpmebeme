# Product Decision Log

> 状态：Living document  
> 建立日期：2026-08-02

这份日志保存重要产品决定及其理由。状态包括：Accepted、Hypothesis、Open、Rejected for now、Superseded。

## 索引

| ID | 状态 | 决定 |
|---|---|---|
| D-001 | Accepted | Visibility 是改变的第一步 |
| D-002 | Accepted | 第一切入口是电脑时间，而不是完整人生 |
| D-003 | Accepted | Activity 临时，Memory 必须由用户确认 |
| D-004 | Accepted | 不做 Habit Tracker、Productivity Score 或 Surveillance |
| D-005 | Accepted | Weekly Mirror 是记录走向 Planning 的桥 |
| D-006 | Accepted | Planning 使用 Weekly Experiment，而不是完整任务系统 |
| D-007 | Accepted | Energy 必须来自用户输入，不由 AI 擅自推断 |
| D-008 | Hypothesis | 每周最多一个主要 Insight 更有价值 |
| D-009 | Hypothesis | 系统给三个候选，用户最多选择一个 Experiment |
| D-010 | Accepted | “继续观察，不改变”是有效结果 |
| D-011 | Hypothesis | Planning 阶段 North Star 应为 Weekly Meaningful Reflection Loops |
| D-012 | Open | Weekly Reflection 是否长期保存 |
| D-013 | Accepted | 初始用户聚焦知识工作者 |
| D-014 | Rejected for now | 不以聊天框作为第一产品入口 |
| D-015 | Accepted | Weekly Mirror V1 采用「周末来信」单列叙事结构 |

---

## D-001 — Visibility 是改变的第一步

- 日期：2026-08-02
- 状态：Accepted
- 决定：产品先帮助用户看见真实行为，再讨论优化或计划。
- 理由：多数人不缺建议，而缺少对真实时间与选择的可见性。直接要求改变会把产品变成另一个自律工具。
- 影响：Today、Reflection 和 Planning 都必须先呈现事实；建议不可压过观察。
- 重访条件：只有用户研究持续表明单纯 Visibility 无法产生任何独立价值时重访。

## D-002 — 第一切入口是电脑时间

- 日期：2026-08-02
- 状态：Accepted
- 决定：MVP 只试图准确理解授权范围内的电脑活动，不宣称理解完整人生。
- 理由：电脑活动最容易观察和验证，目标用户的主要问题也集中于知识工作时间。
- 影响：所有 Summary 都要展示未观察范围；线下生活通过 Missing Context 逐步补充。
- 重访条件：大量用户认为关键价值持续被线下缺口破坏。

## D-003 — Activity 临时，Memory 有意保留

- 日期：2026-08-02
- 状态：Accepted
- 决定：Raw Activity 默认过期；AI 只提出候选，用户决定什么成为长期 Memory。
- 理由：最大化采集不等于最大化理解，“理解后尽量少保存”是产品差异化和信任基础。
- 影响：长期功能必须优先使用用户确认的数据。
- 重访条件：长期 Reflection 需要聚合历史时，只能在不破坏该承诺的方案中选择。

## D-004 — 不做 Habit Tracker、Score 或 Surveillance

- 日期：2026-08-02
- 状态：Accepted
- 决定：无连续打卡、排名、单一分数、员工监控、默认截图或键盘记录。
- 理由：这些机制会鼓励表演、内疚或监控感，与诚实回顾冲突。
- 影响：休息不标红，“未改变”不算失败，用户可随时暂停和删除。
- 重访条件：原则性决定，不因短期参与度指标重访。

## D-005 — Weekly Mirror 是记录到 Planning 的桥

- 日期：2026-08-02
- 状态：Accepted
- 决定：在扩展任务或 Calendar 能力前，先验证 Weekly Mirror。
- 理由：它能以最小范围验证数据准确、用户赋义和下一步选择三件事。
- 影响：近期核心 PRD 为 Weekly Mirror V1，而非完整 Personal Assistant。
- 重访条件：Weekly Reflection 本身没有可验证价值时。

## D-006 — Planning 使用 Weekly Experiment

- 日期：2026-08-02
- 状态：Accepted
- 决定：把下一周计划表达为一项小实验，而不是任务列表或承诺。
- 理由：实验允许学习和失败，减少绩效感，也符合“是否有帮助”而非“是否完成”的产品态度。
- 影响：每周最多一个；Calendar 只是承载方式，不成为核心系统。
- 重访条件：用户真实行为表明需要多个并行 Experiment，且没有造成压力。

## D-007 — Energy 只能由用户赋义

- 日期：2026-08-02
- 状态：Accepted
- 决定：AI 不从应用、时长或 Activity 类别判断什么充实或消耗用户。
- 理由：能量是主观体验；相同行为对不同人甚至不同日期意义完全不同。
- 影响：增加低成本 Energy Check-in；无输入时诚实留空。
- 重访条件：原则性决定；模型可以帮助整理用户输入，但不能替代输入。

## D-008 — 每周最多一个主要 Insight

- 日期：2026-08-02
- 状态：Hypothesis
- 决定：Weekly Mirror V1 只展示一个主要模式。
- 理由：目标是一次真实理解，不是用大量 AI 文案制造智能感。
- 风险：一个 Insight 可能无法覆盖事实变化和主观模式两类价值。
- 验证：比较用户对一个 Insight 与多个 Insight 的理解、确认和记忆。

## D-009 — 三个候选，最多选择一个 Experiment

- 日期：2026-08-02
- 状态：Hypothesis
- 决定：系统最多提出三个候选调整，用户最多选择一个。
- 理由：提供选择但避免每周计划过载。
- 风险：复杂生活可能需要多个领域并行调整。
- 验证：观察自定义比例、放弃率、次周回看率与用户压力反馈。

## D-010 — 继续观察是有效结果

- 日期：2026-08-02
- 状态：Accepted
- 决定：用户可以明确选择本周不改变，只继续观察。
- 理由：并非每个 Insight 都需要立即优化，产品不能制造持续自我改造压力。
- 影响：该选项与 Experiment 同等可见，也计入用户完成反思。
- 重访条件：原则性决定。

## D-011 — Planning 阶段 North Star

- 日期：2026-08-02
- 状态：Hypothesis
- 决定：从 Meaningful Memories 数量逐步转向 Weekly Meaningful Reflection Loops。
- 理由：记录、理解、选择与回看比单纯保存数量更贴合完整产品价值。
- 风险：指标定义复杂且滞后。
- 验证：观察该指标是否比 DAU、Mirror 打开率或 Memory 数量更能解释 D28 留存。

## D-012 — Weekly Reflection 是否长期保存

- 日期：2026-08-02
- 状态：Open
- 问题：用户是否需要历史 Weekly Mirror？长期保存是否违背“只有 Memory 长期保留”？
- 当前默认：V1 随源数据过期，只保留用户主动确认的 Memory 与 Experiment。
- 备选：本地保存聚合 Reflection；或每周询问是否保留。
- 决策证据：四周访谈、历史回看行为、隐私理解测试与技术成本。

## D-013 — 初始用户聚焦知识工作者

- 日期：2026-08-02
- 状态：Accepted
- 决定：Alpha 聚焦电脑活动占比高的创业者、创作者和知识工作者。
- 理由：最容易形成准确数据、快速反馈和清晰案例。
- 影响：长期愿景仍面向更广人群，但不在 MVP 中同时解决所有生活形态。
- 重访条件：核心闭环在首批人群成立，或该人群不存在足够需求。

## D-014 — 不以聊天框作为第一入口

- 日期：2026-08-02
- 状态：Rejected for now
- 决定：不先做“Ask My Life”式空白聊天首页。
- 理由：没有可信长期记忆和引用能力时，聊天会制造武断理解；用户也不知道该问什么。
- 影响：先通过 Today、Mirror、Memory 和结构化选择建立上下文。
- 重访条件：至少 4–8 周用户确认数据积累，且用户主动产生跨时间提问。

## D-015 — Weekly Mirror V1 采用「周末来信」单列叙事结构

- 日期：2026-08-02
- 状态：Accepted
- 决定：Weekly Mirror V1 使用暖纸色、单列、编辑化的「周末来信」布局；沿一条阅读路径依次呈现事实、最多一条 Insight、用户校正、Current Focus 与一个 Carry Forward 选择，不采用仪表盘卡片墙。
- 理由：单列叙事更符合“私人镜子”而非“生产力看板”的产品气质，也能自然控制信息密度，让事实和用户确认先于建议。
- 影响：证据与 caveat 按需展开；`Continue observing` 与采用 Weekly Experiment 同等可见；Energy 只在有用户输入时插入；Weekly Mirror 的视觉评审以这条阅读路径为基准。
- 风险或反例：熟悉数据看板的用户可能希望更快横向比较多个指标；长内容在窄屏上需要更明确的折叠与响应式处理。
- 验证方式：观察首份 Mirror 的完整阅读率、Insight 确认或纠正率、证据展开率、Carry Forward 选择率，以及访谈中是否出现“像在读自己的一周”而不是“像在看绩效报表”。
- 重访条件：可用性测试持续显示用户无法快速找到事实、Insight 或 Carry Forward，且问题来自单列结构本身而非内容质量。

## D-016 — Weekly Mirror 复用全站排版标尺

- 日期：2026-08-02
- 状态：Accepted
- 决定：Weekly Mirror 桌面端复用产品说明书既有的 Display 28px、Title 22px、Body 15px、Caption 12.5px、Numeric 13px 与 UI 13.5px 标尺，不再使用 36–52px 的独立大字号体系。
- 理由：Weekly Mirror 是产品体系中的一个核心页面，不应像脱离文章和应用的展示海报；统一字号能让设计稿、产品说明和未来实现共享同一视觉语言。
- 影响：信息层级主要依靠 Newsreader / Inter / SF Mono 的角色分工、字重、颜色与留白；桌面和窄屏均从同一标尺响应式收敛。
- 风险或反例：在超宽独立展示页中，较小字号可能显得留白偏多，需要通过内容宽度和间距处理，而不是重新放大核心字号。
- 验证方式：对照 Design System 的字体样例，检查主要文本的浏览器计算字号、首屏扫描速度、换行和窄屏可读性。
- 重访条件：真实产品可用性测试显示 28px Display 无法建立清晰首层级，且问题不能通过布局宽度、字重或留白解决。

## 新决策模板

```markdown
## D-XXX — 标题

- 日期：YYYY-MM-DD
- 状态：Accepted / Hypothesis / Open / Rejected for now / Superseded
- 决定或问题：
- 理由：
- 影响：
- 风险或反例：
- 验证方式：
- 重访条件：
```
