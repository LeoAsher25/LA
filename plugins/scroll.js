// import Vue from 'vue'

// Vue.directive('scroll', {
//   inserted(el, binding) {
//     const f = function (event) {
//       if (binding.value(event, el)) {
//         window.removeEventListener('scroll', f)
//       }
//     }
//     window.addEventListener('scroll', f)
//   },
// })
import Vue from 'vue'

const handleScroll = function (event, el, binding) {
  if (binding.value(event, el)) {
    window.removeEventListener('scroll', el._handleScroll)
    delete el._handleScroll
  }
}

Vue.directive('scroll', {
  inserted(el, binding) {
    el._handleScroll = (event) => handleScroll(event, el, binding)
    window.addEventListener('scroll', el._handleScroll)
  },
  unbind(el) {
    window.removeEventListener('scroll', el._handleScroll)
    delete el._handleScroll
  },
})
