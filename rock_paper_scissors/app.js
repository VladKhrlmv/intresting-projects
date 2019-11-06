const game = () => {
    let pScore = 0;
    let cScore = 0;

    //start game
    const startGame = () => {
        const playButton = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playButton.addEventListener('click', () => {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };

    // play match
    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        const hands = document.querySelectorAll('.hands img');

        hands.forEach(hand => {
            hand.addEventListener('animationend', function(){
                this.style.animation = '';
            });
        });
        // computer options
        const computerOptions = ['rock', 'paper', 'scissors'];

        options.forEach((option) => {
            option.addEventListener('click', function() {
                playerHand.src = `./assets/rock.png`;
                computerHand.src = `./assets/rock.png`;
                //computer choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];
                //update the pictures
                
                setTimeout(() => {
                    //here we call compareHands
                    compareHands(this.textContent, computerChoice);

                    playerHand.src = `./assets/${this.textContent}.png`;
                    computerHand.src = `./assets/${computerChoice}.png`;
                }, 2000);
                //update score

                //animation
                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";
            });
        });
    };

    //score
    const updateScore = () => {
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');

        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    };

    const compareHands = (playerChoice, computerChoice) => {
        const winner = document.querySelector('.winner');
        // checking for a tie
        if(playerChoice === computerChoice){
            winner.textContent = 'It is a tie';
            return;
        }
        // check rock
        if(playerChoice === 'rock'){
            if(computerChoice === 'scissors'){
                winner.textContent = 'Player wins';
                pScore++;
                updateScore();
                return;
            } else{
                 winner.textContent = 'Computer wins';
                 cScore++;
                 updateScore();
                 return;
            }
        }
        // check scissors
        if(playerChoice === 'scissors'){
            if(computerChoice === 'paper'){
                winner.textContent = 'Player wins';
                pScore++;       
                updateScore();      
                return;
            } else{
                 winner.textContent = 'Computer wins';
                 cScore++;
                 updateScore();
                 return;
            }
        }
        // check paper
        if(playerChoice === 'paper'){
            if(computerChoice === 'rock'){
                winner.textContent = 'Player wins';
                pScore++;
                updateScore();
                return;
            } else{
                 winner.textContent = 'Computer wins';
                 cScore++;
                 updateScore();
                 return;
            }
        }
    };

    //call all the inner functions
    startGame();
    playMatch();
};

//start the game function
game();