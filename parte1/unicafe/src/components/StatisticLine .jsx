export default function StatisticLine({ text, total }) {
  return (
    <tr>
      <td><p>{text}</p> </td>
      <td><p>{total}</p></td>
    </tr>
  );
}
