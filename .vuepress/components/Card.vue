<template>
  <div class="demo-container">
    <div
      class="card-container"
      v-for="(item, index) in cardList"
      :key="`card_${index}`"
    >
      <div class="card-icon">
        <img :src="item.icon || `${item.link}/favicon.ico`" alt="" />
      </div>
      <div class="card-Info">
        <div class="card-title">{{ item.title }}</div>
        <div class="card-remark">{{ item.remark }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { cardList } from "./Card.ts";
// import { defineProps } from "vue";
</script>

<style type="scss">
.demo-container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  margin-top: 20px;
}

.card-container {
  width: 17.5rem;
  height: 6.25rem;
  background-color: #f0f0f0;
  margin: 10px;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  .card-icon {
    width: 3.75rem;
    height: 3.75rem;
    background-color: #ccc;
    border-radius: 50%;
    margin-right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    /* margin: 20px auto; */
    img {
      max-height: 100%;
      cursor: pointer;
    }
  }
  .card-Info {
    width: calc(100% - 3.75rem - 10px);
    text-align: left;

    .card-title {
      width: 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 1.125rem;
      font-weight: bold;
      color: #282a2d !important;
    }
    .card-remark {
      width: 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 14px;
      color: #6c757d !important;
    }
  }
}
</style>
