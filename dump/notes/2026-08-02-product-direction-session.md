# Product Direction Session — 2026-08-02

> 类型：Conversation synthesis  
> 目的：保留本次讨论如何从品牌理念推进到 Weekly Mirror 与 Planning，而不仅保存最终 PRD

## 讨论起点

创始人提出产品 Slogan“帮助我成为更好的我”，并明确三个立足点：

1. 帮助每个人成为更好的自己；
2. Visibility 是解决问题的第一步；
3. Being seen is the beginning of everything。

长期希望把时间与内容可视化，让用户更好地 Planning，形成记录、管理、计划一体的个人助手。

## 第一轮判断

讨论首先区分了“功能集合”和“改变闭环”。产品的真正价值不在于同时拥有记录、管理和计划，而在于形成：

```text
记录 → 看见 → 理解 → 计划 → 行动 → 回顾
```

由此形成“私人生活镜子”的定位：把散落记录变成可理解模式，再把模式变成下一步选择。

同时识别了一个重要风险：“成为更好的自己”容易被产品解释成不断优化。讨论决定，更好的标准必须由用户定义；产品提供 Visibility，不替用户评价人生。

## 对现有产品的认识

检查现有产品文档后确认，HelpMeBe.Me 已不是单纯记录器，已经具备：

- 自动 Capture
- Activity grouping 与纠正
- 十秒 Today
- 用户确认的 Memory
- Day 7 解锁的 Weekly Reflection
- Privacy、数据过期与不可见范围

现有设计最大的断点不是缺少更多图表，而是 Weekly Reflection 最后停在“One question to carry forward”，还没有形成用户控制的下一步和次周反馈。

## 第二轮判断：补齐四个对象

为了回答“充实/消耗、目标一致、反复模式、下周调整”，产品需要增加：

- Current Focus：当前想给什么更多空间
- Energy Check-in：由用户提供主观体验
- Insight：有证据、可确认或否定的系统观察
- Weekly Experiment：用户选择的一项下周小实验

讨论特别确认：电脑活动无法可靠判断一件事是否让用户充实。Energy 必须由用户赋义，AI 只能整理，不能擅自推断。

## Planning 的收敛

Planning 不应演化成完整 Todo 或 Calendar 产品。HelpMeBe.Me 应解决计划的上游问题：

- 什么值得进入计划；
- 现实是否给了重要事情空间；
- 一个调整是否真的帮助用户。

系统可以给三个候选，但用户最多选择一个。用户也可以明确选择“继续观察，不改变”。下一周评价“是否有帮助”，而不是“是否完成”。

## 路线变化

讨论形成以下顺序：

1. Trustworthy Capture
2. Weekly Mirror
3. Reflective Planning
4. Life Context
5. Memory Companion
6. Personal Assistant

每一步由验证门槛推进。如果 Weekly Reflection 被需要但 Planning 不被需要，产品可以 pivot 为 Life Mirror / Memory Companion；如果 Experiment 的选择和次周回看成立，则强化 Reflective Planning。

## 指标变化

现有 North Star“每周保存的 Meaningful Memories”仍有价值，但不足以描述 Planning 闭环。讨论提出新的工作假设：

> Weekly Meaningful Reflection Loops：用户查看 Mirror、确认或修正 Insight、主动作出选择，并在下一周期回看。

这个指标需要在 Alpha 中验证，不能因为定义完整就视为正确。

## 本次确定的产物

- 创始人愿景：[`../00-founder-vision.md`](../00-founder-vision.md)
- 产品战略：[`../01-product-strategy.md`](../01-product-strategy.md)
- Weekly Mirror V1 PRD：[`../02-weekly-mirror-v1-prd.md`](../02-weekly-mirror-v1-prd.md)
- 路线与 pivot：[`../03-roadmap-and-pivots.md`](../03-roadmap-and-pivots.md)
- 数据与 AI 契约：[`../04-data-ai-and-privacy-contract.md`](../04-data-ai-and-privacy-contract.md)
- 验证研究：[`../05-validation-and-research.md`](../05-validation-and-research.md)
- 决策日志：[`../06-decision-log.md`](../06-decision-log.md)

## 仍需继续讨论

1. Weekly Reflection 历史是否长期保存。
2. Current Focus 的最佳触发时间。
3. Energy Check-in 的频率与保留方式。
4. Weekly Experiment 是否应成为独立长期对象。
5. Weekly Mirror 的具体视觉与交互方案。
6. Slogan 中“更好的我”与“更像真正的自己”的品牌层级。

