let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");

btn.addEventListener('click',()=>{

    let country = document.querySelector('input').value;
    console.log(country);

    let colArr = getCollege(country);
    Show(colArr);
});

function Show(colArr){
      let list = document.querySelector('#list');
      list.innerText = "";
      for(col of colArr){
            console.log(col.name);

            let li = document.createElement('li');
            li.innerText = col.name;
            list.appendChild(li);
      }
};
country = "nepal";
async function getCollege(country) {
    try{
        let res = await axios.get(url + country);
        return res.data;
    }catch(e){
        console.log("Error:",e);
        return [];
    }
    
};