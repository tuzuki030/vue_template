<template>
  <div>
    <section class="section">
      <div class="container">
        <h1 class="title">
          Hello World
        </h1>
        <p class="subtitle">
          My first website with <strong>Bulma</strong>!
        </p>
      </div>
    </section>

    <div class="container">
      <h1 class="title">コンテナ</h1>
      <div class="content">

        <p><router-link :to="{ name: 'secondPage'}">次のページへ</router-link></p>

        <div class="columns is-mobile">
          <div class="column is-half is-offset-one-quarter">
            API接続テスト。次のURLにGETリクエストを送信します。<input class="input is-medium" type="text" v-model="url">
          </div>
        </div>
        <p><button class="button is-success" @click="getSample">GETリクエスト送信</button></p>

        <table class="table is-striped has-text-centered" v-show="getResult">
          <thead>
          <tr>
            <th>タイトル</th>
            <th>バリュー</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>ステータスコード</td>
            <td>{{status}}</td>
          </tr>
          <tr>
            <td>ボディ</td>
            <td>{{body}}</td>
          </tr>
<!--          <tr>-->
<!--            <td>レスポンス全体</td>-->
<!--            <td>{{getResult}}</td>-->
<!--          </tr>-->
          </tbody>
        </table>
      </div>
    </div>
    <hr>
    <p  v-show="dispResult">レスポンス全体
      <textarea class="textarea" v-model="dispResult"></textarea>
    </p>
  </div>
</template>

<script>
  const axios = require('axios').default;

  export default {
    data: () => {
      return {
        url: 'http://www.mocky.io/v2/5e6b7a542d00008d008e8f7d',
        getResult: null,
        dispResult: null,
        status: null,
        body: null,
      }
    },
    components: {},
    head: {
      title: {inner: "サンプル"},
      meta: [
        {name: "viewport", content: "width=device-width, initial-scale=1"}
      ]
    },
    methods: {
      async getSample() {
        // GETリクエスト送信
        const result = await axios.get(this.url);

        console.log(`result = ${JSON.stringify(result)}`);
        this.getResult = result;
        this.dispResult = JSON.stringify(result);
        this.status = result.status;
        this.body = result.data;
        this.headers = result.headers;
      }
    }
  }
</script>
