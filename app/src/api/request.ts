export async function getSample() {
  const url = "https://api.zipaddress.net/?zipcode=150-0002";
  const o: object = await fetch(url)
    .then(function(res){
      return res.json();
    })
    .catch(function(err){
      console.log(err);
    });
  return o;
};