<template>
  <input :value="modelValue" @input='updateInput' type="text" />
</template>

<script>
export default {
  name: "my-input",
  props: {
    modelValue: [String, Number]
  },
  methods: {
    updateInput(event) {
        this.$emit('update:modelValue', event.target.value)
    }
  }
};
</script>

<style scoped>
input {
  width: 400px;
  display: block;
  padding: 10px;
  outline: none;
  margin: 10px 0;
  border: 1px solid green;
}
</style>
