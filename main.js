let scores = async () => {
  const response = await fetch("./data.json");
  const data = await response.json();
  
  let scoreTotal = 0;
  let countCategory = 0;

  for(let i = 0; i < data.length; i++) {
    // console.log(data[i]);
    const element = document.getElementById(data[i].category);
    element.innerHTML = data[i].score;  
    scoreTotal += +data[i].score;
    countCategory = i;   
  }
  setPointAverage(scoreTotal, countCategory);
}

const setPointAverage = (medi, count) => {
  const element = document.getElementById("result-average"); 
  element.innerHTML = (medi / (count + 1)).toFixed(0);
}

scores();


