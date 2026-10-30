import { Flag, UserRound } from "lucide-react";

const PlayserCard = ({ player, handlePlayerSelect, selected }) => {
  const {
    id,
    playerName,
    playerImg,
    origin,
    playerType,
    bowlingStyle,
    battingStyle,
    price,
  } = player;
  return (
    <div className="border border-[#292929] rounded-2xl p-4 bg-black text-white">
      {/* Player Image */}
      {playerImg ? (
        <img
          src={playerImg}
          alt={playerName}
          className="w-full h-[170px] object-cover rounded-xl"
        />
      ) : (
        <div className="w-full h-[170px] bg-[#d9d9d9] rounded-xl" />
      )}

      {/* Name */}
      <div className="flex items-center gap-3 mt-4">
        <UserRound size={21} className="text-gray-400" />

        <h3 className="font-bold text-base">{playerName}</h3>
      </div>

      {/* Country and Role */}
      <div className="flex justify-between items-center mt-3">
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <Flag size={16} />
          {origin}
        </div>

        <span className="text-xs bg-[#222] px-3 py-1 rounded-lg">
          {playerType}
        </span>
      </div>

      <div className="border-t border-[#292929] my-4" />

      {/* Details */}
      <div className="space-y-3 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-400">Bowling Style</span>
          <span>{bowlingStyle}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-400">Batting Style</span>

          <span>{battingStyle}</span>
        </div>

        <div className="flex justify-between items-center">
          <strong>Price: ${price.toLocaleString()}</strong>

          {/* <button
            onClick={() => onSelect(player.id)}
            disabled={selected}
            className={`px-3 py-2 rounded-lg border text-xs transition ${
              selected
                ? "border-[#DFFF00] text-[#DFFF00] cursor-not-allowed"
                : "border-gray-600 hover:bg-[#DFFF00] hover:text-black"
            }`}
          >
            {selected ? "Selected" : "Choose Player"}
          </button> */}

          <button
            onClick={() => handlePlayerSelect(id)}
            disabled={selected}
            className={`px-3 py-2 rounded-lg border text-xs transition ${selected ? "border-[#DFFF00] text-[#DFFF00] cursor-not-allowed" : "border-gray-600 hover:bg-[#DFFF00] hover:text-black"}`}
          >
            Choose Player
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayserCard;
