// Ten-Pin Bowling

// https://www.codewars.com/kata/ten-pin-bowling/train/javascript

// Ten-Pin Bowling

// In the game of ten-pin bowling, a player rolls a bowling ball down a lane to knock over pins. There are ten pins set at the end of the bowling lane. Each player has 10 frames to roll a bowling ball down a lane and knock over as many pins as possible. The first nine frames are ended after two rolls or when the player knocks down all the pins. The last frame a player will receive an extra roll every time they knock down all ten pins; up to a maximum of three total rolls.

// The Challenge

// In this challenge you will be given a string representing a player's ten frames. It will look something like this: 'X X 9/ 80 X X 90 8/ 7/ 44' (in Java: "X X 9/ 80 X X 90 8/ 7/ 44"), where each frame is space-delimited, 'X' represents strikes, and '/' represents spares. Your goal is take in this string of frames into a function called bowlingScore and return the players total score.

// Scoring

// The scoring for ten-pin bowling can be difficult to understand, and if you're like most people, easily forgotten if you don't play often. Here is a quick breakdown:

// Frames

// In Ten-Pin Bowling there are ten frames per game. Frames are the players turn to bowl, which can be multiple rolls. The first 9 frames you get 2 rolls maximum to try to get all 10 pins down. On the 10th or last frame a player will receive an extra roll each time they get all ten pins down to a maximum of three total rolls. Also on the last frame bonuses are not awarded for strikes and spares moving forward.

// In this challenge, three frames might be represented like this: 54 72 44. In this case, the player has had three frames. On their first frame they scored 9 points (5 + 4), on their second frame they scored 9 points (7 + 2) and on their third frame they scored 8 points (4 + 4). This is a very simple example of bowling scoring. It gets more complicated when we introduce strikes and spares.

// Strikes

// Represented in this challenge as 'X'

// A strike is scored when a player knocks all ten pins down in one roll. In the first 9 frames this will conclude the players turn and it will be scored as 10 points plus the points received from the next two rolls. So if a player were to have two frames X 54, the total score of those two frames would be 28. The first frame would be worth 19 (10 + 5 + 4) and the second frame would be worth 9 (5 + 4).

// A perfect game in bowling is 12 strikes in a row and would be represented like this 'X X X X X X X X X XXX' (in Java: "X X X X X X X X X XXX"). This adds up to a total score of 300.

// Spares

// Represented in this challenge as '/'

// A spare is scored when a player knocks down all ten pins in two rolls. In the first 9 frames this will be scored as 10 points plus the next roll. So if a player were to have two frames 9/ 54, the total score of the two frames would be 24. The first frame would be worth 15 (10 + 5) and the second frame would be worth 9 (5 + 4).


