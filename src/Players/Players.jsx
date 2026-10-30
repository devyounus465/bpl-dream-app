import { use, useState } from "react";
import AvailablePlayers from "./AvailablePlayers";
import SelectedPlayers from "./SelectedPlayers";

const Players = ({ playersData, coinPrice, setCoinPrice }) => {
  const players = use(playersData);

  const [activeTab, setActiveTab] = useState("available");

  const [selectedPlayers, setSelectedPlayers] = useState([]);

  // player select handle

  const handlePlayerSelect = (id) => {
    if (selectedPlayers.includes(id)) return;

    const findPlayer = players.find((player) => player.id === id);

    if (!findPlayer) return;

    if (coinPrice < findPlayer.price) {
      alert("Not enough coins!");
      return;
    }
    setCoinPrice(coinPrice - findPlayer.price);

    setSelectedPlayers((prev) => [...prev, id]);
  };

  const handleRemovePlayer = (id) => {
    const findPlayer = players.find((player) => player.id === id);

    if (!findPlayer) return;

    const afterDelete = selectedPlayers.filter((pid) => pid !== id);
    // setSelectedPlayers((prev) => prev.filter((playerId) => playerId !== id));

    setCoinPrice((prev) => prev + findPlayer.price);
    setSelectedPlayers(afterDelete);
  };
  // selected players data fileter

  const selectedPlayersList = players.filter((player) =>
    selectedPlayers.includes(player.id),
  );

  return (
    <div>
      <div className="max-w-[1400px] mx-auto py-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
          <h2 className="text-2xl font-bold">
            {activeTab === "available"
              ? "Available Players"
              : `Selected Player (${selectedPlayers.length})`}
          </h2>

          {/* Tabs */}
          <div className="flex bg-white rounded-xl p-1">
            <button
              onClick={() => setActiveTab("available")}
              className={`px-5 py-3 rounded-lg text-sm transition ${
                activeTab === "available"
                  ? "bg-[#DFFF00] text-black font-bold"
                  : "text-gray-500"
              }`}
            >
              Available
            </button>

            <button
              onClick={() => setActiveTab("selected")}
              className={`px-5 py-3 rounded-lg text-sm transition ${
                activeTab === "selected"
                  ? "bg-[#DFFF00] text-black font-bold"
                  : "text-gray-500"
              }`}
            >
              Selected ({selectedPlayers.length})
            </button>
          </div>
        </div>

        {/* Available Tab */}
        {activeTab === "available" && (
          <AvailablePlayers
            players={players}
            handlePlayerSelect={handlePlayerSelect}
            selected={selectedPlayers}
          />
        )}

        {/* Selected Tab */}
        {activeTab === "selected" && (
          <SelectedPlayers
            selectedPlayersList={selectedPlayersList}
            onRemove={handleRemovePlayer}
          />
        )}
      </div>
    </div>
  );
};

export default Players;
