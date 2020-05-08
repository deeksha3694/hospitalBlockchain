document.addEventListener('DOMContentLoaded', () => {
    const options = {
        chart: {
            type: 'column',
            zoomType: 'xy'
        },
        title: {
            text: 'User 4'
        },
        xAxis: {
           title: {
               text: 'Time(in milliseconds)'
           }
       },
        yAxis: {
           plotLines: [{
               from: 250,
               to: 300,
               color: '#E8F5E9'
           }, {
               from: -20,
               to: 250,
               color: '#FFFDE7'
           }, {
               from: -20,
               to: -35,
               color: "#FFEBEE"
           }],
           labels:
           {
               useHTML:true,
               formatter: function()
               {
                   if (this.value >=218 || this.value <=-94)
                   {
                       return '<tspan style=\'color:red\'>'+this.value+'</tspan>';
                   }
                   else
                   {
                       return '<tspan style=\'color:blue\'>'+this.value+'</tspan>';
                   }
               }
           },
            title: {
                text: 'ECG level'
            }
        },
        plotOptions: {
           area: {
               fillColor: {
                   linearGradient: {
                       x1: 0,
                       y1: 0,
                       x2: 0,
                       y2: 1
                   },
                   stops: [
                       [0, Highcharts.getOptions().colors[0]],
                       [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                   ]
               },
           }
       },

    };

    //$.get('003_1.csv', data => {
    //  options.data = {
    //      csv
    //  };

   //Highcharts.chart('container', options);
   // });

    options.data = {
       csvURL: 'http://localhost:3000//004_1.csv',
       enablePolling: true,
       dataRefreshRate: 2
    }

    Highcharts.chart('container', options);

   });

   $(document).ready(function(){
    $('#load_data').click(function(){
     $.ajax({
      url:"http://localhost:3000/004_1.csv",
      dataType:"text",
      success:function(data)
      {
       var patient_data = data.split(/\r?\n|\r/);
       var table_data = '<table class="table table-bordered table-striped">';
       for(var count = 0; count<patient_data.length; count++)
       {
        var cell_data = patient_data[count].split(",");
        table_data += '<tr>';
        for(var cell_count=0; cell_count<cell_data.length; cell_count++)
        {
         if(count === 0)
         {
          table_data += '<th>'+cell_data[cell_count]+'</th>';
         }
         else
         {
          table_data += '<td>'+cell_data[cell_count]+'</td>';
         }
        }
        table_data += '</tr>';
       }
       table_data += '</table>';
       $('#patient_table').html(table_data);
      }
     });
    });

   });




