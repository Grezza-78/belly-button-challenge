// Creating a constant for the URL to be used in the data
const URL = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"; 

// Creating the function to display the Bar Chart using two variables passed from Option Changed function
function bar_Chart(subject_id,data_set) {

    // Filtering the id data to match select data received and assigning it to a variable
    var bar_data = data_set.samples.filter(row => row.id == subject_id);

    // Mapping the y-axis data using the otu_ids 
    var y = bar_data.map(row => row.otu_ids);

    // Creating a string variable to assign the selected otu_ids for displaying 
    var y_var = []

    // Creating a for loop to append the otu_ids to displaying variable
    for (i=0; i<y[0].length; i++){
        y_var.push(`OTU ${y[0][i]}`);
    }
    
    // Mapping the x-axis data using the sample_values
    var x = bar_data.map(row => row.sample_values);

    // Mapping the text variable using the otu_labels
    var text = bar_data.map(row => row.otu_labels);
    
    // Creating the Trace using the bar chart data
    var trace1 = {
        
        // Selecting the top 10 x-values
        x : x[0].slice(0,10),
        
        // Selecting the top 10 y-values
        y : y_var.slice(0,10),
        
        text : text[0],
        type: "bar",
        orientation: "h",
    }

    // Data trace array
    let trace_Data = [trace1];
    
    // Sorting the order of the data to present from largest to smallest
    let layout = {
        yaxis: {autorange : "reversed"}
    }

    // Render the plot to the div tag with id "plot"
    Plotly.newPlot("bar", trace_Data, layout);
}

// Creating the function to design the Bubble Chart using two variables passed from Option Changed function
function bubble_Chart(subject_id, data_set) {

    // Filtering the id data to match select data received and assigning it to a variable
    var bubble_data = data_set.samples.filter(row => row.id == subject_id);

    // Mapping the x-axis data using the otu_ids 
    var x = bubble_data.map(row => row.otu_ids);

    // Mapping the y-axis data using the sample_values 
    var y = bubble_data.map(row => row.sample_values);
    
    // Mapping the text variable using the otu_labels
    var text = bubble_data.map(row => row.otu_labels);
    
    // Mapping the size of the bubbles to the size of the sample_values
    var marker_size = bubble_data.map(row => row.sample_values);
    
    // Mapping the variation of the bubbles colour to the type of otu_ids
    var marker_color = bubble_data.map(row => row.otu_ids);

    // Creating the Trace using the bubb chart data
    var trace2 = {
        x : x[0],
        y : y[0],
        text: text[0],
        mode: "markers",
        marker: {
            color: marker_color[0],
            size: marker_size[0],
            colorscale: "Portland"
        }
    }
    // Data trace array
        let trace_Data2 = [trace2];
    
    // Displaying the x-axis label
        let layout_2 = {
        xaxis: {title : "OTU ID"}
    }

    // Render the plot to the div tag with id "plot"
    Plotly.newPlot("bubble", trace_Data2, layout_2);
}

// Creating the function to design the Bubble Chart using two variables passed from Option Changed function
function demo_Box(subject_id, data_set) {

    // Filtering the id data to match select data received and assigning it to a variable
    var meta_data = data_set.metadata.filter(row => row.id == subject_id);

    // Selecting the sample_metadata from the HTML and then displaying the data by calling the demodata_Display function
    // and adjusting the text size
    d3.select("#sample-metadata").html(demodata_Display(meta_data[0]))
                                 .style("font-size","70%");
}

// Creating the function to extract the key and value paid from the passed meta_data returning it to 
// it to the demo_Box function for displaying 
function demodata_Display(meta_data) {
    var string_data = "";
    Object.entries(meta_data).forEach(([key,value]) => {
        string_data += `<br>${key}:${value}</br>`;

    });
    return string_data;
}

// Creating the initiation function
function init() {
    
    // Creating a selector to select the first instance in the data
    let selector = d3.select("#selDataset");
    
    // Using D3 to read the URL and then jsonify the data for processing
    d3.json(URL).then((data) => {
        
        // Assigning the data to a variable to be passed to all functions called
        data_set = data;
      
        // Displaying the data_set for review
        console.log(data_set)

        // Assigning the name to the subject_id that will be passed to all functions called 
        const subject_ids = data.names
        
        // Displaying data in selector function
        subject_ids.forEach(id => {
            selector.append("option")
                    .attr("value", id)
                    .text(id);
        });
        // Calling the Option Changed function as identified in HTML passing through the subject_id data name 
        optionChanged(subject_ids[0]); 
    })    
}

// Creating the Option Changed function
function optionChanged(subject_id) {
    
    // Calling the Bar Chart function passing through the subject_id Name and JSON data_set
    bar_Chart(subject_id, data_set);
    
    // Calling the Bubble Chart function passing through the subject_id Name and JSON data_set
    bubble_Chart(subject_id, data_set);
    
    // Calling the Demo Chart function passing through the subject_id Name and JSON data_set
    demo_Box(subject_id, data_set);

    // Calling the Demo Chart function passing through the subject_id Name and JSON data_set
    gauge_Chart(subject_id, data_set);
    
}

// Calling the init function that initialises the display
init();



