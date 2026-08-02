# Data, AI & Privacy Contract

> 状态：Draft architecture contract  
> 日期：2026-08-02  
> 用途：产品、设计、工程与 AI 输出共同遵循的语义边界

## 1. 为什么需要这份契约

HelpMeBe.Me 的价值依赖高敏感度的个人时间与内容数据。产品一旦把“系统观察”“AI 推断”和“用户事实”混在一起，就会同时破坏准确性、隐私和品牌信任。

本契约定义：

- 系统中有哪些对象；
- 哪些可以由机器生成；
- 哪些必须由用户确认；
- 数据可以保留多久；
- AI 可以说什么、不能说什么；
- 删除如何传递到下游结果。

## 2. 核心对象

### Raw Event

设备产生的最小观察，例如应用名、窗口标题、时间戳、活跃/空闲状态。

- 来源：系统观察
- 默认保留：7 天，可由用户缩短
- 长期价值：无
- 限制：不直接展示为用户身份或长期 Memory

### Activity Block

由多个 Raw Events 聚合成的一段可理解活动。

- 来源：规则 / 模型建议 + 用户确认
- 示例：`HelpMeBe.Me product planning · 09:45–10:53`
- 默认保留：跟随 Raw Activity 策略
- 状态：Suggested / Confirmed / Needs review / Hidden / Not recorded

### Memory

用户明确选择长期保留的内容。

- 来源：用户原创、用户确认的候选或用户修改后的候选
- 默认保留：长期，直到用户删除
- 原则：AI 可以建议，用户决定

### Current Focus

用户在当前阶段希望给更多空间的方向。

- 来源：用户提供
- 示例：Create、Family、Health、Rest
- 默认保留：到期后归档或删除，由用户选择
- 限制：不是完成目标，不计算百分制得分

### Energy Check-in

用户对某个时刻或活动的主观体验。

- 来源：只能由用户提供
- 值：Gave energy / Neutral / Drained + 可选说明
- 限制：AI 不可从应用、时间或活动类别反推

### Insight

系统基于证据提出、等待用户确认的观察。

- 来源：确定性计算 + AI 表达
- 默认保留：临时
- 状态：Suggested / Confirmed / Corrected / Rejected / Not useful
- 长期保留：只有用户确认并转为 Memory 后

### Weekly Experiment

用户选择在下一周尝试的一项小调整。

- 来源：用户原创或用户确认的系统候选
- 默认保留：直到回看完成或用户删除
- 评价：是否有帮助，不是是否完成

### Reflection Run

一次 Daily / Weekly / Monthly Reflection 的生成记录与结构化结果。

- 来源：系统生成
- V1 推荐：随相关源数据过期；仅保存非敏感运行元数据
- 待验证：用户是否希望显式长期保留完整 Reflection

## 3. 数据层级

```text
Observed
  Raw Event
      ↓ aggregate
  Activity Block
      ↓ summarize
Suggested
  Insight / Memory Candidate / Experiment Candidate
      ↓ user confirms, edits, rejects or ignores
Owned by user
  Memory / Current Focus / Energy Check-in / Weekly Experiment
```

系统看见的不等于永久记住；AI 建议的不等于用户事实。

## 4. Evidence Graph

任何 AI 断言必须有 Evidence Graph，而不是只保存自然语言：

```text
Claim
├── type: fact | inference | user_context | unknown
├── sources[]
│   ├── activity_block_id
│   ├── memory_id
│   ├── focus_id
│   └── checkin_id
├── computation / comparison window
├── confidence
├── caveats[]
└── user_feedback
```

删除任一来源时，应触发：

1. 重新计算仍有足够证据的 Claim；或
2. 删除无法再解释的 Claim；
3. 不允许保留“来源已删除但结论仍存在”的孤立推断。

## 5. 确定性计算与 LLM 的分工

### 由确定性代码完成

- 时长与时间段
- 类别合计
- 与上周差值
- 记录日数和覆盖范围
- 最长连续 Block
- 切换次数
- Calendar 冲突
- 数据是否满足 Insight 门槛

### 由模型协助

- 将结构化事实归纳成克制的一句话
- 从符合门槛的候选中选择最相关的一个 Insight
- 基于已确认 Insight 生成小型 Experiment 候选
- 对用户补充内容进行语义归类，但不得覆盖原文

### 模型不得决定

- 用户真正重视什么
- 某活动是否让用户充实或消耗
- 什么必须成为长期 Memory
- 用户的人格、心理状态或关系质量
- 什么计划应该未经确认写入外部系统

## 6. Claim 类型与文案

| 类型 | 含义 | 可以怎样说 |
|---|---|---|
| Fact | 可由数据直接计算 | “Creating increased from 4.2 to 6.8 hours.” |
| User context | 用户明确提供 | “You said you wanted to give more room to creating.” |
| Inference | 基于多个证据的可反驳解释 | “Your clearest uninterrupted periods appeared to happen before noon.” |
| Unknown | 数据不足或不可见 | “HelpMeBe.Me could not see what happened during these hours.” |

