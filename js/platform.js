$(document).ready(function () {
  $(document).on('change', '.apply-class', function () {
    var $target = $($(this).data('target'));
    $(this).find('option').each(function () {
      $target.removeClass($(this).attr('value'));
    });
    $target.addClass($(this).val());
  });
});
