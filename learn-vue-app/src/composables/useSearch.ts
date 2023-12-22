// 在Vue 3中，您可以使用import { type Ref } from "vue";来导入类型。
// 这个问题的解决方法是使用import type来显式导入类型。
// 这样做可以解决编译器无法区分类型导出和运行时导出的问题
import { computed, ref, type Ref } from "vue";

export type UseSearchProps = {
    items: Ref<any[]>;  // items 是一个 Ref 类型的数组
    filter?: string;    // filter 是一个可选的字符串
    defaultSearch?: string; // defaultSearch 也是一个可选的字符串
};

export const useSearch = ({
                              items,
                              filter = "title",
                              defaultSearch = "",
                          }: UseSearchProps) => {
    const search = ref(defaultSearch);
    console.log(`defaultSearch: [${defaultSearch}]`);
    const searchResults = computed(() => {
        // TypeScript 中的 '?' 号是用来进行可选链操作的
        // 这个特性允许我们使用类似 foo?.bar 的语法，如果 foo 为 null 或 undefined，则返回 null，否则返回 foo.bar 的值
        return search.value
            ? items.value.filter((item) => {
                console.log(`search.value: [${search.value}]`);
                return item[filter]
                    ?.toLowerCase()
                    .includes(search.value.toLowerCase());
            })
            : items.value;
    });

    return { search, searchResults };
};