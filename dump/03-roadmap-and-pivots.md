# Roadmap & Pivot Framework

> 状态：Working plan  
> 日期：2026-08-02  
> 原则：用验证门槛推进，而不是用功能数量或日历日期推进

## 路线图的基本判断

现有记录能力只是起点，但不能因为长期愿景是 Personal Assistant，就立即建设完整 Life OS。

正确顺序是：

```text
先证明看得准
  → 再证明看得懂
    → 再证明用户愿意选择
      → 再证明选择能进入现实计划
        → 最后扩展生活上下文与长期记忆
```

每一阶段都必须回答一个核心问题。如果答案是否定的，应先修正或 pivot，而不是用更多功能掩盖。

## Phase 0 — Trustworthy Capture

### 要回答的问题

> 产品能否在第一个小时准确理解用户刚才做了什么，并让用户愿意继续记录？

### 范围

- macOS Capture
- Activity Block grouping
- Confirm / Edit / Merge / Split / Private / Delete
- Today 十秒层
- 一条候选 Memory
- Recording / Pause / Exclusion
- 数据保留与真实删除

### 成功门槛

- 70% Activity Block 可直接或轻微修改后确认
- 用户日均修正负担中位数不超过 1 分钟
- 前三天至少查看两次 Today 的用户达到约 60%
- 用户能够准确说出系统记录了什么、不会记录什么
- 访谈出现“它理解我刚才做了什么”

### 不满足时

暂停复杂 Reflection。优先修正 grouping、可解释性、权限和第一小时体验。

## Phase 1 — Weekly Mirror

### 要回答的问题

> 一周数据能否帮助用户看见一个此前没有明确意识到、并且认为真实有用的模式？

### 范围

- Current Focus
- Add missing moment
- Energy Check-in
- Weekly Mirror
- Insight feedback
- Evidence / Caveat
- Continue observing
- Weekly Experiment（不接 Calendar）

### 成功门槛

- 首份 Mirror 打开率 ≥ 40%
- 打开用户中，到达 Carry forward ≥ 60%
- 至少 50% 完成用户确认或修正出一个有用 Insight
- 用户理解 Reflection 不是分数或诊断
- 至少一部分用户主动询问“接下来可以怎么安排”

### 不满足时

判断失败发生在哪一层：

- 数据不准：回到 Phase 0。
- 数据准确但 Insight 无用：改善 Context、筛选与表达。
- Insight 有用但用户不需要下一步：可能更适合 Life Mirror / Memory Companion 路线。

## Phase 2 — Reflective Planning

### 要回答的问题

> 用户是否愿意把一个观察转化成下一周的小实验，并回来判断它是否有帮助？

### 范围

- 候选 Weekly Experiments
- 自定义 Experiment
- Calendar 只读对照
- 经确认后写入受保护时间
- Plan vs. Reality
- 下周 Experiment review
- 极少量中途提醒

### 成功门槛

- 完成 Mirror 用户中 ≥ 30% 选择 Experiment
- 选择 Experiment 用户中 ≥ 40% 下周回看
- 用户评价重点是“是否有帮助”，而不是只报告“是否完成”
- Calendar 写入撤销率和投诉保持低位
- D28 与四周访谈显示闭环带来持续价值

### 不满足时

- 创建多、执行少：减少建议，改善现实容量与 Calendar 设计，而不是增加提醒。
- 用户拒绝安排但愿意反思：保持 Reflection-first。
- 用户只想要任务执行：不要直接转成通用 Todo 产品，先验证这是否偏离品牌核心。

## Phase 3 — Life Context

### 要回答的问题

> 哪些系统看不到的生活部分，正在持续限制 Reflection 的可信度？

### 候选能力

- Mobile companion
- Voice quick capture
- Calendar 深度集成
- Health / Activity
- Location / Travel context
- Task tools
- Personal relationships context（完全用户主动）
- Monthly Reflection

### 进入原则

一次只接入一种数据源，必须由真实“Missing Context”反馈驱动。新数据源应明确改善某个现有问题，而不是为了建立更完整的用户画像。

## Phase 4 — Memory Companion

### 要回答的问题

> 经过数月积累后，用户是否认为这些 Memory 和选择形成了不可替代的人生脉络？

