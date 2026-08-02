# PRD — Weekly Mirror V1

> 状态：Draft for product/design/engineering review  
> 版本：V1.0  
> 日期：2026-08-02  
> 产品阶段：Private Alpha → Reflection Alpha  
> 依赖：Capture、Activity Grouping、Today、Memory、Privacy

## 1. 摘要

Weekly Mirror 是 HelpMeBe.Me 从“自动记录工具”走向“反思式计划助手”的第一座桥。

它每周基于用户允许系统看到的事实，生成一张克制、可纠正的生活镜子，帮助用户回答：

1. 这周的时间主要花在哪里？
2. 哪些事情让我充实或消耗？
3. 真实生活是否与当前重视的方向一致？
4. 有什么反复出现、但过去没有明确看见的模式？
5. 下一周最值得尝试的一项调整是什么？

V1 不追求完整理解人生，也不生成一个“人生分数”。它只需要帮助用户看见一个可信的新事实或模式，并允许用户选择：采取一个小实验、继续观察，或明确不改变。

## 2. 为什么现在做

现有产品已经覆盖：

```text
Capture → Activity Block → Today → Memory → Reflection shell
```

但价值仍停留在“回看过去”。如果产品希望最终支持 Planning，需要验证用户是否愿意完成以下动作：

```text
看见事实 → 确认意义 → 选择下一步 → 下周回看
```

Weekly Mirror 是验证这条闭环的最小产品，不需要先开发完整任务管理、日历系统或聊天助手。

## 3. 用户问题

目标用户在一周结束时经常有以下感受：

- “我好像一直很忙，但说不清真正完成或经历了什么。”
- “我说自己重视创造、健康或家人，但不知道实际是否给了它们时间。”
- “日历显示我计划做什么，却没有告诉我真实发生了什么。”
- “时间统计有很多图，但看完不知道应该怎样理解。”
- “效率工具不断提醒我做更多，却不帮助我判断什么值得做。”

## 4. 目标与非目标

### 4.1 V1 目标

1. 在 30 秒内给用户一张可信的一周概览。
2. 在 3 分钟内帮助用户确认或修正一个有意义的 Insight。
3. 在 2 分钟内让用户主动选择一个 Weekly Experiment，或选择继续观察。
4. 明确系统看到了什么、没看到什么、哪些是事实、哪些是推断。
5. 让下一周的 Mirror 能回看上一次选择是否有帮助。

### 4.2 V1 非目标

- 不做完整任务管理器。
- 不自动重排用户整个 Calendar。
- 不生成 Productivity Score、健康分或人生分。
- 不诊断心理状态、人格或关系问题。
- 不要求用户每周一定改变。
- 不依据未经确认的 Activity 形成长期身份判断。
- 不实现 Monthly Reflection、Ask My Life 或 Life Chapters。
- 不把 Weekly Mirror 默认公开或分享给他人。

## 5. 目标用户与核心 JTBD

### 5.1 Primary persona

每天有较多电脑活动、工作结构较复杂、已有反思或计划习惯的知识工作者，例如创业者、产品经理、设计师、工程师、创作者和研究者。

### 5.2 Job to Be Done

> 当一周结束、我感觉自己一直很忙却说不清真正发生了什么时，我希望系统基于我允许它看到的事实，帮我看见时间、能量和重视方向之间的关系，让我选择下一周最值得尝试的一项调整。

## 6. 产品原则

1. **Observation before optimization**：先呈现事实，再讨论改变。
2. **One useful pattern, not ten insights**：一周只需要一个真正有用的模式。
3. **Question before advice**：先邀请用户判断，再提出建议。
4. **User meaning beats model inference**：能量与意义优先来自用户输入。
5. **No change is valid**：继续观察也是有效选择。
6. **Evidence on demand**：主层安静，证据与口径随时可展开。
7. **Partial data stays partial**：数据有缺口时明确承认，不补写完整故事。
8. **Private by default**：不默认分享，不暗示社交比较。

## 7. V1 范围

### 7.1 P0 — 必须完成

- Weekly Mirror 生成与阅读
- 数据可见范围说明
- 一周时间分布与上周变化
- Current Focus（最多三项）
- 轻量 Energy Check-in
- 最多一个主要 Insight
- Insight 的确认、纠正和补充上下文
- 最多三个候选调整
- 用户选择零个或一个 Weekly Experiment
- 下一周回看上次 Experiment
- 数据不足、暂停记录和缺少上周对比等边界状态
- 完整埋点与用户反馈入口

