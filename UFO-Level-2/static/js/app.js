// Variable Declaration
let tbody = d3.select("tbody");

// from data.js
var tableData = data;

// YOUR CODE HERE!
function buildTable(data){
// clear out current table
    tbody.html("");
// create loop function through data.js file to populate webpage     
    data.forEach((dataRow) => {
        let row = tbody.append("tr");
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        });        
    })
}   

// Event that Triggers a Function When the Button is Clicked
function handleClick(){
  // Prevents the Page from Refreshing
  d3.event.preventDefault();
  // Select HTML Input Element & Get the Value Property of that Input Element
  let date = d3.select("#datetime").property("value");
  let filterData = tableData;
  // Check if a Date was Entered & Filter Data Using that Date;
  if(date) {
      // Apply Filter to the Table Data to Only Keep Rows Where datetime Value Matches the Filter Value
      filterData = filterData.filter((row) => row.datetime === date);
  }
  // Build Table with Filtered Data
  buildTable(filterData);
}
// `on` Function to attach an Event to the Handler Function
d3.select("#search").on("click", handleClick);


// Event that Triggers a Function When the Button is Clicked
function handleClick1(){
  // Prevents the Page from Refreshing
  d3.event.preventDefault();
  // Select HTML Input Element & Get the Value Property of that Input Element
  let city = d3.select("#city").property("value");
  let filterData = tableData;

  // Check if a Date was Entered & Filter Data Using that Date;
  if(city) {
      // Apply Filter to the Table Data to Only Keep Rows Where datetime Value Matches the Filter Value
      filterData = filterData.filter((row) => row.city === city);
  }
  // Build Table with Filtered Data
  buildTable(filterData);
}
// `on` Function to attach an Event to the Handler Function
d3.select("#search1").on("click", handleClick1);

// Event that Triggers a Function When the Button is Clicked
function handleClick2(){
  // Prevents the Page from Refreshing
  d3.event.preventDefault();
  // Select HTML Input Element & Get the Value Property of that Input Element
  let state = d3.select("#state").property("value");
  let filterData = tableData;

  // Check if a Date was Entered & Filter Data Using that Date;
  if(state) {
      // Apply Filter to the Table Data to Only Keep Rows Where datetime Value Matches the Filter Value
      filterData = filterData.filter((row) => row.state === state);
  }
  // Build Table with Filtered Data
  buildTable(filterData);
}
// `on` Function to attach an Event to the Handler Function
d3.select("#search2").on("click", handleClick2);

// Event that Triggers a Function When the Button is Clicked
function handleClick3(){
  // Prevents the Page from Refreshing
  d3.event.preventDefault();
  // Select HTML Input Element & Get the Value Property of that Input Element
  let country = d3.select("#country").property("value");
  let filterData = tableData;

  // Check if a Date was Entered & Filter Data Using that Date;
  if(country) {
      // Apply Filter to the Table Data to Only Keep Rows Where datetime Value Matches the Filter Value
      filterData = filterData.filter((row) => row.country === country);
  }
  // Build Table with Filtered Data
  buildTable(filterData);
}
// `on` Function to attach an Event to the Handler Function
d3.select("#search3").on("click", handleClick3);

// Event that Triggers a Function When the Button is Clicked
function handleClick4(){
  // Prevents the Page from Refreshing
  d3.event.preventDefault();
  // Select HTML Input Element & Get the Value Property of that Input Element
  let shape = d3.select("#shape").property("value");
  let filterData = tableData;
  if(shape) {
      // Apply Filter to the Table Data to Only Keep Rows Where datetime Value Matches the Filter Value
      filterData = filterData.filter((row) => row.shape === shape);
  }
  // Build Table with Filtered Data
  buildTable(filterData);
}
// `on` Function to attach an Event to the Handler Function
d3.select("#search4").on("click", handleClick4);

// Build Table with data.js 
buildTable(tableData);
