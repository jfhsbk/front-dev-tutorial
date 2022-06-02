//ここから青木です。わかる人、変更してください

//カード選択
function selectCard(playerMaisu){
    let random = Math.floor(Math.random() * playerMaisu.length);
    return random; //まだ途中。左からrandom +1 番目を選択したい
} 

//数字予測
function selectNumber(){
    let num = Math.floor(Math.random() * 12);
    return num; //まだ途中。ここで出した数字をcpActionの一つ目のif文でselectの数字と等しいか判断したい
}

//アタック・ステイ判断
function attackJudge(){
    let tekitou = Math.random();
    if(tekitou >= 0.5){
        ???.textContent = 'アタック'; //???にはDOM要素
        cpAction();
    }else{
        ???.textContent = 'ステイ'; //???にはDOM要素
        playerAction();
    }
}

//cpアクション
function cpAction(){
    selectCard();
    selectNumber();
    if(アタック成功){    //cardの数字=数字予測のnum
        //イエス！と出力
        //selectカードを表にする
        if(playerのすべてのカードが表ではない){
            attackJudge();
        }else{
            //cp勝利画面に遷移
        }

    }else{
        //ノー！と出力
        //cardを表にしてcp手札に並べる
    }

}

//ここまで青木です。