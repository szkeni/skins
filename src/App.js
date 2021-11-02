import React, { Component } from "react";
import ChampionCard from "./championCard";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      champs: [],
    };
  }

  componentDidMount() {
    fetch(
      "http://ddragon.leagueoflegends.com/cdn/11.21.1/data/en_US/champion.json"
    ).then(async (res) => {
      const response = await res.json();
      this.setState({ champs: Object.keys(response.data) });
    });
  }

  render() {
    return (
      <>
        {this.state.champs &&
          this.state.champs.map((champ, i) => {
            if (champ === "Fiddlesticks") {
              return null
            }
            return <ChampionCard key={`championcard-${i}`} champName={champ} />;
          })}
      </>
    );
  }
}