### 7.2 P1 — V1 验证后

- Calendar 只读对照
- 经用户确认后写入 Calendar
- Weekly Mirror 历史浏览
- 自定义 Review day/time
- Energy 趋势
- 导出 Markdown / PDF
- 基于用户纠正的个性化建议排序

### 7.3 Rejected for now

- 自动创建多个任务
- 每日计划和全天候提醒
- 团队或公开分享
- AI Coach 连续对话
- 对用户进行跨领域人格总结
- 将每周表现量化成单一分数

## 8. 前置数据与资格

### 8.1 可使用的数据

- Confirmed Activity Blocks
- 未确认但高可信的 Activity Blocks，仅用于事实汇总，并在证据层标注
- Not recorded / Excluded / Unobserved 时段
- 用户保存的 Memories
- Current Focus
- 用户主动提供的 Energy Check-ins
- 用户补充的 Missing Context
- 上周用户选择的 Weekly Experiment

### 8.2 首次解锁条件

默认在安装后的第 7 天尝试生成。满足以下条件之一即可生成完整版本：

- 至少 3 个不同日期存在可用 Activity；或
- 用户主动选择“基于现有数据生成”。

数据不足时不强行生成模式，只展示：

> There is not enough data yet to identify a meaningful weekly pattern.

用户仍可查看已记录事实并补充遗漏，但不展示 Alignment、Pattern 或建议。

### 8.3 生成时间

- 默认：用户本地时间周日 18:00 后可用。
- V1 不强制通知；首次 Mirror 可发送一条温和通知。
- 每周最多一条通知，用户可完全关闭。

## 9. 信息架构

Weekly Mirror 保持当前“一张卡、一周一次”的方向，采用渐进展开，而不是多页向导。

```text
Reflection
├── This week felt like
├── What happened
├── Energy moments（有用户输入时）
├── Alignment with current focus（已设置 Focus 时）
├── Worth noticing
├── What you chose to remember
└── Carry forward
    ├── Continue observing
    └── Choose one weekly experiment
```

### 9.1 已接受的视觉方向 — 「周末来信」

**Decision：** Weekly Mirror V1 采用暖纸色、单列、编辑化的「周末来信」结构，不使用仪表盘卡片墙。

默认阅读顺序固定为：

1. 周期、有效记录天数与可见范围；
2. 本周事实摘要与时间分布；
3. 最多一条主要 Insight，以及确认、纠正、补充语境和查看证据；
4. Current Focus；
5. 一个 Carry Forward 建议，并提供 `Try this next week` 与 `Continue observing` 两个同等正当的结果。

证据与 caveat 默认折叠、按需展开。Energy 仅在存在用户输入时插入，不改变主阅读路径。这个方向的目标不是让 Weekly Mirror 看起来信息量最大，而是让用户在一次安静阅读中完成“看见事实 → 校正理解 → 决定是否带走一个实验”的闭环。

**排版约束：** Weekly Mirror 不建立独立于整篇产品说明书的“大字海报”字号体系。桌面端统一沿用现有 Design System 的五级标尺：Display 28px、Title 22px、Body 15px / 1.65、Caption 12.5px、Numeric 13px；一般 UI 文本使用 13.5px。层级通过字体家族、字重、颜色和留白建立，不通过 36–52px 的额外放大建立。窄屏只允许 Display / Title 逐级降至 25px / 20px，其余正文与说明文字保持可读和稳定。

## 10. 核心体验流程

### Step 0 — 上周选择回看

仅当用户上周选择过 Experiment 时出现。

显示：

> Last week, you wanted to give creating two uninterrupted mornings.

询问：

- It helped
- Partly
- It did not help
- I did not try it
- Add context

这里评价的是“这个尝试是否有帮助”，不是“用户是否完成任务”。

### Step 1 — 30 秒看见一周

默认首屏包含：

- 周期与有效记录天数
- 一句谨慎的周主题
- 时间主要分布
- 与上周相比最明显的事实变化
- 可见范围说明

示例：

> This week felt like a week of creating and transition.

> Most of your recorded computer time went to communicating and creating.

> Creating increased from 4.2 to 6.8 hours.

### Step 2 — 添加主观意义

如果存在 Energy Check-ins，显示最多两条：

- Gave you energy
- Drained you

如果不存在，不允许 AI 根据应用类别猜测。改为轻量邀请：

> Looking back, was there one activity that gave you energy or drained you?

用户可以跳过。

### Step 3 — Alignment

