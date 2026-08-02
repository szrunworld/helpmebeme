# Product Strategy — 从私人时间镜子到反思式计划助手

> 状态：Working strategy  
> 首次整理：2026-08-02  
> 对应现有原型：[`../src/pages/design.astro`](../src/pages/design.astro)

## 一句话定位

> HelpMeBe.Me 是一面关于时间与生活的私人镜子：它把散落的活动变成看得懂的模式，再把这些模式变成用户主动选择的下一步。

英文工作版本：

> A private life mirror that turns what you actually did into reflection and intentional next steps.

## 当前切入口

长期愿景面向每个人，但第一阶段不服务“所有想成长的人”。当前最合适的切入口是每天产生大量电脑活动、同时存在“很忙但说不清忙了什么”问题的知识工作者：

- 创业者与独立开发者
- 产品经理、设计师与工程师
- 作家、研究者、律师与咨询顾问
- 已使用 Screen Time、RescueTime、Day One、Notion 或 AI 笔记，但仍缺少真实 Reflection 的人

选择这个人群不是因为最终市场只在这里，而是因为他们的数据可观察、问题高频、反馈质量高，也更能容忍 Alpha 阶段的不完整。

## 核心 Job to Be Done

当我一周结束、感觉自己一直很忙却说不清真正发生了什么时，我希望有人基于我允许它看到的事实，帮我看见时间、能量和重视方向之间的关系，让我能够选择下一周最值得尝试的一项调整。

## 产品闭环

```text
Capture reality
      ↓
Organize evidence
      ↓
Mirror what happened
      ↓
Let the user add meaning
      ↓
Choose one experiment
      ↓
Observe the next week
      ↺
```

现有产品已经覆盖前三步的大部分：Capture、Activity Grouping、Today、Memory、Reflection、Privacy。下一阶段的战略重点是补齐“用户赋义”和“选择下一步”。

## 六层能力地图

### 1. Capture — 低成本留下事实

- 自动记录经过授权的电脑活动
- 将窗口与应用事件合并成 Activity Blocks
- 快捷补充系统无法看到的线下时刻
- 逐步接入 Calendar、Mobile 与 Voice
- 清楚显示暂停、排除和未观察时段

### 2. Context — 知道此刻什么重要

- Current Season：用户现在处于怎样的生活阶段
- Current Focus：未来 2–6 周希望给什么更多空间，最多三项
- Life Areas：创造、沟通、学习、健康、家人、休息等自定义领域
- Energy Check-in：用户主观标记充实、平静、中性或消耗
- Missing Context：补充系统看不到的事情

### 3. Mirror — 从数据得到理解

- Today：十秒看见一天
- Weekly Mirror：一周事实、变化、能量、Alignment 与一个模式
- Monthly Reflection：从多周数据与已确认 Memory 看长期变化
- 每个推断提供证据、局限和纠正入口

### 4. Plan — 从理解走向选择

- 系统提出最多三个候选调整
- 用户最多选择一个 Weekly Experiment
- 可选地预留 Calendar 时间
- 下周先回顾实验是否有帮助，再提出新建议
- “继续观察，不做改变”是有效选择

### 5. Memory — 形成长期人生脉络

- Meaningful Memories
- Decisions
- Themes
- Life Chapters
- 月度与年度 Changelog
- Search 与 Ask My Life

Memory 能力必须建立在用户确认的数据之上。聊天框不是第一入口，也不能用未经确认的原始活动塑造用户身份。

### 6. Trust — 所有功能的底层能力

- 本地优先与最少化采集
- 原始活动自动过期
- 默认不截图、不记录键盘输入和密码
- Fact、Inference、User-provided context 与 Unknown 明确区分
- 可暂停、排除、修改、导出和真实删除
- 写入日历或长期记忆前必须得到用户确认

## Planning 的产品边界

HelpMeBe.Me 不应重新实现 Todoist、Things 或完整 Calendar。它负责更上游的问题：

1. 什么真正值得进入计划？
2. 计划是否与用户声称重视的方向一致？
3. 真实时间是否给了这些事情空间？
4. 上周的尝试是否真的改善了生活？

任务工具管理“要完成什么”；HelpMeBe.Me 帮助用户理解“为什么值得做，以及现实中是否真的发生”。

## 差异化

产品的壁垒不是记录了更多数据，而是逐步形成一套用户共同确认的私人语义：

- 这个活动对用户意味着什么
- 用户如何定义创造、家人、健康与休息
- 什么给用户能量
- 哪些建议被接受、纠正或拒绝
- 哪些 Memory 是用户主动留下的
- 哪些实验真实产生了帮助

随着这些确认累积，产品越来越懂用户，同时仍然允许用户随时重新定义自己。

## 价值兑现阶梯

| 时间点 | 用户应该得到的价值 |
|---|---|
| First hour | 第一条准确 Activity Block；“它理解我刚才做了什么” |
| Day 1 | 第一份十秒 Today；“原来今天是这样度过的” |
| Week 1 | 第一张 Weekly Mirror；“我以前没有明确看见这个模式” |
| Week 2 | 第一次回看 Weekly Experiment；“这个调整是否真的帮到我” |
| Month 1 | Memory、主题与变化形成连续脉络 |
| Long-term | Ask My Life、Life Chapters、Decision Memory 与年度 Changelog |

## 现阶段明确不做

- 连续打卡、勋章、排名和完成率
- 单一 Productivity Score
- 将休息、娱乐或低产出时间默认视为负面
- 全量录屏、键盘记录或默认视觉记忆
- 面向团队的员工监控、考勤或绩效功能
- 未经确认自动写入 Calendar 或 Task 系统
- 以聊天框代替可验证的事实与结构化反思
- 一开始同时接入所有生活数据源

## 当前战略判断

Weekly Mirror 是从“记录产品”走向“个人助手”的最小桥梁。它同时测试三件事：

1. 数据是否足够准确，能够形成可信理解；
2. 用户是否愿意补充主观意义；
3. 用户是否愿意把一个观察转化为下一周的选择。

如果这三件事成立，Planning、Memory 与长期 Assistant 才有可靠基础。

