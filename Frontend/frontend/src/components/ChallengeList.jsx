export default function ChallengeList({ challenges ,setChallenges, setEditingId, setMonth, setDescription  }) {
     const handleEdit = (challenge) => {
        setEditingId(challenge.id);
        setMonth(challenge.month);
        setDescription(challenge.description);
    };

    // Delete a challenge by ID
    const deleteChallenge = async (id) => {
        const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:8080";
        const response = await fetch(`${apiUrl}/api/challenges/${id}`, {
            method: "DELETE"
        });
        if (response.ok) {
            setChallenges(challenges.filter(ch => ch.id !== id));
        }
    };



    return (
        <>
            {challenges.length > 0 ? (
                <div className="challenges">
                    <h3>Challenges List</h3>
                    <ol>
                        {challenges.map((challenge) => (
                            <li key={challenge.id} className="challenge-item">
                                <div className="challenge-text">
                                    {challenge.month} : {challenge.description}
                                </div>
                                <div className="action-buttons">
                                    <button className="edit-btn" onClick={() => handleEdit(challenge)}>Edit</button>
                                    <button className="delete-btn" onClick={() => deleteChallenge(challenge.id)}>Delete</button>
                                </div>
                            </li>

                        ))}
                    </ol>
                </div>
            ) : (
                <p>No challenges available</p>
            )}

        </>
    )
}