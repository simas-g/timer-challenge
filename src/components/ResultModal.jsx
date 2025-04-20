export default function ResultModal({result, targetTime, ref}) {
    return <dialog className="result-modal" ref={ref}>
        <h2>You {result}</h2>
        <p>The target time was <strong>{targetTime}</strong> seconds</p>
        <p>You stopped the timer with <strong>x seconds left</strong></p>
        <form method="dialog">
            <button>Close</button>
        </form>
    </dialog>
}