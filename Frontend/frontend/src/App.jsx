import { useEffect, useState } from "react";
import CreateChallenge from "./components/CreateChallenge";
import ChallengeList from "./components/ChallengeList";

function App() {

   const [challenges, setChallenges] = useState([]);
    const [month, setMonth] = useState("");
    const [description, setDescription] = useState("");
    const [editingId, setEditingId] = useState(null); // Track which ID we're editing
    // Fetch challenges from backend
    useEffect(() => {
        const fetchData = async () => {
            const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:8080";
            let res = await fetch(`${apiUrl}/api/challenges`);
            let data = await res.json();
            setChallenges(data);
        };
        fetchData();
    }, []);

    // Create a new challenge
    const createChallenge = async () => {
        const newChallenge = { month, description };
        const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:8080";
        const response = await fetch(`${apiUrl}/api/challenges`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newChallenge)
        });
        if (response.ok) {
            const created = await response.json();
            setChallenges([...challenges, created]);
            resetForm();
        }
    };
  
   
    // Submit the updated challenge
    const handleUpdate = async () => {
        const updatedChallenge = { month, description };
        const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:8080";
        const response = await fetch(`${apiUrl}/api/challenges/${editingId}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedChallenge)
        });

        if (response.ok) {
            const res = await fetch(`${apiUrl}/api/challenges`);
            const data = await res.json();
            setChallenges(data);
            resetForm();
        }
    };

    // Reset form fields and editing state
    const resetForm = () => {
        setMonth("");
        setDescription("");
        setEditingId(null);
    };

  return (
    <div>
      <h1 id="heading">Monthly Challenges</h1>
      <div className="createChallenge">
       <CreateChallenge
          month={month}
          setMonth={setMonth}
          description={description}
          setDescription={setDescription}
          editingId={editingId}
          handleUpdate={handleUpdate}
          createChallenge={createChallenge}
      />
      </div>

      <ChallengeList
        challenges={challenges}
        setChallenges={setChallenges}
        setEditingId={setEditingId}
        setMonth={setMonth}
        setDescription={setDescription}
        month={month}
        description={description}
        editingId={editingId}
        handleUpdate={handleUpdate}
      />
    </div>
  );
}

export default App;
