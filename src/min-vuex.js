import Vue from 'vue'
// mini-vuex 仅实现state和commit功能
export const Store = function Store(options = {}) {
  const {
    state = {}, mutations = {}
  } = options;
  this._vm = new Vue({
    data: {
      $$state: state
    }
  })
  this._mutations = mutations

}
Store.prototype.commit = function (type, payload) {
  if (this._mutations[type]) {
    this._mutations[type](this.state, payload)
  }
}

Object.defineProperty(Store.prototype, "state", {
  get: function () {
    return this._vm._data.$$state
  }
})