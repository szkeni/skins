import React, { Component } from "react";

export default class ChampionCard extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             skins: []
        }
    }
    componentDidMount() {
        fetch(
          `https://ddragon.leagueoflegends.com/cdn/11.21.1/data/en_US/champion/${this.props.champName}.json`
        ).then(async (res) => {
          const response = await res.json();
          const skins = response.data[this.props.champName].skins
          
          this.setState({ skins: skins }); 
        });
      }

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
        <div className="skins">
          {this.state.skins && this.state.skins.map( (skin, s, _skins) => {
              if(s >= _skins.length - 3){
                  return <div> <img key={`${this.props.champName}-${s}`}
                  src={
                    "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/" +
                    this.props.champName +
                    `_${skin.num}.jpg`
                  }
                  alt={skin.name}
                  title={skin.name}
                  width={50}
                />
                <span>{skin.name}</span>
                </div>
              }
              return null
          })}
        </div>
      </div>
    );
  }
}
