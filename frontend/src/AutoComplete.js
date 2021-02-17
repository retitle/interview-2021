import './AutoComplete.css';
// eslint-disable-next-line
import _ from 'lodash';
// eslint-disable-next-line
import { autocomplete, autocompleteMock } from './utils/autocomplete';

/**
 * Here you'll have to implement an AutoComplete component.
 *
 * As any other AutoComplete, it should contain to main parts: the text
 * input, and the dropdown with the filtered options.
 *
 * Options in the dropdown should appear as the user types. 
 *
 * The dropdown's visibility should follow these rules:
 *  - If there are no matching options (ie. the result set is empty), it 
 *    should not be visible
 *  - If the text input is empty it should not be visible
 *  - If there are options (ie. the result set is not empty), it should be 
 *    visible
 * 
 * The autocomplete component should not do requests to the server if the
 * string is shorter than 3 characters.
 *
 * To ease this task we have provided two small functions that do the request
 * to the server for you (or it mocks it):
 *  `autocomplete(needle: string) => Promise<Result>`
 *  `autocompleteMock(needle: string) => Promise<Result>`
 *
 * Result is an array of arrays: Array<[ id, firstName, lastName, role ]>
 *
 * Example usage:
 *   ```
 *   const res = await autocomplete("test");
 *   console.log(res); // [ [....], [....], [....] ]
 *   ```
 *
 * Note that this function will throw if there are any errors.
 *
 * You can use a class component instead, or you can use vanilla Javascript
 * if you prefer
 */

function AutoComplete() {
  return (
    <div className="AutoComplete">
      Not implemented
    </div>
  );
}

export default AutoComplete;


/* ============================================== 
 * Vanilla javascript 
 * ==============================================
 */
export function vanillaAutoComplete(rootEl) {
  const emptyDiv = document.createElement('div');
  rootEl.appendChild(emptyDiv);
}
