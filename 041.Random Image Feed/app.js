   
//  id of photo_collection = [8375080, 88122253, 2229334, 1158869, fjSpb-0SNVw, Fvx0jOaMuxI]
const display = document.getElementById('display');
const btn = document.getElementById('btn');
console.log(btn);

  const uri = `https://api.unsplash.com/collections/1158869/photos?client_id=qVI_pgwEX3c1pSSqxOLoVlVxQMsO1f87zmX29bPOInc&page=2&per_page=50`;
   const xmlhttp = new XMLHttpRequest();
   xmlhttp.open("GET",uri,true);

   xmlhttp.onload = function () {
            let result = xmlhttp.response;
            result = JSON.parse(result);
            console.log(result)

            btn.addEventListener('click', () => {

              display.innerHTML = "";
              for (let i = 0; i < 4; i++) {
                let k = (Math.floor(Math.random() * 30))
                console.log(k)
                display.innerHTML += `<img src=${result[k].urls.small}/>`;
                        }
            });
        }
        xmlhttp.send();
  