import Vue from 'vue'

Vue.directive('scroll', {
  inserted(el, binding) {
    const f = function (event) {
      if (binding.value(event, el)) {
        window.removeEventListener('scroll', f)
      }
    }
    window.addEventListener('scroll', f)
  },
})
