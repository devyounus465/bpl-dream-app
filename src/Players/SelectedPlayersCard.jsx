import { Trash2 } from "lucide-react";

const SelectedPlayersCard = ({ player, onRemove }) => {
  console.log(player);
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
    <div>
      <div className="flex items-center gap-6 border border-[#292929] rounded-2xl p-5 bg-black">
        {/* Player Image */}
        {playerImg ? (
          <img
            src={playerImg}
            alt={playerName}
            className="w-20 h-20 rounded-2xl object-cover"
          />
        ) : (
          <div className="w-20 h-20 bg-[#d9d9d9] rounded-2xl shrink-0" />
        )}

        {/* Player Info */}
        <div className="flex-1">
          <h3 className="text-xl font-bold">{playerName}</h3>

          <p className="text-gray-400 mt-2">{battingStyle}</p>
        </div>

        {/* Delete Button */}
        <button
          onClick={() => onRemove(id)}
          className="text-red-500 hover:text-red-400 transition"
        >
          <Trash2 size={22} />
        </button>
      </div>
    </div>
  );
};

export default SelectedPlayersCard;
