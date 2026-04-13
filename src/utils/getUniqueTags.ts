import * as messages from "@/paraglide/messages";
import type { CollectionEntry } from "astro:content";
import { useTranslations, type Locale } from "./locale";
import postFilter from "./postFilter";
import { slugifyStr } from "./slugify";

interface Tag {
  tag: string;
  tagName: string;
}

type MsgKey = Exclude<keyof typeof messages, "m">;

const getUniqueTags = (posts: CollectionEntry<"blog">[], locale: Locale) => {
  const mt = useTranslations(locale as Locale);
  const tags: Tag[] = posts
    .filter(postFilter)
    .flatMap(post => post.data.tags)
    .map(tag => {
      const slugifiedTag = slugifyStr(tag);
      const key = `tag_${slugifiedTag}` as MsgKey;
      return {
        tag: slugifiedTag,
        tagName:
          typeof mt[key] === "function"
            ? (mt[key] as () => string)()
            : slugifiedTag,
      };
    })
    .filter(
      (value, index, self) =>
        self.findIndex(tag => tag.tag === value.tag) === index
    )
    .sort((tagA, tagB) => tagA.tag.localeCompare(tagB.tag));
  return tags;
};

export default getUniqueTags;
