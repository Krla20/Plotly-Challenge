// d3.json("../data/samples.json").then((data) =>
// console.log(data));

// Creating function for Data plotting (Bar, gauge, bubble)
function getPlot(id) {
    // getting data from the json file
    d3.json("../data/samples.json").then((data)=> {
        console.log(data)
        
        // filter meta data info by id to obtain the wfrequency for the gauge plot
        let result1 = data.metadata.filter(meta => meta.id.toString() === id)[0];
        // console.log(result1);

        let wfreq2 = result1.wfreq;
        // console.log(wfreq2);

        // filter sample values by id 
        let samples = data.samples.filter(s => s.id.toString() === id)[0];
        
        console.log(samples);

        // Getting the top 10 
        let samplevalues = samples.sample_values.slice(0, 10).reverse();

        // get only top 10 otu ids for the plot OTU and reversing it. 
        let OTU_top = (samples.otu_ids.slice(0, 10)).reverse();
        
        // get the otu id's to the desired form for the plot
        let OTU_id = OTU_top.map(d => "OTU " + d)

      //   console.log(`OTU IDS: ${OTU_id}`)


        // get the top 10 labels for the plot
        let labels = samples.otu_labels.slice(0, 10);

      //   console.log(`Sample Values: ${samplevalues}`)
      //   console.log(`Id Values: ${OTU_top}`)
        // create trace variable for the plot
        let trace = {
            x: samplevalues,
            y: OTU_id,
            text: labels,
            marker: {
            color: '#ef6548'},
            type:"bar",
            orientation: "h",
        };

        // create data variable
        data = [trace];

        // create layout variable to set plots layout
        let layout = {
            title: "Top 10 OTU",
            yaxis:{
                tickmode:"linear",
            },
        };

        // create the bar plot
        Plotly.newPlot("bar", data, layout);

        //console.log(`ID: ${samples.otu_ids}`)

        // The bubble chart
        let trace1 = {
            x: samples.otu_ids,
            y: samples.sample_values,
            mode: "markers",
            marker: {
                size: samples.sample_values,
                color: samples.otu_ids
            },
            text: samples.otu_labels

        };

        // set the layout for the bubble plot
        let layout_b = {
            xaxis:{title: "OTU ID"}
        };

        // creating data variable 
        let data1 = [trace1];

        // create the bubble plot
        Plotly.newPlot("bubble", data1, layout_b); 

        // The guage chart

        let data_g = [
        {
        domain: { x: [0, 1], y: [0, 1] },
        value: parseInt(wfreq2),
        title: { text: "Belly Button Washing Frequency", font: {size: 14}},
        type: "indicator",
        
        mode: "gauge+number",
        gauge: { axis: { range: [null, 9] },
                steps: [
                    { range: [0, 1], color: "#ffffe5" },
                    { range: [1, 2], color: "#fff7bc" },
                    { range: [2, 3], color: "#fee391" },
                    { range: [3, 4], color: "#fec44f" },
                    { range: [4, 5], color: "#fe9929" },
                    { range: [5, 6], color: "#cc4c02" },
                    { range: [6, 7], color: "#993404" },
                    { range: [7, 8], color: "#662506" },
                    { range: [8, 9], color: "#7f0000" },

                ]}
            
        }
        ];

        Plotly.newPlot("gauge", data_g);
    });
}  
// create the function to get the necessary data
function getInfo(id) {
    // read the json file to get data
    d3.json("../data/samples.json").then((data)=> {
        
        // get the metadata info for the demographic panel
        let metadata = data.metadata;

        console.log(metadata);

        // filter meta data info by id
        let result = metadata.filter(meta => meta.id.toString() === id)[0];
        console.log(result);

        // let wfreq1 = result.wfreq;
        // console.log(wfreq1)

        // select demographic panel to put data
        let demographicInfo = d3.select("#sample-metadata");
        
        // empty the demographic info panel each time before getting new id info
        demographicInfo.html("");

        // grab the necessary demographic data data for the id and append the info to the panel
        Object.entries(result).forEach((key) => {   
                demographicInfo.append("h5").text(key[0].toUpperCase() + ": " + key[1] + "\n");    
        });
    });
}

// create the function for the change event
function optionChanged(id) {
    getPlot(id);
    getInfo(id);
}

// create the function for the initial data rendering
function init() {
    // select dropdown menu 
    let dropdown = d3.select("#selDataset");

    // read the data 
    d3.json("../data/samples.json").then((data)=> {
        console.log(data)

        // get the id data to the dropdwown menu
        data.names.forEach(function(name) {
            dropdown.append("option").text(name).property("value");
        });

        // call the functions to display the data and the plots to the page
        getPlot(data.names[0]);
        getInfo(data.names[0]);
    });
}

init();

