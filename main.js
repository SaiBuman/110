Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality: 90,
    dest_width:340,
    dest_height:290
  }); 


  camera = document.getElementById("camera");
  Webcam.attach(camera);

  function takeSnapshot() {
      Webcam.snap(function(data_uri){
          document.getElementById("result").innerHTML = "<img src='" + data_uri + "' id='snapshot'>"
      });
  }

  console.log("ML5 version",ml5.version);

  classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/vApbc1p3B/model.json",modelLoaded);

  function modelLoaded() {
      console.log("Model Loaded !");
  }

  function check() {
      img = document.getElementById("snapshot");
      classifier = classify(img , gotResult);
  }

 function gotResult(error,result) {
      if(error) {
          console.error("Error");
      }
      else{
          console.log(result);
        if (results[0].label == Amazing) {
            document.getElementById("result_emotion_name").innerHTML = "Prediction - <span>&#128076;</span> This is looking amazing "
        }

        if (results[0].label == Best) {
            document.getElementById("result_emotion_name").innerHTML = "Prediction - <span>&#128077;</span> All the best "
        }

        if (results[0].label == Victory) {
            document.getElementById("result_emotion_name").innerHTML = "Prediction - <span>&#9996;</span> That was a marvelous victory "
        }
      }
 }