const app = new Vue({
  el:"#app",
  data: {
    message: "写真を撮影しました",
    seen: false
  },
  methods: {
    move() {
      const se = new Audio("D700シャッター音.mp3")
      se.play()
      this.seen = true
      setTimeout(() => {
        this.message = "写真を送信中..."
      }, 2000)
      setTimeout(() => {
        this.message = "IPアドレス取得中..."
      }, 3000)
      setTimeout(() => {
        this.message = "IPアドレスから住所特定中..."
      }, 4000)
      setTimeout(() => {
        this.message = "情報送信中..."
      }, 5000)
      setTimeout(() => {
        location.href = "invoice.html"
      }, 10000)
    }
  }
})
