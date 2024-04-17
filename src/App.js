import { useState } from "react";

export default function App() {
  const [cost, setCost] = useState(0);
  const [personalTip, setPersonalTip] = useState(0);
  const [friendTip, setFriendTip] = useState(0);

  function handleSetCost(cost) {
    setCost(cost);
  }

  function handleSetPersonalTip(tip) {
    setPersonalTip(tip);
  }

  function handleSetFriendTip(tip) {
    setFriendTip(tip);
  }

  function handleReset() {
    setCost(0);
    setPersonalTip(0);
    setFriendTip(0);
  }

  return (
    <div className="App">
      <h1>Tip Calculator</h1>
      <Bill cost={cost} onSetCost={handleSetCost}/>
      <PersonalReview personalTip={personalTip} onSetPersonalTip={handleSetPersonalTip}/>
      <FriendReview friendTip={friendTip} onSetFriendTip={handleSetFriendTip}/>
      <Results cost={cost} personalTip={personalTip} friendTip={friendTip}/>
      <Button onReset={handleReset}>Reset!</Button>
    </div>
  );
}

function Bill({ cost, onSetCost }) {
  return (
    <div>
      <label for="billCost" className="text">
        How much was the bill?
      </label>
      <input id="billCost" type="text" placeholder={cost} onChange={(e)=>onSetCost(e.target.value)}></input>
    </div>
  );
}

function PersonalReview({ personalTip, onSetPersonalTip}) {
  return (
    <div>
      <label for="personalReview" className="text">
        How did your like the service?
      </label>
      <select
        id="personalReview"
        type="text"
        placeholder={`${personalTip}%`}
        onChange={(e)=>onSetPersonalTip(e.target.value)}
      >
        <option value="0">Dissastisfied (0%)</option>
        <option value="15" selected>
          Sastified (15%)
        </option>
        <option value="20">Amazing (20%)</option>
        <option value="30">Extraordinary (30%)</option>
      </select>
    </div>
  );
}

function FriendReview({ friendTip, onSetFriendTip }) {
  return (
    <div>
      <label for="friendReview" className="text">
        How did your friend like the service?
      </label>
      <select
        id="friendReview"
        type="text"
        placeholder={`${friendTip}%`}
        onChange={(e) => onSetFriendTip(e.target.value)}
      >
        <option value="0" selected>
          Dissastisfied (0%)
        </option>
        <option value="15">Sastified (15%)</option>
        <option value="20">Amazing (20%)</option>
        <option value="30">Extraordinary (30%)</option>
      </select>
    </div>
  );
}

function Results({ cost, personalTip, friendTip}) {
  const tipPercent = (parseFloat(personalTip) + parseFloat(friendTip)) / 2
  return (
    <div>
      <h2>
        Your total bill is ${cost * (1 + tipPercent / 100)}. You
        tipped ${cost * (tipPercent / 100)} ({tipPercent}%).
      </h2>
    </div>
  );
}

function Button({ onReset, children }) {
  return (
    <>
      <button onClick={onReset}>{children}</button>
    </>
  );
}