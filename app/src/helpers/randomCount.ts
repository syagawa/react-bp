function timeout(ms: number): Promise<void>{
  return new Promise<void>(function(resolve){
    return setTimeout(resolve, 1000);
  });
}

export const getRandomNumberAsync = async function(){
  const rand = Math.random();

  const time = rand * 100;
  await timeout(time);


  console.log("koko");

  const num = Math.floor(rand * 10);

  return num;
};