仅在用户设置 Current Focus 后显示。

示例：

> You said you wanted to give more room to creating. Communicating occupied 12.4 hours; creating occupied 6.8 hours.

必须同时显示：

- 数据来源
- 未观察范围
- “时间较少”不等于“不重视”的提示
- `This feels true / Not quite / Missing context`

不显示百分制 Alignment Score。

### Step 4 — 一个模式

V1 每周最多显示一个主要 Insight。只有满足以下条件时才显示：

- 至少两个独立证据点；
- 不依赖敏感属性推断；
- 能用一句非评判性语言表达；
- 可以展示来源、口径和反例；
- 与本周或 Current Focus 有实际关联。

示例：

> Your three longest uninterrupted periods all happened before noon.

交互：

- This feels true
- Not quite
- Missing context
- Not useful
- Why am I seeing this?

### Step 5 — Carry forward

先给一个问题，再提供选择：

> Does this reflect how you want to spend your time right now?

用户可以：

1. Continue observing
2. Write my own experiment
3. Choose one suggestion

系统最多提出三个候选，按照“最小、可尝试、可观察”生成：

- Reserve two uninterrupted mornings for creating.
- Shorten or move one recurring communication block.
- Keep observing without changing anything this week.

用户最多选择一个。选择后可编辑文字。

### Step 6 — 可选安排

P0 只保存为 Weekly Experiment，不写入第三方系统。

P1 在用户明确确认后提供：

- Add one or more protected time blocks to Calendar
- Choose preferred days and duration
- Preview before writing
- Undo after writing

## 11. 功能需求

| ID | Requirement | Priority |
|---|---|---|
| WM-001 | 系统每周最多生成一份 Weekly Mirror | P0 |
| WM-002 | 首次 Mirror 默认第 7 天解锁，数据不足时进入诚实空状态 | P0 |
| WM-003 | 每份 Mirror 必须显示周期、有效记录天数和可见范围 | P0 |
| WM-004 | 时间分布只基于允许使用的数据，排除项不得泄露标题 | P0 |
| WM-005 | 对比周期口径不同或数据覆盖差异较大时必须提示 | P0 |
| WM-006 | 每周最多展示一个主要 AI Insight | P0 |
| WM-007 | 每个 Insight 必须有可展开的 Evidence 与 Caveat | P0 |
| WM-008 | 用户可以确认、否定、补充上下文或标记无用 | P0 |
| WM-009 | Energy 结论只能来自用户输入，不可从 Activity 类型直接推断 | P0 |
| WM-010 | Alignment 只在用户已设置 Current Focus 时出现 | P0 |
| WM-011 | 系统最多生成三个候选调整，用户最多选择一个 | P0 |
| WM-012 | Continue observing / No change 必须是一等选项 | P0 |
| WM-013 | Weekly Experiment 保存前允许编辑 | P0 |
| WM-014 | 下一周优先回看上一项 Experiment 的帮助程度 | P0 |
| WM-015 | 用户可删除 Mirror、Insight、Check-in 和 Experiment | P0 |
| WM-016 | 不得从 Hidden、Private 或 Excluded 内容生成 Reflection | P0 |
| WM-017 | 用户关闭 Reflection 后停止生成和通知 | P0 |
| WM-018 | 支持自定义 Review day/time | P1 |
| WM-019 | 支持经确认后写入 Calendar，并提供预览与撤销 | P1 |
| WM-020 | 支持导出用户可读的 Weekly Reflection | P1 |

## 12. Current Focus 设计

### 12.1 触发时机

不要在安装第一屏要求用户回答宏大人生目标。建议在用户获得第一份 Today 价值之后邀请：

> Over the next few weeks, what would you like to give a little more room to?

### 12.2 规则

- 最多三个 Focus
- 允许完全自定义语言
- 默认有效期 2–6 周
- 到期时询问继续、修改或结束
- Focus 不是目标，不需要完成度
- 示例：Create、Family、Health、Rest、Learning、A new project

## 13. Energy Check-in 设计

### 13.1 输入成本

- Today 中每次最多询问一个问题
- 用户可选择一个或多个 Activity Block
- 允许快速标记：Gave energy / Neutral / Drained
- 可选添加一句上下文
- 永远可以跳过

### 13.2 使用限制

- 未经用户输入，不得声称某活动“让用户充实”或“消耗用户”。
- 允许说“你在这一时段频繁切换应用”，不允许说“这导致你焦虑”。
- Energy Check-in 属于用户提供的数据，其保留策略必须独立可见。

