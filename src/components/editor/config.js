import E from "wangeditor";
import upload from "api/upload";
import compressionImage from "u/compressed";
const {
  BtnMenu
} = E;
const colors = ['#f12ad5', '#fb3f38', '#16b3ce', '#ffa21c', '#ffcall', '#37b7fb', '#19d95d', '#f63773', '#6549f7', '#000000', '#eeece0', '#1c487f', '#4d80bf', '#c24f4a', '#8baa4a', '#7b5ba1', '#46acc8', '#f9963b', '#ffffff', '#ff0000'];
const menus = [
  "head", // 标题
  "bold", // 粗体
  "fontSize", // 字号
  "lineHeight", //行高
  "fontName", // 字体
  "italic", // 斜体
  "underline", // 下划线
  "strikeThrough", // 删除线
  "foreColor", // 文字颜色
  "backColor", // 背景颜色
  "link", // 插入链接
  "list", // 列表
  "justify", // 对齐方式
  "quote", // 引用
  "emoticon", // 表情
  "image", // 插入图片
  "table", // 表格
  // 'video',  // 插入视频
  // 'code',  // 插入代码
  "undo", // 撤销
  "redo", // 重复
  "Format", //格式化
];
const lineHeights = ['1', '1.1', '1.2', '1.3', '1.4', '1.5', '1.6', '2', '2.5', '3']
class Format extends BtnMenu {
  constructor(editor) {
    const $elem = E.$(
      `<div class="w-e-menu" data-title="格式化">
					<span>Format</span>
			</div>`
    );
    super($elem, editor);
  }
  clickHandler() {
    var editor = this.editor;
    var isSeleEmpty = editor.selection.isSelectionEmpty();
    var selectionText = editor.selection.getSelectionText();

    if (!isSeleEmpty) {
      editor.cmd.do("insertHTML", selectionText);
    }
  }
  tryChangeActive() {
    this.active();
  }
}
E.registerMenu("Format", Format)
const customUploadImg = (files, insert) => {
  compressionImage(
    async (blob) => {
        insert("https://img.iplaysoft.com/wp-content/uploads/2019/free-images/free_stock_photo.jpg")
        let res = await upload({
          file: blob,
          ext: ".jpg"
        })
        console.log(res)

      },
      files[0], {
        ratio: 0.8,
        mime: files[0].type
      }
  );
};
export default (name) => {
  const editor = new E(name)
  Object.assign(editor.config, {
    menus,
    lineHeights,
    colors,
    zIndex: 0,
    customUploadImg,
    showFullScreen: true
  })
  return editor
}