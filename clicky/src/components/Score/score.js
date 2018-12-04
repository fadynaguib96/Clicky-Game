import React from "react";
import PlayerCard from "../Cards"
import imgs from "../../imgs.json"
import Navbar from '../Navbar/navbar.js'
import "./score.css"


class Score extends React.Component {
    
    state = {
        score: 0,
        topScore: 0,
        results: "Click on any Image"
    };
    
    shuffleArray = (array) => {
        
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }

    } 
       
      
    handleWord = () => {
        this.setState({ results: "You lose!! Press on any image to restart" });
    }

    alreadyGuessed = [];
    
    handleClick = (e) => {
    
    this.setState({ results: "Click on any Image" });


    let cardID = e.target.getAttribute('value')

      console.log(cardID)

            if(this.alreadyGuessed.includes(cardID)) {

                this.alreadyGuessed = []
                this.setState({ score: 0});
                this.handleWord()
                this.shuffleArray(imgs)
                
            }

            else {

                this.alreadyGuessed.push(cardID)
                this.setState({ score: this.state.score + 1 });

                if ((this.state.score) >= (this.state.topScore)) {

                    this.setState({ topScore : this.state.score + 1})
                    
                }
                this.shuffleArray(imgs)
                

            }
        }


    render() {
        return (

           
            <div className ="overall">
            <Navbar score = {this.state.score} top = {this.state.topScore} result = {this.state.results} />

            <div className="container cont">

                <div className="row">

                    
                
                {imgs.map(player => (

                    <div className ="col col-xl-4">

                    <PlayerCard handleClick={this.handleClick} {...player} />
                    </div>


                ))}
                </div>

            </div>


            </div>

        )
    }
}

export default Score;