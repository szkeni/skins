import React, { Component } from "react";

export default class ChampionCard extends Component {
  render() {
    return (
      <div className="champ__card">
        <img
          src={
            "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/" +
            this.props.champName +
            "_0.jpg"
          }
          alt={this.props.champName}
          title={this.props.champName}
        />
        <div>
        </div>
      </div>
    );
  }
}
