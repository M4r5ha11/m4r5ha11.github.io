function closeModal() {
    const modalWindow = document.getElementById('modal-container__dark');
    modalWindow.remove();
}
$(".collapsible-header").click(function () {
    $header = $(this);
    $content = $header.next();
    $content.slideToggle(700, function () {
      $header.text(function () {
        return $content.is(":visible") ? "Collapse" : "Expand";
        });
    });
  });