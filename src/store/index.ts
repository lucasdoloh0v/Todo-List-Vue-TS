import TodoInterface from '@/interfaces/TodoInterfaces';
import { createStore, Store } from 'vuex';

declare module '@vue/runtime-core' {
  interface State {
    todos: TodoInterface[]
  }

  interface ComponentCustomProperties {
    $store: Store<State>
  }
}

export default createStore({
  state: {
    todos: [],
  },
  getters: {
  },
  mutations: {
    storeTodos(state, data) {
      state.todos = data;
    },
  },
  actions: {
  },
  modules: {
  },
});
