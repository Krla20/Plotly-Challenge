# Plotly-Challenge
**********************************
### By Karla M. Murphy
*********************************

 * Deploy github page: [Interactive Visualization Dashboard](https://krla20.github.io/Plotly-Challenge/)
 <hr>

* Interactive dashboard to explore the  [Belly Button Biodiversity dataset](http://robdunnlab.com/projects/belly-button-biodiversity/)
 <p align="center"><img width="400" height= "300" src="Images/bacteria.jpg"></p>
<hr>
The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.
<br>
## Step 1: Plotly

1. Use the D3 library to read in `samples.json`.

2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
  * Use `sample_values` as the values for the bar chart.
  * Use `otu_ids` as the labels for the bar chart.
  * Use `otu_labels` as the hovertext for the chart.

3. Create a bubble chart that displays each sample.

  * Use `otu_ids` for the x values.
  * Use `sample_values` for the y values.
  * Use `sample_values` for the marker size.
  * Use `otu_ids` for the marker colors.
  * Use `otu_labels` for the text values.

4. Display the sample metadata, i.e., an individual's demographic information.

5. Display each key-value pair from the metadata JSON object somewhere on the page.

## Advanced Challenge Assignment (Optional)

* Adapt the Gauge Chart from <https://plot.ly/javascript/gauge-charts/> to plot the weekly washing frequency of the individual.
* You will need to modify the example gauge code to account for values ranging from 0 through 9.
* Update the chart whenever a new sample is selected.

Started sample visualization:
<p align="center"><img width="500" height= "450" src="Images/Capture1.PNG"></p>

<hr>

Updated sample visualization:
<p align="center"><img width="500" height= "450" src="Images/Capture2.PNG"></p>
