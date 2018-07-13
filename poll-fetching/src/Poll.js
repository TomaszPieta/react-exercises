import React from "react";

export default class Poll extends React.Component {
  state = {
    question: "",
    votes: [],
    vote: {
      name: "",
      score: 0
    },
    counter: 0,
    surveys: []
  };
  onQuestionChange = event => {
    this.setState({
      question: event.target.value
    });
  };
  onVotesChange = event => {
    this.setState({
      vote: { ...this.state.vote, name: event.target.value }
    });
  };
  onAddPoll = event => {
    event.preventDefault();
    this.setState(prev => ({
      votes: [...prev.votes, { ...prev.vote, id: Date.now() }]
    }));
    console.log(this.state.votes);
  };

  onIncrement = (surveyId, voteId, num) => {
    this.setState(prev => ({
      surveys: prev.surveys.map(survey => {
        if (survey.id !== surveyId) return survey;
        return {
          ...survey,
          votes: survey.votes.map(vote => {
            if (vote.id !== voteId) return vote;
            return {
              ...vote,
              score: vote.score - num < 0 ? vote.score : vote.score - num
            };
          })
        };
      })
    }));
  };
  onDecrement = num => {
    this.setState(prev => ({
      counter: prev.counter - num < 0 ? prev.counter : prev.counter - num
    }));
  };
  addNewSurvey = () => {
    this.setState({
      surveys: [
        {
          question: this.state.question,
          votes: this.state.votes,
          id: Date.now()
        },
        ...this.state.surveys
      ]
    });
  };
  componentDidMount() {    
    fetch("https://skygate.io/api/polls")    
      .then(response => response.json())
      .then(surveys => this.setState(  { surveys }     ))
      .catch(error => console.log("Request failed", error));    
  }
  render() {
    console.log(this.state.surveys);
    return (
      <div>
        Question:
        <br />
        {this.state.question}
        <br />
        <input
          value={this.state.question}
          onChange={this.onQuestionChange}
          type="text"
          placeholder="type in the question"
        />
        <br />
        <br />
        Vote options:<br />
        <form onSubmit={this.onAddPoll}>
          <br />

          <label>
            <input
              type="text"
              name="name"
              onChange={this.onVotesChange}
              value={this.state.vote.name}
              placeholder="Add vote options"
            />
          </label>
          <br />
          <br />

          <input type="submit" value="Add option" />
          <br />
          <br />
          <button onClick={this.addNewSurvey}>Add new survey</button>
          <br />
          <br />
        </form>
        {this.state.surveys.map(survey => (
          <div className="survey" key={survey.id}>
            <span>{survey.question}</span>
            {survey.votes.map(vote => (
              <div key={vote.id}>
                {vote.name} - {vote.score}
                <span
                  className="button plus"
                  onClick={() => this.onIncrement(survey.id, vote.id, -1)}
                >
                  +
                </span>
                <span
                  className="button minus"
                  onClick={() => this.onIncrement(survey.id, vote.id, 1)}
                >
                  -
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}