### 候选能力

- Memory Search
- Themes
- Decision Memory
- Life Changelog
- Life Chapters
- Ask My Life
- 年度回顾

### 进入原则

- 只依赖用户确认可长期使用的数据。
- 回答必须展示来源并允许用户修正。
- 不把过去模式描述为固定身份。
- Chat 是访问长期记忆的一种方式，不是产品唯一界面。

## Phase 5 — Personal Assistant

### 长期形态

只有当前四个闭环稳定后，产品才逐步具备主动助手能力：

- 在用户请求时提出计划方案
- 发现计划与现实的结构性冲突
- 提醒即将被挤压的 Current Focus
- 基于过去有效的 Experiment 提出候选方法
- 帮助准备月度、季度和年度回顾

所有外部动作都应“先预览、再确认、可撤销”。

## 功能依赖顺序

| 能力 | 必须先成立 |
|---|---|
| Weekly Insight | Activity 准确、Evidence 可追溯 |
| Energy Reflection | 用户主动 Energy Check-in |
| Alignment | Current Focus + 足够可见范围 |
| Planning suggestion | 已确认 Insight + 现实容量 |
| Calendar writing | 用户明确确认 + 撤销机制 |
| Monthly Reflection | 多周可信 Reflection / Memory |
| Ask My Life | 足够长期、用户确认的数据与引用能力 |

## Pivot 信号与动作

| 信号 | 解释 | 建议动作 |
|---|---|---|
| 自动 grouping 长期不准，纠正负担高 | Always-on Capture 不是当前可行入口 | 转向选择性 Session、Calendar + 快捷记录 |
| Today 低频，Weekly 高复访 | 用户不需要每日产品界面 | 改为后台 Capture + Weekly-first ritual |
| Reflection 有价值，Planning 无需求 | 用户要镜子，不要教练 | 聚焦 Life Mirror / Memory Companion |
| Experiment 采用与回看都高 | “理解 → 行动”闭环成立 | 强化 Reflective Planning 与 Calendar |
| 大量用户补充线下内容 | 电脑数据不足以代表关键生活 | 优先 Mobile / Voice / Calendar，不增加桌面监控 |
| 用户只保存 Memory，不看时间统计 | 长期记忆比量化更有价值 | 提升 Memory、Themes 与 Changelog |
| 用户只在工作场景获得价值 | 初始 ICP 比愿景更窄 | 明确聚焦知识工作者，延后泛生活定位 |
| 隐私导致权限拒绝或卸载 | 信任成本高于当前价值 | 更彻底本地化、选择性采集、先演示后授权 |
| AI Insight 经常被否定 | 语义模型或 Context 不足 | 减少 Insight 数量，增加用户输入和证据门槛 |
| 用户把建议理解为评判 | 语言和交互偏离理念 | 停止扩展 Planning，修正语气、选择权和 no-change 路径 |

## 不应被误判为成功的信号

- 用户打开很多次设置页，可能是隐私困惑而不是参与度。
- 用户频繁修正 Activity，可能是负担而不是投入。
- 用户创建很多 Experiments，可能是系统诱导而不是真实选择。
- 用户记录更多时间，不代表生活变得更清晰。
- AI 生成很多 Insight，不代表其中任何一个有用。
- 日活很高不一定优于每周稳定回访；产品可能天然是 Weekly ritual。

## 阶段性 North Star

| 阶段 | North Star |
|---|---|
| Capture Alpha | 首小时被确认的准确 Activity Block |
| Reflection Alpha | 每周被用户确认或修正为有用的 Insight |
| Planning Beta | Weekly Meaningful Reflection Loops |
| Memory Companion | 用户主动保留并再次使用的 Meaningful Memories |

## 路线管理规则

1. 每个 Phase 只允许一个主要待验证问题。
2. 新功能必须明确服务哪一个假设和指标。
3. 上一阶段未过门槛时，不用下一阶段功能掩盖。
4. 每四周复盘一次 Decision Log 与 Pivot signals。
5. 用户原话与行为冲突时，以行为和复访为重要证据，但保留访谈上下文。
6. Pivot 可以改变入口、频率、目标用户或主要结果，但不轻易放弃 Visibility、Agency 与 Privacy 原则。

