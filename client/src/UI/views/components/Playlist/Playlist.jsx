import React from "react";

import { Container, Header, SongList } from "./styles";
import ClockIcon from "../../assets/images/clock.svg";
import PlusIcon from "../../assets/images/plus.svg";

const Playlist = () => (
  <Container>
    <Header>
      <img
        src="https://avatars0.githubusercontent.com/u/22546201?v=4"
        alt="Playlist"
      />
      <div>
        <span>PLAYLIST</span>
        <h1>Rock Forever</h1>
        <p>13 músicas</p>

        <button>PLAY</button>
      </div>
    </Header>

    <SongList>
      <thead>
        <th />
        <th>Título</th>
        <th>Artista</th>
        <th>Álbum</th>
        <th>
          <img src={ClockIcon} alt="Duração" />
        </th>
      </thead>
      <tbody>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>PaperCut</td>
          <td>Linkpart</td>
          <td>Hybrid</td>
          <td>3:26</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>PaperCut</td>
          <td>Linkpart</td>
          <td>Hybrid</td>
          <td>3:26</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>PaperCut</td>
          <td>Linkpart</td>
          <td>Hybrid</td>
          <td>3:26</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>PaperCut</td>
          <td>Linkpart</td>
          <td>Hybrid</td>
          <td>3:26</td>
        </tr>
      </tbody>
    </SongList>
  </Container>
);

export default Playlist;