## 14. Weekly Experiment 设计

Weekly Experiment 是“对下一周的一个可观察尝试”，不是任务、承诺或绩效目标。

建议数据字段：

| Field | Description |
|---|---|
| `id` | 唯一标识 |
| `weekStart` / `weekEnd` | 生效周期 |
| `statement` | 用户确认后的自然语言表达 |
| `focusId` | 可选，对应 Current Focus |
| `sourceInsightId` | 可选，来自哪个 Insight |
| `scheduleIntent` | 可选，希望预留的时间窗口 |
| `status` | chosen / observing / reviewed / cancelled |
| `reviewOutcome` | helped / partly / did_not_help / not_tried |
| `userContext` | 用户补充说明 |

## 15. AI 输出契约

每份 Weekly Mirror 的生成结果必须结构化，而不是直接保存一段不可解释的文案。

建议返回：

```json
{
  "period": {},
  "coverage": {},
  "headline": {},
  "timeSummary": {},
  "change": {},
  "energyMoments": [],
  "alignment": null,
  "primaryInsight": null,
  "candidateExperiments": [],
  "evidence": [],
  "caveats": []
}
```

硬性规则：

- 明确区分 Fact、Inference、User-provided context 与 Unknown。
- 所有数值由确定性代码计算，LLM 只负责归纳和表达。
- 不推断疾病、心理状态、人格、关系质量、政治、宗教或其他敏感属性。
- 不使用“浪费、失败、懒惰、不够自律”等评价性措辞。
- 不将工作默认描述为好，也不将休息默认描述为坏。
- 不隐藏数据缺口。
- 不生成无法指向证据的具体断言。
- 建议采用实验语气：`You might try...`，而不是命令语气：`You should...`。

详细契约见 [`04-data-ai-and-privacy-contract.md`](04-data-ai-and-privacy-contract.md)。

## 16. 隐私与保留

### 16.1 V1 推荐行为

- Mirror 默认本地生成或只上传经过本地聚合的最小文本。
- Hidden Activity、Private Memory 和 Excluded Apps 不参与生成。
- 默认不长期保存未经用户确认的 Insight。
- 用户确认的 Insight 可转为 Memory。
- Weekly Experiment 由用户主动创建，可单独删除。
- 删除源数据后，系统不得继续展示依赖该数据但无法解释的断言。

### 16.2 尚待决定

现有承诺是“只有 Memory 长期保留”。Weekly Mirror 历史与聚合统计是否长期保存，必须在开发前明确：

- Option A：Mirror 随源 Activity 过期，只保留用户选择的 Memory 与 Experiment。
- Option B：本地长期保存聚合后的 Reflection，但更新对外隐私承诺。
- Option C：每周询问用户是否保留这份 Reflection。

V1 默认采用 Option A，直到用户研究证明历史 Reflection 本身具有不可替代价值。

## 17. 边界状态

| 状态 | 体验 |
|---|---|
| 少于 3 个记录日 | 只展示现有事实，不生成 Pattern 或建议 |
| 本周完全暂停 | 承认未记录，不发送“你没有完成”的提示 |
| 无上周数据 | 不做变化比较，只展示本周 |
| 两周覆盖差异过大 | 展示差异，不下趋势结论 |
| 没有 Current Focus | 不显示 Alignment，轻量邀请设置 |
| 没有 Energy Check-in | 不推断能量，邀请用户补充或跳过 |
| Insight 可信度不足 | 显示“No strong pattern this week” |
| 用户否定 Insight | 立即撤回该表达，记录纠正，不继续生成同类结论 |
| 用户选择不改变 | 保存为 intentional no-change，下一周不追问完成情况 |
| 用户删除本周数据 | 重新计算或删除相关 Mirror |

## 18. 通知与语气

首次通知：

> Your first week is ready to look at.

后续通知：

> A quiet look at your week is ready.

避免：

- Your weekly report is due.
- You missed your reflection.
- You were less productive this week.
- Complete your weekly review to keep your streak.

## 19. 可访问性要求

- 所有图表必须有等价文本和具体数值。
- 颜色不得是类别或变化的唯一表达方式。
- 展开 Evidence、选择反馈和创建 Experiment 必须支持键盘操作。
- 状态变化需要有可读的文本反馈，不只依赖动画。
- 不使用细小、低对比度文字承载关键 Caveat。
- Screen reader 阅读顺序应与视觉顺序一致。
- Reduced Motion 下关闭非必要过渡。

## 20. 埋点

