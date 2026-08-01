import * as Accordion from "@radix-ui/react-accordion";

const items = [
  {
    question: "它会截图或记录键盘输入吗？",
    answer:
      "不会。HelpMeBe.Me 的产品边界是不保存截图、不记录键盘输入，只在你授权的范围内整理活动信息。你也可以随时暂停记录或排除应用。",
  },
  {
    question: "这是不是另一个效率或习惯追踪工具？",
    answer:
      "不是。它没有完成率、连续打卡、排名或生产力评分。HelpMeBe.Me 先呈现事实，再把解释和选择留给你。休息与娱乐不会被标记为失败。",
  },
  {
    question: "哪些内容会被长期保存？",
    answer:
      "自动整理的 Activity 是临时信息；只有你主动确认的内容才会成为 Memory，被长期保留。系统看到的，不等于永久记住。",
  },
  {
    question: "它能理解我的整个人生吗？",
    answer:
      "不能，也不会假装可以。线下的散步、家人、思考与没有授权的数据都可能不可见。产品会明确说明它看到了什么，以及哪里存在缺口。",
  },
] as const;

export default function FaqAccordion() {
  return (
    <Accordion.Root type="single" collapsible className="divide-y divide-line border-y border-line">
      {items.map((item, index) => (
        <Accordion.Item value={`item-${index + 1}`} key={item.question}>
          <Accordion.Header>
            <Accordion.Trigger className="group flex w-full cursor-pointer items-center justify-between gap-6 py-6 text-left font-serif text-base font-medium text-ink transition-colors hover:text-accent-deep sm:text-lg">
              {item.question}
              <span
                aria-hidden="true"
                className="flex size-8 shrink-0 items-center justify-center rounded-full border border-line font-sans text-base text-ink-faint transition-transform group-data-[state=open]:rotate-45"
              >
                +
              </span>
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="overflow-hidden pb-6 text-sm leading-7 text-ink-soft data-[state=closed]:animate-none sm:max-w-2xl sm:text-[15px]">
            {item.answer}
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
