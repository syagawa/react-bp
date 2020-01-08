import actions from "./actions"

function sleep(ms: number){
  return new Promise(function(resolve){
    setTimeout(
      function(){
        resolve();
      },
      ms
    );
  });
};
function addAsync(text: string) {
  return async function action(dispatch: any) {
    await sleep(1000);
    return dispatch(actions.add(text));
  }
}
function addSync(text: string){
  return actions.add(text);
}
export default {
  addSync: addSync,
  addAsync: addAsync,
  // add: actions.add,
  toggleCompleted: actions.toggleCompleted,
  remove: actions.remove,
  clear: actions.clear,
  toggleFilter: actions.toggleFilter
}


