//Implementation:https://github.com/mggupta1221/
/**
 * ---------------------------------------
 * This demo was created using amCharts 5.
 *
 * For more information visit:
 * https://www.amcharts.com/
 *
 * Documentation is available at:
 * https://www.amcharts.com/docs/v5/
 * ---------------------------------------
 */

// Create root element
// https://www.amcharts.com/docs/v5/getting-started/#Root_element
var root = am5.Root.new("chartdiv");


// Set themes
// https://www.amcharts.com/docs/v5/concepts/themes/
root.setThemes([
  am5themes_Animated.new(root)
]);


// Create chart
// https://www.amcharts.com/docs/v5/charts/xy-chart/
var chart = root.container.children.push(am5xy.XYChart.new(root, {
  panX: false,
  panY: false,
  layout: root.verticalLayout
}));


// Add legend
// https://www.amcharts.com/docs/v5/charts/xy-chart/legend-xy-series/
var legend = chart.children.push(
  am5.Legend.new(root, {
    centerX: am5.p50,
    x: am5.p50
  })
);
var machineName="ABC"
//category=machine name
var data = [{
  category: machineName,
  reason:'idle',
  start: new Date(2019, 0, 1, 11, 0).getTime(),
  end: new Date(2019, 0, 1, 19, 30).getTime(),
  duration:GetDuration(new Date(2019, 0, 1, 11, 0),new Date(2019, 0, 1, 19, 30)),
  columnSettings: {
    fill: am5.color(0xFFFF00)
  }
},{
  category: machineName,
  reason:'idle',
  start: new Date(2019, 0, 1, 11, 30).getTime(),
  end: new Date(2019, 0, 1, 12, 30).getTime(),
  duration:GetDuration(new Date(2019, 0, 1, 11, 30),new Date(2019, 0, 1, 12, 30)),
  columnSettings: {
    fill: am5.color(0x69a74f)
  }
}, {
  category: machineName, 
  reason:'idle',
  start: new Date(2019, 0, 1, 12, 30).getTime(),
  end: new Date(2019, 0, 1, 12, 45).getTime(),
    duration:GetDuration(new Date(2019, 0, 1, 12, 30),new Date(2019, 0, 1, 12, 45)),

  columnSettings: {
    fill: am5.color(0xfb9900)
  }
}, {
  category: machineName,  
  reason:'idle',
  start: new Date(2019, 0, 1, 12, 45).getTime(),
  end: new Date(2019, 0, 1, 14, 3).getTime(),
  duration:GetDuration(new Date(2019, 0, 1, 12, 45),new Date(2019, 0, 1, 14, 3)),
  columnSettings: {
    fill: am5.color(0x69a74f)
  }
}, {
  category: machineName, 
  reason:'idle',
  start: new Date(2019, 0, 1, 14, 3).getTime(),
  end: new Date(2019, 0, 1, 14, 14).getTime(),
  duration:GetDuration(new Date(2019, 0, 1, 14, 3),new Date(2019, 0, 1, 14, 14)),
  columnSettings: {
    fill: am5.color(0x664ea6)
  }
}, {
  category:machineName,  
  reason:'idle',
  start: new Date(2019, 0, 1, 14, 14).getTime(),
  end: new Date(2019, 0, 1, 14, 38).getTime(),
  duration:GetDuration(new Date(2019, 0, 1, 14, 14),new Date(2019, 0, 1, 14, 38)),
  columnSettings: {
    fill: am5.color(0xcc0c00)
  }
}, 
  //{
//   category: machineName,  
//   reason:'idle',
//   start: new Date(2019, 0, 1, 14, 38).getTime(),
//   end: new Date(2019, 0, 1, 15, 1).getTime(),
//   duration:GetDuration(new Date(2019, 0, 1, 14, 38),new Date(2019, 0, 1, 15, 1)),
//   columnSettings: {
//     fill: am5.color(0xfb9900)
//   }
// }, 
  {
  category: machineName,  
  reason:'idle',
  start: new Date(2019, 0, 1, 15, 1).getTime(),
  end: new Date(2019, 0, 1, 16, 37).getTime(),
  duration:GetDuration(new Date(2019, 0, 1, 15, 1),new Date(2019, 0, 1, 16, 37)),
  columnSettings: {
    fill: am5.color(0x69a74f)
  }
}, {
  category: machineName,  
  reason:'idle',
  start: new Date(2019, 0, 1, 16, 37).getTime(),
  end: new Date(2019, 0, 1, 16, 55).getTime(),
  duration:GetDuration(new Date(2019, 0, 1, 16, 37),new Date(2019, 0, 1, 16, 55)),
  columnSettings: {
    fill: am5.color(0x9900ff)
  }
}, {
  category: machineName,  
  reason:'idle',
  start: new Date(2019, 0, 1, 16, 55).getTime(),
  end: new Date(2019, 0, 1, 17, 7).getTime(),
  duration:GetDuration(new Date(2019, 0, 1, 16, 55),new Date(2019, 0, 1, 17, 7)),
  columnSettings: {
    fill: am5.color(0x69a74f)
  }
}, {
  category: machineName,  
  reason:'idle',
  start: new Date(2019, 0, 1, 17, 7).getTime(),
  end: new Date(2019, 0, 1, 17, 30).getTime(),
  duration:GetDuration(new Date(2019, 0, 1, 17, 7),new Date(2019, 0, 1, 17, 30)),
  columnSettings: {
    fill: am5.color(0xfb9900)
  }
}, {
  category: machineName, 
  reason:'idle',
  start: new Date(2019, 0, 1, 17, 30).getTime(),
  end: new Date(2019, 0, 1, 17, 33).getTime(),
  duration:GetDuration(new Date(2019, 0, 1, 17, 30),new Date(2019, 0, 1, 17, 33)),
  columnSettings: {
    fill: am5.color(0x9900ff)
  },

}];