function bowlingScore(frames) {
  console.log("FRAMES " +frames);
  
  var score = 0;
  var frameArray = frames.split(" ");
  console.log(frameArray);

  for(p=0;p<frameArray.length;p++){

    
    // NO STRIKE NO SPARE
    if(frameArray[p].length === 2 && frameArray[p][1] !== "/"){
      score += parseInt(frameArray[p][0]) + parseInt(frameArray[p][1]);
      console.log("NO STRIKE NO SPARE");
      
    // SPARE
    }else if(frameArray[p].length === 2 && frameArray[p][1] === "/"){
      
      // SPARE NOT FOLLOWED BY STRIKE
      if(frameArray[p+1][0] !== "X"){
        score += 10 + parseInt(frameArray[p+1][0]);
        console.log("SPARE NOT FOLLOWED BY STRIKE");
        
        // SPARE FOLLOWED BY STRIKE
      }else{
        score += 20;
        console.log("SPARE FOLLOWED BY STRIKE");
      }
      
      // STRIKE FOLLOWED BY NORMAL ROLL
    }else if(frameArray[p].length === 1 && frameArray[p+1].length ===2 && frameArray[p+1][1] !== "/"){
      
      
      score += 10 + parseInt(frameArray[p+1][0]) + parseInt(frameArray[p+1][1]);
      console.log("STRIKE FOLLOWED BY NORMAL ROLL");
    }
    
        // LAST FRAME 3 STRIKE
    else if(frameArray[p].length === 3 && frameArray[p][1] === "X" && frameArray[p][2] === "X"){
      score += 30;
      console.log("LAST FRAME 3 STRIKE");
    }
    
    // STRIKE FOLLOWED BY STRIKE
    else if(frameArray[p].length === 1 && frameArray[p+1].length === 1 && frameArray[p+2].length ===2){
      
      if(frameArray[p+2][0] !== "X"){
        score += 20 + parseInt(frameArray[p+2][0]);
        console.log("STRIKE FOLLOWED BY STRIKE");
        
      }

      
    }
    
    // STRIKE FOLLOWED STRIKE FOLLOWED BY LAST FRAME STRIKE
    else if(frameArray[p].length === 1 && frameArray[p+1].length === 1 && frameArray[p+2].length ===3 && frameArray[p+2][0] === "X"){
      score += 30;
      console.log("STRIKE FOLLOWED STRIKE FOLLOWED BY LAST FRAME STRIKE");
    }
    
    // STRIKE FOLLOWED BY LAST FRAME 2 STRIKES
    else if(frameArray[p].length === 1 && frameArray[p+1].length === 3 && frameArray[p+1][0] === "X" && frameArray[p+1][1] === "X"){
      score +=30;
      console.log("STRIKE FOLLOWED BY LAST FRAME 2 STRIKES");
    }
    
    else if(frameArray[p].length === 1 && frameArray[p+1].length === 1 && frameArray[p+2].length ===1){
        
        // 3 STRIKES IN A ROW
        score += 30;
        console.log("3 STRIKES IN A ROW!!!");
      }
    

    
    // STRIKE FOLLOWED BY SPARE
    else if(frameArray[p].length === 1 && frameArray[p+1].length === 2 && frameArray[p+1][1] === "/"){
      score += 20;
      console.log("STRIKE FOLLOWED BY SPARE");
    }
    
    // STRIKE FOLLOWED BY SPARE LAST FRAME
    else if(frameArray[p].length === 1 && frameArray[p+1].length === 3 && frameArray[p+1][1] === "/"){
      score += 20;
      console.log("STRIKE FOLLOWED BY SPARE LAST FRAME");
    }
    
     // LAST FRAME 2 STRIKES AND 1 NORMAL
    else if(frameArray[p].length === 3 && frameArray[p][0] === "X" && frameArray[p][1] === "X" && frameArray[p][2] !== "X"){
      score += 20 + parseInt(frameArray[p][2]);
      console.log("LAST FRAME 2 STRIKES AND 1 NORMAL");
    }
    
    // LAST FRAME 3 ROLLS SPARE 
    else if(frameArray[p].length === 3 && frameArray[p][1] === "/"){
      
      // NO STRIKE AT END
      if(frameArray[p][2] !== "X"){
        score += 10 + parseInt(frameArray[p][2]);
        console.log("LAST FRAME 3 ROLLS SPARE & NO STRIKE AT END");
      }
      
      // STRIKE AT END
      else{
        score+= 20;
         console.log("LAST FRAME 3 ROLLS SPARE & STRIKE AT END");
      }
    }
    

    
    
    console.log("FRAME # " +score);
    
  }
  
 
  
  return score;

}

// bowlingScore('11 11 11 11 11 11 11 11 11 11');  // 20)
// bowlingScore('X X 9/ 80 X X 90 8/ 7/ 44');  // 171)
// bowlingScore('X X X X X X X X X XXX');  // 300)
// bowlingScore('00 00 00 00 00 00 00 00 X 0/X');  // 40)
// bowlingScore('00 5/ 4/ 53 33 22 4/ 5/ 45 XXX');  // 115)
// bowlingScore('5/ 4/ 3/ 2/ 1/ 0/ X 9/ 4/ 8/8');  // 150)
// bowlingScore('20 16 2/ 34 50 72 03 01 21 1/X');  // 70)
// bowlingScore('40 X 6/ 20 13 63 50 X 80 XX1');  // 103)

