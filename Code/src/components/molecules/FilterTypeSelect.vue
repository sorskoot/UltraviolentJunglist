<template>
  <uj-dropdown @select="select" :selected="filter" :items="filters"></uj-dropdown>
</template>

<script>
import { ujDropdown } from "@/components/atoms";
import { Filter } from "@/lib/models";

export default {
  name: "uj-filter-type-select",
  components: { ujDropdown },
  props: {
    filter: {
      type: String,
      validator: function(value) {
        // The value must match one of these strings
        return (
          Filter.possibleFilters.indexOf(value) !== -1
        );
      }
    }
  },
  data: function() {
    return {
      filters: Filter.possibleFilters
    };
  },
  methods: {
    select: function(value) {
        this.$emit("select", value);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
