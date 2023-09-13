import { derived, writable } from "svelte/store";
import translation from "./translation";

const storedLocale = window.localStorage.getItem('locale')

// 当前语言（从本地存储中读取，没有则选择中文
export const locale = writable(storedLocale ? storedLocale : 'zh_CN');
// 翻译文本
export const locales = Object.entries(translation).map(([key, value]) => ({
  langShort: key,
  langName: value["lang.name"],
}));

// 从 locale 对应语言翻译 key 对应的值，并覆盖其中的 vars 变量
const translate = ({ locale, key, vars }) => {
  if (!key) throw new Error("没有提供翻译的key值");
  if (!locale) throw new Error(`没有提供翻译目标语言`);

  let text = translation[locale][key];

  if (!text) throw new Error(`对于${locale}.${key}没有翻译`);

  Object.keys(vars).map(k => {
    const regex = new RegExp(`{{${k}}}`, "g");
    text = text.replace(regex, vars[k]);
  });

  return text;
}

export const t = derived(locale, ($locale) => (key, vars = {}) =>
  translate({ locale: $locale, key, vars })
);