//TODO 찾아보기
'use strict'

/**
 * 토글 여부
 * 
 * @property
 */
let isToggle = false;

/**
 * 이미지 목록
 * 
 * @property
 */
let arrImg = [
    './backGround/bg1.jpg',
    './backGround/bg2.jpg',
    './backGround/bg3.jpg',
    './backGround/bg4.jpg',
    './backGround/bg5.jpg',
];

/**
 * 초기화 한다.
 */
$(document).ready(function () {
    document.body.style.backgroundImage = "url('./backGround/bg1.jpg')";
});

/**
 * 배경화면을 변경한다.
 * 
 * @method backgroundBtn
 * @public
 */
function backgroundBtn() {
    // 랜덤으로 화면 idx 가져온다.
    let idx = Math.floor(Math.random() * arrImg.length + 1);
    document.body.style.backgroundImage = `url(./backGround/bg${idx}.jpg`;
}

/**
 * 토글 여부에 따라 변경한다.
 * 
 * @method toggle
 * @public
 */
$(function tooggle() {
    $('#settingToggle').change(function() {
        console.dir($(this));
        // on 일때는 자동
        if($('#settingToggle').checked) {
            isToggle = true;
        }
        // off 면 수동(경로 설정)
        else {
            // TODO 1번째 돔요소를 input의 hidden 만들어서 data-target 으로 토글 생성 할수있도록 만들어준다.
            // list를 화면에 맞춰서 보여준다.
            // 선택된 내용을 저장한뒤 화면보여준다.
            isToggle = false
        }
    })
})