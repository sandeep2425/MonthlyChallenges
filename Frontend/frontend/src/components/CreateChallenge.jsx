export default function ChallengeList(props) {

    return (
        <>
         <h3>{props.editingId ? "Edit Challenge" : "Create a new challenge"}</h3>
         <label htmlFor="month">Month:</label>
            <input
                type="text"
                id="month"
                name="month"
                value={props.month}
                placeholder="e.g. January"
                onChange={(e) => props.setMonth(e.target.value)}
            />
            <label htmlFor="description">Description:</label>
            <textarea
                id="description"
                name="description"
                value={props.description}
                placeholder="Describe the challenge"
                onChange={(e) => props.setDescription(e.target.value)}
            />


            {props.editingId ? (
                <button onClick={props.handleUpdate}>Update Challenge</button>
            ) : (
                <button onClick={props.createChallenge}>Create Challenge</button>
            )}
        </>
    )
}