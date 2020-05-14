const app = new Vue({
  el: '#app',
  data: {
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
  },
  mounted: function () {
    if (localStorage.getItem('items')) {
      this.items = JSON.parse(localStorage.getItem('items'))
    }
  },
  watch: {
    items: function () {
      this.updateLocalStorage()
    }
  },
  methods: {
    addItem: function () {
      this.items.push({ title: this.item, complete: false })
      this.item = ''
    },
    checkItem: function (index) {
      this.items[index].complete = !this.items[index].complete
      this.updateLocalStorage()
    },
    removeItem: function (index) {
      this.items.splice(index, 1)
    },
    updateLocalStorage: function () {
      localStorage.setItem('items', JSON.stringify(this.items))
    }
  }
})
