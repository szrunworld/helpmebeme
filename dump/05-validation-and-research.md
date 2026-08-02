# Validation & Research Plan

> 状态：Working research plan  
> 日期：2026-08-02  
> 目标：让路线图由真实用户价值推进，而不是由功能完成度推进

## 1. 假设层级

### H1 — Capture accuracy

系统能在第一个小时内生成一条用户认为基本准确的 Activity Block。

如果 H1 不成立，Memory、Reflection 和 Planning 都不应扩张。

### H2 — Low correction burden

用户愿意纠正系统，并认为纠正成本低于获得的价值。

### H3 — Daily visibility

Today 能产生“原来我今天是这样度过的”价值，而不是变成另一个数据 Dashboard。

### H4 — Weekly insight

Weekly Mirror 能让用户看见一个此前没有明确意识到、且认为真实有用的模式。

### H5 — User meaning

用户愿意用极低成本补充 Energy、Focus 或 Missing Context，使系统理解从行为事实走向个人意义。

### H6 — Reflective planning

用户愿意把一个 Insight 转化成下一周的小实验，并回来判断是否有帮助。

### H7 — Long-term memory

四周以上的 Memory、Reflection 与选择能形成用户不愿失去的个人资产。

## 2. 测试对象

### Private Alpha

- 20–50 名用户
- 其中 5–8 名 design partners 进行高频访谈
- macOS 优先
- 电脑工作时间较长
- 覆盖创业者、产品/设计/工程、创作者或研究者

### 暂不追求代表性

Alpha 目标是发现核心价值和失败模式，不是估算大众市场规模。不要因为样本小而伪装统计显著性；同时不要用少数朋友的赞美替代真实复访行为。

## 3. 研究节奏

### 安装前

记录：

- 用户当前如何回顾时间；
- 使用哪些 Calendar、Task、Journal 或 Tracking 工具；
- 最近一次“很忙但说不清做了什么”的具体情境；
- 对自动记录最大的担忧；
- 哪类数据绝不愿意被采集。

### First hour

观察：

- 用户是否理解 Recording 状态；
- 第一条 Activity 是否准确；
- 用户是否知道如何暂停和排除；
- 修正是否容易；
- 第一反应是“被理解”还是“被监控”。

### Day 1–3

询问：

- Today 中哪一句最有用？
- 哪一部分像普通时间统计？
- 哪个 Activity 识别错误最伤信任？
- 用户是否主动返回，而不是因为研究提醒才打开？

### Week 1

让用户边看第一张 Weekly Mirror 边表达想法，不先解释设计意图。

重点观察：

- 第一眼看什么；
- 哪句话被认为是真实；
- 哪句话越界或太武断；
- 是否理解 Coverage；
- 是否愿意补充 Missing Context；
- 是否主动提出下一步；
- Continue observing 是否被视为真实选项。

### Week 2

回看 Experiment：

- 用户是否记得自己选择了什么；
- 是否尝试并不重要，关键是它是否有帮助；
- 产品有没有制造内疚；
- Calendar 支持是否会改善现实执行；
- 用户愿不愿意下周继续。

### Week 4

验证不可替代性：

- 如果明天产品消失，用户最舍不得什么？
- 哪些内容愿意长期保存？
- 哪些数据希望自动删除？
- 产品更像时间镜子、日记、记忆工具还是计划伙伴？
- 是否愿意为加密同步和永久保存付费？

## 4. 关键访谈问题

避免问“你喜不喜欢这个功能”。优先询问具体事实：

1. 上一次你主动打开它是什么时候？当时为什么？
2. 给我看一条你确认过、修改过或拒绝过的 Activity。
3. 这份 Weekly Mirror 里哪一句是你原来没有清楚意识到的？
4. 哪一句不够准确？它遗漏了什么？
5. 看到建议时，你感到被帮助、被催促，还是没有感觉？为什么？
6. 你实际为下一周改变了什么？
7. 如果没有改变，是因为不需要、建议不对，还是现实中做不到？
8. 哪一条 Memory 是你不愿意失去的？
9. 哪类内容你绝不希望系统长期保存？
10. 如果只保留一个功能，你会保留哪个？

