import KatexSpan from "./components/KatexSpan";
export default function Home() {
  const matrix = `$$ \\left[\\begin{array} {rrr} 3.381563 & 3.389113 \\\\ 4.527875 & 5.854178 \\\\ 2.655682 & 4.411995 \\\\ \\end{array}\\right] $$`;
  return (
    <div>
      <h1>Aim</h1>
      <h2>1. 1 Subheading</h2>
      <p> lorem ipsum lolorem ipsum lorem ipsum lorem ipsum lorem ipsumrem ipsum</p>
      <ul>
        <li>Point 1 </li>
      </ul>
      <KatexSpan text={matrix}/>
    </div>
  );
}