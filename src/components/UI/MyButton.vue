<template>
    <button>
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: 'my-button'
    }
</script>

<style scoped>
button {
  padding: 10px 15px;
  cursor: pointer;
  border: 1px solid green;
  background: transparent;
  margin: 10px 5px 5px 0;
}
</style>