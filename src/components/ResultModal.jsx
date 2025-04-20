export default function ResultModal({ targetTime, ref, timeRemaining, handleReset}) {
    const userLost = timeRemaining <= 0
    const formattedRemainingTime = (timeRemaining / 1000).toFixed(2);
    const score = Math.round((1 - timeRemaining / (targetTime * 1000)) * 100)
    return <dialog className="result-modal" ref={ref} onClose={handleReset}>
        {userLost && <h2>You lost</h2>}
        {!userLost && <h2>Your score: {score}</h2>}
        <p>The target time was <strong>{targetTime}</strong> seconds</p>
        <p>You stopped the timer with <strong>{formattedRemainingTime} seconds left</strong></p>
        <form method="dialog" onSubmit={handleReset}>
            <button>Close</button>
        </form>
    </dialog>
}