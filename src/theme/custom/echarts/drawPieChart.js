const drawPieChart = (data, label, chart, toggle) => {

const colors = ['#1d2951', '#0e4d92', '#3c516d', '#7285a5', '#4682b4', '#588bae', '#89cff0', '#6593f5', '#005180', '#12384f'];

  let dataToggle = data.map(obj => obj.value);
  if (label) dataToggle = [];
  
  let alignment = ['vertical', 'right', 'center'];
  if (!toggle) alignment = ['horizontal', 'center', 'top'];

  let radius = '55%';
  if (chart !== 'pie') radius = ['30%', '55%'];


const option = {
    tooltip: {
      trigger: 'item',
      formatter: '{b} : {c} ({d}%)',
    },
    legend: { // clickable icons at the top
      data: dataToggle,
      orient: alignment[0],
      x: alignment[1],
      y: alignment[2],
    },
    series: [
      {
        type: 'pie',
        radius,
        labelLine: {
          normal: {
            show: label,
          },
        },
        label: {
          normal: {
            show: label,
          },
        },
        itemStyle: {
          normal: { // lines between each item
            borderWidth: 4,
            borderColor: '#ffffff',
          },
        },
        data: data.map((obj, i) => ({
          value: obj.percent,
          name: obj.value,
          itemStyle: {
            normal: {
              color: colors[i],
            },
          },
        })),
      },
    ],
  };

return option;
}


export default drawPieChart;