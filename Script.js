element.addEventListener("click", function() {
    var fullUri = "https://www.swapi.tech/api/people/?name=" + document.getElementById("characterName").value;
    fetch(fullUri).then(res => res.json()).then(data => res).catch(err => console.log(err))
    console.log(res.json);
    console.log(`Height: ${height}, Mass: ${mass}, Gender: ${gender}, Hair color: ${hair_color}`);
    document.getElementById('characterTextArea').value = `Height: ${height}, Mass: ${mass}, Gender: ${gender}, Hair color: ${hair_color}`;
  });
  
function getApi() {
    var fullUri = "https://www.swapi.tech/api/people/?name=" + document.getElementById("characterName").value;
    fetch(fullUri).then(res => res.json()).then(data => res).catch(err => console.log(err))
    console.log(res.json);
    console.log(`Height: ${height}, Mass: ${mass}, Gender: ${gender}, Hair color: ${hair_color}`);
    document.getElementById('characterTextArea').value = `Height: ${height}, Mass: ${mass}, Gender: ${gender}, Hair color: ${hair_color}`;
}