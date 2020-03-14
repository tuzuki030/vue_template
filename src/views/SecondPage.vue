<template>
  <div>
    <section class="section">
      <div class="container">
        <h1 class="title">
          2ページ目
        </h1>
        <p><router-link :to="{ name: 'simpleIndex'}">前のページへ</router-link></p>
      </div>
    </section>
  </div>
</template>

<script>

  export default {
    data: () => {
      return {
      }
    },
    components: {},
    head: {
      title: {inner: "サンプル2"},
      meta: [
        {name: "viewport", content: "width=device-width, initial-scale=1"}
      ]
    },
    methods: {
    }
  }
</script>
