import React from "react";
import Slider from "rc-slider";
import "./Player.css";
import VolumeIcon from "../../../img/volume.svg";
import ShuffleIcon from "../../../img/shuffle.svg";
import BackwardIcon from "../../../img/backward.svg";
import PlayIcon from "../../../img/play.svg";
import ForwardIcon from "../../../img/forward.svg";
import RepeatIcon from "../../../img/repeat.svg";
// import PauseIcon from "../../../img/pause.svg";


const Player = () => (
  <div className="container__player">
    <div className="current">
      <img className="img__player "src="" alt="Cover" />

      <div className="song__name">
        <span>Times like these</span>
        <small>Foo Fighters</small>
      </div>
    </div>

    <div className="progress">
      <div className="controls">
        <button>
          <img className="icon__player" src={ShuffleIcon} alt="Shuffle" />
        </button>
        <button>
          <img className="icon__player" src={BackwardIcon} alt="Backward" />
        </button>
        <button>
          <img className="icon__player" src={PlayIcon} alt="Play" />
        </button>
        <button>
          <img className="icon__player" src={ForwardIcon} alt="Forward" />
        </button>
        <button>
          <img className="icon__player" src={RepeatIcon} alt="Repeat" />
        </button>
      </div>
      <div className="time">
        <span className="song__length">1:39</span>
        <div className="progressSlider">
          <Slider
            railStyle={{ background: "#404040", borderRadius: 10 }}
            trackStyle={{ background: "#1ed760" }}
            handleStyle={{ border: 0 }}
          />
        </div>
      </div>
    </div>

    <div className="volume icon__player">
      <img src={VolumeIcon} alt="Volume" />
      <Slider
        railStyle={{ background: "#404040", borderRadius: 10 }}
        trackStyle={{ background: "#fff" }}
        handleStyle={{ display: "none" }}
        value={50}
      />
    </div>
  </div>
);

export default Player;