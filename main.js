function setup()
{
   Canvas = createCanvas(300 , 300);
   Canvas.center();
   Video = createCapture(VIDEO);
   Video.hide();
   Classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/kuczQHxal/model.json' , ModelLoaded );
}

function ModelLoaded()
{
   console.log("Model is Loaded");
}

function draw()
{
    image(Video , 0 , 0 , 300 , 300);
   Classifier.classify(Video , GotResult); 
}

function GotResult(error , results)
{
   if (error) {
      console.error(error);
   } 
   else {
   console.log(results);
   document.getElementById("Result_Object_Name").innerHTML = results[0].label;
   document.getElementById("Result_Object_Accuracy").innerHTML = results[0].confidence.toFixed(2);

   }
}