import React, { useState } from "react";
import Episode from "./Episode";

export default function EpisodeBrowser() {
  const episodes = [
    {
      name: "Winter Is Coming",
      episode: 1,
      cover:
        "https://arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/U5G7QUP6GZDITGBPMQ23V52SGA.jpg",
    },
    {
      name: "The Kingsroad",
      episode: 2,
      cover:
        "https://news.harvard.edu/wp-content/uploads/2019/03/1_joXyuVebBLogVvVBSFk76A-1200x800.jpg",
    },
    {
      name: "Lord Snow",
      episode: 3,
      cover:
        "https://upload.wikimedia.org/wikipedia/en/d/d8/Game_of_Thrones_title_card.jpg",
    },
  ];

  const [episode, setEpisode] = useState(0);
  const [activeEpisode, setActiveEpisode] = useState(episodes[0]);

  function nextEpisode() {
    if (episode > episodes.length - 1) {
      alert("No more Episodes");
      return;
    }
    setEpisode(episode + 1);
    refreshEpisode();
  }

  function previousEpisode() {
    if (episode == 0) {
      alert("No more Episodres");
      return;
    }
    setEpisode(episode - 1);
    refreshEpisode();
  }

  function refreshEpisode() {
    setActiveEpisode(episodes[episode]);
  }

  return (
    <div className="EpisodeBrowser">
      <h1>Episode Browser</h1>
      <Episode
        name={activeEpisode.name}
        episode={activeEpisode.episode}
        cover={activeEpisode.cover}
      />
      <button onClick={previousEpisode}>Previous</button>
      <button onClick={nextEpisode}>Next</button>
    </div>
  );
}
