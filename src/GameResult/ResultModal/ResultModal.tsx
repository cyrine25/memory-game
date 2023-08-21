import { useContext } from 'react'

import { GameContext } from '../../GameContext/GameContext'
import './ResultModal.scss'
type Props = {
  ResetGame: () => void
}
const ResultModal = (props: Props) => {
  const GameContextData = useContext(GameContext)

  return (
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="outcome">All Clear in {GameContextData.moveCount} moves!</h1>
      </div>
      <div className="action-container">
        <button className="reset-btn" onClick={props.ResetGame}>
          Reset
        </button>
      </div>
    </div>
  )
}
export default ResultModal
