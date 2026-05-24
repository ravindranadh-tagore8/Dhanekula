const ctx =
document.getElementById('attendanceChart');

if(ctx){

  new Chart(ctx,{

    type:'doughnut',

    data:{
      labels:['Present','Absent'],

      datasets:[{
        data:[84,16]
      }]
    }

  });

}