# WordleCheat
This web app helps you to cheat on the game Wordle.

## Instructions
When you get stuck playing Worldle and can't think of a word to try next, use this app. 
1. Enter all the wrong/gray letters (on all lines you've played so far) into the appropriate field. No commas. Case does not matter. 
2. Enter all the correct (green OR yellow) letters from all lines into the 2nd field. No commas. case, order, and color (green/yellow) does not matter. 
3. Enter the appropriate yellow letters in their appropriate numbered slot. These fields can hold multiple letters if needed. 
4. Enter the green letters in their appropriate numbered slot. 
5. Click the button to generate possible options. 

## How it works
- A list of common English words created by MIT is combined with the wordlist used directly in Wordle's source code. 
- This combination of words are merged into a huge array of words. 
- The algorithm begins by popping out any words that are < or > than 5 chars in length. 
- Next, the algorithm parses the array to find any words containing letters entered in the gray/incorrect letter field on the UI. Words found with these letters are popped out of the array. 
- Then, the algorithm parses the array to find words that contain any of the letters in the 2nd UI field (for green/yellow) letters. If a word does not contain any of them, it is popped out of the array. 
- Next, the algorithm parses the array to check for yellow letters maching the specific charAt index. If the letter/char is found at the same position that was entered in the UI fields, that corresponding word is popped out of the array. 
- Finally, the algorithm parses the array for the green letters at the specific charAt index. If that letter does not match what is actually in the word's charAt index, it is popped out of the array. 
- The resulting array will only contain words that matched all of the criteria above, making a possible word to be chosen next in your game. If the generated list is large, it is suggested to use common sense and choose a word that is more common/known than other obscure words. 

## Link to try:
https://bmck2006.github.io/WordleCheat

## Credits
Word lists sourced from MIT's common words list and the wordlist array found directly in Wordle's public facing source code. This app is intended for fun/educational purposes only. 
