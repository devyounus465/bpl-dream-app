import PlayserCard from "./PlayserCard";

const AvailablePlayers = ({ players, handlePlayerSelect, selected }) => {
  return (
    <div className="grid grid-cols-3 xsm:grid-cols-2 gap-4 ">
      {" "}
      {players.map((player, i) => (
        <PlayserCard
          player={player}
          key={i}
          handlePlayerSelect={handlePlayerSelect}
          selected={selected.includes(player.id)}
        ></PlayserCard>
      ))}
    </div>
  );
};

export default AvailablePlayers;