主层可以不显示技术标签，但 Evidence 层必须明确类型、来源、口径和 Caveat。

## 7. AI 禁区

AI 不得：

- 诊断焦虑、抑郁、ADHD、成瘾、倦怠或其他健康状态；
- 推断政治、宗教、性取向、疾病或其他敏感属性；
- 将低工作时长描述为懒惰或失败；
- 将娱乐、休息、家人时间默认描述为低价值；
- 将某一周模式固化为人格判断；
- 通过缺失数据补写完整生活故事；
- 使用羞耻、恐惧、连续打卡或同龄比较推动行动；
- 在用户没有请求时持续提供未经验证的生活建议。

涉及明显自伤、伤害他人或严重危机表达时，应进入独立安全策略，不能把普通 Reflection Prompt 当成处理机制。

## 8. Insight 生成门槛

一个 Weekly Insight 至少满足：

- 有两个独立证据点，或一个明确的确定性变化；
- 对比周期口径足够接近；
- 数据覆盖与缺口已知；
- 能给出至少一个可能反例或 Caveat；
- 语言非评判；
- 与 Current Focus、本周变化或用户反馈相关；
- 不依赖 Hidden / Private / Excluded 数据；
- 不与用户近期明确纠正冲突。

不满足时返回 `no_strong_pattern`，这是正常成功状态，不应用弱推断填充界面。

## 9. 隐私状态

### Not recorded

系统未采集内容。只允许显示该时段没有数据，不保留标题或应用名。

### Hidden Activity

Activity 存在，但 UI 隐藏内容。除非用户明确改变状态，否则不参与 AI、Reflection 或 Search。

### Private Memory

用户主动保留但指定不参与 AI 分析、Reflection 或 Search 的 Memory。

三种状态语义不能混用。

## 10. 数据保留建议

| 对象 | 默认 | 用户控制 |
|---|---|---|
| Raw Event | 7 天 | 24 小时 / 7 天 / 30 天 / 立即删除 |
| Activity Block | 跟随 Raw Activity | 可手动删除或设 Hidden |
| Suggested Insight | 至源数据过期或用户拒绝 | 确认、修改、删除 |
| Reflection Run | V1 随源数据过期 | 可选择保留为 Memory，长期策略待验证 |
| Memory | 长期 | 编辑、私密、导出、删除 |
| Focus | 当前阶段 | 延长、归档、删除 |
| Energy Check-in | 由用户选择，建议默认本地长期 | 编辑、导出、删除、禁用分析 |
| Weekly Experiment | 至回看完成；可归档 | 编辑、取消、删除 |

## 11. 删除语义

删除必须是真实删除，不使用只隐藏 UI 的“软删除”欺骗用户。

用户删除：

- 一个 Activity：重新计算受影响的汇总与 Insight；
- 一天或日期范围：删除 Raw / Activity 并使对应 Reflection 失效；
- 一个 Memory：从后续主题、Search 和 Ask My Life 中移除；
- 一个 Check-in：不再用于 Energy 结论；
- 一个 Focus：停止后续 Alignment，历史表达按用户选择保留或删除；
- 全部数据：删除本地与云端副本、派生索引、向量与备份恢复入口。

任何由于备份周期不能即时物理清除的限制，都必须在产品承诺中真实说明。

## 12. 外部动作契约

未来所有 Calendar、Task、Message 或其他外部写入必须遵循：

1. 显示将要发生什么；
2. 显示目标系统与具体内容；
3. 用户明确确认；
4. 执行后给出结果；
5. 在可行时提供撤销；
6. 不在后台静默扩大权限或创建新动作。

## 13. 安全与工程基线

- 本地数据库按操作系统能力加密。
- 云端同步采用传输加密和静态加密。
- 日志不得包含窗口标题、Reflection 正文、Memory 正文或 Token。
- 分析事件只记录交互类型，不记录私密文本。
- API Token 不存入仓库或 `.env`；开发工具使用系统钥匙串。
- 权限按最小范围申请，并解释每项权限如何产生价值。
- 导出文件明确提醒其中可能包含敏感信息。

## 14. 待决定的架构问题

1. Weekly Reflection 历史是否作为新的长期对象存在？
2. Energy Check-in 默认保留多久，是否默认参与长期主题？
3. 用户确认的 Insight 应转为 Memory，还是保留独立类型？
4. 聚合统计是否可以长期保留而不违背“只有 Memory 长期保留”？
5. Cloud 同步是否能实现端到端加密，同时保留跨设备 AI 能力？
6. 本地模型与云模型如何在不同设备能力下保持一致的输出契约？

