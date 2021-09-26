function getCoronaData(option){
    var coronaDiv = document.getElementById('corona-details');
    coronaDiv.innerHTML = "";
    country = option.value;
    if(option.value != "select"){
        fetch(`https://corona-api.com/countries/${country}`).then(response => response.json()).then((data) => {
        var date = new Date(data['data']['updated_at']);
        coronaData = {
            "Country Name": data['data']['name'],
            "Population": data['data']['population'],
            "Confirmed Today": data['data']['today']['confirmed'],
            "Deaths Today": data['data']['today']['deaths'],
            "Total Confirmed": data['data']['latest_data']['confirmed'],
            "Total Deaths": data['data']['latest_data']['deaths'],
            "Total Recovered": data['data']['latest_data']['recovered'],
            "Critical": data['data']['latest_data']['critical'],
            "Death Rate": parseFloat(data['data']['latest_data']['calculated']['death_rate']).toFixed(2).toString() + "%",
            "Recovery Rate": parseFloat(data['data']['latest_data']['calculated']['recovery_rate']).toFixed(2).toString() + "%",
            "Updated At": date.toString(),
        };
        var table = document.createElement('table');
        Object.entries(coronaData).map(item => {
            var row = document.createElement('tr');
            var th = document.createElement('th');
            var td = document.createElement('td');
            var text1 = document.createTextNode(item[0]);
            var text2 = document.createTextNode(item[1]);
            th.appendChild(text1);
            td.appendChild(text2)
            row.appendChild(th);
            row.appendChild(td);
            table.appendChild(row);
          });
        coronaDiv.appendChild(table);
    });
    }
}
