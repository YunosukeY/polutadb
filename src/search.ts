function scroll2ResultTop() {
  let speed = 400; // ミリ秒
  let position = $('.result-block').offset()!.top;
  $('body,html').animate({ scrollTop: position }, speed, 'swing');
  return false;
}
