   (function(){
     


    var pieData = [
        {
          value: 60,
          color:"#F7464A",
          highlight: "#FF5A5E",
          label: "Węglowodany"
        },
        {
          value: 15,
          color: "#46BFBD",
          highlight: "#5AD3D1",
          label: "Białko"
        },
        {
          value: 25,
          color: "#FDB45C",
          highlight: "#FFC870",
          label: "Tłuszcze"
        }
      ];

      window.onload = function(){
        var ctx = document.getElementById("chart-area").getContext("2d");
        window.myPie = new Chart(ctx).Pie(pieData);
      };
   })();