const app = Vue.createApp({
  data: function () {
    return {
      item: '',
      items: [
        {
          title: 'Buy Milk',
          complete: false
        },
        {
          title: 'Clean Room',
          complete: true
        }
      ]
    }
  },
  mounted: function () {
    if (localStorage.getItem('items')) {
      this.items = JSON.parse(localStorage.getItem('items'))
    }
  },
  watch: {
    items: {
      deep: true,
      handler: function () {
        this.updateLocalStorage()
      }
    }
  },
  methods: {
    addItem: function () {
      this.items.push({ title: this.item, complete: false })
      this.item = ''
    },
    checkItem: function (index) {
      this.items[index].complete = !this.items[index].complete
    },
    removeItem: function (index) {
      this.items.splice(index, 1)
    },
    updateLocalStorage: function () {
      localStorage.setItem('items', JSON.stringify(this.items))
    }
  },
  computed: {
    remaining: function () {
      return this.items.filter(item => !item.complete).length
    }
  }
})

const vm = app.mount('#app')
