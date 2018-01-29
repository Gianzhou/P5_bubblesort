
function DataInitial(){
	var i;
	var data;
	var arry = [];
	for(i=0; i<10;){
		 data = Math.floor(Math.random()*10);
		 if(!arry.includes(data)){
		 	arry.push(data);
      i++;
		 }
		
	}
	
	return arry;
	
}



function DownArrow(x1, y1, x2, y2, x3, y3) {
  var point1_x = x1 || 1;
  var point1_y = y1 || 1;
  var point2_x = x2 || 1;
  var point2_y = y2 || 1;
  var point3_x = x3 || 1;
  var point3_y = y3 || 1;
  var speed = 50;
  var that = {};


  that.draw = function(){

    //setp 1: show the arrow
    triangle(point1_x, point1_y, point2_x, point2_y, point3_x, point3_y);
    text("j", point1_x, point2_y-10);

    //validation of current_index_j
    if(current_index_j<9)
      current_index_j++;
    else
      current_index_j = 9;
    text(arry[current_index_j], point1_x, point1_y+20);


    //step 2 compare the value
    //compare two coresponding values, if change, reshow the arrow and the text
    if(arry[current_index_i] < arry[current_index_j]){
      
      temp_value = arry[current_index_i];
      arry[current_index_i] = arry[current_index_j]
      arry[current_index_j] = temp_value;

    }
    
    

    //setp 3 check the current position of arrow, if it is at the end or not 
    //adding the speed when the arrow reach the end, but not include the last time
    if(point1_x >= 520 && num<10){ 
      point1_x = 70 + speed*num;
      point2_x = 50 + speed*num;
      point3_x = 90 + speed*num;
      
      

      current_index_i ++;
      current_index_j = current_index_i;
      num++;
    }

    //step 4 move the arrow to next box
    if(num < 10){
      point1_x += speed;
      point2_x += speed;
      point3_x += speed;
    }

   

   

  }

  return that;
}

function UPArrow(x1, y1, x2, y2, x3, y3) {
  var point1_x = x1 || 1;
  var point1_y = y1 || 1;
  var point2_x = x2 || 1;
  var point2_y = y2 || 1;
  var point3_x = x3 || 1;
  var point3_y = y3 || 1;
  var index = num -1;
  var speed = 50;
  var that = {};


  that.draw = function(){

    if(num > 0 && num < 10){
      point1_x = 20 + speed*num;
      point2_x =  speed*num;
      point3_x = 40 + speed*num;
    }
    triangle(point1_x, point1_y, point2_x, point2_y, point3_x, point3_y);  
    text("i", point1_x, point2_y+10);
//    text(current_index_i, point1_x, point2_y-30);
//    text(current_index_j, point1_x, point2_y-20);
//    text("num = " + num, point1_x, point2_y-40);
  
    //validation of current_index_i: [0,8];
    if(current_index_i>8)
      current_index_i = 8;
    text(arry[current_index_i], point1_x, point1_y-20);


  }
  
  return that;
  
}


function displayCode(){
  var that = {};


  that.draw = function(){

    
    rect(450, 350, 350, 270);
    //control the code text
    textAlign(LEFT, TOP);
    text(code, 500, 400);
  }

  return  that;
}



var startButton;
var resumeButton;
var pauseButton;
function setup() {
  createCanvas(1000,1000);
  frameRate(1.5);
  num = 1; //counting how many time for the loop
  //counter_i = 0;
 // counter_j = 0;
  current_index_i = 0; //the index of the up arrow pointing
  temp_value = 0;
  current_index_j = 0; // the index of the button arrow pointing.
 
  j = new DownArrow(120, 240, 100, 280,140, 280);
//  j = new DownArrow(70, 240, 50, 280,90, 280);
  i = new UPArrow(70, 200, 50, 160, 90, 160);
  pauseButton = createButton('Pause');
  pauseButton.position(160, 400);
  pauseButton.mousePressed(pause);

  resumeButton = createButton('Resume');
  resumeButton.position(260, 400);
  resumeButton.mousePressed(resume);

//  startButton = createButton('start');
//  startButton.position(60, 400);
//  startButton.mousePressed(start);
  arry = DataInitial();
  n= 0;
  code =
  `function bubbleSort(arr, len) { 
  var i, j, tmp;
  for (i = 0; i < len - 1; i++) {
    for (j = 0; j < len - i - 1; j++) {
      if (arr[i] < arr[j]) {
        tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
      }
    }
  }
}
`;

textFont('Courier');
textSize(12);
textStyle(BOLD);
   

noLoop();
}

function start(){
  redraw();
}

function pause(){
  noLoop();
}

function resume(){
  loop();
}

function draw() {

  background(0,0,255);

//text("o",10,100);
  rect(50, 200, 40, 40);
  rect(100, 200, 40, 40);
  rect(150, 200, 40, 40);
  rect(200, 200, 40, 40);
  rect(250, 200, 40, 40);
  rect(300, 200, 40, 40);
  rect(350, 200, 40, 40);
  rect(400, 200, 40, 40);
  rect(450, 200, 40, 40);
  rect(500, 200, 40, 40);

//  triangle(70, 240, 50, 280, 90, 280);
//   triangle(70, 200, 50, 160, 90, 160);


  textAlign(CENTER, CENTER);
  text(arry[0],70, 220);
  text(arry[1], 120, 220);
  text(arry[2], 170, 220);
  text(arry[3], 220, 220);
  text(arry[4], 270, 220);
  text(arry[5], 320, 220);
  text(arry[6], 370, 220);
  text(arry[7], 420, 220);
  text(arry[8], 470, 220);
  text(arry[9], 520, 220);




  
  i.draw();
  j.draw();


  displayCode().draw();

  if(num > 10) 

    noLoop();

  
}
