import M from 'materialize-css';

export function mInit() {
  M.AutoInit();
  document.addEventListener('DOMContentLoaded', function () {
    let elems = document.querySelectorAll('select');
    M.FormSelect.init(elems);
  });
}