const api = "https://api.covid19api.com/summary";
// var a=77;



function getSelectValue() {
    var selectValue = document.getElementById("opt").value;
    console.log(selectValue)
    // return selectValue

    let APIData = (url) => {
        fetch(url).then((res) => {
            return res.json();
        }).then((data) => {

            console.log(data);
            let country = data.Countries[parseInt(selectValue)].Country;
            let totalCases = data.Countries[parseInt(selectValue)].TotalConfirmed;
            let totalDeaths = data.Countries[parseInt(selectValue)].TotalDeaths;
            // let date = data.Countries[parseInt(selectValue)].NewDeaths;
            let today = new Date().toDateString();
            let newCase = data.Countries[77].NewConfirmed;
            let newDeaths = data.Countries[77].NewDeaths;
            displayData(
                country, totalCases, totalDeaths,
                today, newCase, newDeaths,
            );
        }).catch((error) => {
            console.log(error);
        });
    };

    APIData(api);
}

function displayData(c, tc, td, t, nc, nd) {
    let pre1 = document.createElement("pre");
    let pre2 = document.createElement("pre");
    let pre3 = document.createElement("pre");
    let pre4 = document.createElement("pre");
    let pre5 = document.createElement("pre");
    let pre6 = document.createElement("pre");

    console.log(tc);
    pre1.innerHTML = `<span class="s1">${c}</span> <span class="s1">Situation</span>`;
    pre2.innerHTML = `<span class="s2">${tc}</span> \n\n\n<span class="s2"> Total Cases</span>`;
    pre3.innerHTML = `<span class="s3">${td}</span>\n\n\n<span class="s3">Total Death</span>`;
    pre4.innerHTML = `<span id="s4">${t}</span>\n\n\n<span class="s4">Date</span>`;
    pre5.innerHTML = `<span id="s4">${nc}</span>\n\n\n<span class="s4">New Cases</span>`;
    pre6.innerHTML = `<span id="s4">${nd}</span>\n\n\n<span class="s4">New Death</span>`;

    document.getElementById("country").appendChild(pre1);
    document.getElementById("d1").appendChild(pre4);
    document.getElementById("d2").appendChild(pre2);
    document.getElementById("d3").appendChild(pre3);
    document.getElementById("d4").appendChild(pre5);
    document.getElementById("d5").appendChild(pre6);
}




