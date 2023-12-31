import { computed, ref, type Ref } from "vue";

export type UseSearchProps = {
    items: Ref<any[]>;
    filter?: string;
    defaultSearch?: string;
};

export const useSearch = ({
                              items,
                              filter = "title",
                              defaultSearch = "",
                          }: UseSearchProps) => {
    const search = ref(defaultSearch);
    console.log(`defaultSearch: [${defaultSearch}]`);
    const searchResults = computed(() => {
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