埋点只记录产品行为，不记录用户的 Reflection 文本内容。

| Event | Purpose |
|---|---|
| `weekly_mirror_eligible` | 满足生成条件 |
| `weekly_mirror_generated` | 成功生成 |
| `weekly_mirror_opened` | 用户首次打开 |
| `weekly_mirror_completed` | 用户到达 Carry forward |
| `evidence_opened` | 用户查看证据 |
| `insight_feedback_submitted` | true / not_quite / missing / not_useful |
| `focus_created` | 创建 Current Focus |
| `energy_checkin_added` | 增加主观输入，不采集具体内容到分析平台 |
| `experiment_suggested` | 系统展示候选 |
| `experiment_chosen` | 用户主动选择 |
| `continue_observing_chosen` | 用户明确选择不改变 |
| `experiment_reviewed` | 下周回看结果 |
| `weekly_mirror_deleted` | 用户删除 |
| `reflection_disabled` | 用户关闭功能 |

## 21. 成功指标

### 核心价值指标

- 首份 Weekly Mirror 打开率：初始假设 ≥ 40%
- 打开后到达 Carry forward：≥ 60%
- Insight 被标记 `This feels true` 或经修正后确认：≥ 50%
- 完成 Mirror 的用户中，选择 Experiment 或明确 Continue observing：≥ 60%
- 选择 Experiment 的用户中，下一周完成回看：≥ 40%
- 访谈中反复出现：“原来这一周是这样度过的”或“我以前没有明确看见这个模式”

### Guardrail 指标

- `Not quite / Not useful` 持续高于 40%：说明 Insight 质量不足
- 每周纠正时间中位数超过 3 分钟：说明系统负担过高
- 因 Reflection 关闭记录或卸载：必须逐例访谈
- 用户将建议理解为评分、诊断或命令：视为严重语言失败
- Energy 推断投诉：目标为 0

## 22. North Star

建议将进入 Planning 阶段后的 North Star 定义为：

> Weekly Meaningful Reflection Loops：每周完成“查看 → 确认/修正 → 主动作出选择 → 下周回看”的用户数。

Meaningful Memory 数量继续作为长期价值指标，但不再独立代表产品核心闭环。

## 23. 验收标准

V1 可以进入 20–50 人测试前，必须满足：

1. 数据不足时不会生成武断模式。
2. 每个数值与事实都能追溯到计算来源。
3. 每个推断都能打开 Evidence 与 Caveat。
4. Energy 相关内容只来自用户主动输入。
5. 用户可以否定或补充每个主要 Insight。
6. 候选 Experiment 不超过三个，最多选择一个。
7. Continue observing 与选择 Experiment 同等明显。
8. Hidden、Private 和 Excluded 内容不会泄漏到 Mirror。
9. 删除源数据后，相关内容会删除或重新计算。
10. 不使用分数、连续打卡或评判性颜色。
11. 所有主流程可用键盘完成。
12. 产品分析平台不接收 Reflection 正文或用户私密文本。

## 24. 发布与实验计划

### Cohort A — 5 名 design partners

- Founder 主持首次 Mirror
- 观察用户阅读顺序、误解和停顿
- 当场询问哪一句可信、哪一句越界
- 暂不测试自动通知

### Cohort B — 20–50 名 Private Alpha

- 自动生成与通知
- A/B 测试“一张完整卡”与“30 秒层 + 展开”
- 比较有无 Current Focus 时的价值差异
- 每周访谈高反馈和低反馈用户

### 进入 Planning P1 的门槛

- Activity 准确性达到现有 Alpha 门槛
- 至少一半完成用户确认一个有用 Insight
- 用户主动提出“我接下来应该怎样安排”或实际选择 Experiment
- 隐私与评判感没有成为主要负面反馈

## 25. 开放问题

1. Current Focus 应在 Onboarding、Day 1 还是 Day 3 后询问？
2. Weekly Mirror 默认周日还是由用户选择回顾日？
3. Energy Check-in 的最佳频率是每日一次、按 Memory 候选触发，还是完全按需？
4. Weekly Mirror 是否需要长期历史，若需要如何与“只有 Memory 长期保存”的承诺一致？
5. Continue observing 是否需要在下一周回看，还是完全不制造后续义务？
6. 一个 Insight 是否足够，还是需要“事实变化 + 主观模式”各一个？
7. 首个 Calendar 集成应只读对照，还是直接支持写入受保护时间？
8. Weekly Experiment 属于 Memory、Planning 还是独立长期对象？
