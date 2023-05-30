$.ajax({
  type: "get",
  url: "https://api.covid19api.com/summary",
  success: function (response) {
      console.log(response);
      for (let i = 0; i < response.Countries.length; i++){
          let tableRow = `<tr><td>${response.Countries[i].Country}</td>
            <td>${response.Countries[i].TotalConfirmed}</td>
            <td>${response.Countries[i].TotalConfirmed - response.Countries[i].TotalRecovered}</td>
            <td>${response.Countries[i].TotalRecovered}</td>
            <td>${response.Countries[i].TotalDeaths}</td>
          </tr>`;
          $('#tbody').append(tableRow);
    }
    $('#covidtable').DataTable();
  },
  error: function (err) {
    console.log(err);
  },
});