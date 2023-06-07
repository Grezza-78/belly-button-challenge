# belly-button-challenge

This challenges focuses on building an interactive dashboard to explore the the Belly Button Biodiversity dataset, which catalogues the microbes that colonise human navels.

The dataset revealed that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

The sample data was sourced from: https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json

The challenge comprised of the areas of focus:

**Bar Chart**
A horizontal bar chart with a dropdown menu to display the top 10 OTUs found from the individual selected.
    * The "sample_values" as the values (x values)
    * The "otu_ids" as the labels (y values)
    * The "otu_labels" as the hovertext

**Bubble Chart**
A bubble chart with a dropdown menu to display the each OTU found from the individual selected.
    * The "sample_values" as the values (y values)
    * The "otu_ids" as the labels (x values)
    * The values in "sample_values" for the marker size
    * The colours to be varied by "otu_ids"
    * The "otu_labels" as the hovertext

**Demographic Info display**
Display the metadata based on the individual "subject_id" selected


**Gauge Chart**
Created a to plot the weekly washing frequency of the selected individual that updates whenever a new sample is selected.

[**Click Here**](https://grezza-78.github.io/belly-button-challenge/) for access to the interactive dashboard that changes everytime a new sample is selected from the "Subject ID No" drop down menu.

