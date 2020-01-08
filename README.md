# react redux and router boilerplate

re-ducksでの実装にした。

## Memo

* react-redux, react-router-dom, react-router-redux
    * おそらくreact-router-reduxの影響だが、react-reduxは5系, react-router-domは4系, react-router-reduxは5系のalphaでないと動かない。react-router-reduxはdeprecatedなので今後connected-react-routerに変更する必要がある

* re-ducksとVuexとの比較
    * actions
      * mutations(vuex)
    * index
      * storeのメイン(vuex)
    * operations
      * actions(vuex)
    * reducer
      * state(vuex)
    * selectors
      * getters((vuex))

* ejectについて
ejectはわざわざ行わなくてもいいかもしれない、まずはejectしない運用で問題はなさそう。