// Create axes
// https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
var yAxis = chart.yAxes.push(am5xy.CategoryAxis.new(root, {
  categoryField: "category",
  renderer: am5xy.AxisRendererY.new(root, {})
}));
yAxis.data.setAll([{ category: machineName }]);


var xAxis = chart.xAxes.push(am5xy.DateAxis.new(root, {
  baseInterval: { timeUnit: "minute", count: 1 },
  renderer: am5xy.AxisRendererX.new(root, {})
}));

xAxis.get("renderer").labels.template.set("forceHidden", false);


// Add series
// https://www.amcharts.com/docs/v5/charts/xy-chart/series/
var series = chart.series.push(am5xy.ColumnSeries.new(root, {
  xAxis: xAxis,
  yAxis: yAxis,
  valueXField: "end",
  openValueXField: "start",
  categoryYField: "category",
  tooltip: am5.Tooltip.new(root, {
    pointerOrientation: "left",
    })
}));

series.columns.template.setAll({
  strokeWidth: 0,
  strokeOpacity: 0,
  height: am5.percent(100),
  templateField: "columnSettings",
  tooltipText: 
  `[bold fontSize: 2.5vmin]Reason[/]: {reason}\n---------------------------------------------\n[bold]{category}[/]:  {openValueX.formatDate('HH:mm:ss')} - {valueX.formatDate('HH:mm:ss')}\n[bold]Duration[/]: {duration}[/]`
});

series.data.setAll(data);

// Create axis ranges for each column
// https://www.amcharts.com/docs/v5/charts/xy-chart/axes/axis-ranges/
// for(var i = 0; i < data.length; i++) {
//   var rangeDataItem = xAxis.makeDataItem({
//     value: data[i].from
//   });
  
//   var range = xAxis.createAxisRange(rangeDataItem);
  
//   rangeDataItem.get("grid").set("forceHidden", true);
  
//   rangeDataItem.get("tick").setAll({
//     visible: false,
//     length: 18,
//     strokeOpacity: 0.2
//   });
  
//   rangeDataItem.get("label").setAll({
//     //fill: am5.color(0xffffff),
//     centerX: am5.p0,
//     forceHidden: true,
//     fontSize: 10,
//     text: root.dateFormatter.format(new Date(data[i].from), "HH:mm")
//   });
// }

// // Add legend
// // https://www.amcharts.com/docs/v5/charts/xy-chart/legend-xy-series/
// var legend = chart.children.push(am5.Legend.new(root, {
//   nameField: "name",
//   fillField: "color",
//   strokeField: "color",
//   centerX: am5.percent(50),
//   x: am5.percent(50),
//   clickTarget: "none"
// }));


// legend.data.setAll([{
//   name: "Normal operation",
//   color: am5.color("#69a74f")
// }, {
//   name: "Minor alarm",
//   color: am5.color("#fb9900")
// }, {
//   name: "Anomaly",
//   color: am5.color("#664ea6")
// }, {
//   name: "Critical error",
//   color: am5.color("#cc0c00")
// }]);
        root._logo.dispose();

// Make stuff animate on load
// https://www.amcharts.com/docs/v5/concepts/animations/
series.appear();
chart.appear(1000, 100);


function GetDuration(start,end){
    let diffTime = Math.abs(end.valueOf() - start.valueOf());
    let days = diffTime / (24*60*60*1000);
    let hours = (days % 1) * 24;
    let minutes = (hours % 1) * 60;
    let seconds = (minutes % 1) * 60;
    [days, hours, minutes, seconds] = [Math.floor(days), Math.floor(hours), Math.floor(minutes), Math.floor(seconds)];
     var duration=hours+"h:"+minutes+"m:"+seconds+"s";
    console.log(duration);
    return duration;
}
