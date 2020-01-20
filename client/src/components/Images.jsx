import React, { Component } from "react";
import Gallery from "react-photo-gallery";

export default class Images extends Component {
  state = {
    carpet: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
    carseat: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
    softtop: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    steer: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    windscreen: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
    roof: [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23
    ]
  };
  render() {
    return (
      <div className="gallery">
        <div className="category">
          <h3>carpet</h3>
          <div className="image-cat">
            {this.state.carpet.map(i => {
              return <img src={require(`../images/car-pet (${i}).jpg`)}></img>;
            })}
          </div>
        </div>
        <div className="category">
          <h3>carseat</h3>
          <div className="image-cat">
            {this.state.carseat.map(i => {
              return <img src={require(`../images/car-seat (${i}).jpg`)}></img>;
            })}
          </div>
        </div>
        <div className="category">
          <h3>roof-lining</h3>
          <div className="image-cat">
            {this.state.roof.map(i => {
              return <img src={require(`../images/roof (${i}).jpg`)}></img>;
            })}
          </div>
        </div>
        <div className="category">
          <h3>soft-top</h3>
          <div className="image-cat">
            {this.state.softtop.map(i => {
              return <img src={require(`../images/soft-top (${i}).jpg`)}></img>;
            })}
          </div>
        </div>
        <div className="category">
          <h3>steering wheel</h3>
          <div className="image-cat">
            {this.state.steer.map(i => {
              return <img src={require(`../images/steer (${i}).jpg`)}></img>;
            })}
          </div>
        </div>
        <div className="category">
          <h3>windscreen</h3>
          <div className="image-cat">
            {this.state.windscreen.map(i => {
              return (
                <img src={require(`../images/windscreen (${i}).jpg`)}></img>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