## 5. 行为指标

### Activation

- 权限授权完成率
- 第一条 Activity 生成时间
- 第一条 Activity 确认或修正完成率
- 第一小时退出率

### Accuracy

- Direct confirmation rate
- Light edit then confirm rate
- Full rewrite rate
- Needs review rate
- 同类 Activity 重复纠错率
- 每日纠正耗时中位数

### Reflection

- Today 查看天数 / 周
- Weekly Mirror eligible / generated / opened / completed
- Evidence 打开率
- Insight true / corrected / rejected / not useful
- Missing Context 补充率

### Planning

- Experiment suggestion → chosen
- 自定义 Experiment 比例
- Continue observing 比例
- 下周 review 比例
- helped / partly / did not help / not tried
- Calendar 写入与撤销率（P1）

### Trust

- Pause 与 Exclusion 使用率
- 隐私设置查看率
- 删除与导出行为
- 因隐私退出、卸载或拒绝权限
- “监控”“评分”“被催促”等访谈标签出现频率

### Retention

- D7 / D14 / D28
- 首份 Weekly Mirror 后次周回访
- 四周内至少两次 Meaningful Reflection Loop
- Memory 的再次查看、搜索或引用

## 6. North Star 定义

### Weekly Meaningful Reflection Loop

一次 Loop 至少包含：

1. 用户打开 Weekly Mirror；
2. 对主要 Insight 做出确认、修正、补充或明确拒绝；
3. 主动选择 Experiment 或 Continue observing；
4. 下一周期回来回看，或明确结束该选择。

这是一个滞后指标。早期仍需同时监控 Capture accuracy 和 Weekly Insight confirmation。

## 7. 初始阈值与决策

阈值是 Alpha 工作假设，不是假装精确的行业基准。

| Signal | 初始阈值 | 决策 |
|---|---:|---|
| Activity 直接或轻改确认 | ≥ 70% | 可以继续测试 Reflection |
| 日均纠正时间中位数 | ≤ 1 分钟 | 记录负担可接受 |
| 首份 Weekly Mirror 打开 | ≥ 40% | 周回顾有初始吸引力 |
| 完成用户确认有用 Insight | ≥ 50% | Insight 具备价值 |
| 完成用户作出明确选择 | ≥ 60% | Carry forward 可理解 |
| Experiment 次周回看 | ≥ 40% | 闭环有初步成立可能 |
| 四周持续使用 | 20–30% | Alpha 值得继续投入 |

## 8. 失败诊断顺序

当 retention 低时，按以下顺序排查，避免直接增加提醒：

1. 系统有没有看准？
2. 用户是否信任它看这些数据？
3. 总结有没有带来新理解？
4. 用户是否能够补充意义？
5. 下一步建议是否适合现实容量？
6. 产品自然使用频率是否本来就是每周，而不是每天？

## 9. 研究记录格式

每次访谈在 `dump/research/` 下建立日期文件，建议结构：

```markdown
# Interview — YYYY-MM-DD — Participant code

## Context
- Persona:
- Current tools:
- Observation period:

## Verbatim signals
> 用户原话

## Behaviors observed
- 实际做了什么，不解释动机

## Interpretation
- 当前解释与置信度

## Counter-evidence
- 不支持当前判断的证据

## Decisions affected
- 对应 Decision ID / PRD requirement

## Follow-up
- 下次需要验证什么
```

不在研究文档中保存真实姓名、密码、Token、原始窗口标题或不必要的私密内容。使用 participant code，并获得必要同意。

## 10. 每四周产品复盘

固定回答：

1. 哪个假设得到最强支持？
2. 哪个假设正在失败？
3. 用户行为与访谈表达哪里冲突？
4. 哪个功能增加了理解，哪个只增加了使用时间？
5. 我们是否正在滑向监控、评分或通用任务管理？
6. 下一周期只验证哪一个问题？
7. 是否满足路线图中的 pivot 条件？

