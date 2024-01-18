function getSubstring(inputString, startIdx, length) {
    // Calculate the ending index
    const endIdx = startIdx + length;

    // Use substring to extract the desired substring
    const substring = inputString.substring(startIdx, endIdx);

    return substring;
}
function getRandomNumber(a, b) {
    // Generate a random decimal between 0 (inclusive) and 1 (exclusive)
    return (Math.floor(Math.random() * ( b - a ) ) + a);
}
  // You can replace the text with your desired string

const lipsum = "際カムコサ学手午ムトリ非単か中天平ぽフ作実頭座ウエロメ善票サネウニ収著コオ管情手クル見久審ヘニシ暮是ラひほび駐掲ト教坂居弘げねぶ。専ト康康ヌコ赤意ハウス菜女ヱチオト際暮ヲエ装遠ゆル己続フえ小自どひらぱ査条下ノネ山者の名臨9意講ルかび運和ゃンか真覧ラごお程転ヤモウ刺点む用谷え囲イ世日キヘワ安欠じース準天サホ米医づだ僚上と葉困チルテ提経今フす真国サ写4保トヘツイ試世約べ方条ソ在属ルドずふ墜呼スメノワ用体仙優わぶず囲レ少月ン日文ルナマヌ米料エ同低とれイ当余東法二ほあち人原ツ士行ノ健指む校東トあ業下融セヒヘト録欺が"
  // Set the text content to an empty string initially

function textfk(container){
  const textContainer = container;
  const text = textContainer.getAttribute("data-text");
  textContainer.textContent = "";
  let displayText = ""

  // Loop through each character in the text and append it to the container
  for (let i = 0; i < text.length+1; i++) {
    i += getRandomNumber(0,1)
    setTimeout(() => {
        displayText = text.substring(0, i);
        if (text.length > i + 1){
        displayText += getSubstring(lipsum, getRandomNumber(0, lipsum.length - (text.length - i - 1)), text.length - i);
    }
    textContainer.textContent = displayText;
    
    }, i * 75); // Adjust the delay as needed
    textContainer.textContent = text;
  }
}

