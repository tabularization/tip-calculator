import { useState } from "react";


export default function App() {
  const [cost, setCost] = useState(0);
  const [personalTip, setPersonalTip] = useState(0);
  const [friendTip, setFriendTip] = useState(0);

  return (
    <div className="App">
      <h1>Tip Calculator</h1>
      <Bill cost={cost}></Bill>
      <PersonalReview personalTip={personalTip}></PersonalReview>
      <FriendReview friendTip={friendTip}></FriendReview>
    </div>
  );
}

function Bill({ cost, children }) {
  return (
    <div>
      <label for="billCost" className="text">How much was the bill?</label>
      <input id="billCost" type="text" placeholder={cost}></input>
    </div>
  );
}

function PersonalReview({ personalTip }) {
  return (
    <div>
      <label for="personalReview" className="text">
        How did your like the service?
      </label>
      <input
        id="personalReview"
        type="text"
        placeholder={`${personalTip}%`}
      ></input>
    </div>
  );
}

function FriendReview({ friendTip }) {
  return (
    <div>
      <label for="friendReview" className="text">
        How did your friend like the service?
      </label>
      <input
        id="friendReview"
        type="text"
        placeholder={`${friendTip}%`}
      ></input>
    </div>
  );
}
