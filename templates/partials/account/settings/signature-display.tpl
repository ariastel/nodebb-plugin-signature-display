<div class="checkbox">
  <label>
    <input type="checkbox" data-property="signaturesHideUserAll" <!-- IF signaturesHideUserAll -->checked<!-- ENDIF signaturesHideUserAll -->/> <strong>[[signature-display:hide_all]]</strong>
  </label>
</div>

{{{ if !signaturesHideMetaLinks }}}
<div class="checkbox">
  <label>
    <input type="checkbox" data-property="signaturesHideUserLinks" <!-- IF signaturesHideUserLinks -->checked<!-- ENDIF signaturesHideUserLinks -->/> <strong>[[signature-display:hide_links]]</strong>
  </label>
</div>
{{{ end }}}

{{{ if !signaturesHideMetaImages }}}
<div class="checkbox">
  <label>
    <input type="checkbox" data-property="signaturesHideUserImages" <!-- IF signaturesHideUserImages -->checked<!-- ENDIF signaturesHideUserImages -->/> <strong>[[signature-display:hide_images]]</strong>
  </label>
</div>
{{{ end }}}
