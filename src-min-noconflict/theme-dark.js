ace.define("ace/theme/dark",["require","exports","module","ace/lib/dom"],function(e,t,n){t.isDark=!0,t.cssClass="ace-dark-theme",t.cssText='.ace-dark-theme{color:#fff;background-color:#0c0d0f;box-shadow:inset 0 0 1px 0 rgba(0,0,0,0.75)}.ace-dark-theme .ace_search{max-width:350px}.ace-dark-theme .ace_search .ace_searchbtn{width:auto;min-width:25px}.ace-dark-theme .ace_gutter{color:rgba(255,255,255,0.25);background-color:#070809}.ace-dark-theme .ace_gutter .ace_gutter-active-line{background-color:#030304}.ace-dark-theme .ace_scrollbar{z-index:3}.ace-dark-theme .ace_scrollbar::-webkit-scrollbar{width:.75rem}.ace-dark-theme .ace_scrollbar::-webkit-scrollbar-button{display:none}.ace-dark-theme .ace_scrollbar::-webkit-scrollbar-track{background:none}.ace-dark-theme .ace_scrollbar::-webkit-scrollbar-thumb{min-height:5em;border-radius:.25rem;background:#393e48;border:1px solid rgba(0,0,0,0.5)}.ace-dark-theme .ace_scrollbar::-webkit-scrollbar-thumb:active,.ace-dark-theme .ace_scrollbar::-webkit-scrollbar-thumb:hover{background:#454a56;border-color:rgba(0,0,0,0.75)}.ace-dark-theme .ace_cursor-layer .ace_cursor{color:#fff}.ace-dark-theme .ace_print-margin-layer .ace_print-margin{width:1px;background-color:#131418}.ace-dark-theme .ace_marker-layer .ace_bracket{border-radius:.1em;background-color:rgba(255,255,255,0.15)}.ace-dark-theme .ace_marker-layer .ace_bracket .ace_start{border:1px dashed #dbdbdb}.ace-dark-theme .ace_marker-layer .ace_active-line{background-color:#070809}.ace-dark-theme .ace_marker-layer .ace_selection{background-color:rgba(255,255,255,0.15)}.ace-dark-theme .ace_marker-layer .ace_selected-word{border-radius:.1em;box-shadow:0 0 0 1px rgba(255,255,255,0.35)}.ace-dark-theme .ace_marker-layer .ace_selected-word ~ .ace_selection.ace_start{box-shadow:0 0 0 1px rgba(255,255,0,0.35);background-color:rgba(255,255,0,0.35)}.ace-dark-theme .ace_marker-layer .ace_linking{border-bottom:1px dotted #6495ed}.ace-dark-theme .ace_marker-layer .ace_typo{border-bottom:1px solid red}.ace-dark-theme.ace_multiselect .ace_marker-layer .ace_selected-word{box-shadow:none}.ace-dark-theme.ace_multiselect .ace_marker-layer ~ .ace_selection.ace_start{box-shadow:none}.ace-dark-theme .ace_text-layer .ace_fold{border-color:#dbdbdb;background-color:#6093d1}.ace-dark-theme .ace_text-layer .ace_invisible{color:#131418}.ace-dark-theme .ace_text-layer .ace_invisible.ace_invisible_eol,.ace-dark-theme .ace_text-layer .ace_invisible.ace_invisible_space{color:#17191d}.ace-dark-theme .ace_text-layer .ace_indent-guide{background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWMQERFpYLC1tf0PAAgOAnPnhxyiAAAAAElFTkSuQmCC") right repeat-y}.ace-dark-theme .ace_text-layer .ace_comment{opacity:.35}.ace-dark-theme .ace_text-layer .ace_heading{font-weight:bold;color:#9de5ff}.ace-dark-theme .ace_text-layer .ace_heading.ace_markup{opacity:.5 !important}.ace-dark-theme .ace_text-layer .ace_heading ~ .ace_strong,.ace-dark-theme .ace_text-layer .ace_heading ~ .ace_emphasis{color:#9de5ff !important}.ace-dark-theme .ace_text-layer .ace_heading ~ .ace_strong{font-weight:bolder !important}.ace-dark-theme .ace_text-layer .ace_paren.ace_lparen,.ace-dark-theme .ace_text-layer .ace_paren.ace_rparen{opacity:.75}.ace-dark-theme .ace_text-layer .ace_operator{opacity:.75}.ace-dark-theme .ace_text-layer .ace_punctuation{opacity:.75}.ace-dark-theme .ace_text-layer .ace_underline{text-decoration:underline}.ace-dark-theme .ace_text-layer .ace_string:not(.ace_other){color:#7ba05b}.ace-dark-theme .ace_text-layer .ace_escape{font-weight:bold;color:#dee5c0}.ace-dark-theme .ace_text-layer .ace_url{text-decoration:underline;color:#6495ed}.ace-dark-theme .ace_text-layer .ace_url.ace_link-url{opacity:0.75;text-decoration:none}.ace-dark-theme .ace_text-layer .ace_url.ace_link-url:hover{opacity:1}.ace-dark-theme .ace_text-layer .ace_url.ace_image-url{text-decoration:none;color:#b16d52}.ace-dark-theme .ace_text-layer .ace_tag-open,.ace-dark-theme .ace_text-layer .ace_tag-name,.ace-dark-theme .ace_text-layer .ace_end-tag-open,.ace-dark-theme .ace_text-layer .ace_tag-close{font-weight:bold;color:#aa8b5b}.ace-dark-theme .ace_text-layer .ace_attribute-name{color:#de6360}.ace-dark-theme .ace_text-layer .ace_class{font-weight:bold;color:#ecc54e}.ace-dark-theme .ace_text-layer .ace_type{color:#8eabc1}.ace-dark-theme .ace_text-layer .ace_variable{color:#6b8ba2}.ace-dark-theme .ace_text-layer .ace_variable .ace_language{color:#6b8ba2}.ace-dark-theme .ace_text-layer .ace_keyword:not(.ace_operator){color:#c8b568}.ace-dark-theme .ace_text-layer .ace_blockquote{opacity:.5;font-style:italic}.ace-dark-theme .ace_text-layer .ace_blockquote.ace_markup{opacity:.35}.ace-dark-theme .ace_text-layer .ace_list{color:#c6c8bd}.ace-dark-theme .ace_text-layer .ace_list.ace_markup{opacity:.5}.ace-dark-theme .ace_text-layer .ace_constant{color:#d27d46}.ace-dark-theme .ace_text-layer .ace_constant.ace_numeric{font-weight:#d78b5b}.ace-dark-theme .ace_text-layer .ace_constant.ace_definition.ace_abbr-id,.ace-dark-theme .ace_text-layer .ace_constant.ace_reference.ace_abbr-id{opacity:0.75;text-decoration:none;color:#c4d0b0;border-bottom:1px dashed rgba(255,255,255,0.5)}.ace-dark-theme .ace_text-layer .ace_constant.ace_definition.ace_footnote-id,.ace-dark-theme .ace_text-layer .ace_constant.ace_reference.ace_footnote-id{opacity:0.75;color:#6495ed}.ace-dark-theme .ace_text-layer .ace_constant.ace_definition.ace_link-id,.ace-dark-theme .ace_text-layer .ace_constant.ace_reference.ace_link-id{opacity:0.75;color:#6495ed}.ace-dark-theme .ace_text-layer .ace_function{color:#dec196}.ace-dark-theme .ace_text-layer .ace_function.ace_name{font-weight:bold}.ace-dark-theme .ace_text-layer .ace_function.ace_inline-code{font-family:"Hack","Menlo","Monaco","Consolas","Andale Mono","DejaVu Sans Mono",monospace;color:#eedc82}.ace-dark-theme .ace_text-layer .ace_function.ace_fenced-code-block{font-family:"Hack","Menlo","Monaco","Consolas","Andale Mono","DejaVu Sans Mono",monospace;color:#eedc82}.ace-dark-theme .ace_text-layer .ace_function.ace_indented-code-block{opacity:.75}.ace-dark-theme .ace_text-layer .ace_markup.ace_hr{opacity:.5}.ace-dark-theme .ace_text-layer .ace_markup.ace_strong{font-weight:bold}.ace-dark-theme .ace_text-layer .ace_markup.ace_emphasis{font-style:italic}.ace-dark-theme .ace_text-layer .ace_markup.ace_checkbox{color:#c45655}.ace-dark-theme .ace_text-layer .ace_markup.ace_attributes{color:#c45655}.ace-dark-theme .ace_text-layer .ace_string.ace_other:not(.ace_url){color:#63b76c}.ace-dark-theme .ace_text-layer .ace_string.ace_other:not(.ace_url).ace_regexp{font-weight:bold;color:#eaae69}.ace-dark-theme .ace_text-layer .ace_string.ace_other:not(.ace_url).ace_link-text{text-decoration:underline;color:#6495ed}.ace-dark-theme .ace_text-layer .ace_string.ace_other:not(.ace_url).ace_image-as-link-text{color:#b16d52}.ace-dark-theme .ace_text-layer .ace_string.ace_other:not(.ace_url).ace_link-title{color:#56b4be}.ace-dark-theme .ace_text-layer .ace_string.ace_other:not(.ace_url).ace_image-alt{opacity:0.75;color:#56b4be}.ace-dark-theme .ace_text-layer .ace_string.ace_other:not(.ace_url).ace_image-title{color:#56b4be}.ace-dark-theme .ace_text-layer .ace_string.ace_other:not(.ace_url).ace_abbr-desc{opacity:.75;color:#fff}.ace-dark-theme .ace_text-layer .ace_string.ace_other:not(.ace_url).ace_footnote{opacity:.75;color:#fff}.ace-dark-theme .ace_invalid{color:#fff;background-color:#8e0000}.ace-dark-theme .ace_invalid.ace_deprecated{color:#c2cac4;background-color:#bea6c3}';var r=e("../lib/dom");r.importCssString(t.cssText,t.cssClass)})