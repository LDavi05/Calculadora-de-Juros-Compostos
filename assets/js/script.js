document.getElementById("btn_calc").addEventListener('click', () => {
  const value = document.getElementById("initial_value").value;
  const taxa = (document.getElementById("taxa").value) / 100;
  const time = document.getElementById("time").value;
  
  const total = value * (1 + taxa)**time;
  
  document.getElementById("result_value").innerHTML = ("R$ " + total.toFixed(2).replace(".", ","));
});
