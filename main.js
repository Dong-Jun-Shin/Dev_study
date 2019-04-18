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
 * 배경화면을 직접 설정할 수 있는 창을 띄워준다.
 * 
 * @method bgManuallyBtn
 * @public
 */
function bgManuallyBtn() {
    $(function(){
        $("#secondFront").click(function(){
            $("#bgManuallyModal").modal();
        })
    })
}

/**
 * 버튼 클릭시 선택한 사진으로 바뀌도록 한다.
 * ->"보안상 경로가 fakePath로 표시되서 구현 불가능"
 */

function getRealPath(obj){
    obj.select();

    // document.selection.createRange().text.toString(); 이게 실행이 안된다면....
    // document.selection.createRangeCollection()[0].text.toString(); 이걸로....
    document.body.real_path.value = document.selection.createRange().text.toString();
  
  }
  
$(function(){
    $("#changeSelBtn").click(function(){
        document.body.style.backgroundImage = `url(${real_path.value}`;
    })
})

/**
 * 큰 제목을 바꿔준다.
 */
function firstTitleBtn(){
    /**
     * 바꿀 이름을 입력할 창을 띄운다.
     */
    $(function(){
        $("#changeTitle").click(function(){
            $("#changeTitleModal").modal();
        })
    })
}

/**
 * 이름을 바꾼다.
 */
$(function(){
    $("#changeTitleBtn").click(function(){
        var textarea = document.getElementById('changeTitleBox');
        $("#firstTitle").text(textarea.value);
    })
})


    





//----------------------------------------------------------------------------------------
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
            // TODO 1번째 돔요소를 data-target 으로 토글을 생성할 수 있도록 input의 hidden을 만들어준다.
            //
            // list를 화면에 맞춰서 보여준다.
            // 선택된 내용을 저장한뒤 화면보여준다.
            isToggle = false

            
        }
    })
})