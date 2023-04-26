<template>
  <select class="select" @change="changeOption">
    <option value="" hidden>Выберите из списка</option>
    <option
      v-for="option in options"
      :key="option.value"
      :value="option.value"
    >
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: "my-select",
  props: {
    modelValue: {
        type: String,
    },
    options: {
        type: Array,
        default: () => []
    }
  },
  methods: {
    changeOption(event) {
        this.$emit('update:modelValue', event.target.value)
    }
  },
};
</script>

<style scoped>
.select {
  cursor: pointer;
  outline: none;
  height: 30px;
  border: 1px solid green;
  background: transparent;
}
</style>
