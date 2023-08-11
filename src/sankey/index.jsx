import React, { useEffect, useState } from 'react';
import anychart from 'anychart';
import './Test.css';

var data = [
  { leakCount: 23, stageName: 'stage name 1',  sittingCount: 60, inCount: 50, outCount: 150, from: "Level_1-15", fromName: "Targeted", apple: 'prashant', to: "France", weight: 2230000, custom_field: "info 1" },
  { leakCount: 23, stageName: 'stage name 2',  sittingCount: 60, inCount: 50, outCount: 150, from: "Canada", to: "Germany", weight: 1990000, custom_field: "info 2" },
  { leakCount: 23, stageName: 'stage name 3',  sittingCount: 60, inCount: 50, outCount: 150, from: "Canada", to: "Italy", weight: 1180000, custom_field: "info 3" },
  { leakCount: 23, stageName: 'stage name 4',  sittingCount: 60, inCount: 50, outCount: 150, from: "Canada", to: "Spain", weight: 990000, custom_field: "info 4" },
  { leakCount: 23, stageName: 'stage name 5',  sittingCount: 60, inCount: 50, outCount: 150, from: "USA", to: "China", weight: 1250000, custom_field: "info 5" },
  { leakCount: 23, stageName: 'stage name 6',  sittingCount: 60, inCount: 50, outCount: 150, from: "USA", to: "France", weight: 950000, custom_field: "info 6" },
  { leakCount: 23, stageName: 'stage name 7',  sittingCount: 60, inCount: 50, outCount: 150, from: "USA", to: "Germany", weight: 2020000, custom_field: "info 7" },
  { leakCount: 23, stageName: 'stage name 8',  sittingCount: 60, inCount: 50, outCount: 150, from: "USA", to: "Spain", weight: 1110000, custom_field: "info 8" },
  { leakCount: 23, stageName: 'stage name 9',  sittingCount: 60, inCount: 50, outCount: 150, from: "France", to: "China", weight: 1100000, custom_field: "info 9" },
  { leakCount: 23, stageName: 'stage name 10',  sittingCount: 60, inCount: 50, outCount: 150, from: "Germany", to: "China", weight: 2150000, custom_field: "info 10" },
  { leakCount: 23, stageName: 'stage name 11',  sittingCount: 60, inCount: 50, outCount: 150, from: "Italy", to: "China", weight: 1180000, custom_field: "info 11" },
  { leakCount: 23, stageName: 'stage name 12',  sittingCount: 60, inCount: 50, outCount: 150, from: "Spain", to: "China", weight: 1120000, custom_field: "info 12" },
  { leakCount: 23, stageName: 'stage name 13',  sittingCount: 60, inCount: 50, outCount: 150, from: "China", to: "Japan", weight: 980000, custom_field: "info 14" },
  { leakCount: 23, stageName: 'stage name 14',  sittingCount: 60, inCount: 50, outCount: 150, from: "Japan", to: "India", weight: 3000000, custom_field: "info 15" },
  { leakCount: 23, stageName: 'stage name 15',  sittingCount: 60, inCount: 50, outCount: 150, from: "Canada", to: null, weight: 1000000, },
  { leakCount: 23, stageName: 'stage name 16',  sittingCount: 60, inCount: 50, outCount: 150, from: "India", to: null, weight: 500000, }
];


const SankeyChartComponent = () => {



  useEffect(() => {
    // create data

    const sankeyChart = anychart.sankey(data); // Only create one chart

    // configure labels of nodes
    sankeyChart.node().labels().useHtml(true);
    sankeyChart.node().labels().format(function () {
      return "<span style='font-weight:bold'>" + this.name +
        "</span><br>" + Math.round(this.value / 100000) / 10 + " mln";
    });
    sankeyChart.nodeWidth("50%");

    // this is test code 
    sankeyChart.node().normal().fill("#95C4F7 0.5");
    sankeyChart.node().hovered().fill(anychart.color.darken("#64b5f6"));
    // sankeyChart.node().normal().stroke("#455a64", 2);

    // configure the visual settings of flows
    sankeyChart.flow().normal().fill("#E4F0FF"); // edges color
    sankeyChart.flow().hovered().fill(anychart.color.darken("#E3EFFF"));
    sankeyChart.flow().hovered().stroke("#455a64");

    // configure the visual settings of dropoffs start ...

    // sankeyChart.dropoff().normal().fill(
    //   {keys: ["#E3EFFF 0.4", "#455a64 0.7"], angle: 270}
    // );
    // sankeyChart.dropoff().hovered().stroke("#E3EFFF");


    // this is test code  end...

    // Settings to display node labels
    sankeyChart.node().labels().useHtml(true);

    const content = `<div class="modalWrapper">
        <h3 class="stageName">{%name}</h3>
        
        <div class="inner">
            <div class="list">
                <span>In Leads</span>
                <span class="list_data">{%inCount}</span>
            </div>
            <div class="list">
                <span>Out Leads</span>
                <span class="list_data">{%outCount}</span>
            </div>
            <div class="list">
                <span>Setting Leads</span>
                <span class="list_data">{%sittingCount}</span>
            </div>
            <div class="list">
                <span>Leak Leads</span>
                <span class="list_data">{%leakCount}</span>
            </div>
        </div>
    </div>`;



    // below code is for tooltip--
    // configure tooltips
    sankeyChart.tooltip().useHtml(true);
   
    // sankeyChart.titleFormat;
    sankeyChart.tooltip().format(content);

    // Attach the Sankey chart to the container
    sankeyChart.container("container");

    sankeyChart.draw();
  }, []);

  return (
    <div>
      <div className='flex'>
        {[1, 2, 3, 4, 5]?.map((data, index) => (
          <div key={index}>Stage {index}</div>
        ))}
      </div>
      <div id="container" style={{ width: '100%', height: '500px' }}>
      </div>

    </div>
  );
}

export default SankeyChartComponent;



// some css for tooltip testing--
 // sankeyChart.tooltip().background().fill("#663399");
    // settings
    // sankeyChart.tooltip().fontColor("gold");
    // sankeyChart.tooltip().fontColor("green");
    // sankeyChart.tooltip().titleFormat("<img width='20' src='http://cdn.anychart.com/images/anychart-logo-medium.png'> <span style='font-size:28px;font-family:courier'>{%x}");
    // sankeyChart.tooltip().format("<span style='font-family:courier'>{%inCount}</span>");
    // sankeyChart.tooltip().titleFormat("<span style='font-size:28px;'>{%stageName}");
    // sankeyChart.tooltip().format(" <div class=list> <span>In Leads</span> <span class=list_data>{%inCount}</span></div>");
    // sankeyChart.tooltip().width(400);
    // sankeyChart.tooltip().height(150);

        // sankeyChart.tooltip().format('{%stageName}\nIn Leads: {%inCount}\nOut Leads: {%outCount}\nLeak Leads: {%leakCount}');

    // sankeyChart.node().tooltip().format("<span style='font-size:28px;font'>{%leakCount}</span>");


    