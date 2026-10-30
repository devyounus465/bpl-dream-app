import SelectedPlayersCard from "./SelectedPlayersCard";

const SelectedPlayers = ({ selectedPlayersList, onRemove }) => {
  return (
    <div className="grid grid-cols-1 gap-4">
      {selectedPlayersList.map((player) => (
        <SelectedPlayersCard
          player={player}
          onRemove={onRemove}
        ></SelectedPlayersCard>
      ))}
    </div>
  );
};

export default SelectedPlayers;
