import { climbCat } from "../functions/utils";

const Popup = ({ name, grade, length, gain, height }) => /*html*/ `
  <h3>${name}</h3>
  <p>${climbCat(grade, length)}</p>
  <p>${length / 1000}km</p>
  <p>${grade}%</p>
  <p>${gain.toLocaleString()}m</p>
  <p>${height.toLocaleString()}m</p>
`;

export default Popup;
