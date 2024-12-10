
const element = document.getElementById("container");
const url = "https://restcountries.com/v3.1/all";
async function fetchData() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);


        for (let i = 0; i < data.length; i++) {

            // let names = data[i].name;
            // console.log(names)
            // }

            //     console.log(data.length);
            // }catch (error) {
            //     console.log("---------error---------:", error.message);
            // }
            const value = data[i];
            const html = `
    <div class = 'card'>
    <img src = ${value?.flags?.png} />
    <h3>
    ${value?.name?.common}
    </h3>
            <h3>Region :
                ${value?.region}
            </h3>
        
          <h3> Capital :
                ${value?.capital[0]}
             </h3>  
             <h3> Population :
                ${value?.population}
             </h3>       
            </div>
            `;
            element.innerHTML += html;
        }
    } catch (error) {
        console.log("---------error---------;", error.message);
    }

}