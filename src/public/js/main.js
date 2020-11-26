import cart from './cartComp'
import products from './ProdComp'
import search from './filterComp'
import error from './errorComp'




let app ={
  el: '#app',
  data: {},

  methods: {
    getJSON(url) {
      return fetch(url)
        .then(result => result.json())
        .catch(error => {
          this.$refs.err.setError(error)
          console.log(error);
        })
    },

    putJSON(url, data) {
      return fetch(url, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
        .then(result => result.json())
        .catch(error => {
          this.$refs.err.setError(error)
          console.log(error);
        })
    },

    postJSON(url, data) {
      return fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
        .then(result => result.json())
        .catch(error => {
          this.$refs.err.setError(error)
          console.log(error);
        })
    },

    deleteJSON(url) {
      return fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },        
      })
      .then(result => result.json())
      .catch(error => {
        this.$refs.err.setError(error)
        console.log(error);
      })
    }
  },

  components: {
    products,
    cart,
    search,
    error
  }
}


export default app