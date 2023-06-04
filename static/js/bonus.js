// Creating the Gauge Chart function
function gauge_Chart(subject_id, data_set) {

    // Filtering the id data to match select data received and assigning it to a variable
    var gauge_data = data_set.metadata.filter(row => row.id == subject_id);

    // Assigning the first data point to a variable
    var subject = gauge_data[0]

    // Traceing the Gauge chart using the data
    let trace3 = [{
        domain: { x: [0, 1], y: [0, 1] },
        value: subject.wfreq,
        title: { text: "<b>Belly Button Washing Frequency</b><br>Scrubs per Week"},
        type: "indicator",
        mode: "gauge+number",
        gauge: {
            axis: {range: [null, 10]},
            bar: {color: "red"},
            steps: [ 
                { range: [0, 5], color : "aliceblue" },
                { range: [5, 8], color : "lightblue" },
                { range: [8, 10], color : "darkblue"}
            ]
        }

    }];

    // Render the plot to the div tag with id "gauge"
    Plotly.newPlot("gauge", trace3)
}
