$(document).ready(function () {
  // ボタンをクリックしたときにアニメーションを開始
  $("#button").click(function () {
      $(this).animate({
          top: "+=300px", // 下に300px移動
          left: "+=300px" // 右に300px移動
      }, 1000); // 1秒でアニメーション完了
  });
});