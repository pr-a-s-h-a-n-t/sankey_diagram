import React, { useEffect } from 'react';
import anychart from 'anychart';
import './Test.css';

var data = [
  { from: "Level_1-15", fromName: "Targeted", apple: 'prashant',to: "France", weight: 2230000, custom_field: "info 1" },
  { from: "Canada", to: "Germany", weight: 1990000, custom_field: "info 2" },
  { from: "Canada", to: "Italy", weight: 1180000, custom_field: "info 3" },
  { from: "Canada", to: "Spain", weight: 990000, custom_field: "info 4" },
  { from: "USA", to: "China", weight: 1250000, custom_field: "info 5" },
  { from: "USA", to: "France", weight: 950000, custom_field: "info 6" },
  { from: "USA", to: "Germany", weight: 2020000, custom_field: "info 7" },
  { from: "USA", to: "Spain", weight: 1110000, custom_field: "info 8" },
  { from: "France", to: "China", weight: 1100000, custom_field: "info 9" },
  { from: "Germany", to: "China", weight: 2150000, custom_field: "info 10" },
  { from: "Italy", to: "China", weight: 1180000, custom_field: "info 11" },
  { from: "Spain", to: "China", weight: 1120000, custom_field: "info 12" },
  { from: "China", to: "Japan", weight: 980000, custom_field: "info 14" },
  { from: "Japan", to: "India", weight: 3000000, custom_field: "info 15" },
  {from: "Canada", to: null, weight: 1000000,},
  {from: "India", to: null, weight: 500000,}
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
    sankeyChart.node().normal().fill("#64b5f6 0.5");
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
    // sankeyChart.node().labels().useHtml(true);

    // Attach the Sankey chart to the container
    sankeyChart.container("container");

    sankeyChart.draw();
  }, []);

  return (
    <div>
      <div className='flex'>
        {[1,2,3,4,5]?.map((data, index) => (
          <div key={index}>Stage {index}</div>
        ))}
      </div>


      <div id="container" style={{ width: '100%', height: '500px' }}>

      </div>
    </div>
  );
}

export default SankeyChartComponent;
