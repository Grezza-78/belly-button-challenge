
const URL = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"; 


function bar_Chart(subject_id,data_set) {
    var bar_data = data_set.samples.filter(row => row.id == subject_id);

    var y = bar_data.map(row => row.otu_ids);
    var y_var = []

    for (i=0; i<y[0].length; i++){
        y_var.push(`OTU ${y[0][i]}`);
    }

    var x = bar_data.map(row => row.sample_values);

    var text = bar_data.map(row => row.otu_labels);

    var trace1 = {
        x : x[0].slice(0,10),
        y : y_var.slice(0,10),
        text : text[0],
        type: "bar",
        orientation: "h",
    }

    let trace_Data = [trace1];
    
    let layout = {
        yaxis: {autorange : "reversed"}
    }

    Plotly.newPlot("bar", trace_Data, layout);
}


function bubble_Chart(subject_id, data_set) {
    var bubble_data = data_set.samples.filter(row => row.id == subject_id);

    var x = bubble_data.map(row => row.otu_ids);
    var y = bubble_data.map(row => row.sample_values);
    var text = bubble_data.map(row => row.otu_labels);
    var marker_size = bubble_data.map(row => row.sample_values);
    var marker_color = bubble_data.map(row => row.otu_ids);

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
        let trace_Data2 = [trace2];
    
        let layout_2 = {
            xaxis: {title : "OTU ID"}
    }

    
    Plotly.newPlot("bubble", trace_Data2, layout_2);
}


function demo_Box(subject_id, data_set) {
    var meta_data = data_set.metadata.filter(row => row.id == subject_id);
    d3.select("#sample-metadata").html(demodata_Display(meta_data[0]))
                                 .style("font-size","70%");
}

function demodata_Display(meta_data) {
    var string_data = "";
    Object.entries(meta_data).forEach(([key,value]) => {
        string_data += `<br>${key}:${value}</br>`;

    });
    return string_data;
}


function init() {
    let selector = d3.select("#selDataset");
    d3.json(URL).then((data) => {
        data_set = data;
        console.log(data_set)
        const subject_ids = data.names
        subject_ids.forEach(id => {
            selector.append("option")
                    .attr("value", id)
                    .text(id);
        });
    optionChanged(subject_ids[0]); 
    })    
}


function optionChanged(subject_id) {
        
    bar_Chart(subject_id, data_set);
    bubble_Chart(subject_id, data_set);
    demo_Box(subject_id, data_set);
    
}

init();



