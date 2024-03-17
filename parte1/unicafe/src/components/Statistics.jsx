import StatisticLine from "./StatisticLine ";

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
      {good == 0 && bad == 0 && neutral == 0 ? (
        <p>No feedback given</p>
      ) : (
        <table>
          <tbody>
            <StatisticLine text="good" total={good} />
            <StatisticLine text="neutral" total={neutral} />
            <StatisticLine text="bad" total={bad} />
            <StatisticLine text="all" total={all()} />
            <StatisticLine text="average" total={average()} />
            <StatisticLine text="positive" total={positive()} />
          </tbody>
        </table>
      )}
    </>
  );
}
