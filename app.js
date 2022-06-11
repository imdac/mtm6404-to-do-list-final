const app = Vue.createApp({
  data: function () {
    return {
      items: [
        {
          title: 'Buy Milk',
          complete: false
        },
        {
          title: 'Clean Room',
          complete: true
        }
      ],
      item: ''
    }
  },
  created: function () {
    const items = localStorage.getItem('items')

    if (items) {
      this.items = JSON.parse(items)
    }
  },
  computed: {
    remaining: function () {
      // get all incomplete items 
      // const incomplete = this.items.filter(
      //   item => item.complete === false
      // )

      // // count the incomplete items
      // return incomplete.length 

      return this.items.filter(item => !item.complete).length
    }
  },
  methods: {
    addItem: function () {
      this.items.push({
        title: this.item,
        complete: false
      })

      this.item = ''
    },
    checkItem: function (index) {
      this.items[index].complete = !this.items[index].complete
    },
    removeItem: function (index) {
      this.items.splice(index, 1)
    }
  },
  watch: {
    items: {
      deep: true,
      handler: function (items) {
        localStorage.setItem('items', JSON.stringify(items))
      }
    }
  }
})

const vm = app.mount('#app')