import M from 'materialize-css';

export function mInit() {
  M.AutoInit();
  $(document).ready(function () {
    $('select').formSelect();
  });
}