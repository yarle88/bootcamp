import Info from "./Info";

export default function Statistics({ good, bad, neutral }) {
  const all = () => {
    return good + neutral + bad;
  };

  const average = () => {
    const total = all();
    if (total == 0) return 0;
    return (good - bad) / total;
  };

  const positive = () => {
    const total = all();
    if (total == 0) return 0;
    return (good * 100) / total;
  };

  return (
    <>
      {(good==0 && bad==0 && neutral==0)?
      <p>No feedback given</p>:
      <>
        <Info text="good" total={good} />
        <Info text="neutral" total={neutral} />
        <Info text="bad" total={bad} />
        <h3> more statistics</h3>
        <Info text="all" total={all()} />
        <Info text="average" total={average()} />
        <Info text="positive" total={positive()} />
      </>}
    </>
  );
}
