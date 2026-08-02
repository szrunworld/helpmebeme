# HelpMeBe.Me Product Memory

`dump/` 是 HelpMeBe.Me 的长期产品记忆库。它保存创始人表达、产品判断、取舍依据、PRD、验证结果和方向变化，让讨论能够被后续设计与开发继续使用。

## 之前的内容在哪里

- 品牌理念、设计系统、现有产品原型和早期路线图主要在 [`../src/pages/design.astro`](../src/pages/design.astro)。
- 对外产品表达和简化版交互在 [`../src/pages/index.astro`](../src/pages/index.astro) 与 [`../src/components/ProductDemo.tsx`](../src/components/ProductDemo.tsx)。
- 2026-08-02 关于“帮助我成为更好的我”、Visibility、Being seen、Weekly Mirror 与 Planning 的新增讨论，此前只存在于对话中；现已整理进本目录。

## 建议阅读顺序

1. [`00-founder-vision.md`](00-founder-vision.md) — 创始人愿景、核心信念与关键张力
2. [`01-product-strategy.md`](01-product-strategy.md) — 产品定位、核心闭环、能力地图与边界
3. [`02-weekly-mirror-v1-prd.md`](02-weekly-mirror-v1-prd.md) — Weekly Mirror V1 可开发 PRD
4. [`03-roadmap-and-pivots.md`](03-roadmap-and-pivots.md) — 阶段路线、进入条件与 pivot 触发器
5. [`04-data-ai-and-privacy-contract.md`](04-data-ai-and-privacy-contract.md) — 数据对象、AI 行为和隐私契约
6. [`05-validation-and-research.md`](05-validation-and-research.md) — 假设、指标、访谈与实验计划
7. [`06-decision-log.md`](06-decision-log.md) — 已做决定、理由、影响和重访条件

按时间保留的讨论整理位于 [`notes/`](notes/)，去标识化用户研究位于 [`research/`](research/)。

## 文档状态约定

- **Principle**：长期原则，除非创始人明确改变方向，否则保持稳定。
- **Decision**：当前已采用的选择，记录理由与重访条件。
- **Hypothesis**：仍需用户行为或访谈验证的判断。
- **Open question**：尚未决定，不应被开发团队误认为需求。
- **Rejected for now**：不是永远不做，而是当前阶段明确不做。

## 如何继续积累产品记忆

每次重要讨论后，至少完成其中一项：

1. 将新判断补入对应主题文档。
2. 在 [`06-decision-log.md`](06-decision-log.md) 增加一条带日期的 Decision 或 Hypothesis。
3. 如果改变了范围，同步更新 PRD 与路线图，而不是只在聊天中说明。
4. 如果来自用户访谈，记录原话、用户背景、出现频率和反例，避免只留下结论。

不要在这里保存 API Token、密码、用户私密原始数据或模型的隐藏内部推理。这里保存的是可复核的输入、结论、取舍理由、证据和未决问题。

## 当前文档基线

- 建立日期：2026-08-02
- 当前核心阶段：从 Capture / Today / Memory 走向 Weekly Mirror
- 当前最重要的验证：用户能否从一周真实数据中看见一个可信的新模式，并主动决定是否把它带入下一周
- 当前目标用户：电脑活动占比较高、愿意进行真实反思的知识工作者
